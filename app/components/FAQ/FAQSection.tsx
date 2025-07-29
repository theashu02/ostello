'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Faq {
  q: string
  a: string
}

const faqs: Faq[] = [
  {
    q: "What is NEET 2026 and who conducts it?",
    a: "NEET 2026 is a national-level entrance exam for admission into MBBS, BDS, AYUSH and other medical courses. It is conducted by the National Testing Agency (NTA).",
  },
  {
    q: "When will NEET 2026 be conducted?",
    a: "The exam is expected on the first Sunday of May 2026 – most likely 3 May 2026.",
  },
  {
    q: "What is the syllabus for NEET 2026?",
    a: "The official syllabus is not out yet. Follow the NEET 2025 syllabus (based on the 2024 pattern and Class 11-12 NCERT topics) until it is released.",
  },
  {
    q: "How many questions will NEET 2026 have and what is the marking scheme?",
    a: "There will be 180 compulsory MCQs (Physics, Chemistry, Biology). +4 for every correct answer and –1 for every wrong answer.",
  },
  {
    q: "What is the eligibility criteria for NEET 2026?",
    a: "Candidates must be at least 17 years old by 31 Dec 2026 and have passed 10+2 with PCB and English. There is no upper-age or attempt limit.",
  },
  {
    q: "In how many languages will NEET 2026 be conducted?",
    a: "The paper will be offered in 13 languages: English, Hindi, Bengali, Gujarati, Tamil, Telugu, Marathi, Kannada, Malayalam, Odia, Assamese, Urdu, and Punjabi.",
  },
]

export default function NeetFaqs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        NEET 2026 Preparation FAQs
      </h2>

      <Accordion
        type="single"
        collapsible
        className="mt-9 w-full space-y-2"
      >
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-b"
          >
            <AccordionTrigger className="text-start hover:no-underline text-lg bg-[#f1f5fe] hover:bg-[#f1f5fe]/50 px-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal bg-[#f4f4f4] text-muted-foreground px-5 p-3">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}