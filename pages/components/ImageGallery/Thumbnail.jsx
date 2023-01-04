import Image from "next/image"

const Thumbnail = ({ image, activeImage, setActiveImage }) => {
    return (
        <div className={`relative w-20 h-20 rounded-xl overflow-hidden transition hover:scale-105 ${activeImage === image.product && 'border-2 border-primary-orange'}`}>
            <div className={`${activeImage === image.product && 'absolute inset-0 w-full h-full bg-primary-pale bg-opacity-75'}`} />
            <Image
                onClick={() => setActiveImage(image.product)}
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