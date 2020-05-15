
export default function(state={},action){
    switch(action.type){
        case 'USER_REGISTER': 
            return {
                ...state,
                register:action.payload.success,
                user:action.payload.user
            }
        case 'UPDATE_USER':
            return {
                ...state,
                updateProfile:action.payload.success,
                user:action.payload.user
            }
        case 'CONTACT_US_FORM':
            return {
                ...state,
                contactus:action.payload                                
            }
        case 'USER_LOGIN':
            return {...state,login:action.payload}
        case 'USER_AUTH':
            return {...state,login:action.payload}
        default:
            return state;
    } 
}