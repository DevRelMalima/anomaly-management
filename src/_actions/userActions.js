import {BaseURL} from './../constants/URLs/urls';

export const setCurrentUser = (currentUser) => {
    return (dispatch, getState,{axios}) => {
        //Make async call to backend
              console.error(currentUser)
              dispatch({type:'SET_CURRENT_USER', currentUser})
                   
    }
}


export const updatePassword = (passwordInfo) => {
    return (dispatch, getState, {axios, enqueueSnackbar}) => {
        //Make async call to backend
        //console.warn("new user", user);
        axios.put(BaseURL + '/users/updatepassword',passwordInfo)
        .then((result) => {                            
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Password updated.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'}}})
            //dispatch({type:'CREATE_USER', user})
          
        })
        .catch((ex) => {

            console.error(ex);
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Password update failed.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error'}}})
            //dispatch({type:'CREATE_USER', user})

        });  
    }
}

export const createUser = (user) => {
    return (dispatch, getState, {axios, enqueueSnackbar}) => {
        //Make async call to backend
        console.warn("new user", user);
        axios.post(BaseURL + '/users/create',user)
        .then((result) => {                            
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'New user created.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'}}})
            dispatch({type:'CREATE_USER', user})
          
        })
        .catch((ex) => {
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Failed to create user.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error'}}})
            console.error(ex);

        });  
    }
}

export const updateUserProfile = (user) => {
    return (dispatch, getState, {axios, enqueueSnackbar}) => {
        //Make async call to backend
        console.warn("new user", user);
        axios.put(BaseURL + '/users/updateProfile',user)
        .then((result) => {                            
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Profile Updated.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'}}})
            dispatch({type:'UPDATE_USER', user})
          
        })
        .catch((ex) => {
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Profile Updated Failed.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error'}}})
            console.error(ex);

        });  
    }
}

export const updateUser = (user) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'User updated.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'success'}}})

        dispatch({type:'UPDATE_USER', user})
    }
}

export const deleteUser = (id) => {
    return (dispatch, getState) => {
        //Make async call to backend
        dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'User deleted.',
              options: {
                  key: new Date().getTime() + Math.random(),
                  variant: 'warning'}}})

        dispatch({type:'DELETE_USER', id})
    }
}

