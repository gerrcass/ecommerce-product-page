import React from "react"

const LightboxClose = ({ children, setOpenModal }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="relative mt-16">
            <button
                onClick={() => setOpenModal(false)}
                className="absolute -top-9 right-0 fill-white"
                aria-label="Close modal"
            >
                <svg className="scale-[1.4] hover:scale-[1.5] active:scale-[1.6] fill-white hover:fill-primary-orange transition" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg>
            </button>
            {children}
        </div>
    )
}

export { LightboxClose }