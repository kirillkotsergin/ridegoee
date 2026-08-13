/* ============================================================
   RideGo — интерактив: появление при скролле, шапка, модалка заказа
   ============================================================ */

(function () {
  "use strict";

  var PHONE = "37256277764";

  /* ---------- год в подвале ---------- */

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- счётчик посещений ---------- */
  /*  Считает сервер (hits.php), браузер только показывает число. Запрос идёт
      отсюда, а не из разметки, — значит краулеры, не исполняющие JS, счётчик
      не накручивают. Если PHP на хостинге недоступен или запрос не удался,
      строка так и остаётся скрытой: пустого «Посещений: —» посетитель не увидит.  */

  var hitsEl = document.querySelector("[data-hits]");

  if (hitsEl && window.fetch) {
    fetch("/hits.php", { credentials: "omit" })
      .then(function (res) {
        return res.ok ? res.json() : null;
      })
      .then(function (data) {
        if (!data || typeof data.total !== "number" || data.total < 1) return;

        var valueEl = hitsEl.querySelector("[data-hits-value]");
        if (valueEl) valueEl.textContent = data.total.toLocaleString("ru-RU");
        hitsEl.hidden = false;
      })
      .catch(function () {
        /* молча: счётчик не та вещь, из-за которой стоит шуметь в консоли */
      });
  }

  /* ---------- шапка при скролле ---------- */

  var header = document.getElementById("header");

  function onScroll() {
    if (header) header.classList.toggle("is-stuck", window.scrollY > 12);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- появление блоков при скролле ---------- */

  var revealables = document.querySelectorAll(".reveal");

  revealables.forEach(function (el) {
    var delay = el.getAttribute("data-delay");
    if (delay) el.style.setProperty("--d", delay);
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      // Запускаем появление чуть раньше, чем блок доедет до экрана: пока
      // пользователь листает, контент уже на месте, а не догоняет его.
      { rootMargin: "0px 0px 12% 0px", threshold: 0.01 }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // старый браузер — просто показываем всё
    revealables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- слайдер фото автомобиля ----------
     Прокрутка и свайп работают на чистом CSS (scroll-snap).
     JS добавляет только стрелки и точки; без него слайды листаются пальцем. */

  document.querySelectorAll("[data-slider]").forEach(function (slider) {
    var track = slider.querySelector("[data-slider-track]");
    if (!track) return;

    var slides = track.children;
    var count = slides.length;
    if (count < 2) return;

    var prev = slider.querySelector("[data-slider-prev]");
    var next = slider.querySelector("[data-slider-next]");
    var dotsBox = slider.querySelector("[data-slider-dots]");
    var dots = [];

    function goTo(index) {
      var i = Math.max(0, Math.min(count - 1, index));
      track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: "smooth" });
    }

    function current() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }

    if (dotsBox) {
      for (var i = 0; i < count; i++) {
        (function (index) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.className = "car-slider__dot";
          dot.setAttribute("aria-label", "Фото " + (index + 1));
          dot.addEventListener("click", function () {
            goTo(index);
          });
          dotsBox.appendChild(dot);
          dots.push(dot);
        })(i);
      }
    }

    function sync() {
      var active = current();
      dots.forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === active);
      });
      if (prev) prev.classList.toggle("is-disabled", active === 0);
      if (next) next.classList.toggle("is-disabled", active === count - 1);
    }

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(current() - 1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        goTo(current() + 1);
      });
    }

    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    sync();
  });

  /* ---------- карта пунктов пропуска ----------
     Google Maps в iframe вставляем только после клика: пока посетитель
     не попросил карту, страница не делает ни одного внешнего запроса.
     Без JS в блоке остаются кнопки и ссылки «открыть отдельным окном». */

  document.querySelectorAll("[data-map]").forEach(function (map) {
    var frame = map.querySelector("[data-map-frame]");
    var tabs = map.querySelectorAll("[data-map-src]");
    if (!frame || !tabs.length) return;

    var iframe = null;

    function show(tab) {
      tabs.forEach(function (item) {
        var active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.className = "map__iframe";
        iframe.setAttribute("loading", "lazy");
        iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
        iframe.setAttribute("allowfullscreen", "");
        frame.innerHTML = "";
        frame.appendChild(iframe);
      }

      iframe.setAttribute("title", tab.getAttribute("data-map-title") || "Карта");
      iframe.setAttribute("src", tab.getAttribute("data-map-src"));
    }

    var loader = map.querySelector("[data-map-load]");
    if (loader) {
      loader.addEventListener("click", function () {
        show(tabs[0]);
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        show(tab);
      });
    });
  });

  /* ---------- фото крупнее (водитель) ----------
     Открывает <dialog id="photo-dialog">. Escape закрывает сам dialog,
     фокус возвращаем на кружок с фото. */

  var photoDialog = document.getElementById("photo-dialog");

  if (photoDialog) {
    var photoImg = photoDialog.querySelector("[data-photo-target]");
    var photoTrigger = null;

    document.addEventListener("click", function (event) {
      if (!(event.target instanceof Element)) return;

      var trigger = event.target.closest("[data-photo]");
      if (!trigger) return;

      event.preventDefault();

      if (photoImg) {
        photoImg.src = trigger.getAttribute("data-photo");
        photoImg.alt = trigger.getAttribute("data-photo-alt") || "";
      }

      photoTrigger = trigger;

      if (typeof photoDialog.showModal === "function") photoDialog.showModal();
    });

    photoDialog.addEventListener("click", function (event) {
      if (!(event.target instanceof Element)) return;
      // закрываем по кресту и по клику вне карточки
      if (event.target === photoDialog || event.target.closest("[data-close]")) {
        photoDialog.close();
      }
    });

    photoDialog.addEventListener("close", function () {
      if (photoTrigger && document.contains(photoTrigger)) photoTrigger.focus();
      photoTrigger = null;
    });
  }

  /* ---------- модалка заказа ---------- */

  var dialog = document.getElementById("order-dialog");
  if (!dialog) return;

  var routeLabel = dialog.querySelector("[data-route-label]");
  var waLink = dialog.querySelector("[data-wa]");
  var lastTrigger = null;

  function waHref(route) {
    var text = route
      ? "Здравствуйте! Хочу заказать трансфер по направлению " + route + "."
      : "Здравствуйте! Хочу заказать трансфер.";
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text);
  }

  function openDialog(trigger) {
    var route = trigger ? trigger.getAttribute("data-route") : null;
    var isRealRoute = route && route !== "Другое направление";

    if (routeLabel) {
      routeLabel.textContent = route || "";
      routeLabel.hidden = !isRealRoute;
    }

    if (waLink) waLink.href = waHref(isRealRoute ? route : null);

    lastTrigger = trigger || null;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      // очень старый браузер: ведём сразу в WhatsApp
      window.open(waHref(isRealRoute ? route : null), "_blank", "noopener");
    }
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  document.addEventListener("click", function (event) {
    if (!(event.target instanceof Element)) return;

    var trigger = event.target.closest("[data-order]");
    if (trigger) {
      event.preventDefault();
      openDialog(trigger);
      return;
    }

    if (event.target.closest("[data-close]")) {
      closeDialog();
      return;
    }

    // клик по затемнению вне карточки
    if (event.target === dialog) closeDialog();
  });

  dialog.addEventListener("close", function () {
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
    lastTrigger = null;
  });
})();
