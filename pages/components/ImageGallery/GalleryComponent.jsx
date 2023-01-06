import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Thumbnail } from './Thumbnail'
import { LightBoxImage } from '../Lightbox/LightBoxImage'

const GalleryComponent = ({ product, setOpenModal, selectedImage = product.images[0].thumbnail, setSelectedImage, lightBox = false }) => {
    const [activeImage, setActiveImage] = useState(selectedImage)

    useEffect(() => (setSelectedImage && setSelectedImage(activeImage)), [activeImage])

    const getActiveImageUrl = () => {
        const img = product.images.findIndex(image => image.thumbnail === activeImage)
        return product.images[img].large
    }
    const handleImageChange = (operation) => {
        const img = product.images.findIndex(image => image.thumbnail === activeImage)
        const nextImage = operation === 'next' ? product.images[img + 1] : product.images[img - 1]
        nextImage && setActiveImage(nextImage.thumbnail)
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
                {product.images.slice(0, 4).map((image, index) => (
                    <Thumbnail
                        key={index}
                        thumbnailPath={image.thumbnail}
                        activeImage={activeImage}
                        setActiveImage={setActiveImage}
                    />
                ))}
            </div>
        </div>
    )
}

export { GalleryComponent }