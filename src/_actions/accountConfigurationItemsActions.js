import {BaseURL} from './../constants/URLs/urls'

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
export const createAccountRole = (role) => {
    return createItem('CREATE_ACCOUNT_ROLE', BaseURL + '/api/AccountConfiguration/AddConfigurationAccountRoleItem', role, 'Role created', 'Failed to create role.')    
}

export const updateAccountRole = (role) => {
    return updateItem('UPDATE_ACCOUNT_ROLE', BaseURL + '/api/AccountConfiguration/UpdateConfigurationAccountRoleItem', role, 'Role updated', 'Failed to update role.', false)
}

export const deleteAccountRole = (role) => {
    return deleteItem('DELETE_ACCOUNT_ROLE', BaseURL + '/api/AccountConfiguration/DeleteConfigurationAccountRoleItem', role, 'Role deleted', 'Failed to delete role.', false)
}

// Job Title
export const createJobTitle = (jobTitle) => {
    return createItem('CREATE_JOB_TITLE', BaseURL + '/api/AccountConfiguration/AddConfigurationJobTitleItem', jobTitle, 'Job title created', 'Failed to create job title.')    
}

export const updateJobTitle = (jobTitle) => {
    return updateItem('UPDATE_JOB_TITLE', BaseURL + '/api/AccountConfiguration/UpdateConfigurationJobTitleItem', jobTitle, 'Job title updated', 'Failed to update job title.', false)
}

export const deleteJobTitle = (jobTitle) => {
    return deleteItem('DELETE_JOB_TITLE', BaseURL + '/api/AccountConfiguration/DeleteConfigurationJobTitleItem', jobTitle, 'Job title deleted', 'Failed to delete job title.', false)
}

// Company
export const createCompany = (company) => {
    return createItem('CREATE_COMPANY', BaseURL + '/api/AccountConfiguration/AddConfigurationCompanyItem', company, 'Company created', 'Failed to create company.')    
}

export const updateCompany = (company) => {
    return updateItem('UPDATE_COMPANY', BaseURL + '/api/AccountConfiguration/UpdateConfigurationCompanyItem', company, 'Company updated', 'Failed to update company.', false)
}

export const deleteCompany = (company) => {
    return deleteItem('DELETE_COMPANY', BaseURL + '/api/AccountConfiguration/DeleteConfigurationCompanyItem', company, 'Company deleted', 'Failed to delete company.', false)
}

// Department
export const createDepartment = (department) => {
    return createItem('CREATE_DEPARTMENT', BaseURL + '/api/AccountConfiguration/AddConfigurationDepartmentItem', department, 'Department created', 'Failed to create department.')    
}

export const updateDepartment = (department) => {
    return updateItem('UPDATE_DEPARTMENT', BaseURL + '/api/AccountConfiguration/UpdateConfigurationDepartmentItem', department, 'Department updated', 'Failed to update department.', false)
}

export const deleteDepartment = (department) => {
    return deleteItem('DELETE_DEPARTMENT', BaseURL + '/api/AccountConfiguration/DeleteConfigurationDepartmentItem', department, 'Department deleted', 'Failed to delete department.', false)
}


