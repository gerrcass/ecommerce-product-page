import { useState } from "react"

import { GalleryComponent } from "./GalleryComponent"
import { Lightbox } from "../Lightbox/Lightbox"

const ImageGallery = ({ product }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <>
            <GalleryComponent
                product={product}
                setSelectedImage={setSelectedImage}
                setOpenModal={setOpenModal}
            />
            {openModal &&
                <Lightbox
                    setOpenModal={setOpenModal}
                    render={
                        <GalleryComponent
                            product={product}
                            selectedImage={selectedImage}
                            setOpenModal={setOpenModal}
                        />}
                />

            }
        </>
    )
}

export { ImageGallery }