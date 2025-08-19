import PageTitleComponet from "../components/pageTitle.js";

// Update this list to add/remove roles (ordered most-recent → oldest)
const EXPERIENCES = [
  {
    company: "Capital One",
    role: "Principal Associate Senior Software Engineer",
    logo: "/Capital_one.png",
    date: "Aug 2024 – Present",
    blurb: "Leading cross-functional differentiated search experiences and LLM powered suggestions",
  },
  {
    company: "Capital One",
    role: "Senior Associate Software Engineer",
    logo: "/Capital_one.png",
    date: "Aug 2023 – Aug 2024",
    blurb: "Designed search experimentation framework and pitched hybrid search solution",
  },
  {
    company: "Capital One",
    role: "Associate Software Engineer",
    logo: "/Capital_one.png",
    date: "Aug 2022 – Aug 2023",
    blurb: "Pitched and piloted optimized machine learning orchestrator solution",
  },
  {
    company: "Clocktower Technology Ventures",
    role: "Technology Consultant",
    logo: "/clocktower.jpeg",
    date: "May 2021 - Jul 2021",
    blurb: "Built Tableau dashboards to track portfolio company metrics",
    scale: "small",
  },
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    logo: "/Capital_one.png",
    date: "Jun 2020 - Aug 2020",
    blurb: "Designed product to support fraud agents in converting virtual credit cards",
  },
  {
    company: "Quicken Loans",
    role: "Software Engineer Intern",
    logo: "/Quicken_loans.png",
    date: "Jun 2019 - Aug 2019",
    blurb: "Led agile delivery team to create unified UI experience with data analytics",
  },
  {
    company: "Tappan Hill Ventures",
    role: "Investment Intern",
    logo: "/Tappan_hill.png",
    date: "Feb 2019 - Feb 2020",
    blurb: "Supported investment diligence and startup portfolio analysis",
    scale: "small",
  },
];

function Timeline() {
  return (
    <div className="relative w-full">
      {/* Horizontal timeline for medium+ screens */}
      <div className="hidden md:block overflow-x-auto">
        <div className="relative min-w-[1000px] md:min-w-0 md:w-full h-96 px-8">
          {/* Horizontal line moved to center of circles */}
          <div className="absolute left-8 right-8 top-[calc(50%-4.5rem)] h-1 bg-neutral-300 z-0" aria-hidden="true" />

          <div className="relative h-full w-full flex items-start justify-between">
            {EXPERIENCES.map((item, idx) => {
              const circleSize = "w-36 h-36";
              const imgSize = item.scale === "small" ? "w-20 h-20" : "w-24 h-24";
              const isOlder = idx >= 3;

              return (
                <div key={`${item.company}-${idx}`} className="relative flex flex-col items-center text-center h-full z-10">
                  <div className="mb-2 text-xs text-neutral-600 whitespace-nowrap">{item.date}</div>
                  <div className={`z-10 ${circleSize} rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center shadow-sm`}> 
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className={`${imgSize} object-contain`}
                    />
                  </div>
                  <div className="mt-4 max-w-[14rem] flex flex-col justify-start px-4 text-left">
                    <div className="text-sm font-semibold leading-snug">{item.role}</div>
                    <div className="text-xs text-neutral-500">{item.company}</div>
                    {item.blurb && (
                      <div className={`text-xs text-neutral-600 leading-snug ${isOlder ? "mt-4" : "mt-2"}`}>{item.blurb}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vertical timeline for small screens */}
      <div className="block md:hidden px-6">
        <div className="relative border-l-2 border-neutral-300 ml-6">
          {EXPERIENCES.map((item, idx) => {
            const imgSize = item.scale === "small" ? "w-16 h-16" : "w-20 h-20";
            const isOlder = idx >= 3;

            return (
              <div key={`${item.company}-${idx}`} className="mb-10 ml-4 flex flex-col">
                <div className="text-xs text-neutral-600 mb-2">{item.date}</div>
                <div className="flex items-start">
                  <div className="w-28 h-28 rounded-full bg-white ring-2 ring-neutral-300 flex items-center justify-center shadow-sm">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className={`${imgSize} object-contain`}
                    />
                  </div>
                  <div className="ml-4 text-left">
                    <div className="text-sm font-semibold">{item.role}</div>
                    <div className="text-xs text-neutral-500">{item.company}</div>
                    {item.blurb && (
                      <div className={`text-xs text-neutral-600 leading-snug ${isOlder ? "mt-4" : "mt-2"}`}>{item.blurb}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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

      <div className="sr-only" aria-hidden="false">
        {EXPERIENCES.map((e, i) => (
          <div key={i}>{`${i + 1}. ${e.role} at ${e.company} (${e.date}) – ${e.blurb}`}</div>
        ))}
      </div>
    </div>
  );
}
