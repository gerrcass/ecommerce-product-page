import React from "react"
import { Modal } from "../Modal/Modal"
import { LightboxClose } from "./LightboxClose"

const Lightbox = ({ render, setOpenModal }) => (
    <div onClick={() => setOpenModal(false)}>
        <Modal selector='#modal'>
            <LightboxClose
                setOpenModal={setOpenModal}
            >
                {React.cloneElement(render, { wideLayout: true })}
            </LightboxClose>
        </Modal>
    </div>
)

export { Lightbox }