import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type LucideIcon } from "lucide-react"

interface CaseType {
  icon: LucideIcon
  title: string
  description: string
}

interface CourtCaseTypesProps {
  courtName: string
  caseTypes: CaseType[]
}

export function CourtCaseTypes({ courtName, caseTypes }: CourtCaseTypesProps) {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Types of Cases Handled
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {courtName} handles a variety of criminal, traffic, and civil matters.
        </p>
        
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {caseTypes.map((caseType) => (
            <Card key={caseType.title}>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <caseType.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">{caseType.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pl-[4.5rem]">
                <p className="text-sm text-muted-foreground">{caseType.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
