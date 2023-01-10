import Image from "next/image"
import { getStyles } from '../../utils/tailwindWorkaround'

const ImageResponsive = ({ src, onClick = undefined, width, height }) => {

    const handleClick = () => {
        //👇click event listener only when needed, hence return undefined
        if (!onClick) return undefined

        /* 👇 button click handler code only runs on client (no need to check for window object)
        if (typeof window === "undefined") return */

        const isMobile = window.matchMedia("(max-width: 1024px)").matches
        if (isMobile) {
            return onClick.mobile ? onClick.mobile() : undefined
        } else {
            return onClick.desktop ? onClick.desktop() : undefined
        }
    }

    const mobileDimensions = width.mobile && height.mobile ? getStyles('mobileWidth', width.mobile) + ' ' + getStyles('mobileHeight', height.mobile) : ''
    const desktopDimensions = width.desktop && height.desktop ? getStyles('desktopWidth', width.desktop) + ' ' + getStyles('desktopHeight', height.desktop) : ''

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