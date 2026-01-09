"use client";

import BackToTop from "@/components/backToTop";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Preloader from "@/components/preloader";
import CopylLayout from "./copylLayout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CopylLayout>
      <Preloader />
      <BackToTop />
      <Header />
      {children}
      <Contact />
      <Footer />
    </CopylLayout>
  );
}
