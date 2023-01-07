import { FeaturedImageNav } from "./FeaturedImageNav"
import { ImageClick } from "./ImageClick"

const FeaturedImage = ({ onClick, src, width, height, handleImageNav, wideLayout = false }) => (
    <FeaturedImageNav
        handleImageNav={handleImageNav}
        wideLayout={wideLayout}
    >
        <ImageClick
            src={src}
            onClick={onClick}
            width={width}
            height={height}
        />
    </FeaturedImageNav>
)

export { FeaturedImage }