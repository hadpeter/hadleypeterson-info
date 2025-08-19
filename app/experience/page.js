import Link from "next/link";
import PageTitleComponet from "../components/pageTitle.js";

// Update this list to add/remove roles (ordered most-recent → oldest)
const EXPERIENCES = [
  {
    company: "Capital One",
    role: "Principal Associate – Senior Software Engineer",
    logo: "/Capital_one.png",
    href: "/experience/capital_one",
    date: "Aug 2024 – Present",
    blurb: "Leading search engine optimization and platform improvements across teams.",
  },
  {
    company: "Capital One",
    role: "Senior Associate Software Engineer",
    logo: "/Capital_one.png",
    href: "/experience/capital_one",
    date: "Aug 2023 – Aug 2024",
    blurb: "Delivered hybrid search upgrades and data pipeline optimizations.",
  },
  {
    company: "Capital One",
    role: "Associate Software Engineer",
    logo: "/Capital_one.png",
    href: "/experience/capital_one",
    date: "Aug 2022 – Aug 2023",
    blurb: "Worked on ML infrastructure and compute optimization for model deployment.",
  },
  {
    company: "Clocktower Tech Ventures",
    role: "Technology Consultant",
    logo: "/clocktower.jpeg",
    href: "/experience/clocktower",
    date: "May 2021 - Jul 2021",
    blurb: "Advised portfolio companies on technical strategy and architecture.",
    scale: "small",
  },
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    logo: "/Capital_one.png",
    href: "/experience/capital_one",
    date: "Jun 2020 - Aug 2020",
    blurb: "Designed and built APIs with low latency and high reliability.",
  },
  {
    company: "Quicken Loans",
    role: "Software Engineer Intern",
    logo: "/Quicken_loans.png",
    href: "/experience/quicken_loans",
    date: "Jun 2019 - Aug 2019",
    blurb: "Built scalable backend systems and APIs as part of engineering internship.",
  },
  {
    company: "Tappan Hill Ventures",
    role: "Investment Intern",
    logo: "/Tappan_hill.png",
    href: "/experience/tappan_hill",
    date: "Feb 2019 - Feb 2020",
    blurb: "Supported investment diligence and startup portfolio analysis.",
    scale: "small",
  },
];

function Timeline() {
  return (
    <div className="relative w-full">
      {/* Scroll container for small screens */}
      <div className="overflow-x-auto">
        {/* Inner track */}
        <div className="relative min-w-[1000px] md:min-w-0 md:w-full h-96 px-8">
          {/* Horizontal line */}
          <div className="absolute left-8 right-8 top-1/2 h-1 bg-neutral-300" aria-hidden="true" />

          {/* Items laid out evenly */}
          <div className="relative h-full w-full flex items-center justify-between">
            {EXPERIENCES.map((item, idx) => {
              const circleSize = "w-36 h-36";
              const imgSize = item.scale === "small" ? "w-20 h-20" : "w-24 h-24";

              return (
                <Link key={`${item.company}-${idx}`} href={item.href} className="group">
                  <div className="relative flex flex-col items-center text-center justify-between h-full">
                    {/* Date above the circle */}
                    <div className="mb-3 text-xs text-neutral-600 whitespace-nowrap">{item.date}</div>

                    {/* Node with logo */}
                    <div className={`z-10 ${circleSize} rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center shadow-sm group-hover:shadow-md transition-transform`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.logo}
                        alt={`${item.company} logo`}
                        className={`${imgSize} object-contain`}
                      />
                    </div>

                    {/* Caption below the circle (add flex padding to keep alignment consistent) */}
                    <div className="mt-4 max-w-[14rem] flex flex-col justify-start">
                      <div className="text-sm font-semibold leading-snug">
                        {item.role}
                      </div>
                      <div className="text-xs text-neutral-500">{item.company}</div>
                      {item.blurb && (
                        <div className="mt-2 text-xs text-neutral-600 leading-snug min-h-[3rem]">
                          {item.blurb}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <div className="min-h-screen mt-4">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-10 md:mb-12">
        <PageTitleComponet title="Experiences" />
      </section>

      <div className="mx-4 md:mx-8">
        <Timeline />
      </div>

      {/* Optional: a compact legend for accessibility */}
      <div className="sr-only" aria-hidden="false">
        {EXPERIENCES.map((e, i) => (
          <div key={i}>{`${i + 1}. ${e.role} at ${e.company} (${e.date}) – ${e.blurb}`}</div>
        ))}
      </div>
    </div>
  );
}
