// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'

// const logo =
//   'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/537952c6-cac8-4284-83a1-4a81818d3ccc.webp'

// type SubCategory = { label: string; description: string }
// type MegaItem = {
//   title: string
//   description: string
//   subLabel?: string
// }

// interface MegaColumn {
//   title: string
//   description: string
//   sub?: string
// }

// const megaColumns: MegaColumn[] = [
//   {
//     title: 'Competitive Exams',
//     description: 'IIT JEE,  NEET,  ESE,  GATE,  AE/JE,  Olympiad',
//   },
//   { title: 'Only IAS', description: 'UPSC,  State PSC' },
//   {
//     title: 'School Preparation',
//     description:
//       'Foundation (Class 6-12),  Commerce,  Arts,  CuriousJr (1st-8th),  Science,  International Boards',
//   },
//   {
//     title: 'Govt Exam',
//     description:
//       'Judiciary,  SSC,  Defence,  Teaching,  JAIIB & CAIIB,  BIHAR EXAMS WALLAH,  UP Exams,  Railway,  Nursing Exams,  Banking,  WB Exams',
//   },
//   {
//     title: 'UG & PG Entrance Exams',
//     description:
//       'MBA,  IPMAT,  IIT JAM,  LAW,  CUET UG,  UGC NET,  GMAT,  Design & Architecture,  Pharma,  CUET PG,  NEET PG,  CSIR NET',
//   },
//   { title: 'FINANCE', description: 'CA,  CS,  Finance Courses,  ACCA' },
//   { title: 'Others', description: 'Online Degrees' },
//   {
//     title: 'English Proficiency Test',
//     description: 'IELTS,  TOEFL',
//   },
//   { title: 'Agriculture', description: 'Agriculture' },
// ]

// const quickAccess = [
//   {
//     label: 'IIT JEE',
//     href: 'https://www.pw.live/iit-jee/',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/33038337-4844-438e-90b0-9f3d8f5b54a1.webp',
//   },
//   {
//     label: 'NEET',
//     href: 'https://www.pw.live/neet',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3bc54f48-89f3-4d6b-89ad-f1ef072d3c31.webp',
//   },
//   {
//     label: 'ESE',
//     href: 'https://www.pw.live/ese-gate',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9110d3b8-5532-4643-aee4-d7bda2932637.webp',
//   },
//   {
//     label: 'GATE',
//     href: 'https://www.pw.live/gate',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/bb039bf6-0aa5-41b2-abf9-0b8d8fda548b.webp',
//   },
//   {
//     label: 'AE/JE',
//     href: 'https://www.pw.live/ae-je',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/40700362-8163-410a-8e10-cc3e6dec0b9b.webp',
//   },
//   {
//     label: 'Olympiad',
//     href: 'https://www.pw.live/olympiad',
//     icon: 'https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/b896b818-1f6d-4fdb-b569-d5e406c74918.webp',
//   },
// ]

// const topLinks = [
//   { label: 'Vidyapeeth', href: 'https://www.pw.live/vidyapeeth-centres' },
//   {
//     label: 'Upskilling',
//     href: 'https://pwskills.com/?utm_source=pw.live&utm_medium=organic&utm_campaign=seo',
//   },
//   {
//     label: 'PW Store',
//     href: 'https://store.pw.live?utm_source=PW_Live&utm_medium=PW_Header&utm_campaign=Live_Header',
//   },
//   { label: 'Test Series', href: 'https://www.pw.live/test-series' },
//   {
//     label: 'Class 1st - 8th',
//     href: 'https://www.curiousjr.com/?utm_source=pwlive&utm_medium=website&utm_campaign=header',
//   },
//   { label: 'Power Batch', href: 'https://www.pw.live/power-batch' },
// ]

// export default function Navbar() {
//   const [megaOpen, setMegaOpen] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   return (
//     <header className="sticky left-0 right-0 top-0 z-[100] bg-white shadow-sm px-[12%]">
//       <div className="container mx-auto flex h-20 items-center gap-4 px-4">
//         <div className="flex items-center lg:hidden">
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="mr-3 p-1"
//           >
//             <MenuIcon className="h-7 w-7 text-black" />
//           </button>
//           <Link href="/" className="flex items-center gap-2">
//             <img src={logo} alt="Physics Wallah" className="h-10" />
//           </Link>
//         </div>

//         <Link
//           href="/"
//           className="hidden items-center gap-2 lg:flex lg:mr-4"
//         >
//           <img src={logo} alt="Physics Wallah" className="h-11" />
//         </Link>

