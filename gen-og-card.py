#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""【旧・下書きツール】OGPカード（1200×630）自動生成
⚠️ 正式なカードは らちさん制作の 1x/og_card.png（サイトでは og-card.png）。
   このスクリプトは og-card-draft.png に出力するだけで、正式カードは上書きしない。
"""
import os, time, unicodedata, urllib.request
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BG = (230, 233, 239)      # --bg
INK = (42, 49, 66)        # --ink
MUTE = (122, 130, 148)    # --mute
TEAL_DEEP = (13, 148, 136)
SHADOW = (150, 158, 175)

UA = {"User-Agent": "LachiArtQuiz/1.0 (contact: mym.lachi@gmail.com)"}
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "og-card-draft.png")

# ---------- フォント ----------
FONT_DIR = "/System/Library/Fonts"
INTER_URL = "https://raw.githubusercontent.com/google/fonts/main/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf"
INTER_PATH = "/tmp/Inter-Variable.ttf"

def jfont(size, weight):
    """日本語版ヒラギノ角ゴシック W0〜W9（ファイル名がNFDのため一覧照合）"""
    target = f"ヒラギノ角ゴシック W{weight}.ttc"
    for f in os.listdir(FONT_DIR):
        if unicodedata.normalize("NFC", f) == target:
            return ImageFont.truetype(os.path.join(FONT_DIR, f), size, index=0)
    raise FileNotFoundError(target)

def inter(size, weight):
    """Inter（可変フォント）。手元に無ければGoogle Fontsから取得"""
    if not os.path.exists(INTER_PATH):
        req = urllib.request.Request(INTER_URL, headers=UA)
        with urllib.request.urlopen(req, timeout=60) as r, open(INTER_PATH, "wb") as f:
            f.write(r.read())
    f = ImageFont.truetype(INTER_PATH, size)
    f.set_variation_by_axes([32, weight])  # [opsz, wght]
    return f

def fetch(url, path):
    time.sleep(1.5)
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r, open(path, "wb") as f:
        f.write(r.read())

def cover_crop(img, w, h):
    """アスペクト比を保ったまま w×h いっぱいに切り出す"""
    sw, sh = img.size
    scale = max(w / sw, h / sh)
    img = img.resize((round(sw * scale), round(sh * scale)), Image.LANCZOS)
    x = (img.width - w) // 2
    y = max(0, (img.height - h) // 3)  # 顔が上寄りの絵が多いのでやや上を残す
    return img.crop((x, y, x + w, y + h))

def rounded_mask(w, h, r):
    m = Image.new("L", (w, h), 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, w, h], radius=r, fill=255)
    return m

# 展示する5作品（誰でも知っている★1から）
ARTS = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/500px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/500px-Tsunami_by_hokusai_19th_century.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Edvard_Munch_-_The_Scream.jpg/500px-Edvard_Munch_-_The_Scream.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/500px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
]

canvas = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(canvas)

# ---------- テキスト（Inter×ヒラギノ混植） ----------
def is_latin(c):
    return 0x20 <= ord(c) <= 0x7E  # 英数字・半角記号はInterで描く

def split_runs(text, latin_font, jp_font):
    runs, buf, cur = [], "", None
    for c in text:
        f = latin_font if is_latin(c) else jp_font
        if f is not cur and buf:
            runs.append((buf, cur))
            buf = ""
        buf += c
        cur = f
    if buf:
        runs.append((buf, cur))
    return runs

def center_mixed(y, text, size, jp_weight, inter_weight, fill):
    """日本語=ヒラギノ / 欧文数字=Inter をベースラインを揃えて中央配置"""
    jf, itf = jfont(size, jp_weight), inter(size, inter_weight)
    runs = split_runs(text, itf, jf)
    total = sum(draw.textlength(t, font=f) for t, f in runs)
    x = (W - total) / 2
    baseline = y + max(jf.getmetrics()[0], itf.getmetrics()[0])
    for t, f in runs:
        draw.text((x, baseline), t, font=f, fill=fill, anchor="ls")
        x += draw.textlength(t, font=f)

center_mixed(58, "—  M E I G A  K E N T E I  —", 20, 6, 600, MUTE)
center_mixed(92, "名画検定", 140, 7, 700, INK)
center_mixed(272, "名画で腕試し ― 全5問・100点満点", 36, 5, 600, (74, 84, 104))

# 難易度チップ（★・日本語のみなのでヒラギノ）
chip_size = 26
chips = ["★ 入門", "★★ 中級", "★★★ マニア"]
chip_jf = jfont(chip_size, 6)
widths = [int(draw.textlength(c, font=chip_jf)) + 44 for c in chips]
total = sum(widths) + 20 * (len(chips) - 1)
cx = (W - total) // 2
cy = 332
for c, cw in zip(chips, widths):
    sh = Image.new("RGBA", (cw + 24, 68), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([12, 14, cw + 12, 62], radius=24, fill=SHADOW + (110,))
    sh = sh.filter(ImageFilter.GaussianBlur(7))
    canvas.paste(sh, (cx - 12, cy - 12), sh)
    d2 = ImageDraw.Draw(canvas)
    d2.rounded_rectangle([cx, cy, cx + cw, cy + 48], radius=24, fill=(238, 241, 246))
    tw = d2.textlength(c, font=chip_jf)
    d2.text((cx + (cw - tw) / 2, cy + 24), c, font=chip_jf, fill=TEAL_DEEP, anchor="lm")
    cx += cw + 20

# ---------- 作品ストリップ ----------
tile_w, tile_h, gap, radius = 204, 210, 22, 18
total_w = tile_w * 5 + gap * 4
x0 = (W - total_w) // 2
y0 = 408
for i, url in enumerate(ARTS):
    p = f"/tmp/ogart{i}.jpg"
    if not os.path.exists(p):
        fetch(url, p)
    art = cover_crop(Image.open(p).convert("RGB"), tile_w, tile_h)
    x = x0 + i * (tile_w + gap)
    sh = Image.new("RGBA", (tile_w + 60, tile_h + 60), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([30, 38, tile_w + 30, tile_h + 46], radius=radius, fill=SHADOW + (140,))
    sh = sh.filter(ImageFilter.GaussianBlur(12))
    canvas.paste(sh, (x - 30, y0 - 30), sh)
    frame = Image.new("RGB", (tile_w + 16, tile_h + 16), (255, 255, 255))
    frame.paste(art, (8, 8))
    mask = rounded_mask(tile_w + 16, tile_h + 16, radius)
    canvas.paste(frame, (x - 8, y0 - 8), mask)

canvas.save(OUT, optimize=True)
print("saved:", OUT, canvas.size)
