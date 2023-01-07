import Image from "next/image"

//Alternatives: Window.innerWidth, Window.matchMedia(), resize listener, etc
const ImageClick = ({ src, onClick, width, height }) => (
    <>
        <Image
            src={src}
            onClick={onClick}
            width={width}
            height={height}
            className="hidden desktop:block mx-auto object-contain desktop:rounded-xl select-none" alt='Product image' priority={true}
        />
        <Image
            src={src}
            width={width}
            height={height}
            className="block desktop:hidden mx-auto object-contain desktop:rounded-xl select-none" alt='Product image' priority={true}
        />
    </>
)


export { ImageClick }