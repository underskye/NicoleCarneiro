import { Link } from "react-router";

export function Header({ className = "" }: { className?: string }) {
  return (
    <header className={`flex w-full max-w-[1280px] mx-auto items-center px-[32px] py-[24px] gap-[153px] text-black ${className}`}>
      <div className="flex gap-[24px] items-center text-[24px] font-['Outfit',sans-serif] shrink-0">
        <Link to="/" className="font-medium hover:text-gray-600 transition-colors text-black">Meus projetos</Link>
        <span className="font-normal cursor-not-allowed text-gray-400">Sobre mim</span>
      </div>
      <Link to="/" className="text-[40px] font-['Inter',sans-serif] font-normal hover:text-gray-600 transition-colors whitespace-nowrap flex-[1_0_0] min-w-px text-black">
        Nicole Carneiro
      </Link>
    </header>
  );
}
