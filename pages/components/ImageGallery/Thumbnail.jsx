import Image from "next/image"

const Thumbnail = ({ thumbnailPath, activeImage, setActiveImage }) => {
    return (
        <div className={`${activeImage === thumbnailPath && 'border-2 border-primary-orange'} relative w-20 h-20 rounded-xl overflow-hidden transition hover:scale-105 hover:cursor-pointer`}>
            <div className={`${activeImage === thumbnailPath && 'absolute inset-0 w-full h-full bg-primary-pale bg-opacity-75'}`} />
            <Image
                onClick={() => setActiveImage(thumbnailPath)}
                className="select-none"
                src={thumbnailPath}
                alt='Image thumbnail'
                width={80}
                height={80}
                priority={true}
            />
        </div>
    )
}

export { Thumbnail }