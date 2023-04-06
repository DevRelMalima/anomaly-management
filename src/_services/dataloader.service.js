import axios from 'axios'
import * as URLs from '../common/constants/URLs'
import { enqueueSnackbar, closeSnackbar } from '../_actions/snackbarActions';

export const dataloaderService = {
    fetchData,
};

async function fetchData (user, dispatch ) {
    console.error('url',URLs.PROJECTS_URL)

     //////////////////////////

     axios.interceptors.request.use(config => {
            

        if (user && user.token) {
            config.headers =  {...config.headers, Authorization: `Bearer ${user.token}`, 'Access-Control-Allow-Origin': '*'};
        } else {
            config.headers = {...config.headers,'Access-Control-Allow-Origin': '*'};
        }

        return config;
      })

      //////////////////////////

    // axios.get('http://localhost:56941/api/projects')
    axios.get(URLs.PROJECTS_URL)
         .then((result) => {
           //console.warn("result", result.data);
           enqueueSnackbar('Successfully fetched the data.')
           //this.props.fetchProjects(result.data);
           dispatch({type:'FETCH_PROJECTS',projects: result.data});
         })
         .catch((ex) => {
             console.error(ex);
         });

     axios.get('http://localhost:56941/api/taskGroup')
         .then((result) => {
           console.warn("taskGroups", result.data);
           enqueueSnackbar('Successfully fetched the data.')
           //this.props.fetchProjects(result.data);
           dispatch({type:'FETCH_TASK_GROUPS',taskGroups: result.data});
         })
         .catch((ex) => {
             console.error(ex);
         });
         
     axios.get('http://localhost:56941/api/task')
         .then((result) => {
           console.warn("taskGroups", result.data);
           enqueueSnackbar('Successfully fetched the data.')
           //this.props.fetchProjects(result.data);
           dispatch({type:'FETCH_TASKS',tasks: result.data});
         })
         .catch((ex) => {
             console.error(ex);
         });
     
     
     axios.get('http://localhost:56941/users')
         .then((result) => {
           
           enqueueSnackbar('Successfully fetched User data.')
           if(result.data.length>0)
             result.data.map(user=>dispatch({type:'CREATE_USER',user}));
         })
         .catch((ex) => {
             console.error(ex);
         });
         
     axios.get('http://localhost:56941/api/files')
         .then((result) => {
           
           enqueueSnackbar('Successfully fetched User files.')
           console.warn('Files', result.data)
           if(result.data.length>0)
                dispatch({type:'FETCH_FILES',files:result.data});
         })
         .catch((ex) => {
             console.error(ex);
         });
    
     
     axios.get('http://localhost:56941/api/folders')
         .then((result) => {
           
           enqueueSnackbar('Successfully fetched User folders.')
           console.warn('Folders', result.data)
           if(result.data.length>0)
             dispatch({type:'FETCH_FOLDERS',files:result.data});
         })
         .catch((ex) => {
             console.error(ex);
         });

   };
