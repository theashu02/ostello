'use client'

import Link from 'next/link'
import React from 'react'

/* ------------------------------------------------------------------ */
/* Types & sample data                                                */
/* ------------------------------------------------------------------ */

type BadgeTone = 'warning' | 'neutral'

interface Badge {
  text: string
  tone: BadgeTone
}

interface Batch {
  /* unique key */
  id: string
  /* “card” → boxed card, “banner” → full-width style                 */
  variant: 'card' | 'banner'
  name: string
  image: string
  tagImage?: string                                // little “online” tag
  badges?: Badge[]
  waShareUrl?: string
  audience: string
  startDate: string
  endDate: string
  features?: string
  price: string
  strikePrice?: string
  discountText?: string
  exploreUrl: string
  buyUrl?: string
  /* Banner-variant only                                              */
  languageLabel?: string
  languageColor?: string                 // hex e.g. “#FB6514” (banner)
}

const batches: Batch[] = [
  /* ───────────────────────── Card 1 ──────────────────────────────── */
  {
    id: 'yakeen-3',
    variant: 'card',
    name: 'Yakeen NEET 3.0 2026',
    tagImage: 'https://static.pw.live/images/onlineTag_20241022124328.webp',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/5b1cfae1-e4a1-468b-8dcb-9341914d8758.jpg',
    badges: [
      { text: 'NEW', tone: 'warning' },
      { text: 'Hinglish', tone: 'neutral' },
    ],
    waShareUrl:
      'https://wa.me/?text=Check%20out%20this%20link%3A%20https%3A%2F%2Fwww.pw.live%2Fneet%2Fdropper%2Fbatches%2Fyakeen-neet-3-0-2026-048808',
    audience: 'For Dropper NEET Aspirants',
    startDate: '14 Jul, 2025',
    endDate: '30 Jun, 2026',
    features: 'Course duration & lectures coming soon',
    price: '₹4,499',
    strikePrice: '₹5,200',
    discountText: 'Discount of 13% applied',
    exploreUrl: '/neet/dropper/batches/yakeen-neet-3-0-2026-048808',
    buyUrl: '#',
  },

  /* ───────────────────────── Card 2 ──────────────────────────────── */
  {
    id: 'yakeen-2',
    variant: 'card',
    name: 'Yakeen NEET 2.0 2026',
    tagImage: 'https://static.pw.live/images/onlineTag_20241022124328.webp',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/6d9e4207-7469-4bdb-aeb4-6a43ea04591d.jpg',
    badges: [
      { text: 'NEW', tone: 'warning' },
      { text: 'Hinglish', tone: 'neutral' },
    ],
    waShareUrl:
      'https://wa.me/?text=Check%20out%20this%20link%3A%20https%3A%2F%2Fwww.pw.live%2Fneet%2Fdropper%2Fbatches%2Fyakeen-neet-2-0-2026-854543',
    audience: 'For Dropper NEET Aspirants',
    startDate: '19 May, 2025',
    endDate: '30 Jun, 2026',
    features: 'Course duration & lectures coming soon',
    price: '₹4,900',
    strikePrice: '₹5,600',
    discountText: 'Discount of 13% applied',
    exploreUrl: '/neet/dropper/batches/yakeen-neet-2-0-2026-854543',
    buyUrl: '#',
  },

  /* ──────────────────────── Full-width banner ────────────────────── */
  {
    id: 'power-batch',
    variant: 'banner',
    name: 'Yakeen – Power Batch (Target NEET 2026)',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/9d97247c-9794-4db1-aa4c-28f6ac6923cf.jpg',
    languageLabel: 'Hinglish',
    languageColor: '#FB6514',
    exploreUrl:
      '/neet/dropper/batches/yakeen---power-batch-target-neet-2026--n1341mb--285002',
    buyUrl: '#',
    variantSpecificPadding: 'pt-0',
  },
]

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const badgeToneClasses: Record<BadgeTone, string> = {
  warning: 'bg-yellow-100 text-yellow-900',
  neutral: 'bg-gray-100 text-gray-900',
}