//         <div className="relative hidden lg:block">
//           <button
//             onMouseEnter={() => setMegaOpen(true)}
//             onMouseLeave={() => setMegaOpen(false)}
//             className="flex items-center gap-1 rounded-md border border-primary px-5 py-3"
//           >
//             <span className="text-base font-semibold text-primary">
//               All Courses
//             </span>
//             <ChevronDownIcon className="h-5 w-5 text-primary" />
//           </button>

//           {/* MEGA MENU */}
//           <div
//             onMouseEnter={() => setMegaOpen(true)}
//             onMouseLeave={() => setMegaOpen(false)}
//             className={`absolute left-0 mt-3 flex translate-y-1 overflow-hidden rounded-md bg-white shadow-lg transition-all duration-200 ${
//               megaOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
//             }`}
//           >
//             {/* left columns */}
//             <div className="flex flex-col">
//               {megaColumns.map((col, i) => (
//                 <div
//                   key={col.title}
//                   className={`w-80 p-4 transition hover:bg-indigo-50 ${
//                     i === 0 ? 'rounded-tl-md bg-indigo-50' : ''
//                   }`}
//                 >
//                   <div className="flex items-center justify-between gap-2">
//                     <div className="w-[90%]">
//                       <div className="text-base font-semibold text-black">
//                         {col.title}
//                       </div>
//                       <div className="text-xs font-medium text-gray-500">
//                         {col.description}
//                       </div>
//                     </div>
//                     <ArrowRight className="h-5 w-5 text-gray-700" />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* quick-access cards */}
//             <div className="h-full w-[600px] overflow-y-auto p-4">
//               <div className="flex flex-wrap gap-3">
//                 {quickAccess.map((q) => (
//                   <Link
//                     key={q.label}
//                     href={q.href}
//                     className="flex w-[272px] items-center gap-2 rounded-md border bg-white p-3 shadow hover:border-black transition"
//                     target="_blank"
//                   >
//                     <img
//                       src={q.icon}
//                       alt="icon"
//                       className="min-h-[33px] min-w-[33px]"
//                     />
//                     <span className="text-sm font-semibold">{q.label}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <nav className="hidden items-center gap-3 lg:flex text-[40px]">
//           {topLinks.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               target="_blank"
//               className="rounded-md px-3 py-2 text-base font-semibold transition hover:bg-violet-100"
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>

//         {/* spacer */}
//         <div className="flex-1" />

//         {/* Login button */}
//         <button className="rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white hover:bg-indigo-700">
//           Login / Register
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="block bg-white lg:hidden">
//           {topLinks.map((l) => (
//             <Link
//               key={l.label}
//               href={l.href}
//               className="block border-b px-4 py-3 text-sm font-medium"
//               target="_blank"
//             >
//               {l.label}
//             </Link>
//           ))}
//           <button className="m-4 w-full rounded-md bg-indigo-600 py-2 text-white">
//             Login / Register
//           </button>
//         </div>
//       )}
//     </header>
//   )
// }

// function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <line x1="4" x2="20" y1="6" y2="6" strokeWidth={2} />
//       <line x1="4" x2="20" y1="12" y2="12" strokeWidth={2} />
//       <line x1="4" x2="20" y1="18" y2="18" strokeWidth={2} />
//     </svg>
//   )
// }

// function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
//       <path d="m6 9 6 6 6-6" strokeWidth={2} strokeLinecap="round" />
//     </svg>
//   )
// }

// function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
//       />
//     </svg>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Menu, ChevronDown, ChevronRight, ExternalLink } from "lucide-react"

const logo = "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/537952c6-cac8-4284-83a1-4a81818d3ccc.webp"

interface MegaColumn {
  title: string
  description: string
  sub?: string
}

const megaColumns: MegaColumn[] = [
  {
    title: "Competitive Exams",
    description: "IIT JEE, NEET, ESE, GATE, AE/JE, Olympiad",
  },
  { title: "Only IAS", description: "UPSC, State PSC" },
  {
    title: "School Preparation",
    description: "Foundation (Class 6-12), Commerce, Arts, CuriousJr (1st-8th), Science, International Boards",
  },
  {
    title: "Govt Exam",
    description:
      "Judiciary, SSC, Defence, Teaching, JAIIB & CAIIB, BIHAR EXAMS WALLAH, UP Exams, Railway, Nursing Exams, Banking, WB Exams",
  },
  {
    title: "UG & PG Entrance Exams",
    description:
      "MBA, IPMAT, IIT JAM, LAW, CUET UG, UGC NET, GMAT, Design & Architecture, Pharma, CUET PG, NEET PG, CSIR NET",
  },
  { title: "FINANCE", description: "CA, CS, Finance Courses, ACCA" },
  { title: "Others", description: "Online Degrees" },
  {
    title: "English Proficiency Test",
    description: "IELTS, TOEFL",
  },
  { title: "Agriculture", description: "Agriculture" },
]

