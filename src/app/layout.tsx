import type { Metadata } from "next";
import "./globals.css";
import "./color.css";
import { HeaderSection } from "@/app-sections/Header";
import { FooterSection } from "@/app-sections/Footer";

export const metadata: Metadata = {
  title: "Inversiones Boara",
  description:
    "Bienvenidos a Inversiones Boara, tienda especializada en todo tipo de arreglos para cualquier ocasión ya sea para cumpleaños, aniversarios, desayunos sorpresa, Babyshower y más, Todo lo que decees lo encontrarás aquí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
