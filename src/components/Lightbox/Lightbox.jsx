import React from "react"

import { Modal } from "../Modal/Modal"
import { LightboxClose } from "./LightboxClose"
import { LightboxCentered } from "./LightboxCentered"


const Lightbox = ({ render, setOpenModal }) => (
    <div onClick={() => setOpenModal(false)}>
        <Modal
            selector='#modal'
            setOpenModal={setOpenModal}
        >
            <LightboxCentered>
                <LightboxClose
                    setOpenModal={setOpenModal}
                >
                    {React.cloneElement(render, { wideLayout: true })}
                </LightboxClose>
            </LightboxCentered>
        </Modal>
    </div>
)

export { Lightbox }