import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Home, ChevronRight, BookOpen, PenTool, Book } from "lucide-react"

export default function NEETHero() {
  const featureCards = [
    {
      title: "Blogs",
      subtitle: "Read Our Latest Blogs",
      icon: <BookOpen className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      title: "Online Courses",
      subtitle: "Access Our Latest Courses",
      icon: <Book className="w-8 h-8" />,
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      title: "Test Series",
      subtitle: "Practice with Our Mock Test",
      icon: <PenTool className="w-8 h-8" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Books",
      subtitle: "Find NEET Books",
      icon: <Book className="w-8 h-8" />,
      bgColor: "bg-red-100",
      textColor: "text-red-700",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">RT</span>
                </div>
                <span className="text-white font-semibold">REAL TEST</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">REAL TEST SERIES - 2026</h1>
                <h2 className="text-xl md:text-2xl font-bold">REGISTRATIONS OPEN NOW!</h2>
                <div className="space-y-2">
                  <p className="text-yellow-300 font-medium">For NEET Aspirants</p>
                  <p className="text-white">REAL exam simulation like never before!</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">OFFLINE Test Series Happening in 250+ Cities.</span>
              </div>
            </div>

            {/* Right Content - Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Class 11th Card */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="mb-3">
                    <Badge className="bg-blue-600 text-white mb-2">Class : 11th</Badge>
                    <p className="text-xs text-gray-600">For just as low as</p>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">₹3,999/-</span>
                      <span className="text-sm text-gray-400 line-through">₹5,999/-</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-4">NEET - Total 17 Tests</p>
                </CardContent>
              </Card>

              {/* Class 12th & Dropper Card */}
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="mb-3">
                    <Badge className="bg-purple-600 text-white mb-2">Class : 12th & Dropper</Badge>
                    <p className="text-xs text-gray-600">For just as low as</p>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold text-purple-600">₹5,499/-</span>
                      <span className="text-sm text-gray-400 line-through">₹7,999/-</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-4">NEET - Total 23 Tests</p>
                  <p className="text-xs text-gray-500">(With 2024 Rankers Booklet)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600">NEET</span>
          </div>

          {/* Main Heading and Description */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              NEET 2026: Syllabus, Exam Pattern, Eligibility, and Courses
            </h1>
            <p className="text-gray-700 leading-relaxed max-w-4xl">
              Preparing for the NEET 2026 exam is a crucial step for students aiming to pursue a career in the medical
              field. This national-level exam demands focused preparation and smart planning. With proper guidance,
              online courses, study resources, and a clear understanding of the syllabus and pattern, students can move
              forward confidently. Here, we provide a detailed overview of NEET UG 2026, including eligibility,
              syllabus, exam pattern, and preparation tips.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className={`${card.bgColor} border-none cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${card.textColor} mb-4 flex justify-center`}>{card.icon}</div>
                  <h3 className={`font-bold text-lg ${card.textColor} mb-2`}>{card.title}</h3>
                  <p className={`text-sm ${card.textColor} opacity-80`}>{card.subtitle}</p>
                  <ChevronRight className={`w-5 h-5 ${card.textColor} mx-auto mt-3`} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}