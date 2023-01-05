import Image from "next/image"

const Thumbnail = ({ image, activeImageIndex, setActiveImageIndex }) => {
    return (
        <div className={`${activeImageIndex === image.id && 'border-2 border-primary-orange'} relative w-20 h-20 rounded-xl overflow-hidden transition hover:scale-105 hover:cursor-pointer`}>
            <div className={`${activeImageIndex === image.id && 'absolute inset-0 w-full h-full bg-primary-pale bg-opacity-75'}`} />
            <Image
                onClick={() => setActiveImageIndex(image.id)}
                className="select-none"
                src={image.thumbnail}
                alt='Image thumbnail'
                width={80}
                height={80}
                priority={true}
            />
        </div>
    )
}

export { Thumbnail }