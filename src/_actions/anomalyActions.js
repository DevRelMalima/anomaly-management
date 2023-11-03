import {
  ADD_ANOMALY,
  DELETE_ANOMALY,
  UPDATE_ANOMALY,
  ADD_CASE_RECORD,
  DELETE_CASE_RECORD,
  SET_CASE_RECORDS,
  SET_FILTER,
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import { BaseURL } from "./../constants/URLs/urls";

function createItem(
  action,
  url,
  payload,
  successMessage,
  errorMessage
) {
  return (dispatch, getState, { axios }) => {
    //Make async call to backend
    axios
      .post(url, payload, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((result) => {
        dispatch({ type: action, data: result.data });
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: successMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "success",
            },
          },
        });
        // window.location.reload(true)
      })
      .catch((ex) => {
        console.error(ex);
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: errorMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "error",
            },
          },
        });
      });
  };
}

function updateItem(
  action,
  url,
  payload,
  successMessage,
  errorMessage,
  appendIdToURL = false,
  isDispatchPayloadFromResult = false
) {
  return (dispatch, getState, { axios, enqueueSnackbar }) => {
    //Make async call to backend
    ///console.log(payload);
    let updatedURL = !appendIdToURL ? url + "/" + payload.id : url;
    axios
      .put(updatedURL, payload, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((result) => {
        if (isDispatchPayloadFromResult) {
          dispatch({ type: action, data: result.data });
        } else {
          dispatch({ type: action, data: payload });
        }
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: successMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "success",
            },
          },
        });
      })
      .catch((ex) => {
        console.error(ex);
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: errorMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "error",
            },
          },
        });
      });
  };
}

function deleteItem(
  action,
  url,
  payload,
  successMessage,
  errorMessage,
  appendIdToURL = true
) {
  return (dispatch, getState, { axios, enqueueSnackbar }) => {
    //Make async call to backend
    let payloadData = appendIdToURL ? {} : payload;
    console.log(payloadData);

    axios
      .delete(
        appendIdToURL ? url + "/" + payload : url + "/" + payload.id,
        { data: payloadData },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((result) => {
        dispatch({
          type: action,
          data: appendIdToURL ? payload : payload.id,
        });
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: successMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "success",
            },
          },
        });
      })
      .catch((ex) => {
        console.error(ex);
        dispatch({
          type: "ENQUEUE_SNACKBAR",
          notification: {
            message: errorMessage,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: "error",
            },
          },
        });
      });
  };
}

const baseURL = BaseURL; // " /api";

// Action definitions
// Platform
export const createPlatform = (platform) => {
  return createItem(
    "CREATE_PLATFORM",
    baseURL + "/api/platform",
    platform,
    "Platform created",
    "Failed to create platform."
  );
};

export const updatePlatform = (platform) => {
  return updateItem(
    "UPDATE_PLATFORM",
    baseURL + "/api/platform",
    platform,
    "Platform updated",
    "Failed to update platform.",
    false
  );
};

export const deletePlatform = (platform) => {
  return deleteItem(
    "DELETE_PLATFORM",
    baseURL + "/api/platform",
    platform,
    "Platform deleted",
    "Failed to delete platform.",
    false
  );
};


// Anomaly System
export const createAnomalySystem = (anomalySystem) => {
  return createItem(
    "CREATE_ANOMALY_SYSTEM",
    baseURL + "/api/anomalysystem",
    anomalySystem,
    "Anomaly System created",
    "Failed to create Anomaly System."
  );
};

export const updateAnomalySystem = (anomalySystem) => {
  return updateItem(
    "UPDATE_ANOMALY_SYSTEM",
    baseURL + "/api/anomalysystem",
    anomalySystem,
    "Anomaly System updated",
    "Failed to update Anomaly System.",
    false
  );
};

export const deleteAnomalySystem = (anomalySystem) => {
  return deleteItem(
    "DELETE_ANOMALY_SYSTEM",
    baseURL + "/api/anomalysystem",
    anomalySystem,
    "Anomaly System deleted",
    "Failed to delete Anomaly System.",
    false
  );
};

// Anomaly Class
export const createAnomalyClass = (anomalyClass) => {
  return createItem(
    "CREATE_ANOMALY_CLASS",
    baseURL + "/api/anomalyclass",
    anomalyClass,
    "Anomaly Class created",
    "Failed to create Anomaly Class."
  );
};

export const updateAnomalyClass = (anomalyClass) => {
  return updateItem(
    "UPDATE_ANOMALY_CLASS",
    baseURL + "/api/anomalyclass",
    anomalyClass,
    "Anomaly Class updated",
    "Failed to update Anomaly Class.",
    false
  );
};

export const deleteAnomalyClass = (anomalyClass) => {
  return deleteItem(
    "DELETE_ANOMALY_CLASS",
    baseURL + "/api/anomalyclass",
    anomalyClass,
    "Anomaly Class deleted",
    "Failed to delete Anomaly Class.",
    false
  );
};

