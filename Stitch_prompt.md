# Stitch Prompt — Personal Portfolio Website (Prototype / Wireframe)

Use this document as a single prompt for **Stitch**. Generate a **low-fidelity to mid-fidelity interactive prototype** (wireframe-level clarity is acceptable). **Do not include real photos, avatars, headshots, or stock imagery of people.** Use **abstract placeholders** only: initials in a circle, geometric blobs, empty image frames, dashed outlines, or simple icons.

---

## Role & Output Quality

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Produce a prototype that is **visually consistent**, **accessible**, and **responsive** (mobile-first). Prefer **semantic structure** (landmarks, heading hierarchy, focus states) even in prototype form. Make **deliberate, non-generic** layout and motion choices that express the design system’s personality—avoid boilerplate “AI slop” layouts.

---

## Product Brief

Build a **personal homepage** whose **primary purpose** is to **showcase a portfolio of works**. Tone: calm, authentic, handcrafted, welcoming.

### Information architecture (single-page app feel)

One primary document with **three logical destinations**, reachable from navigation:

1. **Home (Hero + intro + contact)**  
   - **Logo mark**: initials **“HH”** (typographic or monogram inside an organic circle—no portrait).  
   - **Main area**: self-introduction (placeholder copy is fine).  
   - **Below intro**: **contact row** with labeled channels: **WeChat**, **GitHub**, **Email**, **LinkedIn** (use icons + text labels; no QR codes required unless you keep them abstract).

2. **About**  
   - Sections: **Education**, **Work experience**, **Hobbies** (use timeline/list cards; placeholder text).

3. **Works / Portfolio**  
   - **Categorized** project grid or grouped sections.  
   - Each item: **short description** + **link** (text link or pill button).  
   - No screenshots of real products unless clearly labeled as generic placeholders.

### Navigation & motion requirements

- **Navbar position**: **fixed to the top-right** of the viewport (desktop); on mobile, use a **top bar** with a **menu control** that opens an **organic rounded panel** (see design system).  
- **Nav items**: **Home**, **About**, **Works**.  
- **Interaction**: clicking a nav item performs a **smooth scroll** to the corresponding section (anchor navigation). Ensure **visible focus** for keyboard users.  
- **Page / section transition motif** (when changing “views” or crossing major sections): combine **fade in/out** with a subtle **scanline / CRT-style horizontal wipe** (very light, tasteful—not noisy). Keep motion **gentle** (300–700ms, eased).  
- **Scrolling effects**: **none** beyond smooth anchor scrolling—**no parallax, no scroll-jacking, no sticky section gimmicks** beyond the fixed nav.

---

## Visual Language — Organic / Natural Design System

Apply this system consistently across the prototype.

### Philosophy

- **Wabi-sabi**: warmth, softness, imperfection, tactility. Avoid harsh digital precision.  
- **Signature**: soft **blob** shapes with **complex organic border radii** (e.g. `60% 40% 30% 70% / 60% 30% 70% 40%`).  
- **Texture is essential**: global **grain/noise** overlay at **3–5% opacity** with **`mix-blend-mode: multiply`** for a paper-like surface.  
- **Shadows**: soft, diffused, **tinted** (moss / clay)—never pure black.  
- **Typography emotion**: **Fraunces** (headings, weights 600–800) + **Nunito** or **Quicksand** (body). **Type scale**: moderate **1.25** rhythm.  
- **Principle**: “There are no straight lines in nature.” Prefer **rounded corners**, **staggered grids**, **asymmetry**, and **generous whitespace**.

### Color tokens (light mode only)

- `background`: `#FDFCF8` (rice paper off-white)  
- `foreground`: `#2C2C24` (deep loam)  
- `primary`: `#5D7052` (moss green)  
- `primary-foreground`: `#F3F4F1` (pale mist)  
- `secondary`: `#C18C5D` (terracotta / clay)  
- `secondary-foreground`: `#FFFFFF`  
- `accent`: `#E6DCCD` (sand)  
- `accent-foreground`: `#4A4A40` (bark)  
- `muted`: `#F0EBE5` (stone)  
- `muted-foreground`: `#78786C` (dried grass)  
- `border`: `#DED8CF` (raw timber)  
- `destructive`: `#A85448` (burnt sienna) — use sparingly

### Key UI patterns

- **Buttons**: pill (`rounded-full`), moss primary, terracotta outline variant, generous padding, **hover scale ~1.05** with deeper tinted shadow, **active scale ~0.95**.  
- **Cards**: very light beige surfaces (`#FEFEFA`), soft timber border at ~50% opacity, **asymmetric radii** on some cards, moss-tinted soft shadow, subtle lift on hover.  
- **Nav container**: **sticky floating pill** near top with **glassmorphism** (`bg-white/70`, `backdrop-blur-md`), timber border, **rounded-full**. Logo sits in a **circular moss** container with **white** monogram “HH”.  
- **Ambient depth**: large blurred blobs (`blur-3xl`) behind sections; alternate section backgrounds lightly between off-white, stone tint, sand tint, and occasional moss/terracotta bands for rhythm.  
- **Icons**: Lucide-style strokes; moss default; invert on dark bands.

### Layout rhythm (desktop)

- Section vertical rhythm: generous (`py` in the **24–32** spacing feel).  
- Container widths should vary by section for non-mechanical rhythm (e.g. wider portfolio grid, narrower reading column for About narrative).  
- Use **staggered** card shapes / slight offsets where it supports the organic story—**no** rigid identical cards everywhere.

### Accessibility (must-haves)

- Maintain **contrast** using the provided pairs as guidance.  
- **Focus-visible** rings: soft moss ring + offset (not harsh outlines).  
- **44px+** touch targets for nav and buttons on mobile.

---

## Prototype Constraints (Stitch-specific)

- **No photography of people** and **no avatars**. Replace portraits with: **“HH” monogram**, **blob frame**, or **empty polaroid-style frame** rotated ~**-2°** with a thick white border (handcrafted photo feel **without** a photo inside).  
- Prefer **wireframe-friendly** clarity: readable labels, realistic spacing, but **placeholder content** is OK.  
- Include **mobile**, **tablet**, and **desktop** states (at minimum: mobile + desktop).  
- Deliver **screens or an interactive prototype** with the nav + three sections wired to smooth scrolling.  
- If you show project thumbnails, use **abstract gradients**, **patterns**, or **simple geometric compositions**—not branded screenshots unless clearly fake.

---

## Deliverables Checklist

- [ ] Fixed **top-right** nav pill with **Home / About / Works** + **HH** logo  
- [ ] **Home**: intro + **WeChat / GitHub / Email / LinkedIn** contact strip  
- [ ] **About**: **Education**, **Work**, **Hobbies**  
- [ ] **Works**: categorized items with **blurb + link**  
- [ ] **Organic / Natural** styling per tokens (grain overlay, blobs, tinted shadows, Fraunces + Nunito)  
- [ ] **Fade + scanline** transition motif between major section focus changes (subtle)  
- [ ] **No people images**; monogram/placeholders only  
- [ ] Responsive behavior + accessibility basics  

---

## Optional One-liner (paste at top if Stitch has a short prompt field)

“Design a responsive personal portfolio prototype (Home / About / Works) with fixed top-right organic glass nav, smooth-scroll anchors, HH monogram logo, contact links (WeChat, GitHub, Email, LinkedIn), categorized works with blurbs + links, Organic/Natural wabi-sabi UI (Fraunces + Nunito, moss/terracotta/rice-paper palette, grain overlay, blob shapes, tinted shadows), subtle fade+scanline transitions, no portraits or avatars—use abstract placeholders only.”
