import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="shadow-lg fixed top-0 w-full bg-white z-10">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-neutral-800 font-bold">
          <img src="images/logo.png" className="h-6" alt="Quillami Logo" />
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <a href="#inicio" className="navbar-link">
            Inicio
          </a>
          <a href="#nosotros" className="navbar-link">
            Nosotros
          </a>
          <a href="#lugares" className="navbar-link">
            Lugares
          </a>
          <a href="#mission" className="navbar-link">
            Misión
          </a>
          <a href="#reels" className="navbar-link">
            Reels
          </a>
          <a href="#xPosts" className="navbar-link">
            X
          </a>
          <a href="#playlist" className="navbar-link">
            Playlist
          </a>
          <a href="#mapa" className="navbar-link">
            Mapa
          </a>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <button
            className="text-neutral-500 hover:text-neutral-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-full z-10 bg-white border-b border-gray-300 shadow-lg`}
      >
        <div className="container mx-auto py-8">
          <button className="text-neutral-500 hover:text-neutral-900 mx-4" onClick={toggleMenu}>
            {/* close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <ul>
            <li>
              <a
                onClick={toggleMenu}
                href="#inicio"
                className="mobile-navbar-link"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#nosotros"
                className="mobile-navbar-link"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#lugares"
                className="mobile-navbar-link"
              >
                Lugares
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#mission"
                className="mobile-navbar-link"
              >
                Misión
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#reels"
                className="mobile-navbar-link"
              >
                Reels
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#xPosts"
                className="mobile-navbar-link"
              >
                X
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#playlist"
                className="mobile-navbar-link"
              >
                Playlist
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#mapa"
                className="mobile-navbar-link"
              >
                Mapa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
