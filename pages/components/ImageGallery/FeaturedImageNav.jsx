
const FeaturedImageNav = ({ children, wideLayout, handleImageNav }) => {
    return (
        <div className="relative">
            <button
                type='button'
                onClick={() => handleImageNav('next')}
                className={`${wideLayout ? 'desktop:flex' : 'desktop:hidden'} group z-10 flex absolute scale-90 desktop:scale-100 top-1/2 transform -translate-y-1/2 right-3 desktop:-right-6 bg-white w-12 h-12 justify-center items-center rounded-full transition hover:cursor-pointer hover:shadow-lg`}
                aria-label="Next image"
            >
                <svg className='ml-1 stroke-[4] desktop:stroke-[3] scale-90 desktop:scale-100 stroke-black group-hover:stroke-primary-orange transition' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" fill="none" fillRule="evenodd" /></svg>
            </button>
            <button
                type='button'
                onClick={() => handleImageNav('prev')}
                className={`${wideLayout ? 'desktop:flex' : 'desktop:hidden'} group z-10 flex absolute scale-90 desktop:scale-100 top-1/2 transform -translate-y-1/2 left-3 desktop:-left-6 bg-white w-12 h-12 justify-center items-center rounded-full transition hover:cursor-pointer hover:shadow-lg`}
                aria-label="Previous image"
            >
                <svg className='mr-1 stroke-[4] desktop:stroke-[3] scale-90 desktop:scale-100 stroke-black group-hover:stroke-primary-orange transition' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" fill="none" fillRule="evenodd" /></svg>
            </button>
            {children}
        </div>
    )
}

export { FeaturedImageNav }