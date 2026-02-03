import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/resume";
import { ContactForm } from "@/components/contact-form";

const ContactSection = () => {
  return (
    <section id="contacto" className="pt-24 pb-6 md:pb-8 lg:pb-10 relative overflow-hidden bg-primary/5">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
            ¿Qué sigue?
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Iniciemos una conversación
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para discutir oportunidades de desarrollo, colaboraciones en ciberseguridad o simplemente para hablar sobre tecnología y anime.
          </p>
          
          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start text-left">
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-1">Correo directo</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-semibold hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Envíame un correo</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Envíame un mensaje</h3>
              <p className="text-sm text-muted-foreground mb-6">Completa el formulario y te responderé pronto.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;