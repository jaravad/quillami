import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(()=>{
    if(videoRef.current) {
      videoRef.current.play()
    }
  }, [videoRef.current])
  return (
    <div
      id="home"
      className="hero relative h-screen min-h-[600px] bg-cover bg-center bg-no-repeat bg-zinc-700 flex items-center justify-center"
    >
      <video
        className="absolute w-full h-full object-cover object-center -z-20"
        loop
        muted
        autoPlay
        ref={videoRef}
      >
        <source
          src="videos/carnaval-video-compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div className='bg-black/60 absolute w-full h-full -z-10'/>
      <div className="max-w-lg w-4/5 logo flex flex-col items-center">
        <img src="images/logo.png" className="w-full" alt="logo" />
        <Link
          href="/"
          className="px-6 py-2 bg-orange-600 hover:bg-orange-500 transition-colors duration-200 text-white font-medium rounded-3xl"
        >
          Explora ahora
        </Link>
      </div>
    </div>
  )
}

export default Hero
