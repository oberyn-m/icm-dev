import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md py-3 shadow-md' : 'bg-background py-5'}`}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>

        <a href="#home" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity" aria-label="Início">
          <span className="font-mono">{'<'}</span>
          <span>ICM</span>
          <span className="font-mono">{'/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4" role="navigation" aria-label="Menu principal">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-subtitle hover:text-primary transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Home</a></li>
            <li><a href="#sobre" className="text-subtitle hover:text-primary transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Sobre</a></li>
            <li><a href="#portfolio" className="text-subtitle hover:text-primary transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Portfolio</a></li>
            <li><a href="#contato" className="text-subtitle hover:text-primary transition-colors py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contato</a></li>
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-subtitle hover:text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-background-light border-t border-border py-4 animate-fade-in"
            role="navigation"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col space-y-4 container mx-auto">
              <li><a href="#home" className="block text-subtitle hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#sobre" className="block text-subtitle hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
              <li><a href="#portfolio" className="block text-subtitle hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contato" className="block text-subtitle hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}