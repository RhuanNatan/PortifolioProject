import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'

export default function HomePage() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Uma breve descrição do projeto e suas tecnologias principais.",
      link: "#",
      // image: "/projeto1.jpg" // Adicione imagens depois
    },
    // Adicione mais projetos aqui
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <section id="sobre" className="min-h-screen flex items-center justify-center px-8 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              Olá, eu sou o Dev 👋
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
              Sempre em busca de novos desafios e aprendizados.
            </p>
          </div>
        </section>

        <section id="projetos" className="min-h-screen px-8 py-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Projetos</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="contato" className="min-h-screen flex items-center px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Vamos Conversar?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Estou sempre aberto a novas oportunidades e colaborações.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:rhuanmendes995@gmail.com" 
                className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/rhuan-natan-176370329/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#0077B5] hover:bg-[#006399] px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/RhuanNatan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
