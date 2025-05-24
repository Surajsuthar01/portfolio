
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DevOpsTools from "@/components/DevOpsTools";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background devops-theme relative overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <DevOpsTools />
      <About />
      <Skills />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
