import { ImageGallery } from "../ImageGallery/ImageGallery"
import { HeroText } from './HeroText'

const images = [
    {
        id: 1,
        product: '/images/image-product-1.jpg',
        thumbnail: '/images/image-product-1-thumbnail.jpg',
    },
    {
        id: 2,
        product: '/images/image-product-2.jpg',
        thumbnail: '/images/image-product-2-thumbnail.jpg',
    },
    {
        id: 3,
        product: '/images/image-product-3.jpg',
        thumbnail: '/images/image-product-3-thumbnail.jpg',
    },
    {
        id: 4,
        product: '/images/image-product-4.jpg',
        thumbnail: '/images/image-product-4-thumbnail.jpg',
    }
]

const Hero = () => {
    return (
        <div className="mx-auto max-w-xs md:max-w-[66rem] flex py-20 mb-20">
            <div className="w-1/2 flex items-center justify-center">
                <ImageGallery images={images} />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center px-16">
                <HeroText addToCard={() => console.log('Added to card')} />
            </div>
        </div >
    )
}

export { Hero }