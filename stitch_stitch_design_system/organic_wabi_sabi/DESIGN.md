---
name: Organic Wabi-Sabi
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444840'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#74786f'
  outline-variant: '#c4c8bd'
  surface-tint: '#516447'
  primary: '#45573b'
  on-primary: '#ffffff'
  primary-container: '#5d7052'
  on-primary-container: '#ddf3cd'
  inverse-primary: '#b8cda9'
  secondary: '#81542b'
  on-secondary: '#ffffff'
  secondary-container: '#ffc38f'
  on-secondary-container: '#794e25'
  tertiary: '#585246'
  on-tertiary: '#ffffff'
  tertiary-container: '#716a5e'
  on-tertiary-container: '#f6ebdc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e9c4'
  primary-fixed-dim: '#b8cda9'
  on-primary-fixed: '#0f1f09'
  on-primary-fixed-variant: '#3a4c30'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#f6bb88'
  on-secondary-fixed: '#2e1500'
  on-secondary-fixed-variant: '#663d15'
  tertiary-fixed: '#ebe1d2'
  tertiary-fixed-dim: '#cfc5b7'
  on-tertiary-fixed: '#1f1b12'
  on-tertiary-fixed-variant: '#4c463b'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
  deep-loam: '#2C2C24'
  pale-mist: '#F3F4F1'
  bark: '#4A4A40'
  stone: '#F0EBE5'
  dried-grass: '#78786C'
  timber: '#DED8CF'
  burnt-sienna: '#A85448'
typography:
  headline-xl:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Literata
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1140px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is rooted in the Japanese philosophy of **Wabi-sabi**—finding beauty in imperfection, transience, and the natural world. It is designed to evoke a sense of calm, authenticity, and handcrafted warmth. The target audience values slow living, craftsmanship, and a human-centric approach to digital interfaces.

The aesthetic combines **Minimalism** with **Tactile/Organic** elements. It rejects the sterile precision of traditional modernism in favor of soft, asymmetrical forms and physical textures. The interface should feel like high-quality rice paper: tactile, responsive to light, and grounded in earth tones.

**Visual Signatures:**
- **Grain & Noise:** A global 3-5% grain overlay using `multiply` blend mode to simulate physical medium.
- **Asymmetry:** Intentional deviation from perfect grids to create a "grown" rather than "built" feel.
- **Human Touch:** Use of complex, non-uniform curves that mimic biological shapes.

## Colors

The palette is derived from natural elements: moss, clay, sand, and wood. 

- **Primary (Moss Green):** Used for primary actions and brand presence. It signifies growth and stability.
- **Secondary (Terracotta):** Used for accents, secondary actions, and warmth.
- **Background (Rice Paper):** A warm off-white that reduces eye strain and provides a soft canvas.
- **Foreground (Deep Loam):** A high-contrast dark olive-brown used for text to maintain readability while avoiding the harshness of pure black.

**Functional Application:**
- Use **Stone** for muted surfaces or subtle section dividers.
- **Timber** is reserved for borders, providing a structural yet soft frame.
- **Burnt Sienna** acts as the destructive/error state, utilized sparingly to maintain the calm atmosphere.

## Typography

This design system uses a **1.25x typographic scale** to ensure a moderate, readable rhythm.

**Headlines (Literata):** 
Chosen for its bookish, warm, and slightly editorial character. High weights (600-700) should be used to create a strong visual anchor. The variable nature of the font allows for expressive, tight leading in large display sizes.

**Body & Labels (Nunito Sans):**
A humanist sans-serif with rounded terminals that complements the organic shapes of the UI. It provides excellent legibility for long-form narrative content.

**Usage Notes:**
- Headlines should use "sentence case" to feel more conversational and less corporate.
- Maintain generous line heights (1.6) for body text to evoke a sense of "air" and whitespace.

## Layout & Spacing

The layout philosophy is **Asymmetric Fluidity**. While it utilizes a 12-column grid for underlying structure, content should feel staggered and non-mechanical.

- **Grid:** Use a 12-column grid with wide 24px gutters.
- **Asymmetry:** Offset elements (e.g., cards or images) by 8-16px from the grid line to break the "digital" feel.
- **Rhythm:** Vertical spacing is generous. Sections should be separated by large padding (96px to 120px) to allow the "Rice Paper" background to breathe.
- **Responsive Behavior:** On mobile, transitions to a single-column layout with 20px side margins. The top-right navigation pill transforms into a centered top bar.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Tinted Shadows**, avoiding the standard "grey-on-black" shadow model.

- **Surface Strategy:** Use very light variations between Rice Paper and Stone for surface containers.
- **Shadow Character:** Shadows are extra-diffused with a large blur radius. They are tinted with the **Moss Green** or **Terracotta** colors at very low opacity (5-8%) to create a soft "glow" rather than a drop shadow.
- **Glassmorphism:** The primary navigation utilizes a glassmorphism effect—70% opacity white with a heavy backdrop blur (12px-16px). This allows the organic background blobs to peek through as the user scrolls.
- **Timber Outlines:** Low-contrast borders (Raw Timber at 50% opacity) define card boundaries without creating hard visual barriers.

## Shapes

The shape language is the core differentiator of the design system. It follows the principle: **"There are no straight lines in nature."**

- **Standard Elements:** Buttons and small containers use a pill-shape (`rounded-full`).
- **Organic Blobs:** Large decorative elements and specific cards must use **complex organic border radii**. Instead of uniform corners, use eight-value shorthand to create "squircle" variations (e.g., `60% 40% 30% 70% / 60% 30% 70% 40%`).
- **Interactive States:** On hover, shapes should subtly shift their "blobbiness," simulating a soft, liquid-like reaction.

## Components

### Buttons
- **Primary:** Pill-shaped, Moss Green background, Pale Mist text. Hover effect includes a subtle scale-up (1.05) and a deeper Moss-tinted shadow.
- **Secondary:** Terracotta outline (2px Timber-style border), Terracotta text. Pill-shaped.
- **Tactile Feedback:** Active states should scale down (0.95), suggesting a "squishy" physical press.

### Cards
- Surfaces are Rice Paper or Stone.
- **Timber Border:** A thin 1px border using the Timber color at 50% opacity.
- **Asymmetry:** Apply unique organic border radii to featured cards to distinguish them from standard list items.
- **Hover:** Subtle vertical lift (-4px) with a soft expansion of the tinted shadow.

### Navigation
- **Floating Pill:** A fixed top-right navigation container with a glassmorphism effect.
- **Logo:** The "HH" monogram sits inside a perfect circle of Moss Green.
- **Links:** Use Nunito Sans (Label weight) with a Moss Green underline that appears on hover/active states.

### Input Fields & Controls
- **Fields:** Soft rounded corners (0.75rem), Rice Paper background, Timber border. Focus state uses a soft Moss Green glow (no harsh blue outlines).
- **Checkboxes/Radios:** Circular/Organic shapes rather than sharp squares.

### Global Texture
- Apply a fixed-position `div` covering the entire viewport with a noise/grain texture. Use `mix-blend-mode: multiply` at 3% opacity to give every component a tactile, paper-like finish.