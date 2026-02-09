"use client" 
import { cocktailLists, mockTailLists } from "@/constants"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import gsap from "gsap"

function Menu() {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'tap 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        parallaxTimeline
        .from('#c-left-leaf' , {
            x: -100, y: 100
        })
        .from('#c-right-leaf' , {
            x: 100, y: 100
        })
    })
    return (
        <section id="cocktails" className="noisy h-[80vh]" >
            <Image src="/images/cocktail-left-leaf.png" width={200} height={200} alt="cocktail-left-leaf" id="c-left-leaf"/>
            <Image src="/images/cocktail-right-leaf.png" width={200} height={200} alt="cocktail-right-leaf" id="c-right-leaf"/>
            <div className="list ml-10 mr-10">
                <div className="popular">
                    <h2>Most Popular Cocktails</h2>
                    <ul>
                        {cocktailLists.map((cocktail) => (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.detail} <span className="pl-4"> | {cocktail.price}</span> </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Loved Cocktails</h2>
                    <ul>
                        {mockTailLists.map((mocktail) => (
                            <li key={mocktail.name}>
                                <div className="me-28">
                                    <h3>{mocktail.name}</h3>
                                    <p>{mocktail.detail} <span className="pl-4"> | {mocktail.price}</span> </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu