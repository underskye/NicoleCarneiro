import imgMtsPosters22 from "./7ed970ffbaaee7e01784995b77bbd1df05b96291.png";
import imgWhatsAppImage20260424At20164832 from "./2bb5067d99a0f986076545f408caf607b0178323.png";
import imgLivrosEmpilhadosFundoVerde2 from "./52d33d6f24afee6606ac3c10ee7f9a71f6a9d930.png";
import imgMy41 from "./e6c331c0922179d7b81b19c38d9918f32b617812.png";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 text-[24px] whitespace-nowrap">
      <p className="relative shrink-0">Meus projetos</p>
      <p className="relative shrink-0">Sobre mim</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[153px] items-center leading-[normal] not-italic overflow-clip px-[32px] py-[24px] relative shrink-0 text-black w-[1280px]">
      <Frame1 />
      <p className="flex-[1_0_0] min-w-px relative text-[40px]">Nicole Carneiro</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_53.50px] relative shrink-0 w-full">
      <div className="aspect-[381/246] col-2 justify-self-stretch relative row-2 shrink-0" data-name="mts posters 2 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[113.63%] left-0 max-w-none top-0 w-full" src={imgMtsPosters22} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <div className="aspect-[357/237.9070281982422] col-2 justify-self-stretch relative row-1 shrink-0" data-name="WhatsApp Image 2026-04-24 at 20.16.48 (3) 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWhatsAppImage20260424At20164832} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="LIVROS EMPILHADOS - fundo verde 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLivrosEmpilhadosFundoVerde2} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
      <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="my4 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgMy41} />
          <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
        </div>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start pb-[752px] relative size-full" data-name="Homepage">
      <Frame />
      <Frame2 />
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[144px] text-[28px] text-white top-[311px] whitespace-nowrap">Max e o Lado de Lá do Lago</p>
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[883px] text-[28px] text-white top-[307px] whitespace-nowrap">Pé de Eugênia</p>
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[872px] text-[28px] text-white top-[732px] whitespace-nowrap">Never let me go</p>
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[normal] left-[218px] text-[28px] text-white top-[732px] whitespace-nowrap">My Friends Pets</p>
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[250px] text-[20px] text-white top-[344px] whitespace-nowrap">Álbum ilustrado</p>
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[947px] text-[20px] text-white top-[340px] whitespace-nowrap">Mural</p>
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[928px] text-[20px] text-white top-[765px] whitespace-nowrap">Serigrafia</p>
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[normal] left-[227px] text-[20px] text-white top-[765px] whitespace-nowrap">Diseño de packaging</p>
    </div>
  );
}