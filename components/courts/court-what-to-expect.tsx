interface ExpectationItem {
  text: string
}

interface CourtWhatToExpectProps {
  beforeAppearance: ExpectationItem[]
  duringAppearance: ExpectationItem[]
}

export function CourtWhatToExpect({ beforeAppearance, duringAppearance }: CourtWhatToExpectProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          What to Expect at Court
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Before Your Appearance</h3>
            <ul className="space-y-3 text-muted-foreground">
              {beforeAppearance.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {index + 1}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">During Your Appearance</h3>
            <ul className="space-y-3 text-muted-foreground">
              {duringAppearance.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {index + 1}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
