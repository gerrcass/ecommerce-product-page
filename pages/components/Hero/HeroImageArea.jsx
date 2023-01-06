import { ImageGallery } from "../ImageGallery/ImageGallery"

const HeroImageArea = (props) => {
    return (
        <div className="w-1/2 flex items-center justify-center">
            <ImageGallery {...props} />
        </div>
    )
}

export { HeroImageArea }