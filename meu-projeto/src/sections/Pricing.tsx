"use client";
import CheckIcon from "@/src/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "2024",
    monthlyPrice: 2024,
    buttonText: "Acesse",
    popular: false,
    inverse: false,
    features: [
      "---",
      "---",
      "---",
      "---",
      "---",
    ],
  },
  {
    title: "2025",
    monthlyPrice: 2025,
    buttonText: "Acesse",
    popular: true,
    inverse: true,
    features: [
      "---",
      "---",
      "---",
      "---",
      "---",
      "---",
      "---",
    ],
  },
  {
    title: "2023",
    monthlyPrice: 2023,
    buttonText: "Acesse",
    popular: false,
    inverse: false,
    features: [
      "---",
      "---",
      "---",
      "---",
      "---",
      "--",
      "---",
      "---",
      "---",
      "---",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Convenções Coletivas</h2>
          <p className="section-description mt-5">
          No nosso site, você encontra todas as Convenções Coletivas de Trabalho, com informações detalhadas sobre salários, benefícios, jornada de trabalho e outros direitos garantidos para os profissionais do comércio.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }, index) => (
              <div
                key={index} // Adicionando a key correta
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Atualizada
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
