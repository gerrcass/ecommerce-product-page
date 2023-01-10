import React from "react"
import { Modal } from "../Modal/Modal"

const MobileMenu = ({ children, setOpenModal }) => (
    <div onClick={() => setOpenModal(false)}>
        <Modal
            selector='#modal'
            setOpenModal={setOpenModal}
        >
            {children}
        </Modal>
    </div>
)

export { MobileMenu }