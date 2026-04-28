import imgWhatsAppImage20260424At15024371 from "figma:asset/fad48d3c97f3c57d94136831716cf9c9c86fa086.png";
import imgWhatsAppImage20260424At15024041 from "figma:asset/6f606b1e07690a3e685a83a920536f943d19a43b.png";
import imgWhatsAppImage20260424At15024111 from "figma:asset/de3ea1de1c126ac9fead9d4d84f1fd5348eabcd5.png";
import imgWhatsAppImage20260424At15024211 from "figma:asset/b13208183c8b3a56cba30dbadfed3c0a717dc45c.png";
import imgWhatsAppImage20260424At15024031 from "figma:asset/571621a812a92959b1ab27539eb946e82f8a5732.png";
import imgWhatsAppImage20260424At15024221 from "figma:asset/6171e9b2c23732962fcf6c0223a9cb1a74287bd7.png";
import imgWhatsAppImage20260424At1502411 from "figma:asset/043fd28ec7f45fd0f50ee8a7ad565ba561fecbc2.png";
import imgWhatsAppImage20260424At20164832 from "figma:asset/2bb5067d99a0f986076545f408caf607b0178323.png";
import imgWhatsAppImage20260424At15024351 from "figma:asset/6725375ee7547ee73aa27f2025d0a74d47ed472c.png";
import imgWhatsAppImage20260424At20164821 from "figma:asset/a35b26407459c8f7eaee085b232c8ce786a1c6b3.png";
import imgImage828 from "figma:asset/c9c15bedc7673e5585d4591b0d61bd2b677e09ba.png";
import imgImg42671 from "figma:asset/fd80c064dc795f7df245f0fc5887dc7d0ffc5c65.png";
import imgWhatsAppImage20260424At2016481 from "figma:asset/ad184efe31ba65711f8ce929f48598bfbd7642e7.png";
import imgImg1656Jpg1 from "figma:asset/8c27905685cf3a3194b273656e8082bd0df18653.png";

export function Project() {
  return (
    <div className="bg-white flex flex-col w-full pb-32">
      {/* Hero Image */}
      <div className="w-full aspect-[1280/460] relative overflow-hidden">
        <img
          alt="Mural hero"
          className="w-full h-full object-cover"
          src={imgWhatsAppImage20260424At15024371}
          style={{ objectPosition: "85% 85%" }}
        />
      </div>

      {/* Texts Section */}
      <div className="w-full px-[32px] py-[48px] flex flex-col items-center">
        <div className="w-full max-w-[920px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[10px] text-[#0f0f0f] text-[18px]">
            <p className="font-['Outfit',sans-serif] font-medium">ES</p>
            <p className="font-['Outfit',sans-serif] font-normal leading-relaxed">
              {`El mural 'Pie de Eugenia' fue creado para llevar arte y color al Ponte Nova, Minas Gerais. La idea nació de la búsqueda de traer elementos significativos a la ciudad, y los árboles de Eugenia (o de jambo :) crecen en las casas de las abuelas, en los patios de las escuelas, y ahora también en el centro comercial Boulevard Colina.`}
            </p>
          </div>
          <div className="flex flex-col gap-[10px] text-[#817f7f] text-[14px]">
            <p className="font-['Outfit',sans-serif] font-medium">PT</p>
            <p className="font-['Outfit',sans-serif] font-normal leading-relaxed whitespace-pre-wrap">
              {`O mural “Pé de Eugênia” foi criado para levar arte e cor à Ponte Nova, Minas Gerais. A ideia nasceu na busca de trazer elementos significativos para cidade, e as árvore de Eugênia (ou de jambo :) crescem nas casas das avós, nos pátios das escolas, e agora também no shopping Boulevard Colina.`}
            </p>
          </div>
          <div className="flex flex-col gap-[10px] text-[#817f7f] text-[14px]">
            <p className="font-['Outfit',sans-serif] font-medium">EN</p>
            <p className="font-['Outfit',sans-serif] font-normal leading-relaxed">
              {`The mural "Eugênia's Foot" was created to bring art and color to Ponte Nova, Minas Gerais. The idea was born from the desire to incorporate meaningful elements into the city, and the Eugênia trees (or jambo trees :) grow in grandmothers' homes, in schoolyards, and now also in the Boulevard Colina shopping center.`}
            </p>
          </div>
        </div>
      </div>

      {/* Grid de fotos */}
      <div className="w-full ">
        <div className="flex flex-col gap-[16px] w-full max-w-[1280px] mx-auto items-center">
          <img alt="Project detail" className="w-full aspect-[720/480] object-cover" src={imgWhatsAppImage20260424At15024041} />
          
          <div className="flex gap-[16px] w-full">
            <img alt="Project detail" className="flex-1 w-1/2 aspect-[356/237] object-cover" src={imgWhatsAppImage20260424At15024111} />
            <img alt="Project detail" className="flex-1 w-1/2 aspect-[356/237] object-cover" src={imgWhatsAppImage20260424At15024211} />
          </div>
          
          <div className="flex gap-[16px] w-full">
            <img alt="Project detail" className="flex-1 w-1/2 aspect-[356/237] object-cover" src={imgWhatsAppImage20260424At15024031} />
            <img alt="Project detail" className="flex-1 w-1/2 aspect-[356/237] object-cover" src={imgWhatsAppImage20260424At15024221} />
          </div>
          
          <img alt="Project detail" className="w-full aspect-[720/480] object-cover" src={imgWhatsAppImage20260424At1502411} />
          <img alt="Project detail" className="w-full aspect-[720/480] object-cover" src={imgWhatsAppImage20260424At20164832} />
          <img alt="Project detail" className="w-full aspect-[720/480] object-cover" src={imgWhatsAppImage20260424At15024351} />
          <img alt="Project detail" className="w-full aspect-[720/465] object-cover" src={imgWhatsAppImage20260424At20164821} />
          
          <div className="flex flex-col md:flex-row gap-[16px] w-full md:h-[300px]">
            <img alt="Project detail" className="flex-1 w-full md:w-auto h-[400px] md:h-full object-cover" src={imgImage828} />
            <img alt="Project detail" className="flex-1 w-full md:w-auto h-[400px] md:h-full object-cover" src={imgImg42671} />
            <img alt="Project detail" className="flex-1 w-full md:w-auto h-[400px] md:h-full object-cover" src={imgWhatsAppImage20260424At2016481} />
          </div>
          
          <img alt="Project detail" className="w-full aspect-[720/294] object-cover" src={imgImg1656Jpg1} />
        </div>
      </div>

      {/* Ficha técnica */}
      <div className="w-full flex justify-center py-[64px]">
        <div className="flex flex-col items-center gap-[10px] text-[#817f7f] text-[14px] font-['Poppins',sans-serif]">
          <p className="font-medium">Ficha técnica</p>
          <div className="flex flex-col items-center text-center">
            <p>Dimensões:</p>
            <p>Materiais:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
