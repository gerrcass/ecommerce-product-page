
const FeaturedImageNav = ({ children, wideLayout, handleImageNav }) => {
    return (
        <div className="relative">
            <button
                type='button'
                onClick={() => handleImageNav('next')}
                className={`${wideLayout ? 'desktop:flex' : 'desktop:hidden'} absolute top-1/2 transform -translate-y-1/2 right-3 desktop:-right-6 bg-white w-12 h-12 flex justify-center items-center rounded-full transition hover:cursor-pointer hover:shadow-lg`}
                aria-label="Next image"
            >
                <svg className='ml-1' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            </button>
            <button
                type='button'
                onClick={() => handleImageNav('prev')}
                className={`${wideLayout ? 'desktop:flex' : 'desktop:hidden'} absolute top-1/2 transform -translate-y-1/2 left-3 desktop:-left-6 bg-white w-12 h-12 flex justify-center items-center rounded-full transition hover:cursor-pointer hover:shadow-lg`}
                aria-label="Previous image"
            >
                <svg className='mr-1' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
            </button>
            {children}
        </div>
    )
}

export { FeaturedImageNav }