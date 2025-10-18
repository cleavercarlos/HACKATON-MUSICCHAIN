import { Card } from "@/components/ui/card"
import { TrendingDown, Lock, EyeOff, Ban } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "MONETIZACIÓN",
    description: "Artistas reciben solo el 12%.",
  },
  {
    icon: Lock,
    title: "CONTROL",
    description: "Las plataformas son dueñas de la relación con el fan.",
  },
  {
    icon: EyeOff,
    title: "OPACIDAD",
    description: "Pagos lentos y sin transparencia.",
  },
  {
    icon: Ban,
    title: "INVERSIÓN",
    description: "Los fans no pueden invertir en los artistas que aman.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-balance">
          La Industria Musical Está Rota.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 border-border/50"
            >
              <problem.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
