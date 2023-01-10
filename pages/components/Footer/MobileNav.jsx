import { useEffect, useRef } from "react"

const MobileNav = ({ setOpenModal }) => {
    const ref = useRef()

    useEffect(() => {
        const timer = setTimeout(() => ref.current.style.left = 0, 100);
        return () => clearTimeout(timer);
    }, [])

    return (

        <div
            ref={ref}
            onClick={(e) => e.stopPropagation()}
            style={{ transition: 'left .2s cubic-bezier(0.820, 0.085, 0.395, 0.895)' }}
            className={`relative top-0 -left-72  w-2/3 max-w-[375px] pt-5 pl-5 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]`}
        >
            <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="mb-10"
                aria-label="Close menu button"
            >
                <svg className="fill-neutral-darkgrayishblue transition duration-75 scale-95 hover:scale-100 active:scale-100" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
            </button>
            <ul className="flex flex-col space-y-4 text-base text-neutral-darkblue font-bold">
                <li><a href="#" className="inline-flex border-b-4 border-transparent transition hover:border-b-4 hover:border-primary-orange active:scale-105">Collections</a></li>
                <li><a href="#" className="inline-flex border-b-4 border-transparent transition hover:border-b-4 hover:border-primary-orange active:scale-105">Men</a></li>
                <li><a href="#" className="inline-flex border-b-4 border-transparent transition hover:border-b-4 hover:border-primary-orange active:scale-105">Women</a></li>
                <li><a href="#" className="inline-flex border-b-4 border-transparent transition hover:border-b-4 hover:border-primary-orange active:scale-105">About</a></li>
                <li><a href="#" className="inline-flex border-b-4 border-transparent transition hover:border-b-4 hover:border-primary-orange active:scale-105">Contact</a></li>
            </ul>
        </div>
    )
}

export { MobileNav }