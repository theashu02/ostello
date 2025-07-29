'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { House,ArrowRight } from 'lucide-react';

interface Crumb {
  label: string
  href: string
}

const crumbs: Crumb[] = [
  { label: 'NEET', href: '/neet' },
]

interface HubCard {
  id: string
  title: string
  description: string
  href: string
  cardColor: string           
  iconBg: string              
  iconShadow: string        
  iconSrc: string
}

const cards: HubCard[] = [
  {
    id: 'blogs',
    title: 'Blogs',
    description: 'Read Our Latest Blogs',
    href: 'https://www.pw.live/neet/exams',
    cardColor: '#E0EAFF',
    iconBg: '#EEF4FF',
    iconShadow: 'rgba(97,114,243,0.20)',
    iconSrc:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/29ca440f-7fcc-4d4e-9bd6-b50d5dfec276.webp',
  },
  {
    id: 'courses',
    title: 'Online Courses',
    description: 'Access Our Latest Courses',
    href: 'https://www.pw.live/neet/batches?utm_source=NEET+Online+Course+Banner&utm_medium=SEO+NEET+BATCH&utm_campaign=SEO',
    cardColor: '#FEE4E2',
    iconBg: '#FEF3F2',
    iconShadow: 'rgba(227,27,77,0.20)',
    iconSrc:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/e198723b-8faf-448b-b9a5-f09d8766db91.webp',
  },
  {
    id: 'tests',
    title: 'Test Series',
    description: 'Practice with Our Mock Test',
    href: 'https://www.pw.live/neet/test-series?utm_source=NEET+Test+Series&utm_medium=SEO+NEET+Test+SEries+2026&utm_campaign=SEO',
    cardColor: '#D3F8DF',
    iconBg: '#EDFCF2',
    iconShadow: 'rgba(22,179,100,0.20)',
    iconSrc:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/7e7100af-01ce-40d1-8e45-5692258ea5ae.webp',
  },
  {
    id: 'books',
    title: 'Books',
    description: 'Find NEET Books',
    href: 'https://store.pw.live/ug-entrance-exams/neet-books?utm_source=SEO&utm_medium=PW+Live&utm_campaign=NEET+Books',
    cardColor: '#D1E9FF',
    iconBg: '#EFF8FF',
    iconShadow: 'rgba(3,124,191,0.20)',
    iconSrc:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/d110d9c5-4488-4d70-b9f8-9b888cbf54ef.webp',
  },
]


const FloatingIconCard: React.FC<{ card: HubCard }> = ({ card }) => {
  return (
    <div className="relative w-full max-w-sm">
      {/* Floating Icon - positioned half outside the card */}
      <div
        className="absolute -top-6 left-5 z-20 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
        style={{
          backgroundColor: card.iconBg,
          boxShadow: `0 4px 10px ${card.iconShadow}`,
        }}
      >
        <img src={card.iconSrc} alt="" className="h-6 w-6" />
      </div>

      {/* Card */}
      <a
        key={card.id}
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-28 flex-row justify-between rounded-xl px-6 pt-8 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]  border hover:border-amber-950"
        style={{ backgroundColor: card.cardColor }}
      >
        {/* main content */}
        <div className="relative z-10 w-3/4">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{card.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{card.description}</p>
          </div>
        </div>

        {/* arrow - positioned at bottom right */}
        <div className="flex justify-end w-1/4">
          <span className="text-gray-600 transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight className="h-6 w-6" />
          </span>
        </div>
      </a>
    </div>
  );
};

function classNames(...cls: (string | undefined | false)[]) {
  return cls.filter(Boolean).join(' ')
}

export default function NeetHubHeader() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <nav className="mb-6">
        <ol className="flex items-center text-sm text-gray-500">
          <li>
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              <House className="h-6 w-6" />
            </Link>
          </li>

          {crumbs.map((c, idx) => (
            <Fragment key={c.href}>
              <li className="px-2 text-gray-900">
                <ChevronRightIcon className="h-4 w-4" />
              </li>
              <li>
                <Link
                  href={c.href}
                  className="font-normal text-[17px] text-gray-600 hover:text-indigo-600"
                >
                  {c.label}
                </Link>
              </li>
            </Fragment>
          ))}
        </ol>
      </nav>

      <h1 className="text-2xl font-bold text-[#3d3d3d] md:text-[39px]">
        NEET 2026: Syllabus, Exam Pattern, Eligibility, and Courses
      </h1>
      <p className="mt-3 text-[#3d3d3d]">
        Preparing for the NEET 2026 exam is a crucial step for students aiming to
        pursue a career in the medical field. This national-level exam demands
        focused preparation and smart planning. With proper guidance, online courses,
        study resources, and a clear understanding of the syllabus and pattern,
        students can move forward confidently. Here, we provide a detailed overview
        of NEET UG 2026, including eligibility, syllabus, exam pattern, and
        preparation tips.
      </p>
      <div className='p-8 mt-10 bg-gray-50 rounded-2xl'>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <FloatingIconCard key={card.id} card={card} />
        ))}
      </div>
      </div>
     
    </section>
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M3 12L12 3l9 9M5 10v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V10"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9 18l6-6-6-6"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z"
      />
    </svg>
  )
}