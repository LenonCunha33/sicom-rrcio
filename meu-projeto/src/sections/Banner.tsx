'use client';

import React, { useState, useEffect, useCallback } from "react"; // Removi useRef daqui
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Image1 from "@/src/assets/2.png";
import Image2 from "@/src/assets/3.png";
import Image3 from "@/src/assets/4.png";

export const Banner = () => {
  const slides = [
    { url: Image1, targetId: "hero-section" },
    { url: Image2, targetId: "section2" },
    { url: Image3, targetId: "section3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  // Função para ir para um slide específico
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Efeito para trocar slides automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex, nextSlide]);

  const handleImageClick = () => {
    const targetId = slides[currentIndex]?.targetId;
    if (!targetId) return;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="Inicio" className="relative max-w-[1400px] h-[780px] w-full m-auto py-16 px-4">
      <h2 className="section-title mb-10">
        Confira as Novidades do Seu <br className="sm:block hidden" /> Sicomércio
      </h2>

      {/* Container do banner */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {/* Animações de transição entre slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              className="w-full h-full rounded-2xl object-cover"
              src={slides[currentIndex].url}
              alt={`Banner ${currentIndex}`}
              layout="fill"
              objectFit="cover"
              onClick={handleImageClick}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores dos slides */}
      <div className="flex justify-center py-4">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
            } hover:text-blue-500 transition-colors`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};