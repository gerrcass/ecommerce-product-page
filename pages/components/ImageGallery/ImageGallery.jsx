import { useState } from "react"
import Image from "next/image"

import { Thumbnail } from './Thumbnail'

const ImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0].product)

    return (
        <div>
            <Image className="mx-auto object-contain rounded-xl" width={400} height={400} src={activeImage} alt='Logo' priority={true} />
            <div className="flex justify-between items-center mt-8">
                {images.slice(0, 4).map((image) => (
                    <Thumbnail
                        key={image.id}
                        image={image}
                        activeImage={activeImage}
                        setActiveImage={setActiveImage}
                    />
                ))}
            </div>
        </div>
    )
}

export { ImageGallery }