/* ------------------------------------------------------------------ */
/* Card component                                                     */
/* ------------------------------------------------------------------ */

function BatchCard(props: Batch) {
  if (props.variant === 'banner') {
    /* ----------  full-width banner style  ------------------------- */
    return (
      <div className="relative w-full overflow-hidden rounded-lg shadow">
        {/* Language ribbon */}
        {props.languageLabel && (
          <div
            className="absolute left-0 top-1/2 flex -translate-y-1/2 items-stretch"
            style={{ '--langBg': props.languageColor } as React.CSSProperties}
          >
            <svg
              width={15}
              height={27}
              viewBox="0 0 15 27"
              className="h-full -mr-px text-[color:var(--langBg)]"
              fill="currentColor"
            >
              <path d="M0 0h15v26H13.9c-3.5 0-6.6-2.3-7.7-5.7L0 0Z" />
            </svg>
            <span
              className="bg-[color:var(--langBg)] px-3 text-sm font-semibold text-white"
              style={{ lineHeight: '27px' }}
            >
              {props.languageLabel}
            </span>
            <svg
              width={15}
              height={27}
              viewBox="0 0 15 27"
              className="h-full -ml-px text-[color:var(--langBg)]"
              fill="currentColor"
            >
              <path d="M15 0H0v26h1.1c3.5 0 6.6-2.3 7.7-5.7L15 0Z" />
            </svg>
          </div>
        )}

        {/* Banner image */}
        <img src={props.image} alt={props.name} className="h-64 w-full object-cover" />

        {/* Buttons */}
        <div className="flex gap-4 bg-white p-4">
          <Link
            href={props.exploreUrl}
            className="flex-1 rounded bg-indigo-50 py-2 text-center text-indigo-600 transition hover:bg-indigo-100"
          >
            Explore Now
          </Link>
          {props.buyUrl && (
            <Link
              href={props.buyUrl}
              className="flex-1 rounded bg-indigo-600 py-2 text-center text-white transition hover:bg-indigo-700"
            >
              Buy Now
            </Link>
          )}
        </div>
      </div>
    )
  }

  /* ----------  boxed card style  ---------------------------------- */
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow">
      {/* little “online” tag */}
      {props.tagImage && (
        <img
          src={props.tagImage}
          alt="online"
          className="absolute left-2 top-2 w-16"
        />
      )}

      {/* main image */}
      <img src={props.image} alt={props.name} className="h-48 w-full object-cover" />

      <div className="flex-1 px-4 pb-4">
        {/* heading & badges */}
        <div className="mt-4 flex items-start gap-2">
          <h4 className="text-lg font-semibold leading-snug">{props.name}</h4>
          {props.badges?.map((b) => (
            <span
              key={b.text}
              className={cn(
                'rounded-full px-2 py-0.5 text-xs font-bold',
                badgeToneClasses[b.tone],
              )}
            >
              {b.text}
            </span>
          ))}
          {props.waShareUrl && (
            <Link href={props.waShareUrl} target="_blank" className="ml-auto">
              <img
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/cac77a2f-7e6f-464f-ac8b-81059f83e42d.fc62406e"
                alt="Share on WhatsApp"
                className="w-6"
              />
            </Link>
          )}
        </div>

        {/* audience */}
        <p className="mt-3 flex items-center gap-1 text-sm text-gray-800">
          <UserGroupIcon className="h-4 w-4 stroke-gray-500" />
          {props.audience}
        </p>

        {/* dates */}
        <div className="mt-2 flex flex-col gap-0.5 text-sm">
          <p className="flex items-center gap-1 text-gray-500">
            <CalendarIcon className="h-4 w-4 stroke-gray-500" />
            <span className="text-gray-600">Starts on</span>{' '}
            <span className="text-gray-800">{props.startDate}</span>
          </p>
          <p className="flex items-center gap-1 text-gray-500">
            <CalendarIcon className="h-4 w-4 stroke-gray-500" />
            <span className="text-gray-600">Ends on</span>{' '}
            <span className="text-gray-800">{props.endDate}</span>
          </p>
        </div>

        {/* features */}
        {props.features && (
          <p className="mt-3 flex items-center gap-1 text-sm text-gray-700">
            <img
              src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/584d754c-1858-4fa6-a53f-275439aa3ca2.png"
              alt="star icon"
              className="w-4"
            />
            {props.features}
          </p>
        )}
      </div>

      {/* decorative strip */}
      <img
        src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d7dcc056-23f2-45f2-a93a-ba8df6aabf10.png"
        alt="strip"
        className="h-8 w-full"
      />

      {/* price area */}
      <div className="space-y-3 bg-white p-4">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">{props.price}</span>
          {props.strikePrice && (
            <span className="text-sm text-gray-500 line-through">
              {props.strikePrice}
            </span>
          )}
        </div>
        {props.discountText && (
          <div className="flex items-center gap-2 rounded bg-green-50 px-2 py-1">
            <TagIcon className="h-4 w-4 fill-green-700" />
            <span className="text-xs font-semibold text-green-700">
              {props.discountText}
            </span>
          </div>
        )}
        <p className="text-xs text-gray-500">(For full batch)</p>

        {/* buttons */}
        <div className="mt-2 flex gap-3">
          <Link
            href={props.exploreUrl}
            className="flex-1 rounded border border-indigo-600 py-2 text-center text-indigo-600 transition hover:bg-indigo-50"
          >
            EXPLORE
          </Link>
          {props.buyUrl && (
            <Link
              href={props.buyUrl}
              className="flex-1 rounded bg-indigo-600 py-2 text-center text-white transition hover:bg-indigo-700"
            >
              BUY NOW
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Icons (tiny inline SVG helpers – avoids external deps)             */
/* ------------------------------------------------------------------ */

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M4.5 2v1.5M11.5 2v1.5M2 12.5V5A1.5 1.5 0 0 1 3.5 3.5h9A1.5 1.5 0 0 1 14 5v7.5m-12 0A1.5 1.5 0 0 0 3.5 14h9A1.5 1.5 0 0 0 14 12.5m-12 0V7.5A1.5 1.5 0 0 1 3.5 6h9A1.5 1.5 0 0 1 14 7.5v5M8 8.5h.005v.005H8V8.5Zm0 1.5h.005v.005H8V10Zm0 1.5h.005v.005H8v-.005ZM6.5 10h.005v.005H6.5V10Zm0 1.5h.005v.005H6.5v-.005ZM5 10h.005v.005H5V10Zm0 1.5h.005v.005H5v-.005ZM9.5 8.5h.005v.005H9.5V8.5Zm0 1.5h.005v.005H9.5V10Zm0 1.5h.005v.005H9.5v-.005ZM11 8.5h.005v.005H11V8.5Zm0 1.5h.005v.005H11V10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserGroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M1.5 12a2 2 0 0 1 2-2h.5m9 0h.5a2 2 0 0 1 2 2m-12.5 0V8.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V12m-10 0c0 2 2 3 4 3h2c2 0 4-1 4-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={8} cy={4.5} r={2} stroke="currentColor" />
      <circle cx={12.5} cy={6.5} r={1.5} stroke="currentColor" />
      <circle cx={3.5} cy={6.5} r={1.5} stroke="currentColor" />
    </svg>
  )
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M5.5 3.5A2.5 2.5 0 0 0 3 6v2.88a2.5 2.5 0 0 0 .732 1.768l6.5 6.5a2.5 2.5 0 0 0 3.536 0l2.879-2.88a2.5 2.5 0 0 0 0-3.536l-6.5-6.5A2.5 2.5 0 0 0 8.379 3.5H5.5Z"
        stroke="currentColor"
        strokeWidth={1.2}
        fill="currentColor"
        fillOpacity={0.1}
      />
      <circle cx={6} cy={6.5} r={1} fill="currentColor" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Public wrapper component                                           */
/* ------------------------------------------------------------------ */

export default function BatchCards() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-2 lg:grid-cols-3">
      {batches.map((batch) => (
        <BatchCard key={batch.id} {...batch} />
      ))}
    </div>
  )
}