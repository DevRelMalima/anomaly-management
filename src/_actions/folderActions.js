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

// Folders
export const createFolder = (folder) => {
    console.warn("folder", folder)
    return createItem('CREATE_FOLDER', BaseURL + '/api/folders', folder, 'Folder created', 'Failed to create folder.')    
}

export const updateFolder = (folder) => {
    return updateItem('UPDATE_FOLDER', BaseURL + '/api/folders', folder, 'Folder updated', 'Failed to update folder.', false)
}

export const deleteFolder = (folder) => {
    return deleteItem('DELETE_FOLDER', BaseURL + '/api/folders', folder, 'Folder deleted', 'Failed to delete folder.', false)
}

export const createFolderXX = (folder) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Folder created.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'success'}}})

        dispatch({type:'CREATE_FOLDER', folder})
    }
}

export const updateFolderBN = (folder) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Folder updated.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'success'}}})

        dispatch({type:'UPDATE_FOLDER', folder})
    }
}

export const deleteFolderML = (id) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Folder deleted.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'warning'}}})

        dispatch({type:'DELETE_FOLDER', id})
    }
}
