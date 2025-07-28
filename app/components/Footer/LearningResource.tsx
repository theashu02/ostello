// import Link from "next/link"

// export default function LearningResource() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
//           Free Learning Resources
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* PW Books Section */}
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PW Books</h2>
//               <div className="space-y-3">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   NEET Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   IIT JEE Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   School Prep Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   PW Stationery
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   UPSC CSE Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   PW Merchandise
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   NDA/Defence Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   GATE Books
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Device Courses
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   CUET Books
//                 </Link>
//               </div>
//             </div>

//             <div className="pt-6">
//               <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">PW Study Materials</h2>
//               <div className="space-y-3">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Arjuna JEE Study Material
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   JEE 5 PYQs
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   JEE Mind Maps
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Yakeen Study Material
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   NCERT Punch
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Second Column */}
//           <div className="space-y-6">
//             <div className="space-y-3 pt-10">
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 CA/Finance Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 UPPSC Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 NEET PG Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 BPSC Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 SSC Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 MPSC Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 MPPSC Books
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Teaching Books
//               </Link>
//             </div>

//             <div className="pt-6">
//               <div className="space-y-3 pt-10">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   UPSC Sampoorna
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   PW Stationery
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   PW Merchandise
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   PW Device Courses
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Notes (Class 10-12) Section */}
//           <div className="space-y-6">
//             <div>
//               <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Notes (Class 10-12)</h2>
//               <div className="space-y-3">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 10 Math's Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 10 Chemistry Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 10 Physics Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 10 Biology Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Aptitude & Reasoning
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 10 Geography
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Physics Class 11 Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 11 Chemistry Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Maths Notes Class 11
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Zoology Class 11
//                 </Link>
//               </div>
//             </div>

//             <div className="pt-6">
//               <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Notes (Class 6-9)</h2>
//               <div className="space-y-3">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class-6 Theory & Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Math's Notes for class 7
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Science Notes for class 7
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 8 Math Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 8 Chemistry Notes
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Fourth Column */}
//           <div className="space-y-6">
//             <div className="space-y-3 pt-10">
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Class 11 Botany Notes
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Physics Class 12 notes
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Chemistry Class 12
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Maths Notes Class 12
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Zoology class 12
//               </Link>
//               <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                 Class 12th Botany Notes
//               </Link>
//             </div>

//             <div className="pt-6">
//               <div className="space-y-3 pt-10">
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 9 Chemistry Notes
//                 </Link>
//                 <Link href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
//                   Class 9 Biology Notes
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import Link from "next/link"

// ---------------------------------------------------------------------------
// Data & types – customise here (or pass a new array as a prop)
// ---------------------------------------------------------------------------
interface Section {
  title?: string
  links: string[]
  /** Extra classes for the wrapper that *originally* surrounded this set */
  containerClass?: string
}

type ResourceColumn = Section[]

interface LearningResourceProps {
  /** Override to inject a different data-set without touching the component */
  resources?: ResourceColumn[]
}

const defaultResources: ResourceColumn[] = [
  // Column 1 ────────────────────────────────────────────────────────────────
  [
    {
      title: "PW Books",
      links: [
        "NEET Books",
        "IIT JEE Books",
        "School Prep Books",
        "PW Stationery",
        "UPSC CSE Books",
        "PW Merchandise",
        "NDA/Defence Books",
        "GATE Books",
        "Device Courses",
        "CUET Books",
      ],
    },
    {
      title: "PW Study Materials",
      containerClass: "pt-6",
      links: [
        "Arjuna JEE Study Material",
        "JEE 5 PYQs",
        "JEE Mind Maps",
        "Yakeen Study Material",
        "NCERT Punch",
      ],
    },
  ],

  // Column 2 ────────────────────────────────────────────────────────────────
  [
    {
      containerClass: "space-y-3 pt-10",
      links: [
        "CA/Finance Books",
        "UPPSC Books",
        "NEET PG Books",
        "BPSC Books",
        "SSC Books",
        "MPSC Books",
        "MPPSC Books",
        "Teaching Books",
      ],
    },
    {
      containerClass: "pt-6",
      links: [
        "UPSC Sampoorna",
        "PW Stationery",
        "PW Merchandise",
        "PW Device Courses",
      ],
    },
  ],

  // Column 3 ────────────────────────────────────────────────────────────────
  [
    {
      title: "Notes (Class 10-12)",
      links: [
        "Class 10 Math's Notes",
        "Class 10 Chemistry Notes",
        "Class 10 Physics Notes",
        "Class 10 Biology Notes",
        "Aptitude & Reasoning",
        "Class 10 Geography",
        "Physics Class 11 Notes",
        "Class 11 Chemistry Notes",
        "Maths Notes Class 11",
        "Zoology Class 11",
      ],
    },
    {
      title: "Notes (Class 6-9)",
      containerClass: "pt-6",
      links: [
        "Class-6 Theory & Notes",
        "Math's Notes for class 7",
        "Science Notes for class 7",
        "Class 8 Math Notes",
        "Class 8 Chemistry Notes",
      ],
    },
  ],

  // Column 4 ────────────────────────────────────────────────────────────────
  [
    {
      containerClass: "space-y-3 pt-10",
      links: [
        "Class 11 Botany Notes",
        "Physics Class 12 notes",
        "Chemistry Class 12",
        "Maths Notes Class 12",
        "Zoology class 12",
        "Class 12th Botany Notes",
      ],
    },
    {
      containerClass: "pt-6",
      links: ["Class 9 Chemistry Notes", "Class 9 Biology Notes"],
    },
  ],
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function LearningResource({
  resources = defaultResources,
}: LearningResourceProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Free Learning Resources
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {resources.map((column, colIdx) => (
            <div key={colIdx} className="space-y-6">
              {column.map((section, secIdx) => (
                <div key={secIdx} className={section.containerClass ?? ""}>
                  {section.title && (
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                      {section.title}
                    </h2>
                  )}

                  {/* If there’s a title, wrap links with the original `space-y-3` div.
                      Otherwise render links directly (as in the original markup). */}
                  {section.title ? (
                    <div className="space-y-3">
                      {section.links.map((label, linkIdx) => (
                        <Link
                          key={linkIdx}
                          href="#"
                          className="block text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    section.links.map((label, linkIdx) => (
                      <Link
                        key={linkIdx}
                        href="#"
                        className="block text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {label}
                      </Link>
                    ))
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}