import { useState } from "react"

import { ImageGallery } from "./ImageGallery"
import { Lightbox } from "../Lightbox/Lightbox"

const HeroGallery = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

    return (
        <>
            <ImageGallery
                images={product.images}
                setSelectedImage={setSelectedImage}
                onClick={() => setOpenModal(true)}
                width={400}
                height={400}
            />
            {openModal &&
                <Lightbox
                    setOpenModal={setOpenModal}
                    render={
                        <ImageGallery
                            images={product.images}
                            selectedImage={selectedImage}
                            width={500}
                            height={500}
                        />
                    }
                />

            }
        </>
    )
}

export { HeroGallery }