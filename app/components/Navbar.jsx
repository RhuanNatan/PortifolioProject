export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-teal-400 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-teal-400 transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  )
} 