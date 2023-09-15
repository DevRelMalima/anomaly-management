import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  fade,
  makeStyles,
  withStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { updateAnomalyPermission } from "../../../_actions/anomalyActions";
import axios from "axios";
import isNullOrUndefined from "util";
import { Link } from "react-router-dom";
import { withSnackbar } from "notistack";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import ManageIcon from "@material-ui/icons/SettingsOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import { green, purple } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AlertDialog from "../../../_components/AlertDialog";

import EmptyBox from "@/_images/icons/empty_box_icon.inline.svg";
import { useStyles } from "@/_utilities/CommonStyles";
import { PlainButton } from "@/_utilities/CustomButtons";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

function AnomalyPermissionSetupView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const emptyAnomalyPermission = {
    user: "",
    canAnalyse: false,
    canCreate: true,
    canReview: false,
    canSetStatus: false,
  };

  const [openAlert, setOpenAlert] = React.useState(false);
  const [dialogProps, setDialogProps] = React.useState({});

  const [isEditing, setIsEditing] = React.useState(false);
  const anomalyPermissions = props.anomalyPermissions;
  const users = props.users;
  const [newAnomalyPermission, setNewAnomalyPermission] =
    React.useState({ ...emptyAnomalyPermission });

  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalyPermission({ ...emptyAnomalyPermission });
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSelectInputChange = (data, setter) => (event) => {
    const { name } = event.target;

    if (event.target.checked) {
      setter({ ...data, [name]: true });
    } else {
      setter({ ...data, [name]: false });
    }
  };

  const getPermissionsView = (user) => {
    let selectedAnomalyPermission = anomalyPermissions.find((ap) => {
      return ap.user == user.id;
    });

    let anomalyPermission = selectedAnomalyPermission
      ? selectedAnomalyPermission
      : { ...emptyAnomalyPermission, user };
    if (anomalyPermission) {
      return (
        <Grid>
          {anomalyPermission.canCreate && (
            <Chip
              variant="outlined"
              size="small"
              style={{ fontSize: 10, padding: 2, margin: 2 }}
              label="Can Create"
              deleteIcon={<DoneIcon />}
              color="primary"
            />
          )}
          {anomalyPermission.canAnalyse && (
            <Chip
              variant="outlined"
              size="small"
              style={{ fontSize: 10, padding: 2, margin: 2 }}
              label="Can Analyse"
              deleteIcon={<DoneIcon />}
              color="primary"
            />
          )}
          {anomalyPermission.canReview && (
            <Chip
              variant="outlined"
              size="small"
              style={{ fontSize: 10, padding: 2, margin: 2 }}
              label="Can Review"
              deleteIcon={<DoneIcon />}
              color="primary"
            />
          )}
          {anomalyPermission.canSetStatus && (
            <Chip
              variant="outlined"
              size="small"
              style={{ fontSize: 10, padding: 2, margin: 2 }}
              label="Can Update Status"
              deleteIcon={<DoneIcon />}
              color="primary"
            />
          )}
        </Grid>
      );
    }
  };

  /*const deleteanomalyPermission = anomalyPermission => {  
        
      
      
      //let selectedAccountRole = anomalyPermissions.find(role => {return role.id == id});
      //console.warn(selectedAccountRole)
      if(anomalyPermission)
      {
        setOpenAlert(true); 

        setDialogProps({...dialogProps, dialogTitle: "Delete Anomaly Permission", 
        dialogMessage: "Delete Anomaly Permission: "+anomalyPermission.name,
        okAction:()=>{props.deleteanomalyPermission(anomalyPermission);setOpenAlert(false)}
        })
      }

      //props.deleteanomalyPermission(Id);
    }*/

  const editAnomalyPermission = (user) => {
    let selectedAnomalyPermission = anomalyPermissions.find((ap) => {
      return ap.user == user.id;
    });

    let anomalyPermission = selectedAnomalyPermission
      ? selectedAnomalyPermission
      : { ...emptyAnomalyPermission, user };

    if (anomalyPermission) {
      setIsEditing(true);
      setNewAnomalyPermission({ ...anomalyPermission, user });
      setOpen(true);
    }
  };

  const handleSearchInputChange = (event) => {
    const { name, value } = event.target;
    //console.warn(value)
    //console.warn(anomalyPermissions.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1))
    setSearchText(value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnomalyPermission({
      ...newAnomalyPermission,
      [name]: value,
    });
  };

  /*function addanomalyPermission() {     
        
        props.createanomalyPermission({...newAnomalyPermission});
        setOpen(false);
    }*/

  function updateAnomalyPermission() {
    props.updateAnomalyPermission({
      ...newAnomalyPermission,
      id: newAnomalyPermission.user.id,
      user: newAnomalyPermission.user.id,
    });
    //setNewAnomaly({...emptyAnomaly})
    props.enqueueSnackbar("Permissions Updated", {
      variant: "success",
    });

    props.history.push("/setup/anomaly_permissions");
    setOpen(false);
  }

  useEffect(() => {
    /*const fetchData = async () => {
        
        //if(isNullOrUndefined(props.projects))
        //  return;

      axios.get(' /api/projects')
            .then((result) => {
              console.warn("result", result.data);
              props.fetchProjects(result.data);
               
            })
            .catch((ex) => {
                console.error(ex);
            });
  
        //setData(result.data);
      };
  
      fetchData();*/
  }, [props]);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <AlertDialog
          open={openAlert}
          cancelAction={() => setOpenAlert(false)}
          {...dialogProps}
        />

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            name="searchText"
            value={searchText}
            onChange={handleSearchInputChange}
            fullWidth
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "Search" }}
          />
        </div>
        <Dialog
          open={open}
          fullWidth
          className={classes.modalDialog}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {isEditing ? (
              <span>
                Edit Anomaly Permission:{" "}
                {newAnomalyPermission.user.firstName +
                  " " +
                  newAnomalyPermission.user.lastName}
              </span>
            ) : (
              <span>New Anomaly Permission</span>
            )}
          </DialogTitle>
          <DialogContent>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value={newAnomalyPermission.canCreate}
                control={
                  <Checkbox
                    name="canCreate"
                    checked={newAnomalyPermission.canCreate == true}
                    onChange={handleSelectInputChange(
                      newAnomalyPermission,
                      setNewAnomalyPermission
                    )}
                    style={{ color: "#1c75bc" }}
                  />
                }
                label="Can create anomaly"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                name="canAnalyse"
                value={newAnomalyPermission.canAnalyse}
                control={
                  <Checkbox
                    name="canAnalyse"
                    checked={newAnomalyPermission.canAnalyse == true}
                    onChange={handleSelectInputChange(
                      newAnomalyPermission,
                      setNewAnomalyPermission
                    )}
                    style={{ color: "#1c75bc" }}
                  />
                }
                label="Can analyse anomaly"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                name="canReview"
                value={newAnomalyPermission.canReview}
                onChange={handleInputChange}
                control={
                  <Checkbox
                    name="canReview"
                    checked={newAnomalyPermission.canReview == true}
                    onChange={handleSelectInputChange(
                      newAnomalyPermission,
                      setNewAnomalyPermission
                    )}
                    style={{ color: "#1c75bc" }}
                  />
                }
                label="Can review anomaly"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                name="canSetStatus"
                value={newAnomalyPermission.canSetStatus}
                onChange={handleInputChange}
                control={
                  <Checkbox
                    name="canSetStatus"
                    checked={
                      newAnomalyPermission.canSetStatus == true
                    }
                    onChange={handleSelectInputChange(
                      newAnomalyPermission,
                      setNewAnomalyPermission
                    )}
                    style={{ color: "#1c75bc" }}
                  />
                }
                label="Can update anomaly status"
              />
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={updateAnomalyPermission} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Grid container spacing={1} className={classes.listContainer}>
        {users && users.length > 0 ? (
          users
            .filter((f) =>
              searchText == ""
                ? true
                : f.name.indexOf(searchText) > -1
            )
            .map((user) => (
              <Grid item key={user.id} xs={12}>
                <Paper key={user.id} className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                  >
                    <Grid item xs>
                      {/*<Typography variant="h6" style={{fontSize:14,fontWeight:'bold'}} noWrap>{anomalyPermission.name}</Typography>  
                    {(anomalyPermission.maxDays > 0 || anomalyPermission.minDays > 0) &&<Typography variant="h6" style={{fontSize:12,fontWeight:'normal'}} noWrap>{"Window: " + (anomalyPermission.maxDays  > 0 ? ( anomalyPermission.minDays > 0 ? anomalyPermission.minDays + " days to " : "Less than ") + anomalyPermission.maxDays +" days" : "More than " + anomalyPermission.minDays +" days")}</Typography>}                     
              <Typography variant="h6" style={{fontSize:12,fontWeight:'normal'}} noWrap>{"Score: " + anomalyPermission.score}</Typography>*/}
                      <Typography
                        variant="h6"
                        style={{ fontWeight: "bold" }}
                        component="h2"
                      >
                        {user.title || ""}&nbsp;{user.firstName || ""}
                        &nbsp;{user.lastName || ""}
                      </Typography>
                      <Typography style={{ fontSize: 12 }}>
                        {user.username || ""}
                      </Typography>
                      <Typography style={{ fontSize: 12 }}>
                        {(props.jobTitles.find(
                          (x) => x.id == user.jobTitleId
                        ) &&
                          props.jobTitles.find(
                            (x) => x.id == user.jobTitleId
                          ).name) ||
                          ""}
                      </Typography>
                      <Typography style={{ fontSize: 12 }}>
                        {(props.departments.find(
                          (x) => x.id == user.departmentId
                        ) &&
                          props.departments.find(
                            (x) => x.id == user.departmentId
                          ).name) ||
                          ""}
                      </Typography>
                      <Typography style={{ fontSize: 12 }}>
                        {(props.companies.find(
                          (x) => x.id == user.companyId
                        ) &&
                          props.companies.find(
                            (x) => x.id == user.companyId
                          ).name) ||
                          ""}
                      </Typography>
                      <Typography style={{ fontSize: 12 }}>
                        {user.role || ""}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      {/*<Typography variant="h6" style={{fontSize:14,fontWeight:'bold'}} noWrap>{anomalyPermission.name}</Typography>  
                    {(anomalyPermission.maxDays > 0 || anomalyPermission.minDays > 0) &&<Typography variant="h6" style={{fontSize:12,fontWeight:'normal'}} noWrap>{"Window: " + (anomalyPermission.maxDays  > 0 ? ( anomalyPermission.minDays > 0 ? anomalyPermission.minDays + " days to " : "Less than ") + anomalyPermission.maxDays +" days" : "More than " + anomalyPermission.minDays +" days")}</Typography>}                     
              <Typography variant="h6" style={{fontSize:12,fontWeight:'normal'}} noWrap>{"Score: " + anomalyPermission.score}</Typography>*/}
                      {getPermissionsView(user)}
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
                        onClick={() => editAnomalyPermission(user)}
                        color="primary"
                      >
                        <EditIcon className={classes.iconButton2} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))
        ) : (
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <EmptyBox />
            <Typography
              style={{ margin: 20, fontSize: 20, color: "#777777" }}
            >
              Empty
            </Typography>
          </Grid>
        )}
      </Grid>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    anomalyPermissions: state.anomalyPermissions,
    users: state.users,
    jobTitles: state.jobTitles,
    departments: state.departments,
    companies: state.companies,
    accountRoles: state.accountRoles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnomalyPermission: (p) => {
      dispatch(updateAnomalyPermission(p));
    },
  };
};

export default withSnackbar(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnomalyPermissionSetupView)
);
