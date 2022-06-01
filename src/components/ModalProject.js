import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Modal, Button, ModalBody, ModalHeader, ModalTitle, ModalFooter } from 'react-bootstrap';
import './Modal.css';

function ModalProject(props) {
  const showLive = props.showlive;
  const showGit = props.showgit
  return (
    <div>
        <Modal
            {...props}
            size="lg"
        >
            <ModalHeader>
              <br/>
              <ModalTitle className='modal-title'>{props.title}</ModalTitle>
              <button className='closeBtn' onClick={props.onHide}><FontAwesomeIcon icon={faX} /></button>
            </ModalHeader>
            <ModalBody>
            <h4>{props.smallTitle}</h4>

            <figure className='modal__pic-wrap' data-category={props.label}>
              <img src={props.src} alt='Travel' className='modal__img'></img>
            </figure>
            <br/>
            <p>{props.body}</p>
            <br/>
            </ModalBody>
            <ModalFooter>
              {showLive ? <a href={props.livepath} ><Button variant="outline-secondary" >&nbsp;Live Project&nbsp;</Button></a> : ''}
              {showGit ? <a href={props.livegit} ><Button variant="outline-primary">Git Repository</Button></a> : ''}
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalProject