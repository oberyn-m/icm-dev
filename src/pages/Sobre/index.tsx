import { skills } from '@/data/skills';

export function Sobre() {

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-center">Sobre Mim</h2>
          <p className="text-subtitle text-center max-w-3xl mx-auto">
            Desenvolvedor Full Stack com experiência em criar aplicações web modernas e responsivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-title mb-4">Quem sou eu</h3>
            <p className="text-subtitle mb-6">
              Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Minha jornada na programação começou há mais de 10 anos, e desde então tenho me dedicado a aprimorar minhas habilidades e conhecimentos.
            </p>
            <p className="text-subtitle mb-6">
              Especializado em desenvolvimento web com React, Node.js e TypeScript, busco sempre criar soluções eficientes e escaláveis. Acredito que o código limpo e bem estruturado é fundamental para o sucesso de qualquer projeto.
            </p>
            <p className="text-subtitle mb-8">
              Além da programação, sou entusiasta de novas tecnologias, apreciador de bons livros e sempre em busca de novos desafios que me permitam crescer profissionalmente.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h4 className="text-xl font-bold text-primary mb-2">Educação</h4>
                <p className="text-subtitle">Pós Graduado em Desenvolvimento Web Full Stack</p>
                <p className="text-sm text-subtitle/80">Puc Minas</p>
                <p className="text-subtitle mt-2">Graduado em Sistemas de Informação</p>
                <p className="text-sm text-subtitle/80">FTC Itabuna</p>
              </div>
              <div className="card">
                <h4 className="text-xl font-bold text-primary mb-2">Experiência</h4>
                <p className="text-subtitle">+10 anos de desenvolvimento Web</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-title mb-6">Minhas habilidades</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="card">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-title">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}