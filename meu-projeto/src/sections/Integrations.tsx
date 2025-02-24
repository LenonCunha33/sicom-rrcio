import SicoIcon from "@/src/assets/logo (2).png";
import IntegrationColumn from "./IntegrationsColumn";

const integrations = [
    { name: 'Evento "Conecta" ', icon: SicoIcon, description: "Nossa Gerente Executiva Rose Carvalho, Participou do evento 'Conecta', Promovido Pelo Sebrae, Juntamente Com a Dretora Ana Paula da Rocha Gomes." },
    { name: "Inauguração Isoporzão", icon: SicoIcon, description: "Nossa Gerente Executiva Rose Carvalho, Esteve Prestigiando a Inauguração da Loja Isoporzão, No Aterrado - Volta Redonda" },
    { name: "Associação Comercial", icon: SicoIcon, description: "Nosso Presidente Levi Freitas, Foi um dos Homenageados pela Assocão Comercial, Industrial e Agropastoril de Volta Redonda." },
    { name: "Treinamento Pro Sind.", icon: SicoIcon, description: "Nossa Gerrente Executiva Rose Carvalho, Participou do treinamentoo do Pro Sind, no Sesc e Compratilhou ações realizzazdas no Sicomércio de Volta Redonda." },
    { name: 'Evento "Conecta" ', icon: SicoIcon, description: "Nossa Gerente Executiva Rose Carvalho, Participou do evento 'Conecta', Promovido Pelo Sebrae, Juntamente Com a Dretora Ana Paula da Rocha Gomes." },
    { name: "Inauguração Isoporzão", icon: SicoIcon, description: "Nossa Gerente Executiva Rose Carvalho, Esteve Prestigiando a Inauguração da Loja Isoporzão, No Aterrado - Volta Redonda" },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="Vitrine" className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <div className="flex justify-center">
                            <div className="tag">Informativos</div>
                        </div>
                        <h2 className="section-title mt-5">
                            Vitrine de <span className="text-[#FF9D00]">Notícias</span>
                        </h2>
                        <p className="section-description mt-5">
                            Na Central do Associado do Sicomércio-VR, reunimos recursos vitais para o seu negócio. Aqui, você encontrará consultas de CNAE, defesa do contribuinte, entre outros recursos cruciais, para apoiar o seu sucesso empresarial. Nossa missão é simplificar e fortalecer a sua jornada como empresário, proporcionando acesso rápido e conveniente a ferramentas que fazem a diferença. Explore nossa central e otimize a gestão do seu negócio.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn integrations={integrations.slice().reverse()} reverse className="hidden md:flex" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}