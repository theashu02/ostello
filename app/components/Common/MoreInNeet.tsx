import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MoreInNEET() {
  const neetFeatures = [
    {
      title: "PW AI GURU",
      icon: "🤖",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      title: "PW NCERT App",
      icon: "📚",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
    {
      title: "NEET Mentorship",
      icon: "👨‍🏫",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      title: "NEET Power Batch",
      icon: "⚡",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* More in NEET Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">More in NEET</h2>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {neetFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`${feature.bgColor} border-none cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-105`}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <span className={`font-semibold ${feature.textColor}`}>{feature.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${feature.textColor}`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* NEET Exam 2026 Overview Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">NEET Exam 2026 Overview</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              The National Eligibility cum Entrance Test (NEET) 2026 is a national-level entrance exam conducted by the
              National Testing Agency (NTA) for admission to undergraduate medical, dental, and AYUSH courses like MBBS,
              BDS, BAMS, BHMS, etc. It is mandatory for students who wish to take admission in government and private
              medical colleges across India. The NEET exam is held once a year in offline pen-and-paper mode and covers
              subjects like Physics, Chemistry, and Biology based on the{" "}
              <span className="text-blue-600 font-medium">Class 11 and 12 NCERT syllabus</span>. The NEET 2026 exam will
              be conducted in May 2026, and candidates must qualify it to participate in All India Quota (AIQ) and State
              Quota counselling rounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}