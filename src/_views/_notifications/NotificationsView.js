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
import {clearNotifications, deleteNotification, updateNotification} from '../../_actions/notificationActions'
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
import AlertDialog from '../../_components/AlertDialog'

import EmptyBox from '@/_images/icons/empty_box_icon.inline.svg';
import {useStyles} from '@/_utilities/CommonStyles'
import {PlainButton} from '@/_utilities/CustomButtons'

function NotificationsSetupView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState(""); 

    const [openAlert, setOpenAlert] = React.useState(false); 
    const [dialogProps, setDialogProps] = React.useState({});   
        
    const [isEditing, setIsEditing] = React.useState(false);
    const notifications = props.notifications;
    const [newJobTitle, setNewJobTitle] = React.useState(
      {
      name:""
    });
        
    function handleClickOpen() {
      setIsEditing(false);
      setNewJobTitle({
        name:""
      });
      setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
   

    const deleteNotification = notification => {  
      //let selectedNotification = props.notifications.find(n => {return n.id == jobTitle.id});
     
      if(notification)
      {
        setOpenAlert(true); 

        setDialogProps({...dialogProps, dialogTitle: "Delete Notification", 
        dialogMessage: ""+notification.title +"..." + notification.description,
        okAction:()=>{props.deleteNotification(notification);setOpenAlert(false)}
        })
      }

    }

    const editJobTitle = jobTitle => {
      
      
      //let selectedJobTitle = jobTitles.find(jobTitle => {return jobTitle.id == jobTitleId});
      
      if(jobTitle){
        setIsEditing(true);
        setNewJobTitle(jobTitle)
        setOpen(true);
      }
       
      
    }

    const handleSearchInputChange = event => {
      const { name, value } = event.target  ;
      setSearchText(value)  
    }
    const handleInputChange = event => {
      const { name, value } = event.target  
      setNewJobTitle({ ...newJobTitle, [name]: value })      
    }

    function addJobTitle() {     
        
        props.createJobTitle({...newJobTitle,id:Math.random()});
        setOpen(false);
    }

    function updateNotification(n) {      
      props.updateNotification(n);
      setOpen(false);
    }

    function clearNotifications()
    {
      setOpenAlert(true); 

        setDialogProps({...dialogProps, dialogTitle: "Clear Notifications", 
        dialogMessage: "Delete all your notifications?",
        okAction:()=>{props.clearNotifications();;setOpenAlert(false)}
        })
        
    }

    useEffect(() => {
        
    }, [props.notifications]);

    return(
        <main className={classes.content}>
        <div className={classes.toolbar}>
        <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
            <PlainButton onClick={()=>clearNotifications()}>
              <DeleteIcon className={classes.customButtonIcon}/>Clear all notifications
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
           
        </div>
        
        <Grid container spacing={1}  className={classes.listContainer}>
            {(notifications && notifications.length >0) ?                
              notifications.filter( f=> searchText == ""? true:f.title.indexOf(searchText) > -1).map(notification => 
                <Grid item key={notification.id} xs={12}>
                <Paper key={notification.id} className={classes.paper}
                 style={{borderLeft: notification.isRead? '5px solid #444444': '5px solid #0099FF'}}
                >
                <Grid container  direction="row"
  justify="space-between" spacing={2}>
                
                <Grid item xs>
                    <Typography variant="h6" style={{fontSize:13, fontWeight: notification.isRead? 'normal':'bold', color: notification.isRead? '#444444':'#0099FF'}} noWrap>{notification.title}</Typography>
                    <Typography variant="h6" style={{fontSize:11}} noWrap>{notification.description}</Typography>                 
                    <Typography variant="h6" style={{fontSize:11}} noWrap>{notification.createdOn && <Moment format="LLL" date={notification.createdOn}/>}</Typography>                 
                </Grid>
                <Grid item xs container justify="flex-end" alignItems="center">                 
                  
                  <IconButton size="small" onClick={() => deleteNotification(notification)} color="primary">
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
    notifications: state.notifications,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearNotifications:(id) => {dispatch(clearNotifications(id))},
    deleteNotification:(notification) => {dispatch(deleteNotification(notification))},
    updateNotification:(notification) => {dispatch(updateNotification(notification))},
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(NotificationsSetupView));