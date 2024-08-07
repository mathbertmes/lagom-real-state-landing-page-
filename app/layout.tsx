import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import imagesResult from "@/lib/image-results";
import { MenuModalProvider } from "@/providers/menu-modal-provider";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const image = await imagesResult()
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider images={image}/>
        <MenuModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
