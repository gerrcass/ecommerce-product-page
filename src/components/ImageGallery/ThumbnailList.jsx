import { Thumbnail } from "./Thumbnail"

const ThumbnailList = ({ images, activeImage, setActiveImage, wideLayout }) => (
    <div className={`hidden desktop:flex ${wideLayout ? 'justify-around mx-10' : 'justify-between'} items-center mt-8`}>
        {images.slice(0, 4).map((image, index) => (
            <Thumbnail
                key={index}
                onClick={() => setActiveImage(image.thumbnail)}
                thumbnailPath={image.thumbnail}
                activeImage={activeImage}
            />
        ))}
    </div>
)

export { ThumbnailList }