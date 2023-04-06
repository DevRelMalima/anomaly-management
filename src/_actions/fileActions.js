import {BaseURL} from './../constants/URLs/urls';

export const createFile = (file) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'File Added.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'success'}}})

        dispatch({type:'CREATE_FILE', file})
    }
}

export const updateFile = (file) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'File updated.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'success'}}})

        dispatch({type:'UPDATE_FILE', file})
    }
}

export const deleteFile = (id) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'File deleted.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'warning'}}})

        dispatch({type:'DELETE_FILE', id})
    }
}
