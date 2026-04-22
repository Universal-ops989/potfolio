import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { CaseStudies } from "@/components/CaseStudies";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Approach />
        <FeaturedProjects />
        <CaseStudies />
        <Capabilities />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
