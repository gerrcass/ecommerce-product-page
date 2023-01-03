import Image from "next/image"

const ImageGallery = () => {
    return (
        <div className="w-1/2 flex items-center justify-center">
            <div className="">
                <Image className="mx-auto object-contain rounded-xl" width={400} height={400} src='/images/image-product-1.jpg' alt='Logo' priority={true} />
                <div className="flex justify-between items-center mt-8">
                    <div className="w-20 h-20 bg-yellow-200 rounded-xl"></div>
                    <div className="w-20 h-20 bg-blue-300 rounded-xl"></div>
                    <div className="w-20 h-20 bg-red-300 rounded-xl"></div>
                    <div className="w-20 h-20 bg-orange-300 rounded-xl"></div>
                </div>
            </div>
        </div>

    )
}

export { ImageGallery }