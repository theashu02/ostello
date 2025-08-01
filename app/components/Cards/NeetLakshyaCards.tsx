"use client";
import Link from "next/link";

type Tone = "warning" | "neutral";

interface Badge {
  text: string;
  tone: Tone;
}

interface BatchCardData {
  id: string;
  variant: "box" | "banner";
  name: string;
  image: string;
  tagImage?: string;
  badges?: Badge[];
  waShare?: string;
  audience: string;
  start: string;
  end: string;
  features?: string;
  price: string;
  strikePrice?: string;
  discount?: string;
  exploreUrl: string;
  buyUrl?: string;
  lang?: string;
  langColor?: string;
  // cardType?: string;
}

// ... existing code ...
const batches: BatchCardData[] = [
  {
    id: 'lakshya-3',
    variant: 'box',                    
    name: 'Lakshya NEET 3.0 2026',
    tagImage:
      'https://static.pw.live/images/onlineTag_20241022124328.webp',
    image:
      'https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/8d2545ae-6508-47da-9456-cce4c6a5a7b3.jpg',
    badges: [                    
      { text: 'NEW', tone: 'warning' },
      { text: 'Hinglish', tone: 'neutral' },
    ],
    waShare:                       
      'https://wa.me/?text=Check%20out%20this%20link%3A%20https%3A%2F%2Fwww.pw.live%2Fneet%2Fclass-12%2Fbatches%2Flakshya-neet-3-0-2026-947721',
    audience: 'For NEET Aspirants',
    start: '11 Aug, 2025',
    end: '30 Jun, 2026',
    features: 'course duration & lectures - TBA',
    price: '₹4,299',
    strikePrice: '₹5,000',             
    discount: 'Discount of 14% applied',
    exploreUrl: '/neet/class-12/batches/lakshya-neet-3-0-2026-947721',
    buyUrl: '#',
  },
  {
    id: 'lakshya-hindi-2',
    variant: 'box',
    name: 'Lakshya NEET Hindi 2.0 2026',
    tagImage:
      'https://static.pw.live/images/onlineTag_20241022124328.webp',
    image:
      'https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/8018a0ae-2116-4df5-88a1-5c1639a4b7a7.jpg',
    badges: [
      { text: 'NEW', tone: 'warning' },
      { text: 'Hindi', tone: 'neutral' },
    ],
    waShare:
      'https://wa.me/?text=Check%20out%20this%20link%3A%20https%3A%2F%2Fwww.pw.live%2Fneet%2Fclass-12%2Fbatches%2Flakshya-neet-hindi-2-0-2026-775610',
    audience: 'For NEET Aspirants only',
    start: '21 Jul, 2025',
    end: '30 Jun, 2026',
    features: 'course duration & lectures – TBA',
    price: '₹2,499',
    strikePrice: '₹4,800',
    discount: 'Discount of 48% applied',
    exploreUrl:
      '/neet/class-12/batches/lakshya-neet-hindi-2-0-2026-775610',
    buyUrl: '#',
  },
  {
    id: 'power-batch',
    variant: 'box',           
    name: 'Lakshya - Power Batch (NEET 2026)',
    image:
      'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/c8b9f472-4e4f-40ea-a316-7580ecedccbf.jpg',
    exploreUrl:
      '/neet/class-12/batches/lakshya-power-batch-neet-2026--n1231eb--587299',
    buyUrl: '#',
    lang: 'Hinglish',
    langColor: '#FB6514',
    audience: '',
    start: '',
    end: '',
    price: '',
  },
]

const toneClasses: Record<Tone, string> = {
  warning: "bg-yellow-100 text-yellow-900",
  neutral: "bg-gray-100 text-gray-900",
};

export default function NeetLakshyaCards() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-3 pt-4 md:grid-cols-2 lg:grid-cols-3">
      {batches.map((b) =>
        b.variant === "banner" ? (
          <Banner key={b.id} data={b} />
        ) : (
          <BoxCard key={b.id} data={b} />
        )
      )}
    </div>
  );
}

