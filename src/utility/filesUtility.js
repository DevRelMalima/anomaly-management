
import { authenticationService } from '@/_services';
import axios from 'axios';
import {BaseURL} from '../constants/URLs/urls'

export const formatSizeUnits = (bytes) => {
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1)           { bytes = bytes + " bytes"; }
    else if (bytes == 1)          { bytes = bytes + " byte"; }
    else                          { bytes = "0 bytes"; }
    return bytes;
  }

export const downloadFile = (linkurl, fileName, fileType) => {

  if(fileType == 'Excel')
  {
    const currentUser = authenticationService.currentUserValue;
    var config = {        
      headers:{
        'Access-Control-Allow-Origin': '*',
        "Authorization":`Bearer ${currentUser.token}`
      },
      responseType:'blob'
    };

    axios.get( BaseURL + "" + linkurl, config)
        .then((response) => {
          //console.warn("result", result)
          const url = window.URL.createObjectURL(new Blob([response.data]), {type:'application/xlsx'})
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();           
            
        })
        .catch((ex) => {
            console.error(ex);
        });
   }
   else
   {
    const currentUser = authenticationService.currentUserValue;
    var config = {        
      headers:{
        'Access-Control-Allow-Origin': '*',
        "Authorization":`Bearer ${currentUser.token}`
      },
    };
      
    axios.get(BaseURL + linkurl, config) //'/api/files/download/'+fileId
        .then((response) => {
          //console.warn("result", result)
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();           
            
        })
        .catch((ex) => {
            console.error(ex);
        });    
   }
    
  }
