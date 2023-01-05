import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Thumbnail } from './Thumbnail'
import { LightBoxImage } from '../Lightbox/LightBoxImage'

const GalleryComponent = ({ images, setOpenModal, selectedImage = images[0].product, setSelectedImage, lightBox = false }) => {
    const [activeImage, setActiveImage] = useState(selectedImage)

    useEffect(() => setSelectedImage && setSelectedImage(activeImage), [activeImage])

    const handleModal = () => setOpenModal(true)

    return (
        <div onClick={(e) => e.stopPropagation()} className={`${lightBox && 'mt-24'}`}>
            {lightBox ?
                <LightBoxImage
                    src={activeImage}
                    width={500}
                    height={500}
                    setOpenModal={setOpenModal}
                /> :
                <Image
                    src={activeImage}
                    onClick={setOpenModal ? handleModal : undefined}
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
                        activeImage={activeImage}
                        setActiveImage={setActiveImage}
                    />
                ))}
            </div>
        </div>
    )
}

export { GalleryComponent }