import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      id: "item-1",
      question: "What is NEET 2026 and who conducts it?",
      answer:
        "NEET (National Eligibility cum Entrance Test) 2026 is a national-level medical entrance examination conducted by the National Testing Agency (NTA) for admission to undergraduate medical and dental courses (MBBS/BDS) in government and private medical colleges across India.",
    },
    {
      id: "item-2",
      question: "When will NEET 2026 be conducted?",
      answer:
        "NEET 2026 is expected to be conducted in the first week of May 2026. The exact date will be announced by NTA through the official notification, which is typically released in December of the preceding year.",
    },
    {
      id: "item-3",
      question: "What is the syllabus for NEET 2026?",
      answer:
        "The NEET 2026 syllabus includes topics from Physics, Chemistry, and Biology (Botany and Zoology) based on the NCERT curriculum for classes 11 and 12. The syllabus covers fundamental concepts in these subjects as prescribed by the Medical Council of India.",
    },
    {
      id: "item-4",
      question:
        "How many questions will NEET 2026 have and what is the marking scheme?",
      answer:
        "NEET 2026 will have 200 questions (50 each from Physics, Chemistry, Botany, and Zoology) out of which candidates need to attempt 180 questions. Each correct answer carries 4 marks, while each incorrect answer results in a deduction of 1 mark. No marks are awarded or deducted for unanswered questions.",
    },
    {
      id: "item-5",
      question: "What is the eligibility criteria for NEET 2026?",
      answer:
        "Candidates must have completed 17 years of age by December 31, 2026. They should have passed Class 12 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English as core subjects with a minimum of 50% marks (40% for SC/ST/OBC candidates). There is no upper age limit for NEET.",
    },
    {
      id: "item-6",
      question: "In how many languages will NEET 2026 be conducted?",
      answer:
        "NEET 2026 will be conducted in 13 languages: English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu. Candidates can choose their preferred language while filling the application form.",
    },
  ];
  return (
    <>
      <div className="mt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          NEET 2026 Preparation FAQs
        </h1>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-blue-50 border border-blue-100 rounded-lg px-6 py-2 mb-4"
              >
                <AccordionTrigger className="text-left text-gray-800 font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
