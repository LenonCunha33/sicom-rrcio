import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sindicato Do Comércio Varejista de Volta Redonda",
  description: "Modelo Criado Por Lenon Alexandre da Cunha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#FFFFFF]")}>
        {children}
      </body>
    </html>
  );
}
