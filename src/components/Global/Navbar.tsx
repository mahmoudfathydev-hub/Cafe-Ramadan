"use client"
import { navLinks } from "@/constants"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })
        navTween.fromTo('nav' , {backgroundColor : 'transparent' },{
            backgroundColor: '#00000050' , 
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        } )
    })
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Sobia" width={40} height={40} />
          <p>Sobia</p>
        </a>

        <ul className="flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.id} >
              <a href={`#${link.title.toLowerCase()}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


export default Navbar