import Link from 'next/link'

const PlaceCard = ({ imageSrc, title, subtitle, url, bgOpacity = 20 }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="place-card flex-wrap flex items-center justify-center py-8 px-6 relative rounded-2xl overflow-hidden min-h-72 aspect-square cursor-pointer"
    >
      <img
        src={imageSrc}
        alt=""
        className="absolute w-full h-full object-cover object-center -z-10 top-0 right-0 left-0 bottom-0 transition-transform duration-300"
      />
      <div
        className={`absolute bg-black w-full h-full top-0 right-0 left-0 bottom-0`}
        style={{ opacity: `${bgOpacity}%` }}
      />
      <div className="flex flex-col items-center z-10">
        <h4 className="text-4xl font-bold text-center text-yellow-200 mb-2">
          {title}
        </h4>
        <p className="text-white text-xl text-center">{subtitle}</p>
      </div>
    </Link>
  )
}

export default PlaceCard
