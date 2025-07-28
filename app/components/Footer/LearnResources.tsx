'use client'

import Link from 'next/link'

/* ------------------------------------------------------------------
  Types & helper
------------------------------------------------------------------ */
type LinkItem = { href: string; text: string }
type Group = { title: string; links: LinkItem[] }

// split any array into chunks of size N
const chunk = <T,>(arr: T[], size = 10) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  )

/* ------------------------------------------------------------------
  1 · FIRST FOUR GROUPS (2 × 2 grid)
------------------------------------------------------------------ */
const firstFour: Group[] = [
  {
    title: 'Notes (Class 6-9)',
    links: [
      { text: 'Class-6 Theory & Notes', href: 'https://www.pw.live/subjects-class-six' },
      { text: "Math's Notes for class 7", href: 'https://www.pw.live/topics-class-7-mathematics' },
      { text: 'Science Notes for class 7', href: 'https://www.pw.live/topics-science-class-seven' },
      { text: 'Class 8 Math Notes', href: 'https://www.pw.live/topics-mathematics-class-eight' },
      { text: 'Class 8 Chemistry Notes', href: 'https://www.pw.live/topics-chemistry-class-8' },
      { text: 'Class 8 Physics Notes', href: 'https://www.pw.live/topics-physics-class-8' },
      { text: 'Class 8 Biology Notes', href: 'https://www.pw.live/topics-biology-class-eight' },
      { text: 'Class 8 SST Notes', href: 'https://www.pw.live/topics-class-8-social-science-notes' },
      { text: "Class 9 Math's Notes", href: 'https://www.pw.live/topics-class-9-mathematics' },
      { text: 'Class 9 Physics Notes', href: 'https://www.pw.live/topics-physics-class-9' },
      { text: 'Class 9 Chemistry Notes', href: 'https://www.pw.live/topics-chemistry-class-9' },
      { text: 'Class 9 Biology Notes', href: 'https://www.pw.live/topics-biology-class-9' },
    ],
  },
  {
    title: 'PW Study Materials',
    links: [
      { text: 'Arjuna JEE Study Material', href: 'https://store.pw.live/products/arjuna-neet-class-11-pcb-combo-2025-omr' },
      { text: 'JEE 5 PYQs', href: 'https://store.pw.live/products/jee-5-years-set-of-3-books' },
      { text: 'JEE Mind Maps', href: 'https://store.pw.live/products/mind-maps-11-12-jje' },
      { text: 'Yakeen Study Material', href: 'https://store.pw.live/products/yakeen-neet-droppers-pcb-combo-2025-omr' },
      { text: 'NCERT Punch', href: 'https://store.pw.live/products/ncert-punch-pcb-combo-set-2024' },
      { text: 'Arjuna Neet Study Material', href: 'https://store.pw.live/products/arjuna-neet-class-11-pcb-combo-2025-omr' },
      { text: 'NEET PYQs', href: 'https://store.pw.live/products/37-years-neet-pcb-combo' },
      { text: 'CBSE Sample Paper', href: 'https://store.pw.live/products/37-years-neet-pcb-combo' },
      { text: 'CBSE Question Bank', href: 'https://store.pw.live/products/cbse-question-concept-bank-set-of-4-class-10-2025' },
      { text: 'Udaan For Class 10', href: 'https://store.pw.live/products/udaan-for-class-10-physics-chemistry-mathematics-part-a-and-b-biology-combo-set-of-5-books-for-2025-exams-' },
      { text: 'UPSC Sampoorna', href: 'https://store.pw.live/products/upsc-sampoorna-books-combo-set-of-19-civil-services-exam-onlyias-book-2023-edition' },
      { text: 'PW Stationery', href: 'https://store.pw.live/pw-stationery' },
      { text: 'PW Merchandise', href: 'https://store.pw.live/pw-merchandise' },
      { text: 'PW Device Courses', href: 'https://store.pw.live/device-courses' },
    ],
  },
  {
    title: 'Notes (Class 10-12)',
    links: [
      { text: "Class 10 Math's Notes", href: 'https://www.pw.live/topics-class-10-mathematics' },
      { text: 'Class 10 Chemistry Notes', href: 'https://www.pw.live/topics-chemistry-class-10' },
      { text: 'Class 10 Physics Notes', href: 'https://www.pw.live/topics-physics-class-10' },
      { text: 'Class 10 Biology Notes', href: 'https://www.pw.live/topics-biology-class-10' },
      { text: 'Aptitude & Reasoning', href: 'https://www.pw.live/topics-class-10-aptitude-reasoning' },
      { text: 'Class 10 Geography', href: 'https://www.pw.live/topics-geography-class-10' },
      { text: 'Physics Class 11 Notes', href: 'https://www.pw.live/topics-physics-class-eleven' },
      { text: 'Class 11 Chemistry Notes', href: 'https://www.pw.live/topics-chemistry-class-11' },
      { text: 'Maths Notes Class 11', href: 'https://www.pw.live/topics-class-11-mathematics' },
      { text: 'Zoology Class 11', href: 'https://www.pw.live/topics-zoology-class-11' },
      { text: 'Class 11 Botany Notes', href: 'https://www.pw.live/topics-botany-class-11' },
      { text: 'Physics Class 12 Notes', href: 'https://www.pw.live/topics-physics-class-twelve' },
      { text: 'Chemistry Class 12', href: 'https://www.pw.live/topics-chemistry-class-12' },
      { text: 'Maths Notes Class 12', href: 'https://www.pw.live/topics-mathematics-class-12' },
      { text: 'Zoology Class 12', href: 'https://www.pw.live/topics-class-12-zoology' },
      { text: 'Class 12th Botany Notes', href: 'https://www.pw.live/topics-botany-class-12' },
    ],
  },
  {
    title: 'PW Books',
    links: [
      { text: 'NEET Books', href: 'https://store.pw.live/ug-entrance-exams/neet-books' },
      { text: 'IIT JEE Books', href: 'https://store.pw.live/ug-entrance-exams/iit-jee-books' },
      { text: 'School Prep Books', href: 'https://store.pw.live/school-books' },
      { text: 'PW Stationery', href: 'https://store.pw.live/pw-stationery' },
      { text: 'UPSC CSE Books', href: 'https://store.pw.live/govt-entrance-exams/upsc-books' },
      { text: 'PW Merchandise', href: 'https://store.pw.live/pw-merchandise' },
      { text: 'NDA/Defence Books', href: 'https://store.pw.live/ug-entrance-exams/nda-defence-books' },
      { text: 'GATE Books', href: 'https://store.pw.live/govt-entrance-exams/gate-books' },
      { text: 'Device Courses', href: 'https://store.pw.live/device-courses' },
      { text: 'CUET Books', href: 'https://store.pw.live/ug-entrance-exams/cuet-books' },
      { text: 'CA/Finance Books', href: 'https://store.pw.live/ug-entrance-exams/ca-books' },
      { text: 'UPPSC Books', href: 'https://store.pw.live/govt-entrance-exams/uppsc-books' },
      { text: 'NEET PG Books', href: 'https://store.pw.live/govt-entrance-exams/neetpg-book' },
      { text: 'BPSC Books', href: 'https://store.pw.live/govt-entrance-exams/bpsc-books' },
      { text: 'SSC Books', href: 'https://store.pw.live/govt-entrance-exams/ssc-books' },
      { text: 'MPSC Books', href: 'https://store.pw.live/govt-entrance-exams/mpsc-book' },
      { text: 'MPPSC Books', href: 'https://store.pw.live/govt-entrance-exams/mppsc-books' },
      { text: 'Teaching Books', href: 'https://store.pw.live/govt-entrance-exams/teaching' },
    ],
  },
]

