import { useState } from "react"

import { GalleryComponent } from "./GalleryComponent"
import { Lightbox } from "../Lightbox/Lightbox"

const ImageGallery = ({ images }) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

    return (
        <>
            <GalleryComponent
                images={images}
                setSelectedImage={setSelectedImage}
                setOpenModal={setOpenModal}
            />
            {openModal &&
                <Lightbox
                    setOpenModal={setOpenModal}
                    selectedImage={selectedImage}
                    render={
                        <GalleryComponent
                            images={images}
                            selectedImage={selectedImage}
                            setOpenModal={setOpenModal}
                            lightBox={true}
                        />}
                />

            }
        </>
    )
}

export { ImageGallery }