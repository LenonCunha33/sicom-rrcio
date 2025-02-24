"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Posso Abrir meu Comércio aos Feriados ?",
        answer: "A seção Feriados no Comércio fornece informações essenciais sobre os feriados em que o funcionamento do comércio pode ser alterado. A tabela detalha as datas e indica se as lojas estarão abertas ou fechadas, conforme a legislação vigente e convenções locais. Esta ferramenta é útil para que consumidores e comerciantes se planejem adequadamente, evitando transtornos. Para garantir uma operação eficiente e em conformidade, é importante observar as variações que podem ocorrer em feriados nacionais e regionais.",
    },
    {
        question: "Quais Benefícios Tenho como Associado?",
        answer: "Na Central do Associado do Sicomércio-VR, reunimos recursos vitais para o seu negócio. Aqui, você encontrará consultas de CNAE, defesa do contribuinte, entre outros recursos cruciais, para apoiar o seu sucesso empresarial. Nossa missão é simplificar e fortalecer a sua jornada como empresário, proporcionando acesso rápido e conveniente a ferramentas que fazem a diferença. Explore nossa central e otimize a gestão do seu negócio.",
    },
    {
        question: "O Que seria Contribuição Sindical?",
        answer: "A contribuição sindical para empresas é uma taxa anual obrigatória destinada a financiar as atividades do sindicato que representa a categoria econômica da empresa. Ela tem como objetivo garantir o funcionamento do sindicato em áreas como negociações coletivas, apoio legal e outras ações em defesa dos interesses das empresas no setor.",
    },
    {
        question: "O que é a Sicomércio Volta Redonda?",
        answer: "Criado em 02/06/1982, o Sindicato do Comércio Varejista de Volta Redonda - SICOMÉRCIO-VR, registrado na Federação do Comércio Varejista no Estado do Rio de Janeiro - Fecomércio/RJ e na Confederação Nacional do Comércio - CNC, tem como exigibilidade reconhecida para representar o Comércio Varejista de Bens, Prestação de Serviços e Turismo dentro do município de Volta Redonda. Com sede própria estabelecida na Rua Bernardo Ferraz,  nº 383, bairro Aterrado - Volta Redonda/RJ - CEP 27.213-020.",
    },
    {
        question: "O que são Convenções Coletivas de Trabalho ?",
        answer: "Na seção de Convenções Coletivas, disponibilizamos uma coletânea de acordos que moldaram o ambiente empresarial ao longo do tempo, organizadas em ordem cronológica para sua conveniência. Ao selecionar a convenção desejada, um breve cadastro será solicitado, permitindo que você faça o download do documento e tenha acesso às informações relevantes para a sua empresa. Entenda a evolução das relações trabalhistas e empresariais e otimize sua compreensão das regulamentações em vigor.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white mb-none">
            <div className="container">
                <div className="flex justify-center">
                    <span className="bg-[#004A99] text-white px-4 py-1 rounded-lg text-sm font-bold">
                        Perguntas Frequentes
                    </span>
                </div>
                <h2 className="section-title mt-5">
                    Dúvidas ?<br /> Nós Temos as <br /> <span className="text-[#FF9D00]">Respostas</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.question}
                            className="bg-white rounded-2xl border border-[#222222]/10 shadow-[0_7px_14px_#EAEAEA] p-6 cursor-pointer"
                            onClick={() => toggleFaq(index)}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleFaq(index)}
                            tabIndex={0}
                            role="button"
                            aria-expanded={selectedIndex === index}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-black">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus flex-shrink-0 transition-transform duration-300",
                                        selectedIndex === index && "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-6"
                                    >
                                        <p className="text-black/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}