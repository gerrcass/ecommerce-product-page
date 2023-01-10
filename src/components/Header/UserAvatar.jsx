import Image from "next/image"

const UserAvatar = () => {
    return (
        <div className="flex items-center justify-end -mr-[14px] desktop:-mr-4">
            <Image
                className="block ml-2 desktop:mr-4 desktop:ml-8 hover:cursor-pointer transition border-2 rounded-full border-transparent hover:border-2 hover:rounded-full hover:border-primary-orange hover:border-opacity-80 scale-[0.6] desktop:scale-100 active:scale-[0.62] desktop:active:scale-[1.02]"
                src='/images/image-avatar.png'
                alt='Logo'
                width={50}
                height={50}
                priority={true}
            />
        </div>
    )
}

export { UserAvatar }