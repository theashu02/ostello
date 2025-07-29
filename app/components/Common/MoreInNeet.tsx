"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

/* ------------------------------------------------------------------ */
/* DATA – one object per tile                                         */
/* ------------------------------------------------------------------ */
interface Tile {
  label: string;
  href: string;
  bg: string; // card colour
  iconBg: string; // behind icon
  iconShadow: string; // box-shadow for icon circle
  iconSrc: string;
}

const tiles: Tile[] = [
  {
    label: "PW AI GURU",
    href: "https://www.pw.live/study/ai-guru?utm_source=AI%20GURE&utm_medium=SEO%20AI%20GURU&utm_campaign=SEO",
    bg: "#E0EAFF",
    iconBg: "#EEF4FF",
    iconShadow: "rgba(97,114,243,0.20)",
    iconSrc:
      "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/330a1d60-bb02-4a5f-ab06-2e333ca374a3.webp",
  },
  {
    label: "PW NCERT App",
    href: "https://pwbooks-app.onelink.me/y2BH/x4ht3pcd",
    bg: "#FEE4E2",
    iconBg: "#FEF3F2",
    iconShadow: "rgba(227,27,77,0.20)",
    iconSrc:
      "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/7b8748e9-73e6-4778-892a-8299042d0f34.webp",
  },
  {
    label: "NEET Mentorship",
    href: "https://disha.pw.live/?utm_source=NEET+Mentorship+SEO&utm_medium=SEO+NEET&utm_campaign=SEO",
    bg: "#D3F8DF",
    iconBg: "#EDFCF2",
    iconShadow: "rgba(22,179,100,0.20)",
    iconSrc:
      "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9977ba36-fa56-44af-8004-bc58cc15352a.webp",
  },
  {
    label: "NEET Power Batch",
    href: "https://www.pw.live/power-batch?utm_source=NEET+Power+Batch&utm_medium=SEO+NEET+POwer+Batch+Banner&utm_campaign=SEO",
    bg: "#D1E9FF",
    iconBg: "#EFF8FF",
    iconShadow: "rgba(3,124,191,0.20)",
    iconSrc:
      "https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/41ac2087-445c-4067-93ee-1ae5374b2cf8.webp",
  },
];

/* ------------------------------------------------------------------ */
/* TILE                                                               */
/* ------------------------------------------------------------------ */
function TileCard1({ t }: { t: Tile }) {
  return (
    <Card
      className="flex cursor-pointer items-center justify-between py-4 px-2 transition hover:shadow-md"
      // style={{ backgroundColor: t.bg }}
    >
      <Link href={t.href} target="_blank">
        {/* <div className="flex items-center bg-amber-800"> */}
          <div className="flex items-center gap-2 bg-amber-600">
            <div
              className="flex bg-red-500 h-12 w-12 items-center justify-center rounded-full"
              style={{
                backgroundColor: t.iconBg,
                boxShadow: `0 4px 10px ${t.iconShadow}`,
              }}
            >
              <Image
                src={t.iconSrc}
                alt=""
                width={32}
                height={32}
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-base font-semibold text-gray-900">
              {t.label}
            </span>
          </div>
          <ArrowRight className="h-5 w-5 flex-none text-gray-800" />
        {/* </div> */}
      </Link>
    </Card>
  );
}

function TileCard({ t }: { t: Tile }) {
  return (
    <Card className="p-4 cursor-pointer transition shadow:md hover:shadow-lg duration-300 border border-transparent hover:border-gray-700" style={{ backgroundColor: t.bg }}>
      <Link
        href={t.href}
        target="_blank"
        className="flex items-center gap-3 transition hover:opacity-90"
      >
        {/* icon */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: t.iconBg,
            boxShadow: `0 4px 10px ${t.iconShadow}`,
          }}
        >
          <Image
            src={t.iconSrc}
            alt=""
            width={32}
            height={32}
            className="object-contain"
            unoptimized
          />
        </div>

        {/* label */}
        <span className="text-base font-bold text-gray-900">
          {t.label}
        </span>

        {/* arrow aligned to the far right */}
        <ArrowRight className="ml-auto h-5 w-5 text-gray-800" />
      </Link>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */
export default function MoreInNeet() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-3 py-4">
      <section className="container flex flex-col gap-6">
        <h2 className="text-[32px] font-bold text-gray-900 text-center">
          More in NEET
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <TileCard key={tile.label} t={tile} />
          ))}
        </div>
      </section>
    </div>
  );
}
