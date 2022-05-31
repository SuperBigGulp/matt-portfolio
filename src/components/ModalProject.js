import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalTitle, ModalFooter, CloseButton } from 'react-bootstrap';
import './Modal.css';

function ModalProject(props) {
  return (
    <div>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalHeader>
              <ModalTitle id="contained-modal-title-vcenter">{props.title}</ModalTitle>
              <button className='closeBtn' onClick={props.onHide}><FontAwesomeIcon icon={faX} /></button>
            </ModalHeader>
            <ModalBody>
            <h4>{props.smallTitle}</h4>

            <figure className='modal__pic-wrap' data-category={props.label}>
              <img src={props.src} alt='Travel' className='modal__img'></img>
            </figure>

            <p>{props.body}</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="outline-primary">Live Project</Button>
              <Button variant="outline-secondary">Repo</Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalProject