import React from "react"
import { Modal } from "../Modal/Modal"

const Lightbox = ({ render, setOpenModal }) => {
    return (
        <div onClick={() => setOpenModal(false)}>
            <Modal selector='#modal'>
                {React.cloneElement(render, { lightBox: true })}
            </Modal>
        </div>
    )
}

export { Lightbox }