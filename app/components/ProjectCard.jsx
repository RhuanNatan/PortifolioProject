export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all border border-gray-700">
      <div className="h-48 bg-gray-700 rounded-md mb-4 overflow-hidden">
        {image && <Image src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-teal-400 hover:underline inline-flex items-center">
        Ver mais <span className="ml-2">→</span>
      </a>
    </div>
  )
} 