import React, { useEffect } from "react";
//import Link from '@material-ui/core/Link';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from "uuid";
import { Link as ReactLink } from "react-router-dom";
//import {countries} from 'countries-List';
//import { List } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//import Moment from 'react-moment';
import { Formik } from "formik";
import * as Yup from "yup";
import {
  addAnomaly,
  updateAnomaly,
  attachFilesToAnomaly,
} from "../../_actions/anomalyActions";
import { withSnackbar } from "notistack";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilesDialogView from "../../_views/_fileManager/FilesDialogView";

import FileIcon from "../../_images/icons/files/file_icon.inline.svg";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { formatSizeUnits } from "../../utility/filesUtility";
import FormHelperText from "@material-ui/core/FormHelperText";
import { BaseURL } from "../../constants/URLs/urls";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    minWidth: 120,
    width: "100%",
  },
  formControl2: {
    fontSize: "16px",
    marginTop: "12px",
    color: "rgba(0, 0, 0, 0.588)",
  },
}));

const AnomalyForm = (props) => {
  const emptyAnomaly = {
    id: uuidv4(),
    code: "",
    platform: "",
    dateRaised: new Date(),
    equipmentTagNo: "",
    component: "",
    description: "",
    system: "",
    orientation: "",
    anomalyClass: "",
    analysedBy: "",
    designCode: "",
    yearOfBuild: "",
    isSCE: false,
    activityMethod: "",
    inspectionType: "",
    reviewer: "",
    priority: "",
    loF: 0,
    sof: 0,
    coF: 0,
    action: "",
    isShutdownRequired: false,
    isAnalysed: false,
    isApproved: false,
    analysedBy: null,
    approvedBy: null,
    attachedFiles: [],
  };

  const classes = useStyles();
  const [newAnomaly, setNewAnomaly] = React.useState({
    ...emptyAnomaly,
  });
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [openAttachFilesDialog, setAttachFilesDialog] =
    React.useState(false);
  const [openImageViewDialog, setOpenImageViewDialog] =
    React.useState(false);
  const [selectedImageFile, setSelectedImageFile] =
    React.useState(null);
  const [dialogProps, setDialogProps] = React.useState({});
  const [isError, setIsError] = React.useState({});
  const [fieldErrorMessage, setFieldErrorMessage] = React.useState(
    {}
  );

  const viewImageFile = (f) => {
    setSelectedImageFile(f);
    setOpenImageViewDialog(true);
  };

  const getUserPermissions = (user) => {
    let userPermissions = props.anomalyPermissions.find(
      (i) => i.user == user.id
    );

    if (!userPermissions) {
      return {
        user: user.id,
        canAnalyse: false,
        canCreate: true,
        canReview: false,
        canSetStatus: false,
      };
    } else return userPermissions;
  };

  const [users, setUsers] = React.useState([
    ...props.users.map((u) => {
      let up = getUserPermissions(u);
      return { ...u, ...up };
    }),
  ]);

  const files = props.files;
  const anomalyOptions = props.anomalyOptions;

  useEffect(() => {
    if (props.anomalyId && props.isEdit) {
      let currentAnomaly = props.anomalies.find(
        (p) => p.id == props.anomalyId
      );

      if (currentAnomaly) setNewAnomaly({ ...currentAnomaly });
    } else if (props.anomalyId && props.isCopy) {
      let currentAnomaly = props.anomalies.find(
        (p) => p.id == props.anomalyId
      );

      if (currentAnomaly) setNewAnomaly({ ...currentAnomaly });
    } else {
      setNewAnomaly({ ...emptyAnomaly });
    }

    setUsers([
      ...props.users.map((u) => {
        let up = getUserPermissions(u);
        return { ...u, ...up };
      }),
    ]);
  }, [
    props.anomalies,
    props.isEdit,
    props.isCopy,
    props.systems,
    props.users,
  ]);

  //console.warn("usersPerm", users);
  /*useEffect(() => {
    setUsers([...props.users.map(u => { let up = getUserPermissions(u); return { ...u, ...up } })]);
  }, [props.anomalies, props.systems, props.users])*/

  let fieldValidators = [
    {
      name: "platform",
      message: "Please select a Facility",
    },
    {
      name: "equipmentTagNo",
      message: "Please enter an Equipment Tag Number",
    },
  ];

  /*** Simple Validator for required fields ***/

  function SimpleValidator(objectData, fields) {
    let errorInfos = [];
    for (const field of fields) {
      let errorInfo = ValidateField(objectData, field);
      if (errorInfo) errorInfos.push(errorInfo);
    }

    // errorInfo = {errorState:{[field.name]:true},errorMessage:{[field.name]:[field.message]}};
    console.error("dad, errorInfos", errorInfos);
    let newErrorState = {};
    let newErrorMessage = {};
    errorInfos.map((er) => {
      newErrorState = { ...newErrorState, ...er.errorState };
      newErrorMessage = { ...newErrorMessage, ...er.errorMessage };
    });
    setIsError({ ...isError, ...newErrorState });
    setFieldErrorMessage({
      ...fieldErrorMessage,
      ...newErrorMessage,
    });
  }

  function ResetValidatorErrors(fields) {
    for (const field of fields) {
      setIsError({ ...isError, [field]: false });
    }
  }

  function IsErrorField() {
    // return Object.keys(isError).filter(key => allowed.includes(key))
  }

  function ResetValidator(field) {
    setIsError({ ...isError, [field]: false });
  }

  const ValidateField = (objectData, field, setState = false) => {
    //let isErrorList = [];
    let errorInfo = null;
    if (field.name in objectData) {
      if (objectData[field.name] == "") {
        errorInfo = {
          errorState: { [field.name]: true },
          errorMessage: { [field.name]: field.message },
        };
        //console.warn("validator", {...isError, [field.name]:true})
        //setIsError({...isError, [field.name]:true});
        //setFieldErrorMessage({...fieldErrorMessage, [field.name]:[field.message]});
      } else {
        errorInfo = {
          errorState: { [field.name]: false },
          errorMessage: { [field.name]: null },
        };
        //setIsError({...isError, [field.name]:false})
        //setFieldErrorMessage({...fieldErrorMessage, [field.name]:null});
      }
    }

    return errorInfo;
  };

  function addAnomaly() {
    SimpleValidator(newAnomaly, fieldValidators);
    console.error([isError, fieldErrorMessage]);
    //setIsError({...isError, ["platform"]:true})
    //return;

    let selectedPlatform =
      props.platforms.find((p) => p.id == newAnomaly.platform)
        ?.name || "--";
    props.addAnomaly({
      ...newAnomaly,
      code:
        "AN-" +
        selectedPlatform +
        "-" +
        Math.floor(Math.random() * 101),
      id: uuidv4(),
    });
    setNewAnomaly({ ...emptyAnomaly });
    //props.enqueueSnackbar('New anomaly saved', { variant:'success'});
    props.history.push("/anomalies/all_anomalies");
    // window.location.reload(true)
  }

  function updateAnomaly() {
    //let selectedPlatform =  props.platforms.find(p => p.id == newAnomaly.platform)?.name || "--"
    props.updateAnomaly({ ...newAnomaly });
    //setNewAnomaly({...emptyAnomaly})
    //props.enqueueSnackbar('New anomaly saved', { variant:'success'});
    // props.history.push("/anomalies/all_anomalies");
  }

  /*** Anomaly File attachemnt ***/
  function attachFilesToAnomaly() {
    //console.warn("files attached...")
    //props.updateTask({ ...newTask, attachedFiles: [...newTask.attachedFiles, ...selectedFiles] });
    let anomalyFiles = files.filter((file) =>
      selectedFiles.includes(file.id)
    );

    anomalyFiles = anomalyFiles.map((afile) => {
      return { ...afile, fileId: afile.id };
    });

    setNewAnomaly({
      ...newAnomaly,
      attachedFiles: [...newAnomaly.attachedFiles, ...anomalyFiles],
    });
    console.log("attachFilesToTask", [
      ...newAnomaly.attachedFiles,
      ...anomalyFiles,
    ]);
    setAttachFilesDialog(false);
  }

  const removeAttachment = (id) => {
    setNewAnomaly({
      ...newAnomaly,
      attachedFiles: newAnomaly.attachedFiles.filter(
        (f) => f.fileId != id
      ),
    });
  };

  function handleCloseAttachFilesDialog() {
    setAttachFilesDialog(false);
  }

  function handleAttachFilesClickOpen() {
    let anomalyAttachmentIds = newAnomaly.attachedFiles.map(
      (f) => f.fileId
    );
    newAnomaly.attachedFiles
      ? setSelectedFiles([...anomalyAttachmentIds])
      : setSelectedFiles([]);

    setDialogProps({
      ...dialogProps,
      dialogTitle: "Attach files to " + newAnomaly.code,
      selectedItems: newAnomaly.attachedFiles || [],
      setSelectedItems: (values) => {
        setSelectedFiles(values);
        console.warn(values);
      },
    });
    setAttachFilesDialog(true);
  }

  const handleFieldChange = (event) => {
    event.persist();
    // handleChange(event);
    const { name, value } = event.target;
    //console.log({ name, value })
    setNewAnomaly({ ...newAnomaly, [name]: value });
    //console.log(newAnomaly)
  };
  const handleFieldChange2 = (event) => {
    event.persist();
    // handleChange(event);
    const { name, checked } = event.target;
    //console.log({ name, value })
    setNewAnomaly({ ...newAnomaly, [name]: checked });
    //console.log(newAnomaly)
  };

  return (
    <React.Fragment>
      {/* File attachment dialog */}
      <Dialog
        open={openAttachFilesDialog}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Attach Files</DialogTitle>
        <DialogContent>
          <FilesDialogView isMultiSelect={true} {...dialogProps} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseAttachFilesDialog}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={attachFilesToAnomaly} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/**Image Attachment View Dialog */}
      <Dialog
        open={openImageViewDialog}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Attachment:{selectedImageFile && selectedImageFile.fileName}
        </DialogTitle>
        <DialogContent style={{ padding: 0 }}>
          {selectedImageFile && (
            <img
              style={{ margin: 5 }}
              src={
                BaseURL +
                "/api/files/download/" +
                selectedImageFile.fileId
              }
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenImageViewDialog(false)}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div style={{ padding: 10, maxWidth: 800 }}>
        <Grid
          container
          spacing={2}
          justify="flex-end"
          direction="row"
        >
          <Grid item>
            {props.isEdit ? (
              <Button
                size="small"
                onClick={updateAnomaly}
                color="primary"
                variant="contained"
              >
                Update
              </Button>
            ) : (
              <Button
                size="small"
                onClick={addAnomaly}
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            )}
          </Grid>
          <Grid item>
            <Button
              size="small"
              color="primary"
              component={ReactLink}
              to={"/anomalies/all_anomalies"}
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          padding: 10,
          position: "relative",
          bottom: "0px",
          maxWidth: 800,
        }}
      >
        {
          <form style={classes}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="platform">Facility</InputLabel>
                  <Select
                    autoWidth={true}
                    error={
                      isError["platform"]
                        ? isError["platform"]
                        : false
                    }
                    labelId="platform"
                    value={newAnomaly.platform}
                    label="platform"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "platform",
                      id: "platform",
                    }}
                  >
                    {props.platforms &&
                      props.platforms.map((platform) => {
                        return (
                          <MenuItem value={platform.id}>
                            {platform.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                  <FormHelperText
                    error={
                      isError["platform"]
                        ? isError["platform"]
                        : false
                    }
                  >
                    {fieldErrorMessage["platform"]}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="equipmentTagNo"
                  name="equipmentTagNo"
                  variant="outlined"
                  error={isError["equipmentTagNo"]}
                  helperText={fieldErrorMessage["equipmentTagNo"]}
                  fullWidth
                  value={newAnomaly.equipmentTagNo}
                  onChange={handleFieldChange}
                  id="equipmentTagNo"
                  label="Equipment Tag No."
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="component"
                  name="component"
                  variant="outlined"
                  fullWidth
                  value={newAnomaly.component}
                  onChange={handleFieldChange}
                  id="component"
                  label="Component"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="system">System</InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="system"
                    value={newAnomaly.system}
                    label="system"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "system",
                      id: "system",
                    }}
                  >
                    {props.systems &&
                      props.systems.map((system) => {
                        return (
                          <MenuItem value={system.id}>
                            {system.code}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  name="designCode"
                  variant="outlined"
                  fullWidth
                  value={newAnomaly.designCode}
                  onChange={handleFieldChange}
                  id="designCode"
                  label="Design Code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="yearOfBuild"
                  name="yearOfBuild"
                  variant="outlined"
                  fullWidth
                  value={newAnomaly.yearOfBuild}
                  onChange={handleFieldChange}
                  id="yearOfBuild"
                  label="Year of Build"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl2}
                >
                  Safety Critical Equipment
                  <span style={{
                    width: "20%", position: "absolute",
                    top: '-45%',
                    right: '-8vw'
                  }}>
                    <Checkbox
                      checked={newAnomaly.isSCE}
                      name={"isSCE"}
                      onChange={handleFieldChange2}
                      inputProps={{ "aria-label": "controlled" }}
                      id="isSCE"
                    />
                  </span>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="activityMethod">
                    Activity Method
                  </InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="activityMethod"
                    value={newAnomaly.activityMethod}
                    label="activityMethod"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "activityMethod",
                      id: "activityMethod",
                    }}
                  >
                    <MenuItem value='Inspection'>
                      Inspection
                    </MenuItem>
                    <MenuItem value='Routine Monitoring/Maintenance'>
                      Routine Monitoring/Maintenance
                    </MenuItem>
                    <MenuItem value='Engineering Assessment'>
                      Engineering Assessment
                    </MenuItem>

                  </Select>
                </FormControl>
              </Grid>
              {newAnomaly.activityMethod === 'Inspection' &&
                <Grid item xs={12} sm={6}>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="inspectionType">
                      Inspection Type
                    </InputLabel>
                    <Select
                      autoWidth={true}
                      labelId="inspectionType"
                      value={newAnomaly.inspectionType}
                      label="inspectionType"
                      onChange={handleFieldChange}
                      inputProps={{
                        name: "inspectionType",
                        id: "inspectionType",
                      }}
                    >
                      <MenuItem value='Inspection Visual (GVI, CVI)'>
                        Inspection Visual (GVI, CVI)
                      </MenuItem>
                      <MenuItem value='Inspection Ultrasonic Testing UT'>
                        Inspection Ultrasonic Testing UT
                      </MenuItem>
                      <MenuItem value='Inspection Magnetic Particle'>
                        Inspection Magnetic Particle
                      </MenuItem>
                      <MenuItem value='Inspection Dye Penetrant Test'>
                        Inspection Dye Penetrant Test
                      </MenuItem>
                      <MenuItem value='Inspection Radiography'>
                        Inspection Radiography
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>}
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="anomalyClass">
                    Anomaly Class
                  </InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="anomalyClass"
                    value={newAnomaly.anomalyClass}
                    label="anomalyClass"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "anomalyClass",
                      id: "anomalyClass",
                    }}
                  >
                    {props.anomalyClasses &&
                      props.anomalyClasses.map((c) => {
                        return (
                          <MenuItem value={c.id}>
                            {c.name + "(" + c.code + ")"}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="analysedBy">
                    Analysis assigned to
                  </InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="analysedBy"
                    value={newAnomaly.analysedBy}
                    label="Analysis assigned to"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "analysedBy",
                      id: "analysedBy",
                    }}
                  >
                    {users &&
                      users
                        .filter((i) => i.canAnalyse)
                        .map((c) => {
                          return (
                            <MenuItem value={c.id}>
                              {c.firstName +
                                " " +
                                c.lastName +
                                (c.position
                                  ? " (" + c.position + ")"
                                  : "")}
                            </MenuItem>
                          );
                        })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="description"
                  name="description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="4"
                  value={newAnomaly.description}
                  onChange={handleFieldChange}
                  id="description"
                  label="Description"
                />
              </Grid>
              <Grid item xs={12} justify="flex-end" direction="row">
                <Grid item>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAttachFilesClickOpen()}
                    variant="outlined"
                  >
                    Attach Documents
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                className={classes.listContainer}
              >
                {/*{files.map(file => ((newAnomaly.attachedFiles && newAnomaly.attachedFiles.includes(file.id)) &&*/}

                {newAnomaly.attachedFiles &&
                  newAnomaly.attachedFiles.map((file) => (
                    <Grid item key={file.id} xs={12}>
                      <Paper
                        key={file.id}
                        className={classes.paper}
                        style={{ margin: 5 }}
                      >
                        <Grid
                          container
                          direction="row"
                          justify="space-between"
                          spacing={2}
                        >
                          <Grid
                            item
                            xs
                            container
                            direction="row"
                            alignItems="flex-start"
                          >
                            {/*<Grid item container alignItems="center">  
                                      <FileIcon style={{color:'FF9900'}} className={classes.iconButton3} />
                                    </Grid>*/}
                            <Grid item>
                              {file.fileClass === "IMAGE" ? (
                                <img
                                  onClick={() => viewImageFile(file)}
                                  style={{
                                    cursor: "pointer",
                                    width: "100%",
                                    maxWidth: 400,
                                    borderRadius: 5,
                                    margin: 5,
                                  }}
                                  src={
                                    BaseURL +
                                    "/api/files/download/" +
                                    file.fileId
                                  }
                                />
                              ) : (
                                <FileIcon
                                  style={{
                                    margin: 5,
                                    color: "FF9900",
                                  }}
                                />
                              )}
                            </Grid>
                            <Grid
                              item
                              container
                              direction="column"
                              style={{ marginLeft: 10 }}
                            >
                              <Typography
                                variant="h6"
                                style={{ fontSize: 14 }}
                                noWrap
                              >
                                {file.fileName}
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{ fontSize: 10 }}
                                noWrap
                              >
                                {formatSizeUnits(file.fileSize)}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs
                            container
                            justify="flex-end"
                            alignItems="center"
                          >
                            <IconButton
                              size="small"
                              onClick={() =>
                                removeAttachment(file.fileId)
                              }
                              color="primary"
                            >
                              <DeleteIcon
                                className={classes.iconButton2}
                              />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </form>
        }
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnomaly: (data) => {
      dispatch(addAnomaly(data));
    },
    updateAnomaly: (data) => {
      dispatch(updateAnomaly(data));
    },
    attachFilesToAnomaly: (task) => {
      dispatch(attachFilesToAnomaly(task));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
    platforms: state.platforms,
    systems: state.systems,
    anomalyClasses: state.anomalyClasses,
    anomalyPermissions: state.anomalyPermissions,
    users: state.users,
    files: state.files,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(AnomalyForm));
