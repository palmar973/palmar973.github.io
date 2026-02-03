const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto py-6 md:py-8 border-t border-border bg-background">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-1/4 h-[3px] bg-primary" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left - Branding */}
          <div className="flex items-center gap-4">
            <span className="text-mono text-lg font-semibold">
              <span className="text-primary">{'<'}</span>
              Claudio Palmar
              <span className="text-primary">{'/>'}</span>
            </span>
          </div>

          {/* Center - Quick links */}
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#sobre-mi" className="hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#proyectos" className="hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#investigacion" className="hover:text-primary transition-colors">
              Investigación
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Right - Copyright */}
          <div className="text-mono text-xs text-muted-foreground">
            © {currentYear} · Hecho con <span className="text-primary">precisión</span>
          </div>
        </div>

        {/* Large decorative text */}
        {/* Decorative text removido para evitar altura extra */}
      </div>
    </footer>
  );
};

export default Footer;
