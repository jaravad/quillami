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
          <a href="#inicio" className="text-neutral-800 font-bold">
            Quillami
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#inicio" className="text-gray-500 hover:text-gray-900">
            Inicio
          </a>
          <a href="#nosotros" className="text-gray-500 hover:text-gray-900">
            Nosotros
          </a>
          <a href="#lugares" className="text-gray-500 hover:text-gray-900">
            Lugares
          </a>
          <a href="#mission" className="text-gray-500 hover:text-gray-900">
            Misión
          </a>
          <a href="#reels" className="text-gray-500 hover:text-gray-900">
            Reels
          </a>
          <a href="#mapa" className="text-gray-500 hover:text-gray-900">
            Mapa
          </a>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <button
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
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
        <div className="container mx-auto px-4 py-8">
          <button className="text-gray-600" onClick={toggleMenu}>
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
                className="text-gray-600 block py-3 hover:text-gray-900"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#nosotros"
                className="text-gray-600 block py-3 hover:text-gray-900"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#lugares"
                className="text-gray-600 block py-3 hover:text-gray-900"
              >
                Lugares
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#mission"
                className="text-gray-600 block py-3 hover:text-gray-900"
              >
                Misión
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#reels"
                className="text-gray-600 block py-3 hover:text-gray-900"
              >
                Reels
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                href="#mapa"
                className="text-gray-600 block py-3 hover:text-gray-900"
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
