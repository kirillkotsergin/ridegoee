/* ============================================================
   RideGo — интерактив: появление при скролле, шапка, модалка заказа
   ============================================================ */

(function () {
  "use strict";

  var PHONE = "37256277764";

  /* ---------- год в подвале ---------- */

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
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
