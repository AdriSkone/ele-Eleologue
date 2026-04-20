# Style Guide — Ateliers Caféologie

Design system for a premium coffee workshop website.
Style: minimal, elegant, warm — artisanal, high-end feel.

---

## Colors

| Role          | Hex       | Usage                           |
|---------------|-----------|---------------------------------|
| Primary       | `#4B2E2B` | Buttons, headings, accents      |
| Section BG    | `#F6F1EB` | Section backgrounds             |
| Warm Accent   | `#F5E6D3` | Inner accents, ring gaps        |
| Card BG       | `#FFFFFF` | Workshop cards                  |
| Accent        | `#C89B3C` | CTA highlights, gold details    |
| Text          | `#1A1A1A` | Body text                       |
| White         | `#FFFFFF` | Surfaces, contrast              |

---

## Typography

### Fonts
- **Headings**: Cormorant — serif, elegant, airy, refined
- **Body**: Inter — sans-serif, clean, highly readable
- Never mix two serif or two sans-serif fonts

### Scale

| Level | Role              | Desktop     | Mobile      | Font              | Weight  | Line-height |
|-------|-------------------|-------------|-------------|-------------------|---------|-------------|
| H1    | Hero heading      | 48–72px     | 32–44px     | Cormorant         | 500–600 | 1.1–1.2     |
| H2    | Section titles    | 32–40px     | 24–32px     | Cormorant         | 500–600 | 1.2–1.3     |
| H3    | Cards / sub-sections | 20–24px  | 18–20px     | Inter or Cormorant| 500     | 1.3–1.4     |
| Body  | Body text         | 16–18px     | 14–16px     | Inter             | 400–500 | 1.6–1.7     |
| Small | Labels, captions  | 12–14px     | 12–14px     | Inter             | 400     | 1.5         |

### Rules
- Strong visual hierarchy at all times — H1 dominates, body recedes
- Large spacing between sections (`py-20` minimum)
- Keep typography clean and minimal — short, punchy headlines
- Use `clamp()` for fluid responsive sizing (H1: `clamp(2rem, 6vw, 4.5rem)`)
- Ensure high contrast for readability on dark and light backgrounds

---

## Spacing

- Airy, generous padding throughout
- Large vertical gaps between sections (`py-20` or more)
- Internal card padding: `p-6` to `p-8`
- Let the layout breathe — avoid dense blocks

---

## UI Rules

- Rounded corners: `rounded-lg` or `rounded-xl`
- Subtle shadows: `shadow-md` or `shadow-lg`
- Strong visual hierarchy at all times
- Mobile-first — all layouts stack gracefully

---

## Buttons

**Primary** — main CTA (book, pay)
- Background: `#4B2E2B`, text white
- Hover: `#C89B3C` (gold accent)
- Size: `px-8 py-4`, `rounded-lg`, `font-semibold`

**Secondary** — supporting actions (learn more, back)
- Border: `#4B2E2B`, transparent background
- Hover: fill with primary color

---

## Components

### Card (Workshop)
- Background: `#F5E6D3`
- Rounded: `rounded-xl`
- Shadow: `shadow-md`
- Image on top, title + description + price + CTA below
- Clear visual separation between cards

### Hero Section
- Full-width, large Cormorant heading, short tagline
- Single strong CTA: "Réserver un atelier"
- Background: dark (primary) or atmospheric photo with overlay

### Grid Section
- Workshop cards in responsive grid (1 col mobile → 3 col desktop)
- Even spacing, no clutter

### Testimonials
- Minimal quote blocks
- Author name + subtle separator

---

## UX Principles

- **Always highlight the CTA** — "Réserver un atelier" is the primary action
- **Scannable** — short paragraphs, clear labels, strong headings
- **No clutter** — remove anything that doesn't serve conversion
- **Mobile-first** — design for small screens, enhance for large

---

## Tone

Premium, artisanal, authentic. The brand speaks like a master barista: precise, passionate, welcoming.