/* ------------------------------------------------------------------
  2 · REMAINING GROUPS (4-per-row grid) – shortened for brevity
------------------------------------------------------------------ */
/* ------------------------------------------------------------------
  2 · REMAINING GROUPS (4-per-row grid) – FIXED
------------------------------------------------------------------ */
const otherGroups: Group[] = [
    {
      title: 'Ncert Solutions',
      links: [
        { href: 'https://www.pw.live/concepts-ncert-solutions-for-class-6', text: 'NCERT Solutions For Class 6' },
        { href: 'https://www.pw.live/concepts-ncert-solutions-for-class-7', text: 'NCERT Solutions For class 7' },
        { href: 'https://www.pw.live/concepts-ncert-solution-for-class-8', text: 'NCERT Solutions for class 8' },
        { href: 'https://www.pw.live/concepts-ncert-solutions-for-class-9', text: 'NCERT Solutions for class 9' },
        { href: 'https://www.pw.live/ncert-solutions-class-10', text: 'NCERT Solutions for class 10' },
        { href: 'https://www.pw.live/ncert-solutions-for-class-11', text: 'NCERT Solutions for class 11' },
        { href: 'https://www.pw.live/ncert-solutions-for-class-12', text: 'NCERT Solutions for Class 12' },
      ],
    },
    {
      title: 'Govt Exams',
      links: [
        { href: 'https://www.pw.live/ssc/exams', text: 'SSC Exams' },
        { href: 'https://www.pw.live/banking/exams', text: 'Banking Exams' },
        { href: 'https://www.pw.live/teaching/exams', text: 'Teaching Exams' },
        { href: 'https://www.pw.live/jaiib-caiib/exams', text: 'JAIIB CAIIB Exams' },
        { href: 'https://www.pw.live/railway/exams', text: 'Railway Exams' },
        { href: 'https://www.pw.live/defence/exams', text: 'Defence Exams' },
        { href: 'https://www.pw.live/state-psc/exams', text: 'State PSC Exams' },
      ],
    },
    {
      title: 'Entrance Exams',
      links: [
        { href: 'https://www.pw.live/gate/exams', text: 'Gate Exam' },
        { href: 'https://www.pw.live/iit-jee/exams', text: 'IIT JEE Exam' },
        { href: 'https://www.pw.live/neet/exams', text: 'NEET Exam' },
        { href: 'https://www.pw.live/cuet/exams', text: 'CUET Exam' },
        { href: 'https://www.pw.live/csir-net/exams', text: 'CSIR-NET Exam' },
        { href: 'https://www.pw.live/mba/exams', text: 'MBA Exam' },
        { href: 'https://www.pw.live/nursing/exams', text: 'Nursing Exam' },
      ],
    },
    {
      title: 'Our Other Websites',
      links: [
        { href: 'https://store.pw.live/', text: 'PW Store' },
        { href: 'https://pwskills.com/', text: 'PW Skills' },
        { href: 'https://pwonlyias.com/', text: 'PWOnlyIAS' },
        { href: 'https://meded.pw.live/', text: 'MedEd' },
        { href: 'https://www.pwgulf.com/', text: 'PW Gulf' },
        { href: 'https://pwioi.com/', text: 'PW IOI' },
        { href: 'https://www.curiousjr.com/', text: 'CuriousJr' },
      ],
    },
    {
      title: 'Class 6th to 12th Online Coaching',
      links: [
        { href: 'https://www.pw.live/school-prep/class-12/batches', text: 'Class 12 Online Coaching' },
        { href: 'https://www.pw.live/school-prep/class-11/batches', text: 'Class 11 Online Coaching' },
        { href: 'https://www.pw.live/school-prep/class-10/batches', text: 'Class 10 Online Coaching' },
        { href: 'https://www.pw.live/school-prep/class-9/batches', text: 'Class 9 Online Coaching' },
        { href: 'https://www.pw.live/school-prep/class-8/batches', text: 'Class 8 Online Coaching' },
      ],
    },
    {
      title: 'Govt Job Exams Coaching',
      links: [
        { href: 'https://www.pw.live/ssc/batches', text: 'SSC Online Coaching' },
        { href: 'https://www.pw.live/banking/batches', text: 'Bank Exam Online Coaching' },
        { href: 'https://www.pw.live/teaching/batches', text: 'TET Online Coaching' },
        { href: 'https://www.pw.live/jaiib-caiib/batches', text: 'JAIIB & CAIIB Online Coaching' },
        { href: 'https://www.pw.live/bihar/batches', text: 'Bihar Exam Online Coaching' },
      ],
    },
    {
      title: 'UPSC Coaching',
      links: [
        { href: 'https://www.pw.live/upsc/online-course/batches', text: 'UPSC Online Coaching' },
        { href: 'https://www.pw.live/upsc/offline-course/batches', text: 'UPSC Offline & Hybrid Coaching' },
        { href: 'https://www.pw.live/state-psc/batches', text: 'State PSC Online Coaching' },
        { href: 'https://www.pw.live/state-psc/uppsc/batches', text: 'UPPSC Online Coaching' },
        { href: 'https://www.pw.live/state-psc/bpsc/batches', text: 'BPSC Online Coaching' },
      ],
    },
    {
      title: 'Defence Exam Coaching',
      links: [
        { href: 'https://www.pw.live/defence/nda/batches', text: 'NDA Online Coaching' },
        { href: 'https://www.pw.live/defence/cds-afcat/batche', text: 'CDS Online Coaching' },
        { href: 'https://www.pw.live/defence/ssb/batches', text: 'SSB Online Coaching' },
        { href: 'https://www.pw.live/defence/agniveer/batches', text: 'Agniveer Online Coaching' },
      ],
    },
    {
      title: 'Gate Exam Coaching',
      links: [
        { href: 'https://www.pw.live/gate/civil/batches', text: 'Civil Engineering Coaching' },
        { href: 'https://www.pw.live/gate/mechanical/batches', text: 'Mechanical Engineering Coaching' },
        { href: 'https://www.pw.live/gate/cs/batches', text: 'CS & IT Coaching' },
        { href: 'https://www.pw.live/gate/electronics/batches', text: 'ECE Coaching' },
        { href: 'https://www.pw.live/gate/electrical/batches', text: 'EE Coaching' },
      ],
    },
    {
      title: 'Formulas',
      links: [
        { href: 'https://www.pw.live/formula', text: 'Science formulas' },
        { href: 'https://www.pw.live/chemistry-formulas', text: 'Chemistry formulas' },
        { href: 'https://www.pw.live/physics-formula', text: 'Physics formulas' },
        { href: 'https://www.pw.live/maths-formulas', text: "Math's Formulas" },
      ],
    },
    {
      title: 'Other Exams',
      links: [
        { href: 'https://www.pw.live/ca/exams', text: 'CA Exam' },
        { href: 'https://www.pw.live/cs/exams', text: 'Company Secretary Exam' },
        { href: 'https://www.pw.live/scholarship/vidyapeeth/pwsat', text: 'PWSAT Exam' },
      ],
    },
  ]
