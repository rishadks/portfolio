import "@/assets/css/animate.min.css";
import "@/assets/css/bootstrap-icons.min.css";
import "@/assets/css/fontawesome.all.min.css";
import "@/assets/css/style.css";
import "@/assets/css/dark-mode.css";
import "@/assets/css/responsive.css";

import BackToTop from "@/components/backToTop";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import CopylLayout from "./copylLayout";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishad - Senior IT Desktop Support Engineer",
  description:
    "Senior IT Desktop Support Engineer | Expert in ITSM, Cloud Infrastructure, Cybersecurity & Endpoint Management | AI & Automation-Driven IT Solutions | Digital Transformation & Enterprise IT Optimization Leader | Process Improvement & Operational Efficiency Specialist | Cross-Functional Team Collaboration & Strategic IT Leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body>
        <CopylLayout>
          <Preloader />
          <BackToTop />
          <Header />
          {children}
          <Contact />
          <Footer />
        </CopylLayout>
      </body>
    </html>
  );
}
