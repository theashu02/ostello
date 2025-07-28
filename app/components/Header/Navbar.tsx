"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const navItems = ["Vidyapeeth", "Upskilling", "PW Store", "Test Series", "Class 1st - 8th", "Power Batch"]

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">PW</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-6">
            {/* All Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white border-gray-300 text-blue-600 hover:bg-blue-50 font-medium"
                >
                  All Courses
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>NEET Courses</DropdownMenuItem>
                <DropdownMenuItem>JEE Courses</DropdownMenuItem>
                <DropdownMenuItem>Class 9-10</DropdownMenuItem>
                <DropdownMenuItem>Class 11-12</DropdownMenuItem>
                <DropdownMenuItem>Foundation Courses</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other Navigation Items */}
            {navItems.map((item) => (
              <button
                key={item}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Login/Register Button */}
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6">Login/Register</Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu (hidden by default) */}
      <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 hidden">
        <div className="flex flex-col gap-3">
          <Button variant="outline" className="justify-start bg-white border-gray-300 text-blue-600">
            All Courses
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>

          {navItems.map((item) => (
            <button
              key={item}
              className="text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
