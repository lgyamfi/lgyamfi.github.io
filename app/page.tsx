'use client'

import { PortfolioHeader } from '@/components/portfolio-header'
import { PortfolioSection } from '@/components/portfolio-section'
import { BlogLink } from '@/components/blog-link'

const DUTY = [
  {
    text: 'Building 🔥 Ospawniabs; platform where domain operators – from the best in the world to you – can distill their expertise & skills into agents, tools & automations that autonomously do the work, at their level, and share for anyone; across every domain of knowledge work.',
    links: [
      {
        text: 'Ospawniabs',
        href: 'https://ospawniabs.com',
      },
    ],
  },
  {
    text: 'ml & product Linkedin; flagship, built ml models to understand human potential & match that at scale. contrastive embeddings + graph propagation at 500M-profile graph scale.',
    links: [
      {
        text: 'Linkedin',
        href: 'https://linkedin.com',
      },
    ],
  },
  {
    text: 'core ml Gappie; wireless technologies, model pruning/quantization, inference apis + data pipeline (apple home ecosystem)',
    links: [
      {
        text: 'Gappie',
        href: 'https://gappie.com',
      },
    ],
  },
  {
    text: 'research @nasa; payload rocket RF communications + telecommand control signals transmission (eyes in the cloud, usli)',
    links: [
      {
        text: '@nasa',
        href: 'https://nasa.gov',
      },
    ],
  },
  {
    text: 'data-center scale ml compute infra @usc/isi',
    links: [
      {
        text: '@usc/isi',
        href: 'https://isi.edu',
      },
    ],
  },
  {
    text: 'oil & gas energy data layer @geospectra engineering',
    links: [
      {
        text: '@geospectra engineering',
        href: 'https://geospectra.com',
      },
    ],
  },
]

const research = [
  {
    text: 'Multidimensional lattice for Post-Quantum Cryptographic Key Generation with',
    links: [
      {
        text: 'Dr. Paul Ware',
        href: '#',
      },
    ],
  },
  {
    text: 'temporospatial ground plane morphology analysis + semantic segmentation & trajectory mapping, faculty -',
    links: [
      {
        text: 'Dr. Kofi Nyarko',
        href: '#',
      },
    ],
  },
  {
    text: 'disease modeling, stochastic processes, and differential equations research –',
    links: [
      {
        text: 'scook@carleton.edu',
        href: 'mailto:scook@carleton.edu',
      },
    ],
  },
]

const interests = [
  'energy markets, futures hedging against oil production',
  '@general agents; sovereign intelligence + agent swarms',
]

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
                    {' '}
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

      <PortfolioSection title="Interests" items={interests.map((text) => ({ text }))} />

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
  )
}
