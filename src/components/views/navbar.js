import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="shadow-lg fixed top-0 w-full bg-white z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="text-neutral-800 font-bold">
            Quillami
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" className="text-gray-500 hover:text-gray-900">
            Inicio
          </a>
          <a href="#aboutUs" className="text-gray-500 hover:text-gray-900">
            Nosotros
          </a>
          <a href="#places" className="text-gray-500 hover:text-gray-900">
            Lugares
          </a>
          <a href="#mission" className="text-gray-500 hover:text-gray-900">
            Misión
          </a>
          <a href="#reels" className="text-gray-500 hover:text-gray-900">
            Reels
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
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
          <button className="text-white text-right" onClick={toggleMenu}>
            &times;
          </button>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 block py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 block py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 block py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