/* ------------------------------------------------------------------
  Card – new column after 10 links
------------------------------------------------------------------ */
const Card: React.FC<{ group: Group }> = ({ group }) => {
  const columns = chunk(group.links, 10)

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-base font-semibold text-gray-800">
        {group.title}
      </h3>

      <div className="flex flex-wrap gap-6">
        {columns.map((col, idx) => (
          <ul key={idx} className="min-w-[170px] space-y-1">
            {col.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target="_blank"
                  className="text-xs font-medium text-gray-600 transition hover:text-black hover:underline"
                >
                  {l.text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------
  MAIN COMPONENT
------------------------------------------------------------------ */
export default function LearnResources() {
  return (
    <section className="bg-[#F8F8F8] py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-[#3D3D3D]">
          Free Learning Resources
        </h2>

        {/* -------------- FIRST FOUR  (2 × 2) ----------------------- */}
        <div className="grid gap-6 sm:grid-cols-2">
          {firstFour.map((g) => (
            <Card key={g.title} group={g} />
          ))}
        </div>

        <hr className="my-8 border-gray-300" />

        {/* -------------- REMAINING  (4 per row) -------------------- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherGroups.map((g) => (
            <Card key={g.title} group={g} />
          ))}
        </div>
      </div>
    </section>
  )
}