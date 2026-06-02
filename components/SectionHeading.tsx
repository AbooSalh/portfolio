interface Props {
  label: string
  badge?: string
}

export default function SectionHeading({ label, badge }: Props) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
          {badge}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
        {label}
      </h2>
    </div>
  )
}
