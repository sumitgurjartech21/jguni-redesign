 import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from  "@/components/Programs";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials  from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Programs/>
      <Features/>
      <About/>
      <Testimonials/>
      <CTA/>
      <Footer/>

    </main>
  );
}