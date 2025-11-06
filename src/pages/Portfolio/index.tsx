import { projects } from '@/data/projects';

export function Portfolio() {

  // SVG placeholder para os projetos
  const createProjectSvg = (index: number) => {
    const colors = [
      { bg: "#7c3aed", accent: "#a78bfa" },  // Roxo
      { bg: "#2563eb", accent: "#60a5fa" },  // Azul
      { bg: "#059669", accent: "#34d399" },  // Verde
    ];
    
    const color = colors[index % colors.length];
    
    return (
      <svg className="w-full h-48 rounded-t-lg" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" fill="#1e1e2e" />
        <circle cx="200" cy="100" r="50" fill={color.bg} opacity="0.7" />
        <rect x="120" y="80" width="160" height="10" rx="2" fill={color.accent} opacity="0.8" />
        <rect x="140" y="100" width="120" height="10" rx="2" fill={color.accent} opacity="0.6" />
        <rect x="160" y="120" width="80" height="10" rx="2" fill={color.accent} opacity="0.4" />
        <path d={`M${50 + index * 30},${40 + index * 20} L${100 + index * 10},${60 - index * 5} L${150 - index * 15},${100 + index * 10}`} stroke={color.accent} strokeWidth="2" fill="none" />
        <circle cx={300 - index * 20} cy={150 - index * 10} r={10 + index * 2} fill={color.bg} opacity="0.5" />
      </svg>
    );
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-center">Portfolio</h2>
          <p className="text-subtitle text-center max-w-3xl mx-auto">
            Confira alguns dos meus projetos recentes e descubra como posso ajudar a transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden group hover:translate-y-[-5px] transition-all duration-300">
              <div className="relative overflow-hidden">
                {createProjectSvg(index)}
                <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Ver Código
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-title mb-2">{project.title}</h3>
                <p className="text-subtitle mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium bg-background-light text-subtitle px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/oberyn-m?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}