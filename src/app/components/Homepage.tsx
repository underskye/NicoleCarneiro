import { Link } from "react-router";
import imgMtsPosters22 from "figma:asset/7ed970ffbaaee7e01784995b77bbd1df05b96291.png";
import imgWhatsAppImage20260424At20164832 from "figma:asset/2bb5067d99a0f986076545f408caf607b0178323.png";
import imgLivrosEmpilhadosFundoVerde2 from "figma:asset/52d33d6f24afee6606ac3c10ee7f9a71f6a9d930.png";
import imgMy41 from "figma:asset/e6c331c0922179d7b81b19c38d9918f32b617812.png";

const projects = [
  {
    id: "max",
    title: "Max e o Lado de Lá do Lago",
    category: "Álbum ilustrado",
    image: imgLivrosEmpilhadosFundoVerde2,
  },
  {
    id: "pe-de-eugenia",
    title: "Pé de Eugênia",
    category: "Mural",
    image: imgWhatsAppImage20260424At20164832,
  },
  {
    id: "my-friends-pets",
    title: "My Friends Pets",
    category: "Diseño de packaging",
    image: imgMy41,
  },
  {
    id: "never-let-me-go",
    title: "Never let me go",
    category: "Serigrafia",
    image: imgMtsPosters22,
  },
];

export function Homepage() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            to="/project"
            className="group relative w-full aspect-[381/246] overflow-hidden block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
              <h2 className="font-['Outfit',sans-serif] font-bold text-[28px] mb-2">{project.title}</h2>
              <p className="font-['Outfit',sans-serif] text-[16px]">{project.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
