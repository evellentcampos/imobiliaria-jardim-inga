import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import SellPropertyCTA from "@/components/SellPropertyCTA";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import EmailContact from "@/components/EmailContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <FeaturedProperties />

        <SellPropertyCTA />

        <Testimonials />

        <AboutSection />

        <EmailContact />
      </main>

      <Footer />
    </>
  );
}