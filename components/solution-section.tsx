export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Presentando MusicChain.</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-pretty">
              La plataforma streaming-to-invest que convierte las regalías y el fandom en activos líquidos.
            </p>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-card border-4 border-border rounded-[3rem] p-4 shadow-2xl shadow-primary/20">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-secondary/50 flex items-center justify-between px-6 text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-primary rounded-full" />
                      <div className="w-4 h-4 bg-primary rounded-full" />
                      <div className="w-4 h-4 bg-primary rounded-full" />
                    </div>
                  </div>

                  {/* App content */}
                  <div className="p-6 space-y-4">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-primary">MusicChain</h3>
                      <p className="text-sm text-muted-foreground">Stream. Invest. Earn.</p>
                    </div>

                    <img
                      src="/music-album-cover-neon.jpg"
                      alt="Album"
                      className="w-full aspect-square rounded-lg object-cover"
                    />

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Midnight Dreams</span>
                        <span className="text-primary">+12% APY</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        Invertir
                      </button>
                      <button className="bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                        Escuchar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
