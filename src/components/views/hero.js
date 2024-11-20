import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [videoRef.current])

  return (
    <div
      id="inicio"
      className="hero relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat bg-zinc-700 flex items-center justify-center"
    >
      <video
        className="absolute w-full h-full object-cover object-center -z-20"
        loop
        muted
        autoPlay
        ref={videoRef}
      >
        <source src="videos/carnaval-video-compressed.mp4" type="video/mp4" />
      </video>
      <div className="bg-black/60 absolute w-full h-full -z-10" />
      <div className="max-w-lg w-4/5 logo flex flex-col items-center">
        <img src="images/logo.png" className="w-full" alt="logo" />
        <a
          href="#inicio"
          className="px-6 py-2 bg-orange-600 hover:bg-orange-500 transition-colors duration-200 text-white font-medium rounded-3xl"
        >
          Explora ahora
        </a>
      </div>
      <div className="absolute py-2.5 w-full bottom-0 bg-yellow-100">
        <blockquote className="px-4 mx-auto container text-center italic max-w-2xl">
          "Barranquilla en su punto, tierra de la cumbia y el sabor, donde se goza la vida con el alma y el corazón." "Barranquilla en su punto - <strong>Joe Arroyo</strong>"
        </blockquote>
      </div>
    </div>
  )
}

export default Hero
