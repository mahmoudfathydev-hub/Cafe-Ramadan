"use client";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.07,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0,
      )
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0,
      );
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJTO</h1>

        <Image
          src="/images/hero-left-leaf.png"
          alt="hero-left-leaf"
          width={200}
          height={200}
          className="left-leaf"
        />
        <Image
          src="/images/hero-right-leaf.png"
          alt="hero-right-leaf"
          width={200}
          height={200}
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Fresh. Tasty.</p>
              <p className="subtitle">
                Sip the Spirit <br /> Of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
