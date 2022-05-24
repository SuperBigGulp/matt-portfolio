import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Modal, Button, ModalBody, ModalHeader, ModalTitle, ModalFooter } from 'react-bootstrap';
import './Modal.css';



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton>
          <ModalTitle id="contained-modal-title-vcenter">
            Modal heading
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onHide}>Close</Button>
        </ModalFooter>
      </Modal>
    );
}

function Cards() {

    const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
        <div className='cards'>
            <h1>Projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem onClick={() => setModalShow(true)} src='images/img-1.jpg' text='project 1 the quick brown fox' path='/'/>
                        <CardItem src='images/img-2.jpg' text='project 2 the quick brown fox' path='/'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/img-3.jpg' text='project 3 the quick brown fox' path='/'/>
                    
                        <CardItem src='images/img-1.jpg' text='project 4 the quick brown fox' path='/'/>
                    </ul>
                </div>
            </div>
        </div>
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}></MyVerticallyCenteredModal>
    </>
  )
}

export default Cards