import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
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
import {updateAnomalyOptions} from '../../../_actions/anomalyActions'
import axios from 'axios';
import isNullOrUndefined from 'util';
import {Link} from 'react-router-dom';
import { withSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ManageIcon from '@material-ui/icons/SettingsOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import { green, purple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AlertDialog from '../../../_components/AlertDialog'

import EmptyBox from '@/_images/icons/empty_box_icon.inline.svg';
import {useStyles} from '@/_utilities/CommonStyles'
import {PlainButton} from '@/_utilities/CustomButtons'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

 

function AnomalyOptionsSetupView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState(""); 

    const [openAlert, setOpenAlert] = React.useState(false); 
    const [dialogProps, setDialogProps] = React.useState({});   
        
    const [isEditing, setIsEditing] = React.useState(false);
    
    const anomalyOptions = props.anomalyOptions;
   

    const [newAnomalyOptions, setNewAnomalyOptions] = React.useState({...props.anomalyOptions});        
    
    const handleSelectInputChange = (data, setter) => event => {

      const {name} = event.target;
  
      if (event.target.checked) {
        setter({ ...data, [name]: true });
      }
      else {
        setter({ ...data, [name]: false });
      }
    };

    

   
    const handleSearchInputChange = event => {
      const { name, value } = event.target  ;
      //console.warn(value)
      //console.warn(loFs.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1))
      setSearchText(value)  
    }
    const handleInputChange = event => {
      const { name, value } = event.target  
      setNewAnomalyOptions({ ...newAnomalyOptions, [name]: value })      
    }

    
    function updateAnomalyOptions() {      
      props.updateAnomalyOptions(newAnomalyOptions);
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
      console.warn("AN", props)
      if(props.anomalyOptions)
        setNewAnomalyOptions({...props.anomalyOptions});
    }, [props]);

    return(
        <main className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" gutterBottom>
            Anomaly Options
          </Typography>
          <Button variant="contained" color="primary" disableElevation size="small" onClick={()=>updateAnomalyOptions()}>
            Save
          </Button>         
        </div>
        
        <Grid container spacing={1} className={classes.listContainer}>
       
        <FormControlLabel value={newAnomalyOptions.isAnalysisRBIBased} 
        control={<Checkbox name="isAnalysisRBIBased" checked={newAnomalyOptions.isAnalysisRBIBased == true}  onChange={handleSelectInputChange(newAnomalyOptions, setNewAnomalyOptions)} style={{color: '#1c75bc'}}/>} label="Is Analysis RBI Based" />               
                 
        </Grid>
        </main>
    );
}

const mapStateToProps= (state) => {
  return {
    anomalyOptions: state.anomalyOptions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    
    updateAnomalyOptions:(p) => {dispatch(updateAnomalyOptions(p))},   
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(AnomalyOptionsSetupView));