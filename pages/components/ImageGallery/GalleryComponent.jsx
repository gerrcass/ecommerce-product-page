import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Thumbnail } from './Thumbnail'
import { LightBoxImage } from '../Lightbox/LightBoxImage'

const GalleryComponent = ({ images, setOpenModal, selectedImageIndex = images[0].id, setSelectedImageIndex, lightBox = false }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(selectedImageIndex)

    useEffect(() => (setSelectedImageIndex && setSelectedImageIndex(activeImageIndex)), [activeImageIndex])

    const getActiveImageUrl = () => {
        const imageIndex = images.findIndex(image => image.id === activeImageIndex)
        return images[imageIndex].product
    }
    const handleImageChange = (operation) => {
        const imageIndex = images.findIndex(image => image.id === activeImageIndex)

        const nextImage = operation === 'next' ? images[imageIndex + 1] : images[imageIndex - 1]
        nextImage && setActiveImageIndex(nextImage.id)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={`${lightBox && 'mt-24'}`}>
            {lightBox ?
                <LightBoxImage
                    src={getActiveImageUrl()}
                    handleImageChange={handleImageChange}
                    width={500}
                    height={500}
                    setOpenModal={setOpenModal}
                /> :
                <Image
                    src={getActiveImageUrl()}
                    onClick={() => setOpenModal(true)}
                    width={400}
                    height={400}
                    className="mx-auto object-contain rounded-xl" alt='Product image' priority={true}
                />
            }
            <div className={`flex ${lightBox ? 'justify-around mx-10' : 'justify-between'} items-center mt-8`}>
                {images.slice(0, 4).map((image) => (
                    <Thumbnail
                        key={image.id}
                        image={image}
                        activeImageIndex={activeImageIndex}
                        setActiveImageIndex={setActiveImageIndex}
                    />
                ))}
            </div>
        </div>
    )
}

export { GalleryComponent }