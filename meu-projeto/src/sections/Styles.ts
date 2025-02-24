const styles = {
    boxWidth: "xl:max-w-[1280px] w-full", // Largura máxima do conteúdo

    // Títulos com gradiente
    heading2: "font-poppins xs:text-[48px] text-[40px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text",

    // Parágrafos
    paragraph: "font-poppins font-normal text-black text-[18px] leading-[30.8px]",

    // Flexbox utilitários
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",

    // Espaçamentos
    paddingX: "sm:px-16 px-6", // Padding horizontal
    paddingY: "sm:py-16 py-6", // Padding vertical
    padding: "sm:px-16 px-6 sm:py-12 py-4", // Padding geral

    marginX: "sm:mx-16 mx-6", // Margem horizontal
    marginY: "sm:my-16 my-6", // Margem vertical
};

export const layout = {
    // Seção padrão
    section: `flex md:flex-row flex-col ${styles.paddingY}`,

    // Seção com ordem reversa
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    // Imagem à direita
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

    // Imagem à esquerda
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    // Informações da seção
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;