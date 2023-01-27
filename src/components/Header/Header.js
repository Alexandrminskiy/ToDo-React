import { Form } from '../Form/Form'
import React, { useState } from 'react'
import { Modal } from '../Modal/Modal';

let Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header className='d-flex justify-content-center'>
      <button className='btn btn-primary' onClick={handleOpenModal}>Open modal</button>

      <Modal closeModal={handleCloseModal} isOpen={isModalOpen}>
        <Form closeModal={handleCloseModal} />
      </Modal>
    </header>
  )
}

Header = React.memo(Header);

export { Header }
