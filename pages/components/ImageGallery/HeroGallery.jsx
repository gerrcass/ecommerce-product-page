import { useState } from "react"

import { ImageGallery } from "./ImageGallery"
import { Lightbox } from "../Lightbox/Lightbox"

const HeroGallery = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

    return (
        <>
            {/*ImageGallery: see util/tailwindWorkaround.js for arbitrary width/height */}
            <ImageGallery
                images={product.images}
                setSelectedImage={setSelectedImage}
                onClick={{ desktop: () => setOpenModal(true) }}
                width={{ mobile: 375, desktop: 400 }}
                height={{ mobile: 300, desktop: 400 }}

            />
            {openModal &&
                <Lightbox
                    setOpenModal={setOpenModal}
                    render={
                        <ImageGallery
                            images={product.images}
                            selectedImage={selectedImage}
                            width={{ desktop: 500 }}
                            height={{ desktop: 500 }}
                        />
                    }
                />

            }
        </>
    )
}

export { HeroGallery }