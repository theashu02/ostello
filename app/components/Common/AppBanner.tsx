'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

/* ------------------------------------------------------------------ */
/* data – easy to localise / customise                                */
/* ------------------------------------------------------------------ */

const bullets = [
  "Live & recorded classes available at ease",
  "Dashboard for progress tracking",
  "Millions of practice questions at your fingertips",
]

const playStore =
  "https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala"
const appStore =
  "https://apps.apple.com/in/app/physics-wallah/id1641443555"

/* ------------------------------------------------------------------ */
/* component                                                          */
/* ------------------------------------------------------------------ */

export default function AppBanner() {
  return (
    <Card className="relative flex flex-col overflow-hidden lg:flex-row">
      {/* ------------- left content ----------------------------------- */}
      <div className="order-2 w-full p-6 lg:order-1 lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Join 15&nbsp;Million students on the app today!
        </h2>

        <ul className="space-y-3">
          {bullets.map((text) => (
            <li key={text} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-gray-800">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* download buttons */}
        <div className="mt-8 flex gap-6">
          <Button asChild variant="outline" className="p-0">
            <a href={playStore} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ee36726f-003b-4f1e-bff5-5d50f1b49bcc.171251c3"
                alt="Get it on Google Play"
                width={162}
                height={48}
                className="h-12 w-[162px]"
              />
            </a>
          </Button>

          <Button asChild variant="outline" className="p-0">
            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <Image
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/86c4510f-8a0a-4ccd-9e45-03fd7923ec32.acb101ce"
                alt="Download on the App Store"
                width={162}
                height={48}
                className="h-12 w-[162px]"
              />
            </a>
          </Button>
        </div>
      </div>

      {/* ------------- right/illustration ----------------------------- */}
      <div className="order-1 flex w-full items-center justify-center bg-gradient-to-tr from-indigo-50 to-purple-50 p-6 lg:order-2 lg:w-1/2">
        <Image
          src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ce321341-5646-4a21-a59f-cf4087dd2f97.aaca3c09"
          alt="Students illustration"
          width={300}
          height={300}
          className="h-auto max-w-xs lg:max-w-md"
        />
      </div>
    </Card>
  )
}