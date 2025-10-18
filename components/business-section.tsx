"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span className="text-5xl md:text-6xl font-bold text-primary">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const revenueStreams = [
  { label: "3% en Marketplace NFT", value: "Comisión por transacción" },
  { label: "5% en Crowdfunding", value: "Solo si el proyecto tiene éxito" },
  { label: "2% en Trading de Tokens", value: "Mercado secundario de regalías" },
  { label: "0% en Propinas", value: "Conexión directa artista-fan" },
]

export function BusinessSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Market Size */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Un Mercado de $34.6B listo para la disrupción.
            </h2>

            <Card className="p-8 bg-card border-border/50">
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Mercado Global de Streaming Musical</p>
                  <AnimatedCounter end={34} prefix="$" suffix=".6B" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Usuarios Activos de Streaming</p>
                  <AnimatedCounter end={616} suffix="M" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Crecimiento Anual Proyectado</p>
                  <AnimatedCounter end={14} suffix="%" />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Business Model */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              Monetizamos la Economía, no el Consumo.
            </h2>

            <div className="space-y-4">
              {revenueStreams.map((stream, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:translate-x-2 border-l-4 border-l-primary"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{stream.label}</h4>
                      <p className="text-muted-foreground">{stream.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
