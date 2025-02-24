import styles, { layout } from "@/src/sections/Styles";
import icon from "@/src/assets/briefcase-alt-2-solid-24.png";
import mercado from "@/src/assets/store-alt-solid-24.png";
import lojas from "@/src/assets/store-regular-24.png";
import industrial from "@/src/assets/factory-solid-24.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

export const features = [
  {
    id: "feature-1",
    icon: icon,
    title: "Todas as Vagas",
    content:
      "Navegue Por Todas as Vagas Disponíveis em Diferentes Categorias.",
  },
  {
    id: "Mercado",
    icon: mercado,
    title: "Mercado",
    content:
      "Navegue por Todas Vagas Disponíveis na Categoria Mercado.",
  },
  {
    id: "feature-3",
    icon: lojas,
    title: "Lojas",
    content:
      "Navegue por Todas Vagas Disponíveis na Categoria Lojas.",
  },
  {
    id: "feature-4",
    icon: industrial,
    title: "Industrial e Civil",
    content:
      "Navegue por Todas Vagas Disponíveis na Categoria Industrial e Civil.",
  },
];

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  content: string;
  hasMargin: boolean;
}

const FeatureCard = ({ icon, title, content, hasMargin }: FeatureCardProps) => (
  <div id="Central"
    className={`flex flex-row p-4 sm:p-6 rounded-[20px] ${
      hasMargin ? "mb-4 sm:mb-6" : "mb-0"
    } bg-white shadow-lg`}
  >
    <div className={`w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-[#FFFF]`}>
      <Image src={icon} alt="icon" width={24} height={24} className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[16px] sm:text-[18px] leading-[20px] sm:leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-700 text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => {
  return (
    <section id="business" className={`${layout.section} py-8 sm:py-16`}>
      <div className="container flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12">
        {/* Seção de informações */}
        <div className={`${layout.sectionInfo} text-center lg:text-left`}>
          <h2 className="section-title ml-28 mb-4 ">
            Central <br className="sm:block hidden" /> do Associado
          </h2>
          <div className="text-center md:text-left">
            <p className="section-description mt-4">
              A Central do Associado é um espaço exclusivo no site do sindicato voltado para empresários associados. Nessa área, os associados têm a oportunidade de divulgar vagas de emprego disponíveis em suas empresas, promovendo a visibilidade dessas oportunidades para toda a comunidade de associados.
            </p>
            <div className="flex justify-center md:justify-start md:ml-44">
              <button className="mt-6 bg-[#001E80] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-poppins font-semibold hover:bg-[#0033A0] transition-colors">
                Cadastre Sua Vaga
              </button>
            </div>
          </div>
        </div>

        {/* Seção de cards */}
        <div className={`${layout.sectionImg} flex-col w-full lg:w-auto cursor-pointer`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              hasMargin={index !== features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;