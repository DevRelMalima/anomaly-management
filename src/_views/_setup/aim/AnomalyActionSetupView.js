import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import {
  createAnomalyAction,
  updateAnomalyAction,
  deleteAnomalyAction,
} from "../../../_actions/anomalyActions";
import { withSnackbar } from "notistack";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import AddIcon from "@material-ui/icons/AddOutlined";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AlertDialog from "../../../_components/AlertDialog";

import EmptyBox from "@/_images/icons/empty_box_icon.inline.svg";
import { useStyles } from "@/_utilities/CommonStyles";
import { PlainButton } from "@/_utilities/CustomButtons";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function AnomalyActionSetupView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState("");

  const [openAlert, setOpenAlert] = React.useState(false);
  const [dialogProps, setDialogProps] = React.useState({});

  const [isEditing, setIsEditing] = React.useState(false);
  const actions = props.actions;
  const [newAnomalyAction, setNewAnomalyAction] = React.useState({
    name: "",
    isTemporary: false,
  });

  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalyAction({
      name: "",
    });
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const deleteAnomalyAction = (action) => {
    if (action) {
      setOpenAlert(true);

      setDialogProps({
        ...dialogProps,
        dialogTitle: "Delete Anomaly Action",
        dialogMessage: "Delete Anomaly Action: " + action.name,
        okAction: () => {
          props.deleteAnomalyAction(action);
          setOpenAlert(false);
        },
      });
    }
  };

  const editAnomalyAction = (action) => {
    if (action) {
      setIsEditing(true);
      setNewAnomalyAction(action);
      setOpen(true);
    }
  };

  const handleSearchInputChange = (event) => {
    const { name, value } = event.target;
    console.warn(value);
    console.warn(
      actions.filter((f) =>
        searchText == "" ? true : f.name.indexOf(searchText) > -1
      )
    );
    setSearchText(value);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnomalyAction({ ...newAnomalyAction, [name]: value });
  };

  const handleSelectInputChange = (data, setter) => (event) => {
    const { name } = event.target;

    if (event.target.checked) {
      setter({ ...data, [name]: true });
    } else {
      setter({ ...data, [name]: false });
    }
  };

  function addAnomalyAction() {
    props.createAnomalyAction({ ...newAnomalyAction });
    setOpen(false);
  }

  function updateAnomalyAction() {
    props.updateAnomalyAction(newAnomalyAction);
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
        <Typography variant="h6" gutterBottom>
          Anomaly Actions
        </Typography>
        <PlainButton onClick={handleClickOpen}>
          <AddIcon className={classes.customButtonIcon} />
          Define New Action
        </PlainButton>

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
              <span>Edit Anomaly Action</span>
            ) : (
              <span>New Anomaly Action</span>
            )}
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Action Name"
              name="name"
              value={newAnomalyAction.name}
              onChange={handleInputChange}
              fullWidth
            />
            <Grid
              container
              spacing={1}
              className={classes.listContainer}
            >
              <FormControlLabel
                value={newAnomalyAction.isTemporary}
                control={
                  <Checkbox
                    name="isTemporary"
                    checked={newAnomalyAction.isTemporary == true}
                    onChange={handleSelectInputChange(
                      newAnomalyAction,
                      setNewAnomalyAction
                    )}
                    style={{ color: "#1c75bc" }}
                  />
                }
                label="Is Temporary Action"
              />
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {isEditing ? (
              <Button onClick={updateAnomalyAction} color="primary">
                Update
              </Button>
            ) : (
              <Button onClick={addAnomalyAction} color="primary">
                Create
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>

      <Grid container spacing={1} className={classes.listContainer}>
        {actions && actions.length > 0 ? (
          actions
            .filter((f) =>
              searchText == ""
                ? true
                : f.name.indexOf(searchText) > -1
            )
            .map((anomalyAction) => (
              <Grid item key={anomalyAction.id} xs={12}>
                <Paper
                  key={anomalyAction.id}
                  className={classes.paper}
                >
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    spacing={2}
                  >
                    <Grid item xs>
                      <Typography variant="h6" noWrap>
                        {anomalyAction.name}
                      </Typography>
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
                          editAnomalyAction(anomalyAction)
                        }
                        color="primary"
                      >
                        <EditIcon className={classes.iconButton2} />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() =>
                          deleteAnomalyAction(anomalyAction)
                        }
                        color="primary"
                      >
                        <DeleteIcon className={classes.iconButton2} />
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
    actions: state.actions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnomalyAction: (id) => {
      dispatch(deleteAnomalyAction(id));
    },
    createAnomalyAction: (a) => {
      dispatch(createAnomalyAction(a));
    },
    updateAnomalyAction: (a) => {
      dispatch(updateAnomalyAction(a));
    },
  };
};

export default withSnackbar(
  connect(mapStateToProps, mapDispatchToProps)(AnomalyActionSetupView)
);
