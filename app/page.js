import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import { ScrollTargetProvider } from "@/components/ScrollComp";

export default function Home() {
    return (
        <div>
            <Landing />
            <ScrollTargetProvider>
                <Projects />
            </ScrollTargetProvider>
        </div>
    );
}
