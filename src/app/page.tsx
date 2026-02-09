
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/hero";
import Menu from "./components/menu";
import About from "./components/About";
import Art from "./components/Art";
import MenuItems from "./components/MenuItems";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  

  return (
    <main>
      <Hero />
      <Menu />
      <About />
      <Art />
      <MenuItems />
      <Contact />
    </main>
  );
}
