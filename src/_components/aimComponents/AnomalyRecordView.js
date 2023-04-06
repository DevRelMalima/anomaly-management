import React, { useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";
//import {countries} from 'countries-List';
//import { List } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import { Formik } from "formik";
import * as Yup from "yup";
import { saveAnomalyAnalysis } from "../../_actions/anomalyActions";
import { withSnackbar } from "notistack";
import {
  downloadFile,
  formatSizeUnits,
} from "../../utility/filesUtility";

import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import CloudDownloadIcon from "@material-ui/icons/CloudDownloadOutlined";

import IconButton from "@material-ui/core/IconButton";

import Paper from "@material-ui/core/Paper";

import { BaseURL } from "../../constants/URLs/urls";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import FileIcon from "../../_images/icons/files/file_icon.inline.svg";

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
}));

const AnomalyRecordView = (props) => {
  const emptyAnomaly = {
    id: uuidv4(),
    code: "",
    platform: "",
    dateRaised: new Date(),
    equipmentTagNo: "",
    component: "",
    description: "",
    system: "",
    anomalyClass: "",
    priority: "",
    analyser: "",
    reviewer: "",
    loF: "",
    coF: "",
    soF: "",
    action: "",
    analysisComment: "",
    isShutdownRequired: false,
    isAnalysed: false,
    isApproved: false,
    analysedBy: null,
    approvedBy: null,
  };

  //

  const selectedAnomaly = props.anomalies.find((p) => {
    return p.id == props.anomalyId;
  });
  console.log("CAN", selectedAnomaly);
  const classes = useStyles();
  const [newAnomaly, setNewAnomaly] = React.useState({
    ...selectedAnomaly,
  });
  const [openImageViewDialog, setOpenImageViewDialog] =
    React.useState(false);
  const [selectedImageFile, setSelectedImageFile] =
    React.useState(null);

  const viewImageFile = (f) => {
    setSelectedImageFile(f);
    setOpenImageViewDialog(true);
  };

  useEffect(() => {}, [props.anomalies]);

  function saveAnomalyAnalysis() {
    // console.log("khhkhk", newAnomaly);
    props.saveAnomalyAnalysis({ ...newAnomaly, isAnalysed: true });
    //setNewAnomaly({...emptyAnomaly})
    props.enqueueSnackbar("Anomaly analysis saved", {
      variant: "success",
    });

    props.history.push("/anomalies/new_anomalies");
  }

  const handleFieldChange = (event) => {
    event.persist();
    //handleChange(event);
    const { name, value } = event.target;
    //console.log({ name, value })
    setNewAnomaly({ ...newAnomaly, [name]: value });
    //console.log(newAnomaly)
  };

  return (
    <React.Fragment>
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

      <Typography style={{ fontSize: 18, color: "#555555" }}>
        {newAnomaly.code}
      </Typography>
      <div style={{ padding: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Anomaly Code
            </Typography>
            <Typography>{newAnomaly.code}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
            Facility
            </Typography>
            <Typography>
              {props.platforms.find(
                (p) => p.id == newAnomaly.platform
              )?.name || "--"}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Component
            </Typography>
            <Typography>{newAnomaly.component}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Equipment/Tag No.
            </Typography>
            <Typography>{newAnomaly.equipmentTagNo}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Activity Method
            </Typography>
            <Typography>{newAnomaly.activityMethod}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Description
            </Typography>
            <Typography>{newAnomaly.description}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Date Raised
            </Typography>
            <Typography>
              <Moment format="LL" date={newAnomaly.dateRaised} />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              LoF
            </Typography>
            <Typography>
              {/* {props.loFs.find((p) => p.id == newAnomaly.loF)?.name ||
                "--"} */}
                {newAnomaly.loF}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              CoF
            </Typography>
            <Typography>
              {/* {props.coFs.find((p) => p.id == newAnomaly.coF)?.name ||
                "--"} */}
                {newAnomaly.coF}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Priority
            </Typography>
            <Typography>
              {/* {props.priorities.find(
                (p) => p.id == newAnomaly.priority
              )?.name || "--"} */}
              {newAnomaly.priority}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Action
            </Typography>
            <Typography>
              {props.actions.find((p) => p.id == newAnomaly.action)
                ?.name || "--"}
            </Typography>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              Action
            </Typography>
            <Typography>
              {props.users.find((p) => p.id == newAnomaly.action)
                ?.name || "--"}
            </Typography>
          </Grid> */}

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
                              style={{ margin: 5, color: "FF9900" }}
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
                            downloadFile(
                              "/api/files/download/" + file.fileId,
                              file.fileName,
                              file.fileType
                            )
                          }
                          color="primary"
                        >
                          <CloudDownloadIcon
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
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnomalyAnalysis: (data) => {
      dispatch(saveAnomalyAnalysis(data));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    soFs: state.soFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    users: state.users,
    files: state.files,
  };
};
// export default TodoList;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(AnomalyRecordView));
