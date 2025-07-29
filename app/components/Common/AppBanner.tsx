"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const bullets = [
  "Live & recorded classes available at ease",
  "Dashboard for progress tracking",
  "Millions of practice questions at your fingertips",
];

const playStore =
  "https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala";
const appStore = "https://apps.apple.com/in/app/physics-wallah/id1641443555";

export default function AppBanner() {
  return (
    <Card
      className="relative mx-auto max-w-6xl flex flex-col overflow-hidden bg-gradient-to-tr from-indigo-50 to-purple-50 lg:flex-row mb-4"
    >
      <div className="flex flex-col gap-8 px-12 py-10 lg:w-3/4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1B2124]">
          Join 15&nbsp;Million students on the app today!
        </h2>

        {/* Bullet points */}
        <ul className="space-y-3">
          {bullets.map((text) => (
            <li key={text} className="flex items-start gap-2">
              <Check className="mt-0.5 h-5 w-5 text-primary" />
              <span className="text-base text-[#1B2124]">{text}</span>
            </li>
          ))}
        </ul>

        {/* Store buttons */}
        <div className="flex gap-6 items-center justify-center md:items-start md:justify-start">
          <Button
            asChild
            variant="outline"
            className="p-0 bg-[#f1f5fe] hover:bg-[#f1f5fe]/90 no-underline"
          >
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

          <Button
            asChild
            variant="outline"
            className="p-0 bg-[#f1f5fe] hover:bg-[#f1f5fe]/90 no-underline"
          >
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

      <div className="relative hidden lg:block lg:w-1/4">
        <Image
          src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/ce321341-5646-4a21-a59f-cf4087dd2f97.aaca3c09"
          alt="Banner Illustration"
          width={350}
          height={200}
          className="absolute bottom-0 right-0 pointer-events-none select-none h-auto w-[350px]"
        />
      </div>
    </Card>
  );
}