// Anomaly Action
export const createAnomalyAction = (anomalyAction) => {
  return createItem(
    "CREATE_ANOMALY_ACTION",
    baseURL + "/api/anomalyaction",
    anomalyAction,
    "Anomaly Action created",
    "Failed to create Anomaly Action."
  );
};

export const updateAnomalyAction = (anomalyAction) => {
  return updateItem(
    "UPDATE_ANOMALY_ACTION",
    baseURL + "/api/anomalyaction",
    anomalyAction,
    "Anomaly Action updated",
    "Failed to update Anomaly Action.",
    false
  );
};

export const deleteAnomalyAction = (anomalyAction) => {
  return deleteItem(
    "DELETE_ANOMALY_ACTION",
    baseURL + "/api/anomalyaction",
    anomalyAction,
    "Anomaly Action deleted",
    "Failed to delete Anomaly Action.",
    false
  );
};

// Anomaly
export const addAnomaly = (anomaly) => {
  return createItem(
    "ADD_ANOMALY",
    baseURL + "/api/anomalies",
    anomaly,
    "Anomaly created",
    "Failed to create Anomaly."
  );
};

export const addAnomalies = (anomalies) => {
  return createItem(
    "ADD_ANOMALIES",
    baseURL + "/api/anomalies/import_anomalies",
    anomalies,
    "Anomalies created",
    "Failed to create Anomalies."
  );
};
export const updateAnomaly = (anomaly) => {
  return updateItem(
    "UPDATE_ANOMALY",
    baseURL + "/api/anomalies",
    anomaly,
    "Anomaly updated",
    "Failed to update Anomaly.",
    false
  );
};

export const saveAnomalyReview = (anomaly) => {
  return updateItem(
    "UPDATE_ANOMALY",
    baseURL + "/api/anomalies/save_anomaly_review",
    anomaly,
    "Anomaly updated",
    "Failed to update Anomaly.",
    false
  );
};

export const saveAnomalyAnalysis = (anomaly) => {
  return updateItem(
    "UPDATE_ANOMALY",
    baseURL + "/api/anomalies/save_anomaly_analysis",
    anomaly,
    "Anomaly updated",
    "Failed to update Anomaly.",
    false
  );
};

export const saveAnomalyStatus = (anomaly) => {
  return updateItem(
    "UPDATE_ANOMALY_STATUS",
    baseURL + "/api/anomalies/save_anomaly_status",
    anomaly,
    "Anomaly updated",
    "Failed to update Anomaly.",
    false,
    true
  );
};

export const deleteAnomaly = (anomaly) => {
  return deleteItem(
    "DELETE_ANOMALY",
    baseURL + "/api/anomalies",
    anomaly,
    "Anomaly deleted",
    "Failed to delete Anomaly.",
    false
  );
};

// Anomaly Permission
export const updateAnomalyPermission = (anomalyPermission) => {
  return updateItem(
    "UPDATE_ANOMALY_PERMISSION",
    baseURL + "/api/anomalypermissions",
    anomalyPermission,
    "Anomaly Permission updated",
    "Failed to update Anomaly Permission.",
    false,
    true
  );
};

// Anomaly Options
export const updateAnomalyOptions = (anomalyoptions) => {
  return updateItem(
    "UPDATE_ANOMALY_OPTIONS",
    baseURL + "/api/anomalyoptions",
    anomalyoptions,
    "Anomaly Options updated",
    "Failed to update Anomaly Options.",
    true
  );
};

/*export const addAnomaly = (anomaly) => ({
  type: ADD_ANOMALY,
  payload: {anomaly}
});

export const saveAnomalyAnalysis = (anomaly) => ({
    type: UPDATE_ANOMALY,
    payload: {anomaly}
});

export const saveAnomalyReview = (anomaly) => ({
    type: UPDATE_ANOMALY,
    payload: {anomaly}
});


export const deleteAnomaly = id => ({
    type: DELETE_ANOMALY,
    payload: {id}
});*/

export const attachFilesToAnomaly = (task) => {
  return (dispatch, getState, { axios, enqueueSnackbar }) => {
    //Make async call to backend
    console.log("With attached files", task);
    /*axios.put(' /api/anomaly/attachfiles/'+anomaly.id,anomaly.attachedFiles)
        .then((result) => {                            
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Files attached to anomamy: '+anomaly.code+'.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'}}})
            dispatch({type:'UPDATE_TASK', task})
          
        })
        .catch((ex) => {
            console.error(ex);
        }); */

    dispatch({
      type: "ENQUEUE_SNACKBAR",
      notification: {
        message: "Files attached to anomaly: " + anomaly.code + ".",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success",
        },
      },
    });
    dispatch({ type: "UPDATE_ANOMALY", task });
  };
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
