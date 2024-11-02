import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "./color.css";
import { HeaderSection } from "../app-sections/Header";
import { FooterSection } from "../app-sections/Footer";
// import { MainSection } from "./app-sections/Main";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Inversiones Boara",
  description:
    "Bienvenidos a Inversiones Boara, tienda especializada en todo tipo de arreglos para cualquier ocasión ya sea para cumpleaños, aniversarios, desayunos sorpresa, Babyshower y más, Todo lo que decees lo encontrarás aquí.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
