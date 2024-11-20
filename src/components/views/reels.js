import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const InstagramEmbed = dynamic(
  () =>
    import('react-social-media-embed').then((module) => module.InstagramEmbed),
  { ssr: false }
)

const posts = [
  'https://www.instagram.com/reel/DCaS03eO23_',
  'https://www.instagram.com/reel/DCVW4DfNLvk',
  'https://www.instagram.com/reel/DA9Ne9KS8am',
  'https://www.instagram.com/reel/DA7Gup0s_kr',
  'https://www.instagram.com/reel/DA7AdmEMTOV',
  'https://www.instagram.com/reel/DA6_rh3s5Rr',
  'https://www.instagram.com/reel/DA6-yDss93I',
  'https://www.instagram.com/reel/DA6-OcHs3qz',
]

const Reels = () => {
  
  const [currentPage, setCurrentPage] = useState(0)
  const scrollRef = useRef(null)

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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView()
    }
  }, [currentPage])

  return (
    <section className="pt-20 opacity-0" id='reels' ref={boxRef}>
      <div className="container mx-auto px-4">
        <img src="/images/icons/ig.svg" className="block mx-auto mb-2" alt="" />
        <h5 className="text-xl text-center mb-2">Síguenos en Instagram</h5>
        <Link
          href="https://www.instagram.com/somosquillami24/"
          className=" block mb-8 hover:underline"
          target="_blank"
        >
          <h4 className="text-4xl font-semibold text-center ">
            @SomosQuillami24
          </h4>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, (currentPage + 1) * 3).map((post, index) => (
            <InstagramEmbed url={post} key={index} className="w-full" />
          ))}
        </div>
        {posts.length > (currentPage + 1) * 3 && (
          <button
            href="/"
            onClick={() => {
              setCurrentPage((page) => page + 1)
            }}
            className="px-6 py-3 mx-auto block mt-4 bg-black hover:bg-black/75 transition-colors duration-200 text-white font-medium rounded-3xl"
          >
            Ver Mas
          </button>
        )}
        <div ref={scrollRef} className="h-[150px] bg-transparent"></div>
      </div>
    </section>
  )
}

export default Reels
