import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import {connect} from 'react-redux';
import {isNullOrUndefined} from 'util';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {updatePassword} from '../../_actions/userActions'


import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useStyles} from '@/_utilities/CommonStyles';

import {BaseURL} from './../../constants/URLs/urls'

/*const useStyles = makeStyles(theme => ({
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 120,
      height: 120,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
      },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },    
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      borderLeft:'0px solid #FF0099',
      background:'none'

    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
 
*/
function PasswordUpdateView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
   // const [thumbnail, setThumbnail] = React.useState("");
    const [currentUser, setCurrentUser] = React.useState(props.currentUser);
    
    const accountRoles = props.accountRoles;
    const [passwordInfo, setPasswordInfo] = React.useState(
        {
            currentPassword:"",
            newPassword:"",
            newPasswordRetype:"",
        }
    );

    //console.log(props);

    React.useEffect(() => {
      setCurrentUser(props.currentUser)
    }, [props])

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleChange()
    {
        
    }

    const handleInputChange = event => {
      const { name, value } = event.target  
      setPasswordInfo({ ...passwordInfo, [name]: value })      
    }
    
    const updatePassword = () =>
    {
      console.log(passwordInfo);
      props.updatePassword({...passwordInfo});
      //props.dispatch({type:'SET_CURRENT_USER', currentUser});
    }

    
    
    function userAvatar()
    {
      
      if(props.currentUser && props.currentUser.profilePictureId)
      {
        return <Avatar alt="Remy Sharp" src={BaseURL + "/users/profilepicture/"+props.currentUser.id+"/"+props.currentUser.profilePictureId} className={classes.bigAvatar} />            
      }
      else
      {
        return <Avatar alt="Remy Sharp" className={classes.bigAvatar}>
          {(props.currentUser.firstName && props.currentUser.firstName != "")?props.currentUser.firstName.charAt(0):""}{(props.currentUser.lastName && props.currentUser.lastName != "")?props.currentUser.lastName.charAt(0):""}
             
        </Avatar>            
      }
    }
    
    return(

      

      <main className={classes.content}>
      <Typography variant="h6" gutterBottom>
        Password Update
      </Typography>
      
      <Grid justify="center" container
  direction="column"
  justify="center"
  alignItems="center">
            {userAvatar()}                       
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>         
            
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="currentPassword"
            name="currentPassword"
            label="Old Password"
            value={passwordInfo.currentPassword|| ''}
            onChange={handleInputChange}
            type = "password"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="newPassword"
            name="newPassword"
            label="New Password"
            value={passwordInfo.newPassword|| ''}
            onChange={handleInputChange}
            type = "password"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="newPasswordRetype"
            name="newPasswordRetype"
            label="New Password Re-type"
            value={passwordInfo.newPasswordRetype || ''}
            onChange={handleInputChange}
            type = "password"
            fullWidth
           
          />
        </Grid>
        

        
        <Grid item xs={12}>
          <Button variant="contained" onClick={updatePassword} color="primary">
                    Update Password
          </Button>
        </Grid>
      </Grid>
        </main>
    );
}

const mapStateToProps= (state) => {
  return {
    currentUser: state.currentUser,
    accountRoles: state.accountRoles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
    updatePassword:(passwordInfo) => {dispatch(updatePassword(passwordInfo))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordUpdateView);