
export default function(state={},action){
    switch(action.type){
        case 'ADD_MESSAGE':
            return {
                ...state,
                newMessage:action.payload
            }
        case 'CLEAR_NEW_MESSAGE':
            return {
                ...state,
                newMessage:action.payload
            }
        case 'GET_JOURNAL':
            return {
                ...state,
                requested_Journal:action.payload
            }
        case 'UPDATE_JOURNAL':
            return {
                ...state,
                update_Journal:action.payload
            }
        case 'CLEAR_UPDATE_JOURNAL':
            return {
                ...state,
                update_Journal:action.payload
            }
        case 'UPDATE_JOURNAL_OWNER_NAME':
            return {
                ...state,
                update_Journal_owner_name:action.payload
            }
        case 'GET_JOURNALS':
            return { ...state, list:action.payload }
        case 'GET_JOURNALS_BY_ID':
            return { ...state, getJournalsByid:action.payload }
        case 'DELETE_JOURNAL':
            return { ...state, Journal_deleted:action.payload }
        case 'CLEAR_DELETE_JOURNAL':
            return { ...state, Journal_deleted:action.payload }        
        default:
            return state;
    }   
} 