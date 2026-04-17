"use client";

import { PortfolioHeader } from "@/components/portfolio-header";
import { PortfolioSection } from "@/components/portfolio-section";
import { BlogLink } from "@/components/blog-link";

const DUTY = [
  {
    text: "relations <u>@dbvisualizer</u>; full spectrum of dev advocacy – engineering blogs, product demos, official user guides",
    links: [
      {
        text: "@dbvisualizer",
        href: "https://dbvis.com",
      },
    ],
  },
  {
    text: "building  <u>@argus</u>; platform where users are able to query youtube videos using natural language",
    links: [
      {
        text: "@argus",
        href: "https://arguss.xyz",
      },
    ],
  },
  {
    text: "api & product <u>@yemaachi</u>; flagship (ViAL & Uvosyo), technical product & API documentation supporting clinical trial data pipelines and LIMS workflows",
    links: [
      {
        text: "@yemaachi",
        href: "https://yemaachi.com",
      },
    ],
  },
  {
    text: "relations <u>@piecesappfordevelopers</u> & <u>@brightdata</u>",
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
  },
];

const research = [
  {
    text: " multicriteria review + geospatial analyses of AC condensate water reuse -",
    links: [
      {
        text: "springer nature",
        href: "https://link.springer.com/article/10.1007/s43832-026-00381-8",
      },
    ],
  },
  {
    text: "mechanotroph microbiology, copper-chelating peptide biochemistry, and bioenergy research –",
    links: [
      {
        text: "Professor DongWon Choi",
        href: "https://www.etamu.edu/people/dongwon-choi/",
      },
    ],
  },
];

const interests = [
  "distributed systems, ml, cloud-native computing",
  "synthetic indices markets",
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

      <p className="prose-text my-4 text-muted-foreground">
        engineering, relations, piano and gaming
      </p>

      <footer className="mt-4 pt-3 border-t border-border space-y-2">
        <p className="prose-text">
          <a
            href="https://linkedin.com/in/lesliegyamfi"
            className="text-accent hover:opacity-80 transition-opacity"
          >
            <u>linkedin</u>
          </a>
        </p>
        <p className="prose-text">
          <a
            href="mailto:lsarfogyamf@leomail.tamuc.edu"
            className="text-accent hover:opacity-80 transition-opacity"
          >
            <u>lsarfogyamf@leomail.tamuc.edu</u>
          </a>
        </p>
      </footer>

      <BlogLink />
    </main>
  );
}
