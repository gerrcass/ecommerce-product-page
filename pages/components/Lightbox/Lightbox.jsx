import { Modal } from "../Modal/Modal"

const Lightbox = ({ render, setOpenModal }) => {
    return (
        <div onClick={() => setOpenModal(false)}>
            <Modal selector='#modal'>
                {render}
            </Modal>
        </div>
    )
}

export { Lightbox }