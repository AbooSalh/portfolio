import type { ExperienceItem } from "@/lib/types"

interface Props {
  item: ExperienceItem
}

export default function TimelineItem({ item }: Props) {
  return (
    <div className="flex gap-6">
      <div className="relative shrink-0">
        <div className="w-[15px] h-[15px] rounded-full bg-accent border-2 border-surface mt-1" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-3">
          <h3 className="text-lg font-semibold font-heading text-text-primary">
            {item.role}
          </h3>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              @ {item.company}
            </a>
          ) : (
            <span className="text-sm text-text-muted">@ {item.company}</span>
          )}
        </div>

        <p className="text-xs font-mono text-text-muted mb-3">{item.period}</p>

        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent mt-1.5 shrink-0">—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
