'use client'

interface Link {
  text: string
  href: string
  color?: string
}

interface PortfolioSectionProps {
  title: string
  items: Array<{
    text: string
    links?: Link[]
  }>
}

export function PortfolioSection({ title, items }: PortfolioSectionProps) {
  const renderText = (text: string, links?: Link[]) => {
    if (!links || links.length === 0) {
      return text
    }

    let result = text
    links.forEach(({ text: linkText, href }) => {
      const regex = new RegExp(`(${linkText})`, 'g')
      result = result.replace(
        regex,
        `<a href="${href}" class="text-accent hover:opacity-80 transition-opacity">${linkText}</a>`
      )
    })

    return (
      <span
        dangerouslySetInnerHTML={{ __html: result }}
        className="text-foreground"
      />
    )
  }

  return (
    <section className="mb-12">
      <h2 className="section-title">{title}:</h2>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="prose-text">
            <span className="font-mono">•</span>
            <span className="ml-3">{renderText(item.text, item.links)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
