import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* Services Section */}
      <section>
        <ServicesSection />
      </section>

      {/* About Section */}
      <section className="bg-teal-950">
        <AboutSection />
      </section>

      {/* Testimonials Section */}
      <section></section>

      {/* Contact Details Section */}
      <section className="bg-teal-100 ">
        <div className="max-w-5xl mx-auto">
          <Contact />
        </div>
      </section>
    </Layout>
  );
}
