"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface Section {
  title: string;
  body: string;
}

const sections: Section[] = [
  {
    title: "Know about Physics Wallah",
    body: `Physics Wallah is an Indian edtech platform that provides accessible & comprehensive learning experiences to students from Class 6th to postgraduate level. We also provide extensive NCERT solutions, sample paper, NEET, JEE Mains, BITSAT previous year papers & more such resources to students. We also provide extensive NCERT solutions, sample papers, NEET, JEE Mains, BITSAT previous year papers, which maPhysics Wallah also caters to over 3.5 million registered students and over 78 lakh+ Youtube subscribers with 4.8 rating on its app.`,
  },
  {
    title: "We Stand Out because",
    body: `We provide students with intensive courses with India's qualified & experienced faculties & mentors. PW strives to make the learning experience comprehensive and accessible for students of all sections of society. We believe in empowering every single student who couldn't dream of a good career in engineering and medical field earlier.`,
  },
  {
    title: "Our Key Focus Areas",
    body: `Physics Wallah's main focus is to create accessible learning experiences for students all over India. With courses like Lakshya, Udaan, Arjuna & many others, we have been able to provide a ready solution for lakhs of aspirants. From providing Chemistry, Maths, Physics formulae to giving e-books of eminent authors, PW aims to provide reliable solutions for student prep.`,
  },
  {
    title: "What Makes Us Different",
    body: `Physics Wallah strives to develop a comprehensive pedagogical structure for students, where they get a state-of-the-art learning experience with study material and resources. Apart from catering students preparing for JEE Mains and NEET, PW also provides study material for each state board like Uttar Pradesh, Bihar, and others.`,
  },
];

export default function AboutPW() {
  return (
    <div className="flex bg-[#F8F8F8] flex-col gap-6 text-left py-6">
      <section className="mx-auto max-w-6xl bg-[#F8F8F8]">
        {sections.map((s) => (
          <div key={s.title} className="flex flex-col gap-1 mb-4 pl-3 md:pl-0">
            <h3 className="text-base font-semibold text-gray-800">{s.title}</h3>
            <p className="text-xs leading-relaxed tracking-tight text-gray-600">
              {s.body}
            </p>
          </div>
        ))}

        <Separator className="my-4" />

        <div className="flex flex-col items-center gap-y-2 md:flex-row md:justify-between">
          {/* Links */}
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Link
              href="https://www.pw.live/privacy-policy"
              className="text-xs md:text-sm font-medium text-gray-700 hover:underline"
            >
              Privacy Policy
            </Link>

            <Separator orientation="vertical" className="h-4" />

            <Link
              href="https://www.pw.live/terms-and-conditions"
              className="text-xs md:text-sm font-medium text-gray-700 hover:underline"
            >
              Terms of use
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[12px] md:text-sm font-medium text-gray-600 text-center">
            © 2025 Physicswallah Limited. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
