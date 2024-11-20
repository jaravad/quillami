import Link from 'next/link'

const Hero = () => {
  return (
    <div
      id="home"
      className="hero h-screen min-h-[600px] bg-cover bg-center bg-no-repeat bg-zinc-700 flex items-center justify-center"
    >
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
