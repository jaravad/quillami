'use client'
import Hero from '@/components/views/hero'
import Mission from '@/components/views/mission'
import Navbar from '@/components/views/navbar'
import OurName from '@/components/views/our-name'
import Places from '@/components/views/places'
import Reels from '@/components/views/reels'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurName />
      <Places />
      <Mission />
      <Reels/>
    </>
  )
}
