import Image from 'next/image'

const LightBoxImage = ({ src, setOpenModal, width, height }) => {

    return (
        <div className="relative">
            <button
                onClick={() => setOpenModal(false)}
                className="absolute -top-9 right-0 fill-white scale-150 hover:cursor-pointer"
                aria-label="Close modal"
            >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
            </button>
            <button
                type='button'
                onClick={() => console.log('Next clicked')}
                className="absolute top-1/2 transform -translate-y-1/2 -right-6 bg-white w-12 h-12 flex justify-center items-center rounded-full hover:cursor-pointer"
                aria-label="Next image"
            >
                <svg className='ml-1' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            </button>
            <button
                type='button'
                onClick={() => console.log('Previous clicked')}
                className="absolute top-1/2 transform -translate-y-1/2 -left-6 bg-white w-12 h-12 flex justify-center items-center rounded-full hover:cursor-pointer"
                aria-label="Previous image"
            >
                <svg className='mr-1' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            </button>
            <Image
                src={src}
                className="mx-auto object-contain rounded-xl select-none" alt='Product image' priority={true}
                width={width}
                height={height}
            />
        </div>
    )
}

export { LightBoxImage }