"use client";
import ArrowIcon from "@/src/assets/arrow-right.svg";
import cogImage from "@/src/assets/ResumoBanner.png";
import cylinderImage from "@/src/assets/LivrodeOuroAberto.png";
import noodleImage from "@/src/assets/LivrodeOuroFechado.png";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="Associado"
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Sicomércio VR</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#004A99] text-transparent bg-clip-text mt-6">
              Nossas Vantagens
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Desde sua fundação, o Sindicato de Volta Redonda tem sido um pilar essencial na construção de relações trabalhistas sólidas e no desenvolvimento econômico da região. Ao contribuir, sua empresa se conecta a uma história de conquistas coletivas, como a garantia de direitos, a melhoria das condições de trabalho e a promoção de um ambiente empresarial mais justo e competitivo.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary bg-[#004A99]">Torne-se Associado</button>
              <button className="btn btn-text gap-1 text-white">
                <span>Ver Mais</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-2 -left-20 md:absolute"
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[500px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};