import Image from "next/image"

import useMediaQuery from '../../hooks/useMediaQuery'

const ImageResponsive = ({ src, onClick = undefined, width, height }) => {

    //Although the style guide requires widths of 1440px.👇
    const isNarrowScreen = useMediaQuery('(max-width: 1024px)');

    const handleClick = () => {
        //👇click event listener only when needed, hence return undefined
        if (!onClick) return undefined

        //const isMobile = window.matchMedia("(max-width: 1024px)").matches
        if (isNarrowScreen) {
            return onClick.mobile ? onClick.mobile() : undefined
        } else {
            return onClick.desktop ? onClick.desktop() : undefined
        }
    }

    const imageWidth = isNarrowScreen ? width?.mobile : width?.desktop

    //👇no need thanks to css aspect ratio property (5:4 mobile and 1:1 desktop)
    const imageHeight = isNarrowScreen ? height?.mobile : height?.desktop

    return (
        <div
            className={`relative overflow-hidden w-full aspect-[5/4] desktop:aspect-square`}
            style={{ minWidth: imageWidth, minHeight: imageHeight }}
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
        </div >
    )
}

export { ImageResponsive }