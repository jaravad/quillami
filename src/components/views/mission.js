import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Mission = () => {
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
    <section className="py-20 bg-lime-100" id="mission">
      <div className="container mx-auto p-4 opacity-0" ref={boxRef}>
        <h3 className="text-6xl font-bold text-center mb-10">
          La Misión de Quillami
        </h3>
        <p className="text-xl max-w-3xl text-center mx-auto mb-6">
          Quillami tiene como misión mostrar a Barranquilla desde una mirada
          auténtica y vibrante, destacando su cultura, historia y esencia única
          a través de una plataforma transmedia creada por estudiantes de quinto
          semestre de Comunicación Social de la Universidad Minuto de Dios."
        </p>

        <div className="flex">
          <div className="w-1/5">
            <img src="/images/computer.svg" alt="" />
            <p className="text-center">Transmedia</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
