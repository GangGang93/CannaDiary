import axios from 'axios';






/*=========== USER ==========*/

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                    .then(response => response.data)
    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                    .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }
}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
    return {
        type: 'GET_USER',
        payload: request
    }
}

export function userRegister(user){   
    const request = axios.post(`/api/register`,user)
                    .then(response => response.data);
    return {
        type: 'USER_REGISTER',
        payload: request
    }
} 

export function userContactUsForm(data){   
    const request = axios.post(`/api/contactus`,data)
                    .then(response => response.data);
    return {
        type: 'CONTACT_US_FORM',
        payload: request
    }
}

export function updateUser(data){
    const request = axios.post(`/api/user_update`,data)
                    .then(response => response.data);
    return {
        type:'UPDATE_USER',
        payload:request
    }
}

export function updateItemOwnerName(data){
    const request = axios.post(`/api/update_item_owner_name`,data)
                    .then(response => response.data);
    return {
        type:'UPDATE_ITEM_OWNER_NAME',
        payload:request
    }
} 

/*=========== JOURNAL ==========*/

export function addJournal(journal){

    const request = axios.post('/api/journal',journal)
    .then(response => response.data);
    

    return {
        type:'ADD_JOURNAL',
        payload:request
    }
}

export function addMessage(msg){

    const request = axios.post('/api/message',msg)
    .then(response => response.data);
    

    return {
        type:'ADD_MESSAGE',
        payload:request
    }
}

export function clearUpdateItem(){
    return {
        type:'CLEAR_UPDATE_ITEM',
        payload:{
            
        }
    }
}


export function clearNewJournal(){
    return {
        type:'CLEAR_NEW_JOURNAL',
        payload:{
                ok:false,            
                journalId:null            
        }
    }
}

export function clearNewMessage(){
    return {
        type:'CLEAR_NEW_MESSAGE',
        payload:{
                ok:false,            
                messageId:null            
        }
    }
}

export function clearDeleteItem(){
    return {
        type:'CLEAR_DELETE_ITEM',
        payload:{
            
        }
    }
}

export function getItem(id){
    const request = axios.get(`/api/getItem?id=${id}`)
                    .then(response => response.data);
    return {
        type:'GET_ITEM',
        payload:request
    }
} 

export function updateItem(data){
    const request = axios.post('/api/item_update', data)
                    .then(response => response.data);
    return {
        type:'UPDATE_ITEM',
        payload:request
    }
} 


export function getItems(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    const request = axios.get(`/api/items?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response=> { 
                            if(list){
                                return [...list, ...response.data]
                            }else{
                                return response.data;
                            }
                        }
                        )

    return { 
        type:'GET_ITEMS',
        payload:request
    }
}
