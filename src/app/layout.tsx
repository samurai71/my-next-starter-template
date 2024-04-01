import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My NextJS Starter Template",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <Header />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Footer />
        </body>
      </html>
    </>
  );
}
