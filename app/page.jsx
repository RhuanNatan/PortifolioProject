export default function IntermediatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>
        <div className="space-x-6">
          <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-teal-400 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-teal-400 transition-colors">Contato</a>
        </div>
      </nav>

      <section id="sobre" className="mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Olá, eu sou o Dev 👋</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
            Sempre em busca de novos desafios e aprendizados.
          </p>
        </div>
      </section>

      <section id="projetos" className="mb-20">
        <h2 className="text-4xl font-bold mb-10 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
              <div className="h-48 bg-gray-700 rounded-md mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Projeto {item}</h3>
              <p className="text-gray-400 mb-4">Uma breve descrição do projeto e suas tecnologias principais.</p>
              <a href="#" className="text-teal-400 hover:underline">Ver mais →</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Vamos Conversar?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Estou sempre aberto a novas oportunidades e colaborações.
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:rhuanmendes995@gmail.com" 
            className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-full font-medium transition-colors"
          >
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/rhuan-natan-176370329/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.linkedin.com/in/rhuan-natan-176370329/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
);
}
