'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  href: string
  alt: string
  desktop: string
  mobile: string
}

const slides: Slide[] = [
  {
    href: 'https://www.pw.live/neet/exams/neet-2025-toppers',
    alt: 'NEET 2025 Toppers',
    desktop:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/6fd52efe-8059-45a2-bf4a-3edb250c5da9.webp',
    mobile:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/06f4de3e-2ad9-4c0e-919c-f5084f4463c7.webp',
  },
  {
    href: 'https://www.pw.live/test-series/neet?utm_source=NEET+Real+Test+Series&utm_medium=SEO+NEET+RTS+2026&utm_campaign=SEO',
    alt: 'NEET Real Test Series',
    desktop:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/2959771a-18a3-4855-bf2f-7f80509a6460.webp',
    mobile:
      'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/cba555d8-7d00-4f40-8375-c118fff7183e.webp',
  },
]

function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay)
    return () => clearInterval(id)
  }, [callback, delay])
}

export default function NeetHero() {
  const [idx, setIdx] = useState(0)

  const next = useCallback(
    () => setIdx((i) => (i + 1) % slides.length),
    [],
  )
  const prev = useCallback(
    () => setIdx((i) => (i - 1 + slides.length) % slides.length),
    [],
  )

  useInterval(next, 5000)

  return (
    <div className="relative w-full">
      {/* Slides container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${idx * 100}%)`,
          }}
        >
          {slides.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              className="shrink-0 grow-0 basis-full"
            >
              {/* desktop img */}
              <Image
                src={s.desktop}
                alt={s.alt}
                width={1600}
                height={400}
                className="hidden w-full md:block"
                priority
                unoptimized
              />
              {/* mobile img */}
              <Image
                src={s.mobile}
                alt={s.alt}
                width={800}
                height={400}
                className="w-full md:hidden"
                priority
                unoptimized
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Nav buttons – show on hover (desktop) or always on mobile */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 md:pointer-events-auto md:opacity-0 md:transition-opacity md:hover:opacity-100 bg-gradient-to-r from-black/60">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          className="h-8 w-8 md:h-10 md:w-10 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 md:pointer-events-auto md:opacity-0 md:transition-opacity md:hover:opacity-100 bg-gradient-to-l from-black/60">
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          className="h-8 w-8 md:h-10 md:w-10 text-white"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-2 md:mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === idx ? 'bg-gray-700' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}