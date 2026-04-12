"use client";

import { PortfolioHeader } from "@/components/portfolio-header";
import { PortfolioSection } from "@/components/portfolio-section";
import { BlogLink } from "@/components/blog-link";

const DUTY = [
  {
    text: "relations  <u>@DbVisualizer</u>; platform where users are able to query youtube videos using natural language",
    links: [
      {
        text: "@DbVisualizer",
        href: "https://dbvis.com",
      },
    ],
  },
  {
    text: "building  <u>@Argus</u>; platform where users are able to query youtube videos using natural language",
    links: [
      {
        text: "@Argus",
        href: "https://arguss.xyz",
      },
    ],
  },
  {
    text: "api & product <u>@Yemaachi</u>; flagship (ViAL & Uvosyo), technical product & API documentation supporting clinical trial data pipelines and LIMS workflows.",
    links: [
      {
        text: "@Yemaachi",
        href: "https://yemaachi.com",
      },
    ],
  },
  {
    text: "relations <u>@piecesappfordevelopers</u> | <u>@brightdata</u>",
    links: [
      {
        text: "@piecesappfordevelopers",
        href: "https://pieces.app/",
      },
      {
        text: "@brightdata",
        href: "https://brightdata.com/",
      },
    ],
  }
];

const research = [
  {
    text: "temporospatial ground plane morphology analysis + semantic segmentation & trajectory mapping, faculty -",
    links: [
      {
        text: "Dr. Kofi Nyarko",
        href: "#",
      },
    ],
  },
  {
    text: "disease modeling, stochastic processes, and differential equations research –",
    links: [
      {
        text: "scook@carleton.edu",
        href: "mailto:scook@carleton.edu",
      },
    ],
  },
];

const interests = [
  "energy markets, futures hedging against oil production",
  "@general agents; sovereign intelligence + agent swarms",
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <PortfolioHeader />

      <PortfolioSection title="TOUR OF DUTY" items={DUTY} />

      <section className="mb-12">
        <h2 className="section-title">Selected Research</h2>
        <div className="space-y-3 ml-1">
          {research.map((item, idx) => (
            <div key={idx} className="prose-text">
              <span className="font-mono">•</span>
              <span className="ml-3">
                {item.text}
                {item.links && (
                  <>
                    {" "}
                    <a
                      href={item.links[0].href}
                      className="text-accent hover:opacity-80 transition-opacity"
                    >
                      {item.links[0].text}
                    </a>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      <PortfolioSection
        title="Interests"
        items={interests.map((text) => ({ text }))}
      />

      <p className="prose-text my-12 text-muted-foreground">
        relations, designing, piano and gaming.
      </p>

      <footer className="mt-16 pt-8 border-t border-border space-y-3">
        <p className="prose-text">
          <a
            href="https://linkedin.com"
            className="text-accent hover:opacity-80 transition-opacity"
          >
            linkedin
          </a>
        </p>
      </footer>

      <BlogLink />
    </main>
  );
}
