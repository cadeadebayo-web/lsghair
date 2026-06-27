# LSGHair Premium Luxury Website

Premium one-page salon website for LSGHair, built with Next.js, Tailwind CSS, Framer Motion and Acuity Scheduling.

## Main features

- Luxury burgundy / cream / gold design
- Mobile-first responsive website
- Desktop responsive layout
- Acuity Scheduling embedded booking section
- Premium hero section
- Services section
- Gallery section
- Policies section
- Contact section with Google Maps
- Floating WhatsApp button
- Sticky mobile Book Appointment button
- Scroll progress bar
- Loading screen
- SEO metadata, sitemap and robots file

## Setup

```bash
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Production build

```bash
npm run build
```

## Important files

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/Services.tsx`
- `components/Booking.tsx`
- `components/Gallery.tsx`
- `components/Policies.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## Images

Images are stored in:

```bash
public/images
```

Required image names:

- `logo.png`
- `hero.png`
- `stylist.png`
- `gallery1.png`
- `gallery2.png`
- `gallery3.png`
- `gallery4.png`
- `gallery5.png`
- `gallery6.png`

## Acuity Booking

The booking iframe is inside:

```bash
components/Booking.tsx
```

Current Acuity link:

```bash
https://app.acuityscheduling.com/schedule.php?owner=39303939
```

## WhatsApp

The WhatsApp button is inside:

```bash
components/WhatsAppButton.tsx
```

Current WhatsApp number:

```bash
447429555581
```
