import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className=" px-5 md:px-14  text-white bg-gradient-conic bg-gradient-to-l">
            <Landing />
            <About/>
            <Projects />
            <Contact/>
        </div>
    );
}
