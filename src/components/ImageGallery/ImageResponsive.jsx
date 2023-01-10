import Image from "next/image"

const ImageResponsive = ({ src, onClick = undefined, width, height }) => {

    const handleClick = () => {
        //👇click event listener only when needed, hence return undefined
        if (!onClick) return undefined

        /* 👇 button click handler code only runs on client (no need to check for window object)
        if (typeof window === "undefined") return */

        //Although the style guide requires widths of 1440px.👇
        const isMobile = window.matchMedia("(max-width: 1024px)").matches
        if (isMobile) {
            return onClick.mobile ? onClick.mobile() : undefined
        } else {
            return onClick.desktop ? onClick.desktop() : undefined
        }
    }


    /* 
    https://tailwindcss.com/docs/content-configuration#dynamic-class-names

    Those classes must be declared in tailwind.config.js as 'safeList' because of Tailwind needs 
    class names as complete unbroken strings.
    */
    const mobileDimensions = width.mobile && height.mobile ? `w-[${width.mobile}px] h-[${height.mobile}px]` : ''
    const desktopDimensions = width.desktop && height.desktop ? `desktop:w-[${width.desktop}px] desktop:h-[${height.desktop}px]` : ''

    return (
        <div
            className={`relative overflow-hidden ${mobileDimensions} ${desktopDimensions}`}
        >
            <Image
                fill
                src={src}
                onClick={handleClick}
                className="mx-auto object-cover desktop:object-contain desktop:rounded-xl select-none"
                alt='Product image'
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
            />
        </div>
    )
}

export { ImageResponsive }