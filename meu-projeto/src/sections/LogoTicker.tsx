"use client";
import fecomercio from "@/src/assets/FecomercioLogo.png";
import sesc from "@/src/assets/SescLogo.png";
import senac from "@/src/assets/Senac Logo.png";
import sicomercio from "@/src/assets/SicomercioLogo.png";
import estacio from "@/src/assets/estacioLogo.png";
import eckos from "@/src/assets/eckosLogo (1).png";
import unifoa from "@/src/assets/unifoaLogo.png";
import ugb from "@/src/assets/ugbLogo.png";
import Jucerja from "@/src/assets/JucerjaLogo (1).png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white mt-20">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={fecomercio}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={sicomercio}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={senac}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={sesc}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={estacio}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={eckos}
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src={unifoa}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ugb}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Jucerja}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src={sicomercio}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={estacio}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={senac}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};