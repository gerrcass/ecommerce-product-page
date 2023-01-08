import Image from "next/image"

const ImageResponsive = ({ src, onClick = undefined, width, height }) => {

    const mobileDimensions = width.mobile && height.mobile ? `w-[${width.mobile}px] h-[${height.mobile}px]` : ''
    const desktopDimensions = width.desktop && height.desktop ? `desktop:w-[${width.desktop}px] desktop:h-[${height.desktop}px]` : ''

    const cls = "relative " + mobileDimensions + " " + desktopDimensions + " overflow-hidden"
    //relative w-[375px] h-[300px] desktop:w-[400px] desktop:h-[400px] overflow-hidden
    //console.log(cls)
    return (
        <div className={cls}>
            <Image
                fill
                src={src}
                onClick={onClick}
                className="mx-auto object-cover desktop:object-contain desktop:rounded-xl select-none"
                alt='Product image'
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={true}
            />
            {/* <Image
                fill
                src={src}
                onClick={onClick}
                className="hidden desktop:block mx-auto object-contain desktop:rounded-xl select-none"
                alt='Product image'
                priority={true}
            />
            <Image
                fill
                src={src}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="block desktop:hidden mx-auto object-cover w-auto h-auto desktop:rounded-xl select-none"
                alt='Product image'
                priority={true}
            /> */}
        </div>
    )
}


export { ImageResponsive }