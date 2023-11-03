import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {createAnomalyClass, updateAnomalyClass, deleteAnomalyClass} from '../../../_actions/anomalyActions'
import { withSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ManageIcon from '@material-ui/icons/SettingsOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AlertDialog from '../../../_components/AlertDialog'

import EmptyBox from '@/_images/icons/empty_box_icon.inline.svg';
import {useStyles} from '@/_utilities/CommonStyles'
import {PlainButton} from '@/_utilities/CustomButtons'

 

function AnomalyClassSetupView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState(""); 

    const [openAlert, setOpenAlert] = React.useState(false); 
    const [dialogProps, setDialogProps] = React.useState({});   
        
    const [isEditing, setIsEditing] = React.useState(false);
    const anomalyClasses = props.anomalyClasses;
    const [newAnomalyClass, setNewAnomalyClass] = React.useState(
      {
      name:"",
      code:""
    });
        
    function handleClickOpen() {
      setIsEditing(false);
      setNewAnomalyClass({
        name:"",
        code:""
      });
      setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
   

    const deleteAnomalyClass = anomalyClass => {  
        
      
      
      //let selectedAccountRole = anomalyClasses.find(role => {return role.id == id});
      //console.warn(selectedAccountRole)
      if(anomalyClass)
      {
        setOpenAlert(true); 

        setDialogProps({...dialogProps, dialogTitle: "Delete anomaly class", 
        dialogMessage: "Delete anomaly class: "+anomalyClass.name,
        okAction:()=>{props.deleteAnomalyClass(anomalyClass);setOpenAlert(false)}
        })
      }

      //props.deleteAnomalyClass(Id);
    }

    const editAnomalyClass = anomalyClass => {
      
      
      //let selectedAccountRole = anomalyClasses.find(role => {return role.id == roleId});
      
      if(anomalyClass){
        setIsEditing(true);
        setNewAnomalyClass(anomalyClass)
        setOpen(true);
      }
       
      
    }

    const handleSearchInputChange = event => {
      const { name, value } = event.target  ;
      console.warn(value)
      console.warn(anomalyClasses.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1))
      setSearchText(value)  
    }
    const handleInputChange = event => {
      const { name, value } = event.target  
      setNewAnomalyClass({ ...newAnomalyClass, [name]: value })      
    }

    function addAnomalyClass() {     
        
        props.createAnomalyClass({...newAnomalyClass});
        setOpen(false);
    }

    function updateAnomalyClass() {      
      props.updateAnomalyClass(newAnomalyClass);
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

    return(
        <main className={classes.content}>
        <div className={classes.toolbar}>
        <Typography variant="h6" gutterBottom>
        Anomaly Classes
      </Typography>
            <PlainButton onClick={handleClickOpen}>
              <AddIcon className={classes.customButtonIcon}/>Create Anomaly Class
            </PlainButton>
            
            <AlertDialog open={openAlert} cancelAction={()=> setOpenAlert(false)} {...dialogProps}/>
            
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
                inputProps={{ 'aria-label': 'Search' }}
                />
            </div>
            <Dialog open={open} fullWidth  className={classes.modalDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                {isEditing ? (<span>Edit Anomaly Class</span>
                ): (<span>New Anomaly Class</span>)
                }   
            </DialogTitle>
                <DialogContent>                
                <TextField
                    autoFocus
                    margin="dense"
                    id="code"
                    label="Anomaly Class Code"
                    name="code"                
                    value={newAnomalyClass.code}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>  
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Anomaly Class Name"
                    name="name"                
                    value={newAnomalyClass.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                {isEditing ? (
                  <Button onClick={updateAnomalyClass} color="primary">
                    Update
                  </Button>
                ): (
                  <Button onClick={addAnomalyClass} color="primary">
                    Create
                  </Button>
                )}  
                
                </DialogActions>
            </Dialog>
        </div>
        
        <Grid container spacing={1} className={classes.listContainer}>
            {(anomalyClasses && anomalyClasses.length >0) ?                
              anomalyClasses.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1).map(anomalyClass => 
                <Grid item key={anomalyClass.id} xs={12}>
                <Paper key={anomalyClass.id} className={classes.paper}>
                <Grid container  direction="row"
  justify="space-between" spacing={2}>
                
                <Grid item xs>
                    <Typography style={{fontSize:14,fontWeight:'bold'}}  variant="h6" noWrap>{anomalyClass.code}</Typography> 
                    <Typography style={{fontSize:12,fontWeight:'normal'}} variant="h6" noWrap>{anomalyClass.name}</Typography>                 
                </Grid>
                <Grid item xs container justify="flex-end" alignItems="center">                  
                  <IconButton size="small" onClick={() => editAnomalyClass(anomalyClass)} color="primary">
                    <EditIcon  className={classes.iconButton2} />
                  </IconButton>
                  <IconButton size="small" onClick={() => deleteAnomalyClass(anomalyClass)} color="primary">
                    <DeleteIcon  className={classes.iconButton2} />
                  </IconButton>
                </Grid>
                </Grid>
            </Paper>
            </Grid>
              )
            : <Grid item xs={12} container  direction="column"
            justify="space-between" alignItems="center"><EmptyBox/><Typography  style={{margin:20,fontSize:20, color:'#777777'}}>Empty</Typography></Grid>}
          </Grid>
          </main>
    );
}

const mapStateToProps= (state) => {
  return {
    anomalyClasses: state.anomalyClasses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnomalyClass:(id) => {dispatch(deleteAnomalyClass(id))},
    createAnomalyClass:(a) => {dispatch(createAnomalyClass(a))},
    updateAnomalyClass:(user) => {dispatch(updateAnomalyClass(user))},
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(AnomalyClassSetupView));