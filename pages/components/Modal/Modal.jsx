import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const ModalCentered = ({ children }) => (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center desktop:p-0">
                {children}
            </div>
        </div>
    </div >
)

const Modal = ({ children, selector }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [selector])

    return mounted ? createPortal(<ModalCentered>{children}</ModalCentered>, document.querySelector(selector)) : null
}

export { Modal }