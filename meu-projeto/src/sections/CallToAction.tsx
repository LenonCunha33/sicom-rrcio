"use client";
import ArrowRight from "@/src/assets/arrow-right.svg";
import starImage from "@/src/assets/Preenchimento.png";
import springImage from "@/src/assets/mao.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Fique Por Dentro de Tudo que Acontece No Seu Sindicato</h2>
          <p className="section-description mt-5">
          Não perca nenhuma atualização importante do nosso sindicato! Siga-nos nas redes sociais e fique sempre informado sobre as novidades, eventos, conquistas e campanhas que estão acontecendo. Nossas plataformas são o lugar ideal para interagir, tirar dúvidas e participar ativamente da construção de um futuro melhor para todos. Junte-se à nossa comunidade online e acompanhe de perto as ações que fazem a diferença!
          </p>
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary bg-[#004A99]">Ler Mais</button>
          <button className="btn btn-text gap-1 text-[#004A99]">
            <span>Seguir Agora</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
