import { useEffect, useState } from 'react'

import { FeaturedImage } from './FeaturedImage'
import { ThumbnailList } from './ThumbnailList'

const ImageGallery = (
    {
        images,
        selectedImage = images[0].thumbnail,
        setSelectedImage,
        wideLayout,
        onClick,
        width,
        height
    }) => {
    const [activeImage, setActiveImage] = useState(selectedImage)


    useEffect(() => (setSelectedImage && setSelectedImage(activeImage)), [activeImage])

    const getActiveImagePath = () => {
        const imgIndex = images.findIndex(img => img.thumbnail === activeImage)
        return images[imgIndex].large
    }
    const handleImageNav = (operation) => {
        const imgIndex = images.findIndex(img => img.thumbnail === activeImage)
        const nextImage = operation === 'next' ? images[imgIndex + 1] : images[imgIndex - 1]
        nextImage && setActiveImage(nextImage.thumbnail)
    }

    return (
        <div id="gallery-container">
            <FeaturedImage
                onClick={onClick}
                src={getActiveImagePath()}
                wideLayout={wideLayout}
                width={width}
                height={height}
                handleImageNav={handleImageNav}
            />
            <ThumbnailList
                images={images}
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                wideLayout={wideLayout}
            />
        </div>

    )
}

export { ImageGallery }