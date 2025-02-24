"use client";

import Image from "next/image";
import { type IntegrationsType } from "@/src/sections/Integrations";
import { twMerge } from "tailwind-merge";
import { motion, useAnimation } from "framer-motion";
import { Fragment, useEffect } from "react";

export default function IntegrationsColumn(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  const controls = useAnimation(); // Controles para a animação

  // Inicia a animação automaticamente ao carregar o componente
  useEffect(() => {
    controls.start({
      y: reverse ? 0 : "-50%",
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, reverse]); // Dependências para garantir que a animação seja reiniciada se `reverse` mudar

  // Função para pausar a animação
  const handleHoverStart = () => {
    controls.stop(); // Pausa a animação
  };

  // Função para retomar a animação
  const handleHoverEnd = () => {
    controls.start({
      y: reverse ? 0 : "-50%",
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    }); // Retoma a animação
  };

  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={controls} // Usa os controles para a animação
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, groupIndex) => (
        <Fragment key={`group-${groupIndex}`}>
          {integrations.map((integration, index) => (
            <motion.div
              key={`${integration.name}-${groupIndex}-${index}`} // Chave única combinando name, groupIndex e index
              className="bg-[#FFF] border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] p-6 cursor-pointer"
              onHoverStart={handleHoverStart} // Pausa a animação ao passar o mouse
              onHoverEnd={handleHoverEnd} // Retoma a animação ao retirar o mouse
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  className="size-24"
                  width={96}
                  height={96}
                />
              </div>
              <h3 className="section-title text-3xl">
                {integration.name}
              </h3>
              <p className="text-center text-black mt-2">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}