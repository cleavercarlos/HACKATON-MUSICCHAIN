import { Card } from "@/components/ui/card"
import { Hexagon, TrendingUp, Coins, Vote } from "lucide-react"

const technologies = [
  {
    icon: Hexagon,
    title: "Marketplace de NFTs",
    subtitle: "Propiedad Digital Verificable.",
    description: "Contratos que gestionan la creación, venta y regalías secundarias automáticas.",
  },
  {
    icon: TrendingUp,
    title: "Crowdfunding Descentralizado",
    subtitle: "Financiamiento Transparente y Sin Riesgo.",
    description: "Fondos en escrow que se liberan o devuelven de forma autónoma.",
  },
  {
    icon: Coins,
    title: "Staking Pools",
    subtitle: "Inversión y Rendimientos Pasivos.",
    description: "Pools de liquidez que distribuyen APY y un % de ventas de forma programada.",
  },
  {
    icon: Vote,
    title: "Royalty Tokens (ERC-20)",
    subtitle: "El Activo Revolucionario.",
    description: "Tokenizamos regalías futuras, creando un nuevo mercado líquido y comerciable.",
  },
]

export function TechnologySection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-balance">Nuestra Ventaja Injusta:</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-16 text-balance">
          La Arquitectura DeFi.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <Card
              key={tech.title}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 border-border/50 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-1 text-foreground">{tech.title}</h4>
                  <p className="text-lg font-semibold text-primary">{tech.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
