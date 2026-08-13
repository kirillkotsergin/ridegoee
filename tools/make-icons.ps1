# Генерирует растровые иконки и картинку для превью в мессенджерах.
# Рисуем тот же силуэт машины, что в public/favicon.svg, теми же цветами.
# Запуск:  powershell -ExecutionPolicy Bypass -File tools\make-icons.ps1
# Требуется только Windows PowerShell (System.Drawing), сторонних утилит нет.

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "public"

$bg = [System.Drawing.ColorTranslator]::FromHtml("#0b0f19")
$accent = [System.Drawing.ColorTranslator]::FromHtml("#ffb524")
$accent2 = [System.Drawing.ColorTranslator]::FromHtml("#ff8a3d")
$text = [System.Drawing.ColorTranslator]::FromHtml("#edf1f7")
$muted = [System.Drawing.ColorTranslator]::FromHtml("#9aa6b8")

# Рисует силуэт машины в квадрате size x size (координаты как в SVG 64x64).
function Draw-Car {
  param($g, [int]$size, [int]$offsetX = 0, [int]$offsetY = 0)

  $k = $size / 64.0
  $pen = New-Object System.Drawing.Pen($accent, [float](4.2 * $k))
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.PointF([float]$offsetX, [float]$offsetY)),
    (New-Object System.Drawing.PointF([float]($offsetX + $size), [float]($offsetY + $size))),
    $accent, $accent2)
  $pen.Brush = $brush

  function P([double]$x, [double]$y) {
    New-Object System.Drawing.PointF([float]($offsetX + $x * $k), [float]($offsetY + $y * $k))
  }

  # днище
  $g.DrawLine($pen, (P 12 40), (P 52 40))
  # колёса
  $g.DrawLine($pen, (P 18 40), (P 18 45))
  $g.DrawLine($pen, (P 46 40), (P 46 45))
  # крыша: левая стойка, дуга, правая стойка
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddLine((P 13.5 40), (P 18.1 25.4))
  $path.AddBezier((P 18.1 25.4), (P 19.6 22.7), (P 21.8 21), (P 24.3 21))
  $path.AddLine((P 24.3 21), (P 39.7 21))
  $path.AddBezier((P 39.7 21), (P 42.6 21), (P 45.1 22.8), (P 45.9 25.4))
  $path.AddLine((P 45.9 25.4), (P 50.5 40))
  $g.DrawPath($pen, $path)

  $path.Dispose(); $pen.Dispose(); $brush.Dispose()
}

function New-Canvas {
  param([int]$w, [int]$h)
  $bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  return @($bmp, $g)
}

# ---------- 1. PNG-иконки ----------

$iconSizes = @{ 16 = $null; 32 = $null; 48 = $null; 180 = $null; 192 = $null; 512 = $null }
$bitmaps = @{}

foreach ($size in ($iconSizes.Keys | Sort-Object)) {
  $c = New-Canvas $size $size
  $bmp = $c[0]; $g = $c[1]
  $g.Clear($bg)

  # скруглённый угол как в SVG (rx=16 при 64) — но не на мелких размерах,
  # там скругление съедает и без того тонкие линии
  Draw-Car $g $size
  $g.Dispose()
  $bitmaps[$size] = $bmp
}

$bitmaps[180].Save((Join-Path $out "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$bitmaps[192].Save((Join-Path $out "icon-192.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$bitmaps[512].Save((Join-Path $out "icon-512.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "apple-touch-icon.png, icon-192.png, icon-512.png"

# ---------- 2. favicon.ico (16 + 32 + 48 в одном файле) ----------

# System.Drawing не умеет писать многоразмерный ICO, поэтому собираем формат
# руками: заголовок ICONDIR + по записи ICONDIRENTRY на каждый размер,
# полезная нагрузка — обычные PNG (ICO это допускает начиная с Vista).
$icoSizes = @(16, 32, 48)
$pngs = @{}
foreach ($size in $icoSizes) {
  $ms = New-Object System.IO.MemoryStream
  $bitmaps[$size].Save($ms, [System.Drawing.Imaging.ImageFormat]::Png)
  $pngs[$size] = $ms.ToArray()
  $ms.Dispose()
}

$icoPath = Join-Path $out "favicon.ico"
$fs = [System.IO.File]::Create($icoPath)
$bw = New-Object System.IO.BinaryWriter($fs)

$bw.Write([UInt16]0)                    # reserved
$bw.Write([UInt16]1)                    # type: icon
$bw.Write([UInt16]$icoSizes.Count)      # количество изображений

$offset = 6 + 16 * $icoSizes.Count
foreach ($size in $icoSizes) {
  $bw.Write([Byte]$(if ($size -ge 256) { 0 } else { $size }))  # width
  $bw.Write([Byte]$(if ($size -ge 256) { 0 } else { $size }))  # height
  $bw.Write([Byte]0)                    # палитра не используется
  $bw.Write([Byte]0)                    # reserved
  $bw.Write([UInt16]1)                  # color planes
  $bw.Write([UInt16]32)                 # бит на пиксель
  $bw.Write([UInt32]$pngs[$size].Length)
  $bw.Write([UInt32]$offset)
  $offset += $pngs[$size].Length
}
foreach ($size in $icoSizes) { $bw.Write($pngs[$size]) }

$bw.Flush(); $bw.Dispose(); $fs.Dispose()
Write-Output "favicon.ico ($($icoSizes -join '+') px)"

# ---------- 3. og.png — превью для WhatsApp, Telegram, соцсетей ----------

$c = New-Canvas 1200 630
$bmp = $c[0]; $g = $c[1]
$g.Clear($bg)

# мягкое свечение в правом верхнем углу, как --accent-подсветка в hero
$glow = New-Object System.Drawing.Drawing2D.GraphicsPath
$glow.AddEllipse(700, -260, 900, 900)
$brush = New-Object System.Drawing.Drawing2D.PathGradientBrush($glow)
$brush.CenterColor = [System.Drawing.Color]::FromArgb(70, $accent.R, $accent.G, $accent.B)
$brush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, $accent.R, $accent.G, $accent.B))
$g.FillPath($brush, $glow)
$brush.Dispose(); $glow.Dispose()

$fontTitle = New-Object System.Drawing.Font("Segoe UI", 62, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontLead = New-Object System.Drawing.Font("Segoe UI", 32, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontEyebrow = New-Object System.Drawing.Font("Segoe UI", 24, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontLogo = New-Object System.Drawing.Font("Segoe UI", 40, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)

$brAccent = New-Object System.Drawing.SolidBrush($accent)
$brText = New-Object System.Drawing.SolidBrush($text)
$brMuted = New-Object System.Drawing.SolidBrush($muted)

# логотип: иконка + RideGo
Draw-Car $g 72 80 64
$g.DrawString("RideGo", $fontLogo, $brText, 168, 74)

$g.DrawString("ТРАНСФЕР ЭСТОНИЯ → РОССИЯ", $fontEyebrow, $brAccent, 82, 210)
$g.DrawString("Из Таллинна", $fontTitle, $brText, 78, 252)
$g.DrawString("к границе с Россией", $fontTitle, $brAccent, 78, 330)
$g.DrawString("Нарва · Койдула · Лухамаа   —   от 130 €, круглосуточно", $fontLead, $brMuted, 82, 436)
$g.DrawString("+372 5627 7764   ·   ridego.ee", $fontLead, $brText, 82, 496)

$g.Dispose()
$bmp.Save((Join-Path $out "images\og.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "images/og.png (1200x630)"

foreach ($b in $bitmaps.Values) { $b.Dispose() }