const quickAccess = [
  {
    label: "IIT JEE",
    href: "https://www.pw.live/iit-jee/",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/33038337-4844-438e-90b0-9f3d8f5b54a1.webp",
  },
  {
    label: "NEET",
    href: "https://www.pw.live/neet",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/3bc54f48-89f3-4d6b-89ad-f1ef072d3c31.webp",
  },
  {
    label: "ESE",
    href: "https://www.pw.live/ese-gate",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9110d3b8-5532-4643-aee4-d7bda2932637.webp",
  },
  {
    label: "GATE",
    href: "https://www.pw.live/gate",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/bb039bf6-0aa5-41b2-abf9-0b8d8fda548b.webp",
  },
  {
    label: "AE/JE",
    href: "https://www.pw.live/ae-je",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/40700362-8163-410a-8e10-cc3e6dec0b9b.webp",
  },
  {
    label: "Olympiad",
    href: "https://www.pw.live/olympiad",
    icon: "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/b896b818-1f6d-4fdb-b569-d5e406c74918.webp",
  },
]

const topLinks = [
  { label: "Vidyapeeth", href: "https://www.pw.live/vidyapeeth-centres" },
  {
    label: "Upskilling",
    href: "https://pwskills.com/?utm_source=pw.live&utm_medium=organic&utm_campaign=seo",
  },
  {
    label: "PW Store",
    href: "https://store.pw.live?utm_source=PW_Live&utm_medium=PW_Header&utm_campaign=Live_Header",
  },
  { label: "Test Series", href: "https://www.pw.live/test-series" },
  {
    label: "Class 1st - 8th",
    href: "https://www.curiousjr.com/?utm_source=pwlive&utm_medium=website&utm_campaign=header",
  },
  { label: "Power Batch", href: "https://www.pw.live/power-batch" },
]

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky left-0 right-0 top-0 z-[100] bg-white shadow-sm px-4 lg:px-[13%]">
      <div className="container mx-auto flex h-16 lg:h-20 items-center gap-4">
        {/* Mobile Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <img src={logo || "/placeholder.svg"} alt="Physics Wallah" className="h-8" />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {/* Course Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">All Courses</h3>
                  <div className="space-y-2">
                    {megaColumns.map((col) => (
                      <div key={col.title} className="p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 text-sm">{col.title}</h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{col.description}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Quick Access */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Access</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickAccess.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        className="flex flex-col items-center p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <img src={item.icon || "/placeholder.svg"} alt={item.label} className="h-8 w-8 mb-2" />
                        <span className="text-xs font-medium text-center">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Navigation Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
                  <div className="space-y-1">
                    {topLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="font-medium text-gray-900">{link.label}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Login Button */}
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Login / Register</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logo || "/placeholder.svg"} alt="Physics Wallah" className="h-8 lg:h-11" />
        </Link>

        {/* Desktop Mega Menu */}
        <div className="relative hidden lg:block">
          <Button
            variant="outline"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            className="flex items-center gap-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            <span className="text-base font-semibold">All Courses</span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* Desktop Mega Menu Content */}
          <div
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            className={`absolute left-0 mt-2 flex translate-y-1 overflow-hidden rounded-lg bg-white shadow-xl border transition-all duration-200 ${
              megaOpen ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {/* Left columns */}
            <div className="flex flex-col">
              {megaColumns.map((col, i) => (
                <div
                  key={col.title}
                  className={`w-80 p-4 transition hover:bg-indigo-50 ${i === 0 ? "rounded-tl-lg bg-indigo-50" : ""}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-[90%]">
                      <div className="text-base font-semibold text-black">{col.title}</div>
                      <div className="text-xs font-medium text-gray-500">{col.description}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick access cards */}
            <div className="h-full w-[600px] overflow-y-auto p-4">
              <div className="flex flex-wrap gap-3">
                {quickAccess.map((q) => (
                  <Link
                    key={q.label}
                    href={q.href}
                    className="flex w-[272px] items-center gap-2 rounded-md border bg-white p-3 shadow hover:border-black transition"
                    target="_blank"
                  >
                    <img src={q.icon || "/placeholder.svg"} alt="icon" className="min-h-[33px] min-w-[33px]" />
                    <span className="text-sm font-semibold">{q.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {topLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-violet-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Login Button */}
        <Button className="hidden lg:flex bg-indigo-600 hover:bg-indigo-700 text-white px-6">Login / Register</Button>

        {/* Mobile Login Button */}
        <Button size="sm" className="lg:hidden bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3">
          Login
        </Button>
      </div>
    </header>
  )
}
