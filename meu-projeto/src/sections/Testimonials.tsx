"use client";
import avatar1 from "@/src/assets/AvatarFeriados.png";
import avatar2 from "@/src/assets/AvatarFeriados.png";
import avatar3 from "@/src/assets/AvatarFeriados.png";
import avatar4 from "@/src/assets/AvatarFeriados.png";
import avatar5 from "@/src/assets/AvatarFeriados.png";
import avatar6 from "@/src/assets/AvatarFeriados.png";
import avatar7 from "@/src/assets/AvatarFeriados.png";
import avatar8 from "@/src/assets/AvatarFeriados.png";
import avatar9 from "@/src/assets/AvatarFeriados.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano Na",
  },
  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano new",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano o",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano ovo",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano Nvo",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano Nov",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano No",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano ",
  },  {
    text: "Confraternização Universal (feriado Nacional",
    imageSrc: avatar1.src,
    name: "Feriado Nacional",
    username: "Ano Nov=",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={`group-${index}`}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={username || name} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Feriados</div>
          </div>
          <h2 className="section-title mt-5">Acesse os Feriados do Comércio</h2>
          <p className="section-description mt-5">
          A seção "Feriados no Comércio" fornece informações essenciais sobre os feriados em que o funcionamento do comércio pode ser alterado. A tabela detalha as datas e indica se as lojas estarão abertas ou fechadas, conforme a legislação vigente e convenções locais. Esta ferramenta é útil para que consumidores e comerciantes se planejem adequadamente, evitando transtornos. Para garantir uma operação eficiente e em conformidade, é importante observar as variações que podem ocorrer em feriados nacionais e regionais.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
