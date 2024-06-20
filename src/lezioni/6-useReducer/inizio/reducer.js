import {APRI_MODAL, CHIUDI_MODAL} from './actions'

const reducer = (state, action) => {
    if (action.type === APRI_MODAL) {
        console.log(action)
        return {
            ...state,
            isModalOpen: true,
            modalContent: action.payload
        }
    }

    if (action.type === CHIUDI_MODAL) {
        return {
            ...state,
            isModalOpen: false
        }
    }
    throw new Error('error', action.type)
}

export default reducer