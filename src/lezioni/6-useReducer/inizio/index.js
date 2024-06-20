import React, { useReducer } from "react";
import Modal from "./modal";
import reducer from "./reducer";
import {APRI_MODAL, CHIUDI_MODAL} from './actions'

const initialState = {
  isModalOpen: false,
  modalContent: 'Eccomi, sono un Modal'
}

const Index = () => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const apriModal = () => {
    dispatch({type: APRI_MODAL, payload: 'Scemo chi legge'})
  }

  const chiudiModal = () => {
    dispatch({type: CHIUDI_MODAL})
  }

  return (
    <>
      <div>
        <button className="button" onClick={apriModal}>
          <h2>Show Modal</h2>
        </button>
        <Modal modalContent={state.modalContent} modalState={state.isModalOpen} chiudiModal={chiudiModal}/>
      </div>
    </>
  );
};

export default Index;
