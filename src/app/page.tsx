
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/hero";
import Menu from "./components/menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  

  return (
    <main>
      <Hero />
      <Menu />
    </main>
  );
}
