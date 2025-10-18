export function CTASection() {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-balance">Únete a Nosotros.</h2>

        <div className="mb-8">
          <p className="text-9xl md:text-[12rem] font-bold text-primary leading-none">$550,000</p>
        </div>

        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 text-balance leading-relaxed">
          Para lanzar al mercado y capturar a los primeros 1,200 artistas y 12,000 usuarios.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
            Solicitar Pitch Deck Completo
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-semibold rounded-lg hover:bg-secondary/80 transition-all hover:scale-105">
            Agendar Reunión
          </button>
        </div>

        {/* Contact Info */}
        <div className="pt-12 border-t border-border/50">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground">
            <a href="mailto:invest@musicchain.io" className="hover:text-primary transition-colors">
              invest@musicchain.io
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://musicchain.io" className="hover:text-primary transition-colors">
              musicchain.io
            </a>
            <span className="hidden sm:inline">•</span>
            <span>San Francisco, CA</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">© 2025 MusicChain. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
