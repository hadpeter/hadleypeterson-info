'use client';
import { useState } from "react";
import PageTitleComponet from "../components/pageTitle.js";
import PageSubTitleComponet from "../components/pageSubTitle.js";
import DoubleListComponent from "../components/doubleList.js";


export default function Interests() {
  const [tab, setTab] = useState("reading");

  const readings = [
    {
      title: "Lean In",
      by: "Sheryl Sandberg"
    },
    {
      title: "Shoe Dog",
      by: "Phil Knight"
    },
    {
      title: "The Wires of War",
      by: "Jacob Helberg"
    },
    {
      title: "The Servant",
      by: "James C. Hunter"
    },
    {
      title: "Trust",
      by: "Hernan Diaz"
    },
    {
      title: "All the Light We Cannot See",
      by: "Anthony Doerr"
    },
    {
      title: "Midnight in the Garden of Good and Evil",
      by: "John Berendt"
    },
    {
      title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
      by: "David Grann"
    },
    {
      title: "You are Here",
      by: "Thich Nhat Hanh"
    },
    {
      title: "Pour Your Heart Into It",
      by: "Howard Schultz"
    },
    {
      title: "Blockchain Revolution",
      by: "Don Tapscott & Alex Tapscott"
    },
    {
      title: "The Changing World Order",
      by: "Ray Dalio"
    }
  ];

  const hobbies = [
    { name: "Yoga", summary: "200 hour certified yoga teacher with a passion for Vinyasa yoga", href: "https://yogi-hadley.vercel.app/" },
    { name: "Meditation", summary:"Long-time meditator, drawn to breathwork and manifestation" },
    { name: "Water Skiing", summary: "Slalom skiing enthusiast" },
    { name: "Gardening", summary: "Avid plant mom to herbs, monsteras, and fiddle leaf figs" },
    { name: "Reading", summary: "Lover of non-fiction, historical fiction, and everything in between" },
    { name: "Fashion", summary: "Fashion lover inspired by clean silhouettes and standout accessories" },
    { name: "Cooking", summary: "Seasoned cook, devoted to healthy, vibrant flavors. Fish and vegetables are my specialy." },
    { name: "Baking", summary: "Baking everything from cookies to pies. Famous among friends for chocolate salted buckwheat cookies." },
  ];

  const reflections = [
    {
      title: "Speed first, then polish",
      date: "2025-07-08",
      summary:
        "Notes on shipping a rough cut early, instrumenting the funnel, and tightening the loop.",
      href: "/writing/speed-first",
      tags: ["shipping", "metrics", "process"],
    },
    {
      title: "When to go exact vs. semantic",
      date: "2025-05-21",
      summary:
        "Choosing retrieval modes based on intent; guardrails and hybrid strategies.",
      href: "/writing/exact-vs-semantic",
      tags: ["search", "ml", "ux"],
    },
    {
      title: "Tiny interfaces that compound",
      date: "2025-03-02",
      summary:
        "Why micro-interactions (latency, defaults, shortcuts) drive outsized product impact.",
      href: "/writing/tiny-interfaces",
      tags: ["product", "ux"],
    },
  ];

  const professional_interests = [
    { name: "Servant Leadership"},
    { name: "Stakeholder Management"},
    { name: "Product Strategy"},
    { name: "Cloud Computing", image: "/interests/cloud_computing.webp" },
    { name: "Distributed Systems", image: "/interests/distributed_systems.webp" },
    { name: "P vs NP", image: "/interests/p_v_np.jpg" },
    { name: "Cryptography", image: "/interests/public_encryption.jpg" },
    { name: "Technical Writing", image: "/interests/tech_writing.webp" },
    { name: "FinTech", image: "/interests/fintech.webp" },
    { name: "Entrepreneurship", image: "/interests/entrepreneurship.webp" },
    { name: "Venture Capital", image: "/interests/venture_capital.webp" },
  ];

  const Tab = ({ id, label }) => (
    <button
      onClick={() => setTab(id)}
      className={
        "px-4 py-2 rounded-xl text-sm md:text-base border transition " +
        (tab === id
          ? "bg-black text-white border-black shadow"
          : "bg-white text-black border-neutral-200 hover:bg-neutral-50")
      }
      aria-pressed={tab === id}
      aria-controls={`panel-${id}`}
      role="tab"
    >
      {label}
    </button>
  );

  const Section = ({ id, children }) => (
    <div id={`panel-${id}`} role="tabpanel" className="mt-8">
      {children}
    </div>
  );

  const ReadingCard = ({ item }) => (
    <div className="flex gap-4 items-start">
    <div>
        <div className="text-base md:text-lg font-semibold tracking-tight group-hover:underline">
        {item.title}
        </div>
        <div className="text-sm text-neutral-600 mt-0.5">
        {item.by}
        </div>
    </div>
    </div>
  );

  const HobbiesCard = ({ h }) => {
        const isLink = Boolean(h.href);
        const classNameBase = "rounded-2xl border border-neutral-200 p-5";
        const className = isLink
            ? classNameBase + " hover:shadow-md transition block"
            : classNameBase;

        const Body = (
            <>
            <h3 className="mt-1 text-lg md:text-xl font-semibold leading-tight">
                {h.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{h.summary}</p>
            </>
        );

        return isLink ? (
            <a href={h.href} className={className}>{Body}</a>
        ) : (
            <div className={className} role="article" aria-label={h.name}>{Body}</div>
        );
    };

    const ReflectionCard = ({ r }) => {
        const isLink = Boolean(r.href);
        const classNameBase = "rounded-2xl border border-neutral-200 p-5";
        const className = isLink
            ? classNameBase + " hover:shadow-md transition block"
            : classNameBase;

        const Body = (
            <>
            <div className="text-xs uppercase tracking-wide text-neutral-500">
                {new Date(r.date).toLocaleDateString(undefined, {
                year: "numeric", month: "short", day: "numeric",
                })}
            </div>
            <h3 className="mt-1 text-lg md:text-xl font-semibold leading-tight">
                {r.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{r.summary}</p>
            {r.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                    <span key={t} className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs text-neutral-700">
                    {t}
                    </span>
                ))}
                </div>
            ) : null}
            </>
        );

        return isLink ? (
            <a href={r.href} className={className}>{Body}</a>
        ) : (
            <div className={className} role="article" aria-label={r.title}>{Body}</div>
        );
    };


  return (
    <div className="min-h-screen my-6 mx-6">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-8 md:mb-10">
        <PageTitleComponet title="Interests" />
      </section>

      {/* Tabs */}
      <div role="tablist" aria-label="Interests sections" className="flex flex-wrap gap-2">
        <Tab id="reading" label="What I'm reading" />
        <Tab id="hobbies" label="Hobbies" />
        {/* <Tab id="reflections" label="Reflections / Thoughts" /> */}
        <Tab id="professional" label="Professional" />
      </div>

      {/* Panels */}
      {tab === "reading" && (
        <Section id="reading">
          <PageSubTitleComponet title="What I'm reading" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {readings.map((b) => (
              <ReadingCard key={b.title} item={b} />
            ))}
          </div>
        </Section>
      )}

      {tab === "hobbies" && (
        <Section id="hobbies">
          <PageSubTitleComponet title="Hobbies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {hobbies.map((h) => (
                <HobbiesCard key={h.name} h={h} />
            ))}
          </div>
        </Section>
      )}

      {tab === "reflections" && (
        <Section id="reflections">
          <PageSubTitleComponet title="Reflections" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {reflections.map((r) => (
              <ReflectionCard key={r.title} r={r} />
            ))}
          </div>
        </Section>
      )}

      {tab === "professional" && (
        <Section id="professional">
          <PageSubTitleComponet title="Professional Curiosities" />
          <DoubleListComponent items={professional_interests} />
        </Section>
      )}
    </div>
  );
}