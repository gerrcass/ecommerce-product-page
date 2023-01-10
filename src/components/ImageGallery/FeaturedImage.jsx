import { FeaturedImageNav } from "./FeaturedImageNav"
import { ImageResponsive } from "./ImageResponsive"

const FeaturedImage = ({ onClick, src, width, height, handleImageNav, wideLayout = false }) => (
    <FeaturedImageNav
        handleImageNav={handleImageNav}
        wideLayout={wideLayout}
    >
        <ImageResponsive
            src={src}
            onClick={onClick}
            width={width}
            height={height}
        />
    </FeaturedImageNav>
)

export { FeaturedImage }