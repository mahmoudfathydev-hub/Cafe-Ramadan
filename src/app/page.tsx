
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  

  return (
    <main>
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}
