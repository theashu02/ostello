'use client'

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

/* ------------------------------------------------------------------ */
/* 1 · DATA                                                           */
/* ------------------------------------------------------------------ */
interface Section {
  title: string
  body: string
}

const sections: Section[] = [
  {
    title: 'Know about Physics Wallah',
    body: `Physics Wallah is an Indian ed-tech platform that provides
    accessible & comprehensive learning experiences to students from
    Class 6 to postgraduate level. We also provide extensive NCERT
    solutions, sample papers, NEET, JEE Mains, BITSAT previous-year
    papers & more. PW caters to 3.5 million+ registered students and
    7.8 million+ YouTube subscribers with a 4.8-star–rated app.`,
  },
  {
    title: 'We Stand Out because',
    body: `We offer intensive courses taught by India’s most qualified &
    experienced faculties and mentors. PW strives to make learning
    comprehensive and accessible for students of every background,
    empowering those who once couldn’t dream of top careers in
    engineering or medicine.`,
  },
  {
    title: 'Our Key Focus Areas',
    body: `PW’s focus is to create accessible learning for students all
    over India. With courses like Lakshya, Udaan, Arjuna & many others,
    we serve lakhs of aspirants. From Chemistry, Maths, Physics
    formulae to e-books by eminent authors, PW provides reliable
    solutions for student preparation.`,
  },
  {
    title: 'What Makes Us Different',
    body: `PW develops a comprehensive pedagogical structure where students
    receive a state-of-the-art learning experience with top-tier study
    material and resources. Beyond JEE Mains and NEET, PW also offers
    study material for state boards such as Uttar Pradesh, Bihar and
    more.`,
  },
]

/* ------------------------------------------------------------------ */
/* 2 · MAIN COMPONENT                                                 */
/* ------------------------------------------------------------------ */
export default function AboutPW() {
  return (
    <div className="py-6 flex flex-col gap-8 text-left">
      {sections.map((s, i) => (
        <Card key={s.title} className="p-4 space-y-2">
          <h3 className="text-base font-semibold text-gray-800">{s.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {s.body}
          </p>
          {i !== sections.length - 1 && <Separator />}
        </Card>
      ))}
    </div>
  )
}