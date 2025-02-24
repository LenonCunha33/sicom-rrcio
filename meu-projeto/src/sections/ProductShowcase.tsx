"use client";
import React, { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowIcon from "@/src/assets/arrow-right.svg";

import Image1 from "@/src/assets/Sindicato/Fachada2.png";
import Image2 from "@/src/assets/Sindicato/Fachada1.png";
import Image3 from "@/src/assets/Sindicato/Fachada3.png";
import Image4 from "@/src/assets/Sindicato/portafachada.png";
import Image5 from "@/src/assets/Sindicato/dentro do escritório.png";
import Image6 from "@/src/assets/Sindicato/corredor2.png";
import Image7 from "@/src/assets/Sindicato/Corredor1.png";
import Image8 from "@/src/assets/Sindicato/Sala3.png";
import Image9 from "@/src/assets/Sindicato/Sala1.png";
import Image10 from "@/src/assets/Sindicato/sala2.png";
import Image11 from "@/src/assets/Sindicato/auditorio.png";
import pin from "@/src/assets/Pin Vermelho.png";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const slides = [
    { url: Image1, targetId: "hero-section" },
    { url: Image2, targetId: "section2" },
    { url: Image3, targetId: "section3" },
    { url: Image4, targetId: "hero-section" },
    { url: Image5, targetId: "section2" },
    { url: Image6, targetId: "section3" },
    { url: Image7, targetId: "hero-section" },
    { url: Image8, targetId: "section2" },
    { url: Image9, targetId: "section3" },
    { url: Image10, targetId: "hero-section" },
    { url: Image11, targetId: "section2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleImageClick = () => {
    const targetId = slides[currentIndex]?.targetId;
    if (!targetId) return;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="Institucional" ref={sectionRef} className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Sindicato Do Comércio Varejista de Volta Redonda</div>
          </div>
          <h2 className="section-title mt-5">
            Navegue Por Cada Comodo da Sicomércio
          </h2>
          <p className="section-description mt-5">
            Criado em 02/06/1982, o Sindicato do Comércio Varejista de Volta Redonda - SICOMÉRCIO-VR, registrado na Federação do Comércio Varejista no Estado do Rio de Janeiro.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary bg-[#004A99] mt-5">
            <span>Ler Mais</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <div className="tag">Presidente</div>
        </div>
        <p className="section-description mt-5">
          Levi Moreira de Freitas - Mandato de 15/03/2022 a 16/03/2026
        </p>

        <div className="relative max-w-[1600px] h-[780px] w-full m-auto py-16 px-4">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full rounded-2xl object-cover"
              src={slides[currentIndex].url}
              alt={`Banner ${currentIndex}`}
              layout="fill"
              objectFit="cover"
              onClick={handleImageClick}
            />

            {/* Imagens animadas */}
            <motion.div
              className="absolute top-10 right-5 -translate-y-1/2"
            >
              <Image
                src={pin}
                width={180}
                height={180}
                alt="Pin Vermelho"
              />
            </motion.div>
          </div>

          {/* Botões de navegação */}
          <div
            onClick={prevSlide}
            className="absolute top-1/2 left-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactLeft size={30} />
          </div>

          <div
            onClick={nextSlide}
            className="absolute top-1/2 right-5 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          >
            <BsChevronCompactRight size={30} />
          </div>

          {/* Indicadores dos slides */}
          <div className="flex justify-center py-4">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};