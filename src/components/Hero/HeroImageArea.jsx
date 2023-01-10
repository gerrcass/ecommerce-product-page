import { HeroGallery } from "../ImageGallery/HeroGallery"

const HeroImageArea = (props) => {
    return (
        <div className="desktop:w-1/2 flex items-center justify-center">
            <HeroGallery {...props} />
        </div>
    )
}

export { HeroImageArea }