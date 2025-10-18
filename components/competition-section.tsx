import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparison = [
  {
    feature: "Staking/DeFi Completo",
    musicchain: true,
    spotify: false,
    audius: false,
  },
  {
    feature: "Tokenización de Regalías",
    musicchain: true,
    spotify: false,
    audius: false,
  },
  {
    feature: "Costo de Transacción",
    musicchain: "$0.01",
    spotify: "N/A",
    audius: "$0.50",
  },
  {
    feature: "Comisión al Artista",
    musicchain: "88%",
    spotify: "12%",
    audius: "90%",
  },
  {
    feature: "Crowdfunding Integrado",
    musicchain: true,
    spotify: false,
    audius: false,
  },
  {
    feature: "Mercado de NFTs",
    musicchain: true,
    spotify: false,
    audius: true,
  },
]

const team = [
  {
    name: "María González",
    role: "CEO & Co-founder",
    bio: "Ex-Spotify. 10 años en music tech.",
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Carlos Ruiz",
    role: "CTO & Co-founder",
    bio: "Smart contracts architect. Ex-Ethereum Foundation.",
    image: "/professional-man-portrait-tech.png",
  },
  {
    name: "Ana Martínez",
    role: "Head of Product",
    bio: "Product lead en fintech DeFi. Stanford MBA.",
    image: "/professional-woman-portrait-business.png",
  },
]

export function CompetitionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-balance">Por Qué Ganamos.</h2>

        {/* Comparison Table */}
        <Card className="p-8 bg-card border-border/50 mb-20 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground font-semibold">Característica</th>
                <th className="text-center py-4 px-4">
                  <span className="text-2xl font-bold text-primary">MusicChain</span>
                </th>
                <th className="text-center py-4 px-4 text-muted-foreground">Spotify</th>
                <th className="text-center py-4 px-4 text-muted-foreground">Audius</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    {typeof row.musicchain === "boolean" ? (
                      row.musicchain ? (
                        <Check className="w-6 h-6 text-primary mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-primary">{row.musicchain}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    {typeof row.spotify === "boolean" ? (
                      row.spotify ? (
                        <Check className="w-6 h-6 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 mx-auto" />
                      )
                    ) : (
                      row.spotify
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    {typeof row.audius === "boolean" ? (
                      row.audius ? (
                        <Check className="w-6 h-6 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 mx-auto" />
                      )
                    ) : (
                      row.audius
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* Team Section */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card
                key={member.name}
                className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 border-border/50 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
