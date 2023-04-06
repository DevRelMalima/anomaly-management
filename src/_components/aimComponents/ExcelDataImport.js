import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { authenticationService } from "@/_services";

import Button from "@material-ui/core/Button";
import { useStyles } from "@/_utilities/CommonStyles";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Spreadsheet from "react-spreadsheet";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import { trackPromise } from "react-promise-tracker";

import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createGenerateClassName } from "@material-ui/core";
import { connect } from "react-redux";
import { addAnomalies } from "../../_actions/anomalyActions";
import { withSnackbar } from "notistack";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const steps = ["Upload", "Data selection", "Preview Anomalies"];

const ExcelDataImport = (props) => {
  const classes = useStyles();

  const [sdata, setSData] = useState([]);
  const [spreadsheets, setSpreadsheets] = useState([]);
  const [activeSpreadsheet, setActiveSpreadsheet] = useState(null);
  const [activeSpreadsheetHeader, setActiveSpreadsheetHeader] =
    useState(null);
  const [
    activeSpreadsheetHeaderIndex,
    setActiveSpreadsheetHeaderIndex,
  ] = useState(0);
  const [isExcelUploaded, setIsExcelUploaded] = useState(false);
  const [extractedAnomalies, setExtractedAnomalies] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const clearUploadData = () => {
    setActiveStep(0);
    setExtractedAnomalies(0);
    setIsExcelUploaded(false);
    setSpreadsheets([]);
    setActiveSpreadsheet(null);
    setActiveSpreadsheetHeader(null);
    setActiveSpreadsheetHeaderIndex(0);
  };

  const [modelMapFields, setModelMapFields] = useState([
    {
      fieldName: "Platform",
      name: "platform",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Code",
      name: "code",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Equipment Tag No.",
      name: "equipmentTagNo",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Description",
      name: "description",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Component",
      name: "component",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "System",
      name: "system",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Orientation",
      name: "orientation",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Anomaly Class",
      name: "anomalyClass",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
    {
      fieldName: "Analysed By",
      name: "analysedBy",
      id: uuidv4(),
      columnCaption: "",
      columnIndex: 0,
    },
  ]);

  const handleColumnFieldMapChange = (modelMapField, event) => {
    console.log(modelMapField);
    console.log(event);

    event.persist();

    const { name, value } = event.target;

    //let modelMapField = modelMapFields.find(i => i.id == value.id)

    let header = activeSpreadsheetHeader[value]; //.find(i => i.id == value.id)
    console.log(value);
    console.log(header);

    if (modelMapField && header) {
      modelMapField.columnCaption = header.value;
      modelMapField.columnIndex = value;

      setModelMapFields([
        ...modelMapFields.map((a, i) =>
          a.id === modelMapField.id ? modelMapField : a
        ),
      ]);
    }

    for (
      var i = activeSpreadsheetHeaderIndex;
      i < activeSpreadsheet.length - activeSpreadsheetHeaderIndex;
      i++
    ) {}
    //setActiveSpreadsheetHeaderIndex(value)

    //if(value >= 0 && value <= activeSpreadsheet.length)
    //{
    //    setActiveSpreadsheetHeader(activeSpreadsheet[value]);
    //}
  };

  const handleRowNumberChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    setActiveSpreadsheetHeaderIndex(value);
    if (value >= 0 && value <= activeSpreadsheet.length) {
      setActiveSpreadsheetHeader(activeSpreadsheet[value]);
    }
  };

  const importAnomalies = () => {
    props.addAnomalies(extractedAnomalies);
    console.warn(extractedAnomalies);
    handleNext();
  };

  const extractAnomalies = () => {
    //setActiveSpreadsheetHeaderIndex(value)

    let newAnomaly = {
      code: "",
      platform: "",
      dateRaised: new Date(),
      equipmentTagNo: "",
      component: "",
      description: "",
      orientation: "",
      system: "",
      anomalyClass: "",
      analysedBy: null,
    };

    let extractedAnomalies = [];
    for (
      var i = activeSpreadsheetHeaderIndex + 1;
      i < activeSpreadsheet.length;
      i++
    ) {
      let anomaly = { ...newAnomaly, id: uuidv4() };
      modelMapFields.map((m) => {
        anomaly[m.name] = activeSpreadsheet[i][m.columnIndex].value;
      });

      extractedAnomalies.push(anomaly);
    }

    setExtractedAnomalies([...extractedAnomalies]);
    handleNext();
  };

  function onChange(e) {
    let files = e.target.files;
    console.warn("data file", files);

    const currentUser = authenticationService.currentUserValue;

    const url = "";

    let uploadedFiles = [];
    for (var index = 0; index < files.length; index++) {
      let form = new FormData();

      let element = files[index];
      let reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (e) => {
        // props.createFile({fileName:element.name, fileType:element.type,fileSize:element.size,id:Math.random(),folderId:currentFolderId});
      };

      let fileUploadId = uuidv4();
      uploadedFiles.push({
        fileName: element.name,
        fileType: element.type,
        fileSize: element.size,
        uploadProgress: 0,
        id: fileUploadId,
      });

      //setSelectedFiles([...uploadedFiles ])

      form.append("file", element);

      var config = {
        onUploadProgress: function (progressEvent) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(percentCompleted);
          console.log("Total Size", progressEvent.total);

          let fileUps = uploadedFiles.find(
            (f) => f.id == fileUploadId
          );
          //console.warn('selectedfileids', fileIds);
          console.error("hello", fileUploadId);
          console.warn("hello2", uploadedFiles);
          if (fileUps) {
            fileUps.uploadProgress = percentCompleted;
          }

          let updatedSelectedFiles = uploadedFiles.map((f, i) =>
            f.id === fileUploadId ? fileUps : f
          );

          //setSelectedFiles([...updatedSelectedFiles ])
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${currentUser.token}`,
        },
      };

      trackPromise(
        axios
          .post(
            "http://localhost:56941/api/anomalies/import/" +
              fileUploadId,
            form,
            config
          )
          .then((result) => {
            console.warn("import_result", result);
            setSData(result.data[0].data);

            setSpreadsheets(result.data);
            setIsExcelUploaded(true);
            if (result.data.length > 0) {
              let activeSheet = result.data[0];
              setActiveSpreadsheet(activeSheet.data);
              setActiveSpreadsheetHeader(activeSheet.data[0]);
            }
            /*let message = "Success!"
                    if (!result.data.success) {
                        message = result.data.message;
                    }
                    this.setState({
                        ...state,
                        justFileServiceResponse: message
                    });*/
          })
          .catch((ex) => {
            console.error(ex);
          })
      );
    }

    //console.warn("img data ", selectedFiles)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {/*<Typography>{selectedFiles.length} Selected file(s)</Typography> */}
              {/*<Typography>{newFile.fileName}</Typography>*/}
              {!isExcelUploaded && (
                <React.Fragment>
                  <input
                    accept="xls/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                    onChange={(e) => onChange(e)}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      component="span"
                      className={classes.button}
                    >
                      Upload Excel file...
                    </Button>
                  </label>
                </React.Fragment>
              )}
            </Grid>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                Header Row Number
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  autoWidth={true}
                  labelId="activeSpreadsheetHeaderIndex"
                  value={activeSpreadsheetHeaderIndex}
                  label="activeSpreadsheetHeaderIndex"
                  onChange={handleRowNumberChange}
                  inputProps={{
                    name: "activeSpreadsheetHeaderIndex",
                    id: "activeSpreadsheetHeaderIndex",
                  }}
                >
                  {activeSpreadsheet &&
                    activeSpreadsheet.map((columnHeader, index) => {
                      return (
                        <MenuItem value={index}>{index + 1}</MenuItem>
                      );
                    })}
                </Select>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {
                <MapperComponent
                  mapObjects={modelMapFields}
                  columnHeaders={activeSpreadsheetHeader}
                />
              }
            </Grid>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            {/*<Grid item xs={12} sm={6}>
                    <Button onClick={()=>extractAnomalies()} className={classes.button}>
                        Preview Anomalies
                    </Button>     
            </Grid> */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Overwrite anomalies with same Code"
                />
              </Grid>
              <Grid item xs={12}>
                {<ExtractedAnomaliesPreview />}
              </Grid>
            </Grid>
          </React.Fragment>
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const MyComponent = ({ data }) => <Spreadsheet data={data} />;

  const ExtractedAnomaliesPreview = () => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
                borderRadius: 5,
              }}
            >
              {modelMapFields.map((m) => {
                return (
                  <TableCell
                    style={{
                      padding: 3,
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                  >
                    {m.fieldName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {extractedAnomalies &&
              extractedAnomalies.map((em) => (
                <TableRow
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#FFFFFF",
                    borderRadius: 5,
                  }}
                >
                  {modelMapFields.map((m) => {
                    return (
                      em[m.name] && (
                        <TableCell
                          style={{
                            padding: 3,
                            color: "#0099FF",
                            fontWeight: "bold",
                          }}
                        >
                          <Typography>{em[m.name]}</Typography>
                        </TableCell>
                      )
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const MapperComponent = ({ mapObjects, columnHeaders }) => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
                borderRadius: 5,
              }}
            >
              <TableCell
                style={{
                  padding: 3,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Field
              </TableCell>
              <TableCell
                style={{
                  padding: 3,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Column
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapObjects &&
              mapObjects.map((mapObject) => (
                <TableRow
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#FFFFFF",
                    borderRadius: 5,
                  }}
                >
                  <TableCell
                    style={{
                      padding: 3,
                      color: "#0099FF",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography>{mapObject.fieldName}</Typography>
                  </TableCell>
                  <TableCell
                    style={{
                      padding: 3,
                      color: "#0099FF",
                      fontWeight: "bold",
                    }}
                  >
                    <Select
                      autoWidth={true}
                      labelId="platform"
                      value={mapObject.columnIndex}
                      label="platform"
                      onChange={(e) =>
                        handleColumnFieldMapChange(mapObject, e)
                      }
                      inputProps={{
                        name: "platform",
                        id: "platform",
                      }}
                    >
                      {columnHeaders &&
                        columnHeaders.map((columnHeader, index) => {
                          return (
                            <MenuItem value={index}>
                              {columnHeader.value}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container spacing={0}>
        <Grid item style={{ position: "relative", width: "100%" }}>
          {isExcelUploaded && activeSpreadsheet && (
            <div style={{ width: "100%", overflowX: "scroll" }}>
              <MyComponent data={activeSpreadsheet} />
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          {spreadsheets &&
            spreadsheets.map((spreadsheet) => {
              return (
                <Button
                  size="small"
                  variant="outlined"
                  style={{
                    margin: 3,
                    color:
                      spreadsheet.data == activeSpreadsheet
                        ? "#0099FF"
                        : "#555555",
                  }}
                  onClick={() =>
                    setActiveSpreadsheet(spreadsheet.data)
                  }
                >
                  {spreadsheet.name}
                </Button>
              );
            })}
        </Grid>
      </Grid>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h5" gutterBottom>
            Anomalies Uploaded
          </Typography>
          <Button
            onClick={clearUploadData}
            className={classes.button}
          >
            Import again...
          </Button>
          {/*<Typography variant="subtitle1">
            Your order number is #2001539. We have emailed your order confirmation, and will
            send you an update when your order has shipped.
        </Typography>*/}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button
                onClick={handleBack}
                className={classes.button}
                size="small"
                style={{ margin: 3 }}
              >
                Back
              </Button>
            )}

            {activeSpreadsheet && (
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ margin: 3 }}
                onClick={() =>
                  activeStep > 0
                    ? activeStep === steps.length - 1
                      ? importAnomalies()
                      : extractAnomalies()
                    : handleNext()
                }
                className={classes.button}
              >
                {activeStep > 0
                  ? activeStep === steps.length - 1
                    ? "Import"
                    : "Preview"
                  : "Next"}
              </Button>
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAnomalies: (data) => {
      dispatch(addAnomalies(data));
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
    anomalyOptions: state.anomalyOptions,
    anomalyPermissions: state.anomalyPermissions,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(ExcelDataImport));
