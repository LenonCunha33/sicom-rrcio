"use client";
import productImage from "@/src/assets/proct (1).png";
import pyramidImage from "@/src/assets/mao.png";
import tubeImage from "@/src/assets/Local.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Sindicato Do Comércio Varejista de Volta Redonda</div>
          </div>
          <h2 className="section-title mt-5">
            Navegue Por Cada Comodo da Sicomércio
          </h2>
          <p className="section-description mt-5">
          localizado No Aterrado-Volta redonda , o sindicato conta com comodos confortaveis e atrativos para reuniões e eventos que sejam necessário para sua empresa , com funcionarios que levam a serio o compromisso de um sindicato funcional.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
