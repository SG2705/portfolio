import { FormattedMessage } from "react-intl";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import About from "@/components/sections/about";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
// import OpenSource from "@/components/sections/open-source";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

/**
 * Portfolio Page Structure
 */
function App() {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        <FormattedMessage id="ZKtRoA" defaultMessage="Skip to content" />
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        {/* <OpenSource /> */}
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
