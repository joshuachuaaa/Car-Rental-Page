import KeyFeatures from "@/components/features";
import Hero from "@/components/Hero";
import PhoneApp from "@/components/PhoneApp";
import DriveNow from "@/components/DriveNow";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <Hero/>
      <PhoneApp/>
      <KeyFeatures/>
      <DriveNow/>
      <Footer/>
    </main>
  );
}
