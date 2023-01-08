import Image from "next/image"

const ImageResponsive = ({ src, onClick = undefined, width, height }) => {

    const mobileDimensions = width.mobile && height.mobile ? `w-[${width.mobile}px] h-[${height.mobile}px]` : ''
    const desktopDimensions = width.desktop && height.desktop ? `desktop:w-[${width.desktop}px] desktop:h-[${height.desktop}px]` : ''
    return (
        <div className={`relative ${mobileDimensions} ${desktopDimensions} overflow-hidden`}>
            <Image
                fill
                src={src}
                onClick={onClick}
                className="mx-auto object-cover desktop:object-contain desktop:rounded-xl select-none"
                alt='Product image'
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
            />
        </div>
    )
}


export { ImageResponsive }