const IconCard = ({ text, src }) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/5 p-4">
      <img src={src} className="mb-3 w-full h-24 object-contain" alt={text} />
      <p className="text-center">{text}</p>
    </div>
  )
}

export default IconCard
