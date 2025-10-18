export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/abstract-sound-waves-digital-art-dark-background.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-6 text-balance">MusicChain</h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-4 text-balance">
          El Futuro de la Música es un Activo Líquido.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground italic text-balance">
          Estamos construyendo el mercado de capitales para la cultura.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
