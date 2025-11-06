import { useTypingEffect } from '@/hooks/useTypingEffect';
import { LazyImage } from '@/components/ui/lazy-image';

export function Home() {
  const technologies = ['React', 'Node.js', 'TypeScript', 'Tailwind CSS'];
  const typedText = useTypingEffect({
    words: technologies,
    typingSpeed: 120,
    deletingSpeed: 60,
    pauseTime: 2500,
  });

  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Desenvolvedor Full Stack</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-title mb-4">
              ICM
            </h1>
            <p className="text-xl md:text-2xl text-subtitle mb-6">
              Eu construo <span className="text-primary font-medium">aplicações web</span> com <span className="text-primary font-medium">{typedText}</span><span className="text-primary animate-pulse">|</span>
            </p>
            <p className="text-subtitle max-w-lg mb-8">
              Desenvolvedor apaixonado por criar experiências digitais modernas, responsivas e de alta performance. Especializado em desenvolvimento web full stack com foco em React, Node.js e TypeScript.  
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="btn btn-primary">
                Entre em contato
              </a>
              <a href="#portfolio" className="btn btn-outline">
                Ver projetos
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 animate-gradient"></div>
              <div className="relative bg-background-card p-2 rounded-lg border border-border shadow-card overflow-hidden">
                <LazyImage
                  src="/icm.jpeg"
                  alt="Isaac Cabral Matos - Desenvolvedor Full Stack"
                  className="w-full h-auto max-w-md rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}