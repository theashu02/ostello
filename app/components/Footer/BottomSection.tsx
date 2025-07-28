import Link from "next/link"

export default function BottomSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Gate Exam Coaching */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Gate Exam Coaching</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Civil Engineering Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Mechanical Engineering Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  CS & IT Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  ECE Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  EE Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Formulas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Formulas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Science formulas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Chemistry formulas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Physics formulas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Math's Formulas
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Exams */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Exams</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  CA Exam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Company Secretary Exam
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  PWSAT Exam
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* About Sections */}
        <div className="space-y-8">
          {/* Know about Physics Wallah */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Know about Physics Wallah</h3>
            <p className="text-gray-600 leading-relaxed">
              Physics Wallah is an Indian edtech platform that provides accessible & comprehensive learning experiences
              to students from Class 6th to postgraduate level. We also provide extensive NCERT solutions, sample paper,
              NEET, JEE Mains, BITSAT previous year papers & more such resources to students. We also provide extensive
              NCERT solutions, sample papers, NEET, JEE Mains, BITSAT previous year papers, which makes Physics Wallah
              also caters to over 3.5 million registered students and over 78 lakh+ Youtube subscribers with 4.8 rating
              on its app.
            </p>
          </div>

          {/* We Stand Out because */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">We Stand Out because</h3>
            <p className="text-gray-600 leading-relaxed">
              We provide students with intensive courses with India's qualified & experienced faculties & mentors. PW
              strives to make the learning experience comprehensive and accessible for students of all sections of
              society. We believe in empowering every single student who couldn't dream of a good career in engineering
              and medical field earlier.
            </p>
          </div>

          {/* Our Key Focus Areas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Key Focus Areas</h3>
            <p className="text-gray-600 leading-relaxed">
              Physics Wallah's main focus is to create accessible learning experiences for students all over India. With
              courses like Lakshya, Udaan, Arjuna & many others, we have been able to provide a ready solution for lakhs
              of aspirants. From providing Chemistry, Maths, Physics formulae to giving e-books of eminent authors, PW
              aims to provide reliable solutions for student prep
            </p>
          </div>

          {/* What Makes Us Different */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">What Makes Us Different</h3>
            <p className="text-gray-600 leading-relaxed">
              Physics Wallah strives to develop a comprehensive pedagogical structure for students, where they get a
              state-of-the-art learning experience with study material and resources. Apart from catering students
              preparing for JEE Mains and NEET, PW also provides study material for each state board like Uttar Pradesh,
              Bihar, and others
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms of use
            </Link>
          </div>
          <p className="text-gray-600">Copyright © 2025 Physicswallah Limited All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
