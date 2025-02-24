"use client";
import anonovo from "@/src/assets/Feriado/FeriadoAnoNovo.png";
import carnaval from "@/src/assets/Feriado/FeriadoCarnaval (1).png";
import saojorge from "@/src/assets/Feriado/FeriadoSaoJorge.png";
import trabalho from "@/src/assets/Feriado/FeriadoTrabalhador.png";
import santa from "@/src/assets/Feriado/FeriadoSextaFeiraSanta.png";
import tiradentes from "@/src/assets/Feriado/FeriadoDeTiradentes.png";
import santo from "@/src/assets/Feriado/FeriadoSSantoAntonio.png";
import corpus from "@/src/assets/Feriado/FeriadoCorpusChristi.png";
import vr from "@/src/assets/Feriado/FeriadodeVoltaRedonda.png";
import br from "@/src/assets/Feriado/Feriadodeindependencia.png";
import aparecida from "@/src/assets/Feriado/Feriadodenossasenhora.png";
import finados from "@/src/assets/Feriado/Feriadodefinados.png";
import republica from "@/src/assets/Feriado/Feriadoproclamacao.png";
import negra from "@/src/assets/Feriado/Feriadoconsiencia.png";
import natal from "@/src/assets/Feriado/FeriadoNatal.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const testimonials = [
  {
    text: "Celebração de ano novo, marcada por reflexões, festas e desejos de paz e prosperidade.",
    imageSrc: anonovo,
    name: "Dia 01 de janeiro",
    username: "Confraternização Universal (Feriado Nacional)",
  },
  {
    text: "Dia de folia, desfiles, fantasias e celebrações culturais, marcando o auge do Carnaval.",
    imageSrc: carnaval,
    name: "Dia 04 de março",
    username: "Terça-feira de Carnaval",
  },
  {
    text: "Data religiosa que relembra a crucificação de Jesus Cristo, com reflexão, jejum e missas.",
    imageSrc: santa,
    name: "Dia 18 de abril",
    username: "Sexta-Feira Santa",
  },
  {
    text: "Homenagem a Joaquim José da Silva Xavier, mártir da Inconfidência Mineira e símbolo da luta pela liberdade.",
    imageSrc: trabalho,
    name: "Dia 21 de abril",
    username: "Tiradentes (feriado nacional)",
  },
  {
    text: "Celebração ao santo guerreiro, padroeiro de cidades como o Rio de Janeiro, simbolizando coragem e proteção.",
    imageSrc: saojorge,
    name: "Dia 23 de abril",
    username: "Feriado de São Jorge",
  },
  {
    text: "Homenagem aos trabalhadores e suas conquistas, com reflexões sobre direitos e valorização do trabalho.",
    imageSrc: tiradentes,
    name: "Dia 01 de maio",
    username: "Dia do Trabalho (feriado nacional)",
  },
  {
    text: "Feriado municipal em homenagem ao santo casamenteiro, com celebrações religiosas e culturais.",
    imageSrc: santo,
    name: "Dia 13 de junho",
    username: "Santo Antônio (Padroeiro de Volta Redonda)",
  },
  {
    text: "Feriado religioso que celebra a Eucaristia, com missas e procissões em várias cidades.",
    imageSrc: corpus,
    name: "Dia 19 de junho",
    username: "Corpus Christi",
  },
  {
    text: "Celebração do município, marcada por eventos culturais e comemorativos.",
    imageSrc: vr,
    name: "Dia 17 de julho",
    username: "Aniversário de Volta Redonda",
  },
  {
    text: "Comemoração da libertação do Brasil do domínio português, com desfiles e celebrações cívicas.",
    imageSrc: br,
    name: "Dia 07 de setembro",
    username: "Independência do Brasil (feriado nacional)",
  },
  {
    text: "Homenagem à padroeira do Brasil, com missas e festividades religiosas.",
    imageSrc: aparecida,
    name: "Dia 12 de outubro",
    username: "Dia de Nossa Senhora Aparecida (Padroeira do Brasil, feriado nacional)",
  },
  {
    text: "Dia de homenagear e relembrar os entes queridos falecidos, com visitas a cemitérios e orações.",
    imageSrc: finados,
    name: "Dia 02 de novembro",
    username: "Finados (feriado nacional)",
  },
  {
    text: "Celebração da instauração da República no Brasil, com reflexões sobre a história política do país.",
    imageSrc: republica,
    name: "Dia 15 de novembro",
    username: "Proclamação da República (feriado nacional)",
  },
  {
    text: "Data de reflexão sobre a luta contra o racismo e a valorização da cultura afro-brasileira.",
    imageSrc: negra,
    name: "Dia 20 de novembro",
    username: "Dia da Consciência Negra (feriado nacional)",
  },
  {
    text: "Celebração do nascimento de Jesus Cristo, marcada por festas, reuniões familiares e troca de presentes.",
    imageSrc: natal,
    name: "Dia 25 de dezembro",
    username: "Natal (feriado nacional)",
  },
];

// Dividindo os feriados em três colunas equilibradas
const firstColumn = testimonials.slice(0, 5); // Primeiros 5 feriados
const secondColumn = testimonials.slice(5, 10); // Próximos 5 feriados
const thirdColumn = testimonials.slice(10); // Últimos 5 feriados

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const controls = useAnimation(); // Controles para a animação

  // Inicia a animação automaticamente ao carregar o componente
  useEffect(() => {
    controls.start({
      translateY: "-50%",
      transition: {
        duration: props.duration || 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  }, [controls, props.duration]);

  // Função para pausar a animação
  const handleHoverStart = () => {
    controls.stop(); // Pausa a animação
  };

  // Função para retomar a animação
  const handleHoverEnd = () => {
    controls.start({
      translateY: "-50%",
      transition: {
        duration: props.duration || 30,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    }); // Retoma a animação
  };

  return (
    <div className={props.className}>
      <motion.div
        animate={controls} // Usa os controles para a animação
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, groupIndex) => (
          <React.Fragment key={`group-${groupIndex}`}>
            {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
              <motion.div
                key={`${name}-${username}-${groupIndex}-${index}`} // Chave única combinando name, username, groupIndex e index
                className="card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onHoverStart={handleHoverStart} // Pausa a animação ao passar o mouse
                onHoverEnd={handleHoverEnd} // Retoma a animação ao retirar o mouse
              >
                <div className="w-full h-24 relative">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Imagem não disponível</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight text-sm text-gray-500">{username}</div>
                  <div className="mt-2 text-sm text-gray-700">{text}</div>
                </div>
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="Feriados" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center mt-10">
            <div className="tag">Feriados</div>
          </div>
          <h2 className="section-title mt-5">Acesse os Feriados do Comércio</h2>
          <p className="section-description mt-5">
            A seção Feriados no Comércio fornece informações essenciais sobre os feriados em que o funcionamento do comércio pode ser alterado.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={30}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={30}
          />
        </div>
      </div>
    </section>
  );
};