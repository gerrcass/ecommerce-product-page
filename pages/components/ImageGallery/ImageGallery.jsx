import { useState } from "react"

import { GalleryComponent } from "./GalleryComponent"
import { Lightbox } from "../Lightbox/Lightbox"

const ImageGallery = ({ images }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    return (
        <>
            <GalleryComponent
                images={images}
                setSelectedImageIndex={setSelectedImageIndex}
                setOpenModal={setOpenModal}
            />
            {openModal &&
                <Lightbox
                    setOpenModal={setOpenModal}
                    render={
                        <GalleryComponent
                            images={images}
                            selectedImageIndex={selectedImageIndex}
                            setOpenModal={setOpenModal}
                        />}
                />

            }
        </>
    )
}

export { ImageGallery }