import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const OurName = () => {
  const boxRef = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const element = boxRef.current

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        immediateRender: false, // Prevents the animation from starting prematurely
        scrollTrigger: {
          trigger: element,
          start: 'top 50%', // Start animation when the element is 80% into the viewport
          end: 'top 30%', // Animation is triggered within this range
          toggleActions: 'play none none none', // Play animation once, do not reset
          // markers: true, // Optional: Adds debugging markers
        },
      }
    )
  }, [])

  return (
    <section
      id="nosotros"
      className="py-16 opacity-0 px-4 md:px-0 bg-yellow-50"
      ref={boxRef}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="px-4 mb-8 md:mb-0 flex flex-col">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              ¿Por qué
              <br />
              nos apodan
              <br />
              <span className="text-red-600">QUI</span>
              <span className="text-yellow-400">LLA</span>
              <span className="text-green-700">MI</span>?
            </h1>
            <p className="text-md md:text-xl mb-8">
              ¡Barranquilla es Quillami, papá! 🌞
            </p>
            <a
              href="#reels"
              className="px-6 self-center md:self-start py-3 bg-black hover:bg-black/75 transition-colors duration-200 text-white font-medium rounded-3xl"
            >
              Ver Reels
            </a>
          </div>
          <div className="w-full md:w-2/4 md:px-8">
            <img
              src="images/barranquilla.jpeg"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurName
