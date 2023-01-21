import React from "react"

import { Modal } from "../Modal/Modal"

const Drawer = ({ render, setOpenModal }) => {
    return (
        <div onClick={() => setOpenModal(false)}>
            <Modal
                selector='#modal'
                setOpenModal={setOpenModal}
            >
                <nav className="relative z-50 block md:hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex justify-start w-[375px] min-h-full select-none">
                            {React.cloneElement(render, { setOpenModal })}
                        </div>
                    </div>
                </nav >
            </Modal>
        </div>


    )
}

export { Drawer }