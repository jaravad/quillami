import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Spotify = () => {
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
      id="playlist"
      className="spotify py-20 min-h-[500px] bg-no-repeat bg-center bg-cover opacity-0"
      ref={boxRef}
    >
      <div className="px-4 container mx-auto">
        <h4 className="text-center text-5xl md:text-7xl text-yellow-200 font-bold mb-8">
          Tu Playlist Ideal
        </h4>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/0EqgEBDbSEIg7MYL2kMl7k?utm_source=generator"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="max-w-md mx-auto"
        ></iframe>
      </div>
    </section>
  )
}

export default Spotify
