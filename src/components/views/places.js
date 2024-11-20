import PlaceCard from '../components/place-card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Places = () => {
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
    <section className="py-20 opacity-0" id="places" ref={boxRef}>
      <div className="container mx-auto px-4">
        <h2 className="font-medium text-4xl text-center mb-8">
          Lugares con alma
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PlaceCard
            title="Casa del Carnaval"
            subtitle='"El Corazón del Carnaval"'
            url="https://www.instagram.com/reel/DA9Ne9KS8am/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            imageSrc="images/sillas.jpg"
          />
          <PlaceCard
            title="¡Quillami te llama!"
            subtitle='"Vale mía, Barranquilla está a un click!"'
            url="https://x.com/QuillaMi22"
            imageSrc="images/logo-yellow.jpeg"
            bgOpacity={45}
          />
          <PlaceCard
            title="Catedral Metropolitana"
            subtitle='"Fe y Belleza en el Centro"'
            url="https://www.instagram.com/reel/DA6-yDss93I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            imageSrc="images/catedral.jpeg"
            bgOpacity={45}
          />
        </div>
      </div>
    </section>
  )
}

export default Places
