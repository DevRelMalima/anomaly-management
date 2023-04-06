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
import {
  getPriority,
  getPrioritySoF,
} from "../../utility/riskAnalysisUtility";
import { withSnackbar } from "notistack";
import { DatePicker } from "@material-ui/pickers";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { createMuiTheme } from "@material-ui/core/";
import { ThemeProvider } from "@material-ui/styles";
//import Moment from 'react-moment';
import moment from "moment";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: lightBlue,
  },
});

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

const AnomalyAnalysisForm = (props) => {
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
    actionOwner: "",
    reviewer: "",
    loF: 0,
    soF: 0,
    coF: 0,
    closeOutDate: new Date(),
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
  //console.warn("AN",selectedAnomaly)
  const classes = useStyles();
  const [newAnomaly, setNewAnomaly] = React.useState({
    ...selectedAnomaly,
  });
  const anomalyOptions = props.anomalyOptions;
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

  useEffect(() => {
    let selectedAnomaly = props.anomalies.find((p) => {
      return p.id == props.anomalyId;
    });
    setNewAnomaly({ ...selectedAnomaly });
    setUsers([
      ...props.users.map((u) => {
        let up = getUserPermissions(u);
        return { ...u, ...up };
      }),
    ]);
  }, [props.anomalies]);

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

  // const handleCoFFieldChange = (event) => {
  //   event.persist();
  //   //handleChange(event);
  //   const { name, value } = event.target;
  //   console.log({ name, value });
  //   setNewAnomaly({ ...newAnomaly, [name]: value });
  //   //console.log(newAnomaly)
  //   if (newAnomaly.loF != null && newAnomaly.loF != "") {
  //     let enteredLoF = props.loFs.find((p) => {
  //       return p.id == newAnomaly.loF;
  //     });

  //     let enteredCoF = props.coFs.find((p) => {
  //       return p.id == value;
  //     });

  //     let maxCoF = props.coFs.reduce((t, a) => {
  //       if (t > a.score) return t;
  //       else return a.score;
  //     }, 0);

  //     let minCoF = props.coFs.reduce((t, a) => {
  //       if (t < a.score) return t;
  //       else return a.score;
  //     }, Infinity);

  //     let setPriority = getPriority(
  //       props.priorities,
  //       props.coFs,
  //       props.loFs,
  //       enteredLoF,
  //       enteredCoF
  //     );

  //     var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
  //     setNewAnomaly({
  //       ...newAnomaly,
  //       [name]: value,
  //       priority: setPriority.id,
  //       closeOutDate: moment(new Date()).add(
  //         enteredLoF.minDays +
  //           Math.round(
  //             dateRange * (enteredLoF.maxDays - enteredLoF.minDays)
  //           ),
  //         "days"
  //       ),
  //     });
  //   }
  // };
  const getCloseOut = (p) => {
    switch (p) {
      case "IA":
        return 10 * 12;
      case "P5":
        return 5 * 12;
      case "P4":
        return 36;
      case "P3":
        return 12;
      case "P2":
        return 6;
      case "P1":
        return 3;
      case "P0":
        return 1;
      default:
        return 0;
    }
  };
  const handleCOFFieldChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    console.log({ name, value });
    setNewAnomaly((prevState) => ({ ...prevState, [name]: value }));
    let setPriority = getPriority(newAnomaly.loF, value);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly((prevState) => ({
      ...prevState,
      [name]: value,
      priority: setPriority,
      closeOutDate: moment(new Date()).add(
        getCloseOut(setPriority),
        "months"
      ),
    }));
  };

  const handleLOFFieldChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    console.log({ name, value });
    setNewAnomaly((prevState) => ({ ...prevState, [name]: value }));

    let setPriority = getPriority(value, newAnomaly.coF);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly((prevState) => ({
      ...prevState,
      [name]: value,
      priority: setPriority,
      closeOutDate: moment(new Date()).add(
        getCloseOut(setPriority),
        "months"
      ),
    }));
  };
  const handleSOFFieldChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    console.log({ name, value });
    setNewAnomaly((prevState) => ({ ...prevState, [name]: value }));

    let setPriority = getPrioritySoF(value);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly((prevState) => ({
      ...prevState,
      [name]: value,
      priority: setPriority,
      closeOutDate: moment(new Date()).add(
        getCloseOut(setPriority),
        "months"
      ),
    }));
  };

  const handlePoFFieldChange = (event) => {
    event.persist();
    //handleChange(event);
    const { name, value } = event.target;
    console.log({ name, value });
    setNewAnomaly({ ...newAnomaly, [name]: value });
    //console.log(newAnomaly)
    if (newAnomaly.coF != null && newAnomaly.coF != "") {
      let enteredLoF = props.loFs.find((p) => {
        return p.id == value;
      });

      let enteredCoF = props.coFs.find((p) => {
        return p.id == newAnomaly.coF;
      });

      let maxCoF = props.coFs.reduce((t, a) => {
        if (t > a.score) return t;
        else return a.score;
      }, 0);

      let minCoF = props.coFs.reduce((t, a) => {
        if (t < a.score) return t;
        else return a.score;
      }, Infinity);

      let setPriority = getPriority(
        props.priorities,
        props.coFs,
        props.loFs,
        enteredLoF,
        enteredCoF
      );

      var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
      setNewAnomaly({
        ...newAnomaly,
        [name]: value,
        priority: setPriority.id,
        closeOutDate: moment(new Date()).add(
          enteredLoF.minDays +
            Math.round(
              dateRange * (enteredLoF.maxDays - enteredLoF.minDays)
            ),
          "days"
        ),
      });
    }
  };

  return (
    <div style={{ maxWidth: 700 }}>
      <Typography style={{ fontSize: 18, color: "#555555" }}>
        {newAnomaly.code}
      </Typography>
      <div style={{ padding: 10 }}>
        <Grid
          container
          spacing={2}
          justify="flex-end"
          direction="row"
        >
          <Grid item>
            <Button
              size="small"
              onClick={saveAnomalyAnalysis}
              color="primary"
              variant="contained"
            >
              Save Analysis
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              color="primary"
              component={ReactLink}
              to={"/anomalies/new_anomalies"}
              variant="outlined"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
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
        </Grid>
      </div>
      <div
        style={{ padding: 10, position: "relative", bottom: "0px" }}
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
                  <InputLabel htmlFor="action">Action</InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="action"
                    value={newAnomaly.action}
                    label="Action"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "action",
                      id: "action",
                    }}
                  >
                    {props.actions &&
                      props.actions.map((c) => {
                        return (
                          <MenuItem value={c.id}>{c.name}</MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              {!anomalyOptions.isAnalysisRBIBased && (
                <Grid item xs={12} sm={6}>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="soF">SoF</InputLabel>
                    <Select
                      size="small"
                      inputProps={{
                        name: "soF",
                        id: "soF",
                      }}
                      variant="outlined"
                      fullWidth
                      value={newAnomaly.soF}
                      onChange={handleSOFFieldChange}
                      labelId="soF"
                      label="SoF"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                    {/* <Select
                      autoWidth={true}
                      labelId="soF"
                      value={newAnomaly.soF}
                      label="soF"
                      onChange={handlePoFFieldChange}
                      inputProps={{
                        name: "soF",
                        id: "soF",
                      }}
                    >
                      {props.soFs &&
                        props.soFs.map((c) => {
                          return (
                            <MenuItem value={c.id}>{c.name}</MenuItem>
                          );
                        })}
                    </Select> */}
                  </FormControl>
                </Grid>
              )}

              {anomalyOptions.isAnalysisRBIBased && (
                <Grid item xs={12} sm={6}>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="loF">LoF</InputLabel>
                    {/* <Select
                      autoWidth={true}
                      labelId="loF"
                      value={newAnomaly.loF}
                      label="loF"
                      onChange={handlePoFFieldChange}
                      inputProps={{
                        name: "loF",
                        id: "loF",
                      }}
                    >
                      {props.loFs &&
                        props.loFs.map((c) => {
                          return (
                            <MenuItem value={c.id}>{c.name}</MenuItem>
                          );
                        })}
                    </Select> */}
                    <Select
                      size="small"
                      inputProps={{
                        name: "loF",
                        id: "loF",
                      }}
                      variant="outlined"
                      fullWidth
                      value={newAnomaly.loF}
                      onChange={handleLOFFieldChange}
                      labelId="loF"
                      label="LoF"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}
              {anomalyOptions.isAnalysisRBIBased && (
                <Grid item xs={12} sm={6}>
                  <FormControl
                    size="small"
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="coF">CoF</InputLabel>
                    <Select
                      size="small"
                      inputProps={{
                        name: "coF",
                        id: "coF",
                      }}
                      variant="outlined"
                      fullWidth
                      value={newAnomaly.coF}
                      onChange={handleCOFFieldChange}
                      labelId="coF"
                      label="CoF"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                    {/* <Select
                      autoWidth={true}
                      labelId="coF"
                      value={newAnomaly.coF}
                      label="CoF"
                      onChange={handleCoFFieldChange}
                      inputProps={{
                        name: "coF",
                        id: "coF",
                      }}
                    >
                      {props.coFs &&
                        props.coFs.map((c) => {
                          return (
                            <MenuItem value={c.id}>{c.name}</MenuItem>
                          );
                        })}
                    </Select> */}
                  </FormControl>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <FormControl
                  style={{ backgroundColor: "#dafff2" }}
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="priority"></InputLabel>
                  {/* <Select
                    autoWidth={true}
                    labelId="priority"
                    value={newAnomaly.priority}
                    label="Priority"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "priority",
                      id: "priority",
                    }}
                  >
                    {props.priorities &&
                      props.priorities.map((c) => {
                        return (
                          <MenuItem value={c.id}>{c.name}</MenuItem>
                        );
                      })}
                  </Select> */}
                  <TextField
                    size="small"
                    inputProps={{
                      name: "priority",
                      id: "priority",
                      readOnly: true,
                    }}
                    variant="outlined"
                    fullWidth
                    value={newAnomaly.priority}
                    labelId="priority"
                    label={"Priority"}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="actionOwner">
                    Action Owner
                  </InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="actionOwner"
                    value={newAnomaly.actionOwner}
                    label="Action Owner"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "actionOwner",
                      id: "actionOwner",
                    }}
                  >
                    {props.users &&
                      props.users.map((c) => {
                        return (
                          <MenuItem value={c.id}>
                            {c.firstName + " " + c.lastName}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  name="isShutdownRequired"
                  value={newAnomaly.isShutdownRequired}
                  onChange={handleFieldChange}
                  control={<Checkbox style={{ color: "#1c75bc" }} />}
                  label="Shutdown Required"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="analysisComment"
                  name="analysisComment"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="4"
                  value={newAnomaly.analysisComment}
                  onChange={handleFieldChange}
                  id="analysisComment"
                  label="Analysis Comment"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ThemeProvider theme={defaultMaterialTheme}>
                  <DatePicker
                    style={{ backgroundColor: "#dafff2" }}
                    size="small"
                    openTo="year"
                    fullWidth
                    inputVariant="outlined"
                    label="Close out Date"
                    format="MM-DD-YYYY"
                    views={["year", "month", "date"]}
                    value={newAnomaly.closeOutDate}
                    onChange={(date) => {
                      setNewAnomaly({
                        ...newAnomaly,
                        closeOutDate: date.toDate(),
                      });
                    }}
                    InputAdornmentProps={{ position: "start" }}
                  />
                </ThemeProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="reviewer">
                    Review assigned to
                  </InputLabel>
                  <Select
                    autoWidth={true}
                    labelId="reviewer"
                    value={newAnomaly.reviewer}
                    label="Review assigned to"
                    onChange={handleFieldChange}
                    inputProps={{
                      name: "reviewer",
                      id: "reviewer",
                    }}
                  >
                    {users &&
                      users
                        .filter((i) => i.canReview)
                        .map((c) => {
                          return (
                            <MenuItem value={c.id}>
                              {c.firstName + " " + c.lastName}
                            </MenuItem>
                          );
                        })}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        }
      </div>
    </div>
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
    anomalyOptions: state.anomalyOptions,
    anomalyPermissions: state.anomalyPermissions,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(AnomalyAnalysisForm));