function BoxCard({ data: b }: { data: BatchCardData }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow p-3">
      {b.tagImage && (
        <img
          src={b.tagImage}
          alt="online"
          className="absolute left-2 top-2 w-16 rounded-xl"
        />
      )}
      <img
        src={b.image}
        alt={b.name}
        className="h-48 w-full object-cover rounded-xl"
      />

      <div className="flex-1 pb-4">
        {/* title + badges + WA share */}
        <div className="mt-4 flex items-start gap-2">
          <h4 className="text-lg font-semibold">{b.name}</h4>
          {b.badges?.map((bd) => (
            <span
              key={bd.text}
              className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                toneClasses[bd.tone]
              }`}
            >
              {bd.text}
            </span>
          ))}
          {b.waShare && (
            <Link href={b.waShare} target="_blank" className="ml-auto">
              <img
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/cac77a2f-7e6f-464f-ac8b-81059f83e42d.fc62406e"
                alt="share"
                className="w-6"
              />
            </Link>
          )}
        </div>

        {/* audience + dates */}
        <p className="mt-3 mb-2 text-xs text-gray-800">{b.audience}</p>
        <div className="flex gap-2">
          <p className="text-xs text-gray-600">
            Starts on{" "}
            <span className="font-medium text-gray-800">{b.start}</span>
          </p>
          <p className="text-xs text-gray-600">
            Ends on <span className="font-medium text-gray-800">{b.end}</span>
          </p>
        </div>
      </div>

      {/* decorative strip */}
      <img
        src="https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/dd885f40-9bbc-4c2e-b58e-bc3398699e85.png"
        alt=""
        className="h-8 w-full"
      />

      {/* price */}
      <div className="space-y-2 bg-white">
        <div className="flex items-baseline justify-around gap-2">
          <span className="text-xl font-bold">{b.price}</span>
          {b.strikePrice && (
            <span className="text-sm text-gray-500 line-through">
              {b.strikePrice}
            </span>
          )}
          {b.discount && (
            <div className="flex items-center gap-2 rounded bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
              <TagIcon className="h-4 w-4 fill-green-700" />
              {b.discount}
            </div>
          )}
        </div>
        <p className="text-xs text-gray-500 uppercase">(For full batch)</p>

        {/* buttons */}
        <div className="mt-1 flex gap-3">
          <Link
            href={b.exploreUrl}
            className="flex-1 rounded border border-indigo-600 py-2 text-center text-indigo-600 transition hover:bg-indigo-50"
          >
            EXPLORE
          </Link>
          {b.buyUrl && (
            <Link
              href={b.buyUrl}
              className="flex-1 rounded bg-indigo-600 py-2 text-center text-white transition hover:bg-indigo-700"
            >
              BUY NOW
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function Banner({ data: b }: { data: BatchCardData }) {
  return (
    <div className="relative col-span-full overflow-hidden rounded-lg shadow">
      {/* ribbon */}
      {b.lang && (
        <div
          className="absolute left-0 top-1/2 flex -translate-y-1/2 select-none"
          style={{ "--clr": b.langColor } as any}
        >
          <svg
            width="15"
            height="27"
            viewBox="0 0 15 27"
            className="fill-[color:var(--clr)]"
          >
            <path d="M0 0h15v26H13.9c-3.5 0-6.6-2.3-7.7-5.7L0 0Z" />
          </svg>
          <span
            className="bg-[color:var(--clr)] px-3 text-sm font-semibold text-white"
            style={{ lineHeight: "27px" }}
          >
            {b.lang}
          </span>
          <svg
            width="15"
            height="27"
            viewBox="0 0 15 27"
            className="fill-[color:var(--clr)]"
          >
            <path d="M15 0H0v26h1.1c3.5 0 6.6-2.3 7.7-5.7L15 0Z" />
          </svg>
        </div>
      )}

      <img src={b.image} alt={b.name} className="h-64 w-full object-cover" />

      <div className="flex gap-4 bg-white p-4">
        <Link
          href={b.exploreUrl}
          className="flex-1 rounded bg-indigo-50 py-2 text-center font-semibold text-indigo-600 hover:bg-indigo-100"
        >
          Explore Now
        </Link>
        {b.buyUrl && (
          <Link
            href={b.buyUrl}
            className="flex-1 rounded bg-indigo-600 py-2 text-center font-semibold text-white hover:bg-indigo-700"
          >
            Buy Now
          </Link>
        )}
      </div>
    </div>
  );
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 21" fill="none" {...props}>
      <path
        d="M5.5 3.5A2.5 2.5 0 0 0 3 6v2.88a2.5 2.5 0 0 0 .732 1.768l6.5 6.5a2.5 2.5 0 0 0 3.536 0l2.879-2.88a2.5 2.5 0 0 0 0-3.536l-6.5-6.5A2.5 2.5 0 0 0 8.379 3.5H5.5Z"
        stroke="currentColor"
        strokeWidth={1.2}
        fill="currentColor"
        fillOpacity={0.1}
      />
      <circle cx={6} cy={6.5} r={1} fill="currentColor" />
    </svg>
  );
}