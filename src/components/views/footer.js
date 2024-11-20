import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="images/logo.png" className="h-8" alt="Quillami Logo" />

          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#inicio" className="hover:underline me-4 md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:underline me-4 md:me-6">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#lugares" className="hover:underline me-4 md:me-6">
                Lugares
              </a>
            </li>
            <li>
              <a href="#mision" className="hover:underline me-4 md:me-6">
                Misión
              </a>
            </li>
            <li>
              <a href="#reels" className="hover:underline me-4 md:me-6">
                Reels
              </a>
            </li>
            <li>
              <a href="#mapa" className="hover:underline me-4 md:me-6">
                Mapa
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{' '}
          <Link href="/" className="hover:underline">
            Quillami™
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
