import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NEETOverview() {
  const examHighlights = [
    { particular: "Exam Name", detail: "NEET UG 2026" },
    { particular: "Conducting Body", detail: "National Testing Agency (NTA)" },
    { particular: "Exam Level", detail: "National-level" },
    { particular: "Exam Mode", detail: "Offline (Pen and Paper)" },
    { particular: "Courses Offered", detail: "MBBS, BDS, AYUSH, B.V.Sc, BSc Nursing" },
    { particular: "Subjects", detail: "Physics, Chemistry, Biology (Botany + Zoology)" },
    { particular: "Total Questions", detail: "180" },
    { particular: "Total Marks", detail: "720" },
    { particular: "Exam Duration", detail: "3 hours" },
    { particular: "Marking Scheme", detail: "+4 for correct, -1 for incorrect" },
    { particular: "Exam Frequency", detail: "Once a year" },
    { particular: "Official Website", detail: "The official NEET 2026 website has not been announced yet." },
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* NEET Exam 2026 Overview Section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">NEET Exam 2026 Overview</h2>

          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The National Eligibility cum Entrance Test (NEET) 2026 is a national-level entrance exam conducted by the
              National Testing Agency (NTA) for admission to undergraduate medical, dental, and AYUSH courses like MBBS,
              BDS, BAMS, BHMS, etc. It is mandatory for students who wish to take admission in government and private
              medical colleges across India. The NEET exam is held once a year in offline (pen-and-paper) mode and
              includes questions from Physics, Chemistry, and Biology based on the Class 11 and 12 NCERT syllabus. The
              NEET 2026 exam will be conducted in May 2026, and candidates must qualify it to participate in All India
              Quota (AIQ) and State Quota counselling rounds.
            </p>
          </div>
        </div>

        {/* NEET Exam 2026 Highlights Table */}
        <Card className="mb-8">
          <CardHeader className="bg-blue-100 border-b">
            <CardTitle className="text-xl md:text-2xl font-bold text-center text-gray-900">
              NEET Exam 2026 Highlights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-50 border-b">
                    <th className="text-left p-4 font-semibold text-gray-900 border-r">Particulars</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {examHighlights.map((item, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="p-4 font-medium text-gray-900 border-r bg-gray-50">{item.particular}</td>
                      <td className="p-4 text-gray-700">{item.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 p-4">
              {examHighlights.map((item, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.particular}</h3>
                      <p className="text-gray-700 text-sm">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* NEET 2026 Syllabus Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">NEET 2026 Syllabus</h2>
        </div>
      </div>
    </div>
  )
}
