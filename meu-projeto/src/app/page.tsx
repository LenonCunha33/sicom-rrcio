import { Header } from "@/src/sections/Header";
import { Banner } from "@/src/sections/Banner";
import { Hero } from "@/src/sections/Hero";
import { LogoTicker } from "@/src/sections/LogoTicker";
import { ProductShowcase } from "@/src/sections/ProductShowcase";
import { Pricing } from "@/src/sections/Pricing";
import { Testimonials } from "@/src/sections/Testimonials";
import Faqs from "@/src/sections/faqs";
import Integrations from "../sections/Integrations";
import { Footer } from "@/src/sections/Footer";
import Business from "../sections/Business";

export default function Home() {
  return (
    <>
    {/* NavBar  */}
      <Header />

      {/* Banner de Novidades */}
      <Banner />

      {/* Empresas Parceiras */}
      <LogoTicker />

      {/* Banner de Fotos do Local */}
      <ProductShowcase />

      {/* Noticias + Vitrine dos Associados */}
      <Integrations />

      {/* Feriados */}
      <Testimonials />

     {/* Convenções Coletivas + Serviços e Soluções */}
      <Pricing />

      {/* Central do Associado + Cadastro de Vagas */}
      <Business />

      {/* Vagas Disponíveis */}
      <Hero />

      {/* Perguntas Frequentes */}
      <Faqs />

      {/* Empresas Parceiras */}
      <LogoTicker />

      {/* Footer */}              
      <Footer />
    </>
  );
}
