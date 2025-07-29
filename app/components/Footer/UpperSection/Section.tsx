'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react'

const company = [
  { label: 'About Us', href: 'https://www.pw.live/about-us' },
  { label: 'Contact Us', href: 'https://www.pw.live/contact-us' },
  {
    label: 'Careers',
    href: 'https://pwhr.darwinbox.in/ms/candidatev2/a62d7a6e288992/careers/home',
  },
  { label: 'Updates', href: 'https://www.pw.live/updates' },
  {
    label: 'Account Deletion',
    href: 'https://www.pw.live/account-deletion',
  },
]

const centres = [
  { label: 'New Delhi', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/new-delhi-dl' },
  { label: 'Patna', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/patna-br' },
  { label: 'Kota', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/kota-rj' },
  { label: 'Noida', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/noida-up' },
  { label: 'Dhanbad', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/dhanbad-jh' },
  { label: 'Varanasi', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth/varanasi-up' },
  { label: 'View All', href: 'https://www.pw.live/offline-centres/batches/vidyapeeth' },
]

const popularExams = [
  { label: 'IIT JEE', href: 'https://www.pw.live/iit-jee' },
  { label: 'NEET', href: 'https://www.pw.live/neet' },
  { label: 'GATE', href: 'https://www.pw.live/gate' },
  { label: 'Defence', href: 'https://www.pw.live/defence' },
  { label: 'UPSC', href: 'https://www.pw.live/upsc' },
  { label: 'School Prep', href: 'https://www.pw.live/school-prep' },
]

const connect = [
  { label: 'Email us', href: 'mailto:support@pw.live' },
  { label: 'Talk to a counsellor', href: 'tel:+07019-243-492' },
]

const quickLinks = [
  { label: 'PW Prerna', href: 'https://www.pw.live/prerna' },
  { label: 'PW SIP', href: 'https://www.pw.live/sip' },
]

const products = [
  {
    label: 'PW Learning App',
    href: 'https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala',
  },
  { label: 'PW Offline Payments (Fin-Z)', href: 'https://finz.live/' },
]

const socials = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/physicswallah',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/physicswallah/',
    label: 'Instagram',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/c/PhysicsWallah',
    label: 'Youtube',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/physicswallah/',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/physicswallahap?lang=en',
    label: 'Twitter / X',
  },
  {
    icon: Send,
    href: 'https://t.me/Physics_Wallah_Official_Channel',
    label: 'Telegram',
  },
]

const logo =
  'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/537952c6-cac8-4284-83a1-4a81818d3ccc.webp'


function Column({
  heading,
  links,
}: {
  heading: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-[16px] font-normal text-black">{heading}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              target="_blank"
              className="text-[16px] font-normal text-muted-foreground transition hover:text-black hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Section() {
  return (
    <footer className="border-b-2 bg-muted/50 text-muted-foreground">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* left block */}
          <div className="space-y-6 lg:w-2/5">
            <div className="flex items-center gap-4">
              <Link href="https://pw.live/" aria-label="PW Logo">
                <Image src={logo} alt="Physics Wallah" width={44} height={44} />
              </Link>
              <span className="text-xl font-bold text-black">
                Physics Wallah
              </span>
            </div>

            <p className="text-sm leading-tight text-gray-700">
              We understand that every student has unique needs and abilities,
              that's why our curriculum is designed to adapt to your needs and
              help you grow!
            </p>

            {/* store badges */}
            <div className="flex gap-4 mb-8">
              <Button asChild variant="secondary" size="sm" className="p-0">
                <Link
                  href="https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala"
                  target="_blank"
                >
                  <Image
                    src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/597f8a82-2acf-4b27-8f1b-35b6ffda9bc1.webp"
                    alt="Google Play"
                    width={162}
                    height={40}
                    className="rounded-lg"
                  />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="sm" className="p-0">
                <Link
                  href="https://apps.apple.com/in/app/physics-wallah/id1641443555"
                  target="_blank"
                >
                  <Image
                    src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/8055a96b-a723-442d-908a-77f680453abe.webp"
                    alt="App Store"
                    width={162}
                    height={40}
                    className="rounded-lg"
                  />
                </Link>
              </Button>
            </div>

            {/* socials */}
            <div className="space-y-5">
              <h4 className="text-xl font-semibold text-black">
                Let's get social :
              </h4>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link key={href} href={href} target="_blank" aria-label={label}>
                    <Icon className="h-6 w-6 text-muted-foreground transition hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* right block (link columns) */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:w-3/5 xl:grid-cols-3">
            <Column heading="Company" links={company} />
            <Column heading="Our Centres" links={centres} />
            <Column heading="Popular Exams" links={popularExams} />
            <Column heading="Connect with us" links={connect} />
            <Column heading="Quick Links" links={quickLinks} />
            <Column heading="Our Products" links={products} />
          </div>
        </div>
      </div>
    </footer>
  )
}