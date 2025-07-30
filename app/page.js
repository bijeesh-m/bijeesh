import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="   text-white bg-gradient-conic w-screen overflow-x-hidden ">
      <Landing />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
