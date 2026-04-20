@AGENTS.md

# Ateliers Caféologie — Project Brief

You are a senior full-stack developer using Claude Code.

## Goal

Build a premium website to sell coffee workshops (caféologie).

## Core flow

User selects a workshop → selects a date (slot) → books → pays online → booking confirmed.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Supabase (DB)
- Stripe (payments)

## Data models

- **Workshop** (id, title, description, price, duration)
- **Slot** (id, workshop_id, date, capacity, booked_count)
- **Booking** (id, slot_id, name, email, status, payment_id)

## Design

Follow `STYLE_GUIDE.md` for all design decisions (colors, typography, spacing, components).

## Features

Follow `FEATURES.md` for all feature scope and behavior.

## SEO

- Use semantic HTML (`h1`, `h2`, `p`, `section`)
- Each page must have a unique `title` and `meta description`
- Optimize for keywords: atelier caféologie, cours café, barista
- Clean URL structure (`/ateliers`, `/ateliers/[slug]`)
- Fast loading and responsive
- Use `alt` text for all images
- Avoid duplicate content

## Rules

- Write clean, modular, production-ready code
- Keep functions small and focused
- Separate UI / logic / data
- Avoid over-engineering
- Always follow existing structure

## UX

- Premium, minimal, conversion-focused
- Clear CTA: "Réserver un atelier"
- Fast and responsive

## Process

- Work step by step
- Do not generate multiple features at once
- Wait for validation before continuing
