# Features — Ateliers Caféologie

---

## User Features

- View all available workshops
- View workshop detail (title, description, price, duration)
- See available dates (slots) for a workshop
- Select a slot
- Enter name + email to book
- **Gift option**
  - Checkbox "Offrir cet atelier"
  - Input recipient name
  - Input recipient email
  - Auto-generate gift voucher with recipient name
  - Send voucher by email automatically after payment
- Pay via Stripe (online, secure)
- Receive booking confirmation

---

## Admin Features

- Create and edit workshops
- Add / remove slots (date + capacity)
- View all bookings

---

## Admin Dashboard

- View all bookings (mini CRM)
- Table view displaying:
  - Customer name
  - Customer email
  - Workshop booked
  - Slot date
  - Gift info (if applicable)
  - Payment status
- Simple, clear, readable table layout

---

## System Behaviors

- Prevent overbooking — respect slot capacity at all times
- Increment `booked_count` on slot after confirmed booking
- Store payment status on booking (`pending`, `paid`, `failed`)
- Generate and send gift voucher email when gift option is enabled

---

## Pages

| Page                | Description                                       |
|---------------------|---------------------------------------------------|
| `/`                 | Home — hero, workshop grid, CTA                   |
| `/ateliers/[slug]`  | Workshop detail — description, slots, booking CTA |
| `/reserver/[slug]`  | Booking flow — slot selection, form, Stripe       |
| `/confirmation`     | Success page — booking summary, next steps        |
| `/admin`            | Admin dashboard — bookings table, mini CRM        |

---

## Backlog (Phase 2)

- Email confirmation to booker
- Booking management (edit, cancel, refund)
