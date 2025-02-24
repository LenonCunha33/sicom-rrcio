import Image from "next/image";
import logo from "@/src/assets/logo (2).png";
import SocialInsta from "@/src/assets/social-insta.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#004A99] text-white text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
        <a href="#Inicio">Inicio</a>
              <a href="#Institucional">Institucional</a>
              <a href="#Vitrine">Vitrine de Notícias</a>
              <a href="#Feriados">Feriados</a>
              <a href="#Servicos">Serviços e Soluções</a>
              <a href="#Central">Central do Associado</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta />
        </div>
        <p className="mt-6">
          &copy; 2025 Sindicato do Comércio Varejista de Volta Redonda, Todos os Direitos Reservados.
        </p>
      </div>
    </footer>
  );
};