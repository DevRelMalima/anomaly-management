import React, {useEffect, useCallback} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
import {deleteUser, createUser, updateUser} from '../../_actions/userActions'
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
import AlertDialog from '../../_components/AlertDialog'
import {useStyles} from '@/_utilities/CommonStyles'
import {PlainButton} from '@/_utilities/CustomButtons'
import Badge from '@material-ui/core/Badge';
import {BaseURL} from './../../constants/URLs/urls'
/*const useStyles = makeStyles(theme => ({
   
  }));*/

  const ColorButton = withStyles(theme => ({
    root: {
      color: '#FFFFFF',
      backgroundColor: '#1c75bc',
      '&:hover': {
        backgroundColor: '#27aae1',
      },
    },
  }))(Button);

function UsersSetupView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false); 
    const [dialogProps, setDialogProps] = React.useState({});
    //const [deleteUserId, setDeleteUserId] = React.useState(""); 
    const users = props.users;
    const departments = props.departments;
    const roles = props.roles;
    const salaryStructure = props.salaryStructure;
    const companies = props.companies;
    const gender = props.gender;
    const position = props.position;
    
    const [isEditing, setIsEditing] = React.useState(false);
   
    const [newUser, setNewUser] = React.useState(
    {      
      firstName:"",
      lastName:"",
      userName:"",
      emailAddress:"",
      email:"",
      Address:"",
      title:"",
      dateOfBirth:"",
      role:"",
      position:"",
      profilePictureUrl:"",
      dateCreated:"",
      accountStatus:"",
      gender:"",
    });
        
    function handleClickOpen() {
      setIsEditing(false);
      /*setNewUser({
        id:"",
        firstName:"",
        lastName:"",
        userName:"",
        emailAddress:"",
        Address:"",
        title:"",
        dateOfBirth:"",
        role:"",
        position:"",
        profilePictureUrl:"",
        dateCreated:"",
        accountStatus:"",
        gender:""
      });*/
      setNewUser({
        firstName:"",
        lastName:"",
        username:"",
        password:""
      });
      setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
   
    
    //const deleteUserCallback = useCallback((deleteUserId)=>alert(deleteUserId),[deleteUserId]);//props.deleteUser(deleteUserId),[deleteUserId]);

    const deleteUser = userId => {
      //let tempId = userId;
      setOpenAlert(true); 
      //setDeleteUserId(userId);
      let selectedUser = users.find(user => {return user.id == userId});
      if(selectedUser)
      {
        setDialogProps({...dialogProps, dialogTitle: "Delete User", dialogMessage: "Delete user: "+selectedUser.firstName+" "+selectedUser.lastName+""})
      }
      //setDialogProps({...dialogProps, dialogTitle: "Delete User", dialogMessage: "Delete user: "+selectedUser.firstName+" "+selectedUser.lastName+"", okAction:()=>{props.deleteUser(userId);setOpenAlert(false)}})
      
    }

    const editUser = userId => {
      
      setIsEditing(true);
      let selectedUser = users.find(user => {return user.id == userId});

      if(selectedUser){
        setNewUser(selectedUser)
      }
       
      setOpen(true);
    }

    const handleInputChange = event => {
      const { name, value } = event.target  
      setNewUser({ ...newUser, [name]: value })      
    }

    function addUser() {      
        props.createUser({...newUser});
        setOpen(false);
    }

    function updateUser() {      
      props.updateUser(newUser);
      setOpen(false);
    }

    function getAvatar(user)
    {
      return (user.profilePictureId && user.profilePictureId!="")?
        <Avatar alt="Remy Sharp" src={BaseURL + "/users/profilepicture/"+user.id+"/"+user.profilePictureId} className={classes.bigAvatar} style={{ margin:'0px'}}/>       
        :
        <Avatar alt="Remy Sharp" className={classes.bigAvatar} style={{background:user.userColor, margin:'0px'}}  >
            {(user.firstName && user.firstName != "")?user.firstName.charAt(0):""}{(user.lastName && user.lastName != "")?user.lastName.charAt(0):""}
        </Avatar>
        
    }
    useEffect(() => {
        /*const fetchData = async () => {
        
        //if(isNullOrUndefined(props.projects))
        //  return;

      axios.get(BaseURL + '/api/projects')
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
       Users
      </Typography>
            <PlainButton onClick={handleClickOpen}>
              <AddIcon className={classes.customButtonIcon}/>Create New User
            </PlainButton>
            <AlertDialog open={openAlert} cancelAction={()=> setOpenAlert(false)} {...dialogProps}/>
            <Dialog open={open} fullWidth  className={classes.modalDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                {isEditing ? (<span>Edit User</span>
                ): (<span>New User</span>)
                }   
            </DialogTitle>
                <DialogContent>                
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="First Name"
                    name="firstName"                
                    value={newUser.firstName}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>
                <TextField
                    
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="projectDesc"  
                    name="lastName"                  
                    value={newUser.lastName}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>                
                <TextField
                    
                    margin="dense"
                    id="userName"
                    label="Username"
                    name="userName"                
                    value={newUser.userName}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>   
                <TextField
                    
                    margin="dense"
                    id="password"
                    label="Default Password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>                
                <TextField
                    
                    margin="dense"
                    id="email"
                    label="Email"
                    name="email"                
                    value={newUser.email}
                    onChange={handleInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                {isEditing ? (
                  <Button onClick={updateUser} color="primary">
                    Update
                  </Button>
                ): (
                  <Button onClick={addUser} color="primary">
                    Create
                  </Button>
                )}  
                
                </DialogActions>
            </Dialog>
        </div>
        
        <Grid container spacing={4}>
            {(users && users.length >0) ? users.map(user => (
              <Grid item key={user.id} xs={12} sm={6} md={6}>
                <Card className={classes.card} style={{borderTopColor:user.userColor}}>                           
                  <CardContent className={classes.cardContent}>
                  <Grid container spacing={1} direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    <Grid item>
                    
                     {/*<Badge badgeContent={2} color="secondary" variant="dot">{getAvatar(user)}</Badge>*/}       
                    {(user.isOnline)?
                       
                        <div style={{border:'0px', position:'relative'}}>                         
                          { getAvatar(user)}
                          <div style={{background:'#2ca903', position:'absolute', height:'10px', width:'10px', top:'0px', right:'0px', borderRadius:'50%'}}></div>
                        </div>:
                        getAvatar(user)
                    }
                    
                    </Grid>
                    <Grid item  xs={6} sm={6} md={6}>
                    
                    <Typography  variant="h6" style={{fontWeight:'bold'}} component="h2">
                     {user.title || ""}&nbsp;{user.firstName || ""}&nbsp;{user.lastName|| ""}
                    </Typography>
                    <Typography style={{fontSize:12}}>
                     {user.username || ""}
                    </Typography> 
                    <Typography style={{fontSize:12}}>
                     {props.jobTitles.find(x => x.id == user.jobTitleId) && props.jobTitles.find(x => x.id == user.jobTitleId).name || ""}
                    </Typography> 
                    <Typography style={{fontSize:12}}>
                     {props.departments.find(x => x.id == user.departmentId) && props.departments.find(x => x.id == user.departmentId).name || ""}
                    </Typography> 
                    <Typography style={{fontSize:12}}>
                     {props.companies.find(x => x.id == user.companyId) && props.companies.find(x => x.id == user.companyId).name || ""}
                    </Typography> 
                    <Typography style={{fontSize:12}}>
                     {user.role || ""}
                    </Typography> 
                    
                    </Grid>
                  </Grid>
                  </CardContent>
                  <CardActions style={{padding:0}}>   
                  <Grid container  direction="row"
                    justify="flex-end"
                    alignItems="center">                 
                    <Button component={Link} to={ "/setup/users/user/"+user.id+"/"} size="small" color="primary">
                      <ManageIcon  className={classes.iconButton} />
                    </Button>
                    <Button size="small" onClick={() => editUser(user.id)} color="primary">
                      <EditIcon  className={classes.iconButton} />
                    </Button>
                    <Button size="small" onClick={() => deleteUser(user.id)} color="primary">
                      <DeleteIcon  className={classes.iconButton} />
                    </Button>
                  </Grid>
                  </CardActions>
                </Card>
              </Grid>
            )): <Grid item xs={12} alignItems="center"><Typography  style={{margin:20,fontSize:30}}>No Users</Typography></Grid>}
          </Grid>
          </main>
    );
}

const mapStateToProps= (state) => {
  return {
    projects: state.projects,
    users: state.users,
    jobTitles: state.jobTitles,
    departments: state.departments,
    companies: state.companies,
    accountRoles: state.accountRoles

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser:(id) => {dispatch(deleteUser(id))},
    createUser:(user) => {dispatch(createUser(user))},
    updateUser:(user) => {dispatch(updateUser(user))},
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(UsersSetupView));