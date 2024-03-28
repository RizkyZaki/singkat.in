import React from "react";
import Navbar from "@/components/layout/Navbar";
import { InputShortener } from "@/components/InputShortener";
import Footer from "@/components/layout/Footer";
import Heading from "@/components/layout/Heading";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading />
      <main className="flex flex-col items-center justify-center max-h-screen">
        <InputShortener className="mt-4" />
        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
