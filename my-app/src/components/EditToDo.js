import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch} from "react-redux"

import { editodo } from '../Redux/Actions/TodoActions';
const Edite = ({el}) => {


  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  //const toggleAll = () => {
    //setNestedModal(!nestedModal);
    //setCloseAll(true);}

  const [EditText, setEditText] = useState(el.text);

const dispatch = useDispatch();

const Handledit=()=>{
    dispatch(editodo(el.id ,EditText))
    toggle()
}

  return (
    <div>
      <Button color="danger" onClick={toggle}>EDITE</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Edit a Task</ModalHeader>
        <ModalBody>
<input type='text'  onChange={(e=>(setEditText(e.target.value))  )} value={EditText} />        
  <br />
          
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Edit a task</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Handledit}>save</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edite