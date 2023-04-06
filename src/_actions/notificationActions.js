import {BaseURL} from './../constants/URLs/urls';

function createItem(action, url, payload, successMessage, errorMessage)
{
    return (dispatch, getState,{axios}) => {
        //Make async call to backend
        axios.post(url,payload,{headers:{'Access-Control-Allow-Origin': '*'}})
            .then((result) => {                            
                dispatch({type:action, data:result.data});
                dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: successMessage,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'success'}}})              
            })
            .catch((ex) => {    
                console.error(ex);
                dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: errorMessage,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'error'}}})    
            });        
    }
}

function updateItem(action, url, payload, successMessage, errorMessage, appendIdToURL = true)
{
    return (dispatch, getState,{axios, enqueueSnackbar}) => {
        //Make async call to backend
        console.log(payload);
        axios.put(url +'/' +payload.id,payload,{headers:{'Access-Control-Allow-Origin': '*'}})
            .then((result) => {                            
              dispatch({type:action,  data:payload})
              dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: successMessage,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'success'}}})              
            })
            .catch((ex) => {
                console.error(ex);
                dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: errorMessage,
                options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'error'}}})
            });
        
    }
}

function deleteItem(action, url, payload, successMessage, errorMessage, appendIdToURL = true)
{
                
    return (dispatch, getState,{axios, enqueueSnackbar}) => {
        //Make async call to backend
        let payloadData = appendIdToURL? {} : payload;
        console.log(payloadData)

        axios.delete(appendIdToURL? url +'/' +payload: url +'/' +payload.id , {data: payloadData} ,{headers:{'Access-Control-Allow-Origin': '*'}})
            .then((result) => {                            
              dispatch({type:action,  data:appendIdToURL? payload: payload.id})
              dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: successMessage,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'success'}}})              
            })
            .catch((ex) => {
                console.error(ex);
                dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: errorMessage,
                options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'error'}}})
            });
        
    }
}

function fetchItems(action, url, payload, successMessage, errorMessage)
{
    return (dispatch, getState,{axios, enqueueSnackbar}) => {
        //Make async call to backend
        console.log(project);
        axios.get(url,{},{headers:{'Access-Control-Allow-Origin': '*'}})
            .then((result) => {                            
              dispatch({type:action, data:result.data})
              dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: successMessage,
                options: {
                    key: new Date().getTime() + Math.random(),
                    variant: 'success'}}})              
            })
            .catch((ex) => {
                console.error(ex);
                dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: errorMessage,
                options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'error'}}})
            });
        
    }
}

// Account Roles
export const updateNotification = (role) => {
    return updateItem('UPDATE_NOTIFICATION', BaseURL + '/api/usernotifications', role, 'Notification Seen', 'Failed to update notification.', false)
}

export const deleteNotification = (role) => {
    return deleteItem('DELETE_NOTIFICATION', BaseURL + '/api/usernotifications', role, 'Notification deleted', 'Failed to delete notification.', false)
}

export const clearNotifications = () => {
    return deleteItem('DELETE_NOTIFICATION', BaseURL + '/api/usernotifications/clear', '', 'Notification deleted', 'Failed to delete notification.', true)
}
