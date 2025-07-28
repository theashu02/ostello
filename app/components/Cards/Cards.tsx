import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MessageCircle, Phone } from "lucide-react";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Arjuna NEET 3.0 2026 Course */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-blue-600 text-white">ONLINE</Badge>
        </div>
        <CardHeader className="p-0">
          <div className="relative h-48 bg-gradient-to-r from-blue-400 to-cyan-400">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Arjuna NEET 3.0 2026 Course"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/20" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">ARJUNA NEET 3.0 2026</h2>
              <p className="text-sm">For Class 11</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">Arjuna NEET 3.0 2026</h3>
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              NEW
            </Badge>
            <Badge variant="outline">Hinglish</Badge>
            <MessageCircle className="w-4 h-4 text-green-600" />
          </div>

          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>For Neet Aspirants</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Starts on 14 Jul, 2025 Ends on 30 Jun, 2027</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg mb-4">
            <p className="text-sm font-medium text-yellow-800">
              More plans inside
            </p>
            <div className="flex gap-2 mt-2">
              <Badge className="bg-yellow-500 text-white text-xs">
                ⭐ Infinity Pro
              </Badge>
              <Badge className="bg-green-500 text-white text-xs">
                ♾️ Infinity
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-blue-600">₹4,299</span>
            <span className="text-lg text-gray-400 line-through">₹5,000</span>
          </div>
          <p className="text-xs text-gray-500 mb-2">(FOR FULL BATCH)</p>
          <div className="flex items-center gap-1 text-green-600 text-sm">
            <span>✓ Discount of 14% applied</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent">
            EXPLORE
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            BUY NOW
          </Button>
        </CardFooter>
      </Card>

      {/* Arjuna NEET Hindi 2.0 2026 Course */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-blue-600 text-white">ONLINE</Badge>
        </div>
        <CardHeader className="p-0">
          <div className="relative h-48 bg-gradient-to-r from-red-500 to-red-600">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Arjuna NEET Hindi 2.0 2026 Course"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-red-600/20" />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">ARJUNA NEET HINDI 2.0 2026</h2>
              <p className="text-sm">For Class 11</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold">
              Arjuna NEET Hindi 2.0 2026
            </h3>
            <Badge
              variant="secondary"
              className="bg-yellow-100 text-yellow-800"
            >
              NEW
            </Badge>
            <Badge variant="outline">Hindi</Badge>
            <MessageCircle className="w-4 h-4 text-green-600" />
          </div>

          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>For NEET Aspirants only</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Starts on 22 Jul, 2025 Ends on 30 Jun, 2027</span>
            </div>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg mb-4">
            <p className="text-sm font-medium text-yellow-800">
              More plans inside
            </p>
            <div className="flex gap-2 mt-2">
              <Badge className="bg-yellow-500 text-white text-xs">
                ⭐ Infinity Pro
              </Badge>
              <Badge className="bg-green-500 text-white text-xs">
                ♾️ Infinity
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-blue-600">₹2,499</span>
            <span className="text-lg text-gray-400 line-through">₹4,800</span>
          </div>
          <p className="text-xs text-gray-500 mb-2">(FOR FULL BATCH)</p>
          <div className="flex items-center gap-1 text-green-600 text-sm">
            <span>✓ Discount of 48% applied</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button variant="outline" className="flex-1 bg-transparent">
            EXPLORE
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            BUY NOW
          </Button>
        </CardFooter>
      </Card>

      {/* Arjuna Power Batch Promotional Banner */}
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white lg:row-span-1">
        <div className="absolute top-4 right-4">
          <Badge className="bg-orange-500 text-white">Hinglish</Badge>
        </div>

        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">PB</span>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                Experience Classroom like learning at home with
              </p>
              <h2 className="text-xl font-bold text-yellow-400">
                ARJUNA POWER BATCH
              </h2>
              <p className="text-xs text-gray-400">NEET 2027 | FOR CLASS 11</p>
            </div>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black text-xs">👥</span>
              </div>
              <div>
                <p className="font-medium">Small Classroom Size</p>
                <p className="text-gray-400 text-xs">Limited Students</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black text-xs">🎯</span>
              </div>
              <div>
                <p className="font-medium">One to One live Doubt Solving</p>
                <p className="text-gray-400 text-xs">24/7 Support</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-black text-xs">📱</span>
              </div>
              <div>
                <p className="font-medium">Interactive Live Learning</p>
                <p className="text-gray-400 text-xs">Engaging Sessions</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-orange-400 text-sm mb-1">Book your seat at</p>
              <p className="text-3xl font-bold text-orange-400">₹5,000/-</p>

              <div className="mt-4">
                <p className="text-sm text-gray-300 mb-1">Call us</p>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-lg font-bold text-orange-400">
                    9513392724
                  </span>
                </div>
              </div>
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-400">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Instructor"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button
              variant="outline"
              className="flex-1 text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              Explore Now
            </Button>
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold">
              REGISTER NOW!
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
