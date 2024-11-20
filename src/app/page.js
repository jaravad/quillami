'use client'
import Hero from '@/components/views/hero'
import Mission from '@/components/views/mission'
import Navbar from '@/components/views/navbar'
import OurName from '@/components/views/our-name'
import Places from '@/components/views/places'
import Reels from '@/components/views/reels'
import XPosts from '@/components/views/x-posts'
import Map from '@/components/views/map'
import Footer from '@/components/views/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurName />
      <Places />
      <Mission />
      <Reels/>
      <XPosts />
      <Map/>
      <Footer />
    </>
  )
}
