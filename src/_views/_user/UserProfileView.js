import React from 'react'
import {v4 as uuidv4} from 'uuid'
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
import { connect } from 'react-redux';
import { isNullOrUndefined } from 'util';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setCurrentUser, updateUser, updateUserProfile } from '../../_actions/userActions'
import {
  KeyboardDatePicker,
} from '@material-ui/pickers';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from '@/_utilities/CommonStyles'
import { PlainButton, ColorButton } from '@/_utilities/CustomButtons'
import AddIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import UsersSetupView from './UsersSetupView';
import {BaseURL} from './../../constants/URLs/urls';

function UserProfileView(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [thumbnail, setThumbnail] = React.useState("");

  const params = props.match != null  && props.match.params != null ? props.match.params : null; 
    
  //const isMultiSelect = props.isMultiSelect != null ? props.isMultiSelect != null : true;
  var _currentUserId = params && params.userId || null;
  console.warn(_currentUserId)
  const user = _currentUserId != null ? props.users.find( u => u.id == _currentUserId) : props.currentUser;

  const [currentUserId, setCurrentUserId] = React.useState(_currentUserId);

  const [currentUser, setCurrentUser] = React.useState(_currentUserId != null? props.users.find( u => u.id == _currentUserId) : props.currentUser);
  console.warn(currentUser)
  const [addresses, setAddresses] = React.useState(currentUser && currentUser.addresses || [])
  const [phoneNumbers, setPhoneNumbers] = React.useState(currentUser && currentUser.phoneNumbers || [])

  const [newPhoneNumber, setNewPhoneNumber] = React.useState({
    id: "",
    countryCode: "",
    number: "",
    isPrimary: false,
  });

  const [newAddress, setNewAddress] = React.useState({
    id: "",
    line1: "",
    line2: "",
    country: "",
    state: "",    
    city: "",
    isPrimary: false,
  });

  //const [openPhoneNumerDialog, setOpenTaskDialog] = React.useState(false);
  //const [openTaskDialog, setOpenTaskDialog] = React.useState(false);

  const [openAddressDialog, setOpenAddressDialog] = React.useState(false);
  const [isEditingAddress, setIsEditingAddress] = React.useState(false);

  const [openPhoneNumberDialog, setOpenPhoneNumberDialog] = React.useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = React.useState(false);
  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);

  const accountRoles = props.accountRoles;
  const titles = props.titles;
  const genders = props.genders;
  const companies = props.companies;
  const departments = props.departments;
  const jobTitles = props.jobTitles;
  const countries = props.countries;
 // const [lastName, setLastName] = React.useState(props.currentUser.lastName);

  //console.log(props);

  function handlePhoneNumberDialogOpen() {
    setIsEditingPhoneNumber(false);
    setNewPhoneNumber({
      id: uuidv4(),
      countryCode: "",
      number: "",
      isPrimary: true,
    });
    setOpenPhoneNumberDialog(true);
  }

  function handleAddressDialogOpen() {
    setIsEditingAddress(false);
    //console.warn("uuid", uuid())
    setNewAddress({
      id: uuidv4(),
      line1: "",
      line2: "",
      country: "",
      state: "",    
      city: "",
      isPrimary: false,
    });
    setOpenAddressDialog(true);
  }

  React.useEffect(() => {
    setCurrentUser(_currentUserId != null? props.users.find( u => u.id == _currentUserId) : props.currentUser)
  }, [props])

 /* function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChange() {

  }*/

  const handleInputChange = (data, setter) => event => {
    const { name, value } = event.target
    setter({ ...data, [name]: value })
  }

  const handleSelectInputChange = (data, setter) => event => {

    const {name} = event.target;

    if (event.target.checked) {
      setter({ ...data, [name]: true });
    }
    else {
      setter({ ...data, [name]: false });
    }
  };

  const handleCityStateInputChange = (data, setter) => event => {
    const { name, value } = event.target

    let newCity = cities.find(s => s.id == value)
    console.warn(newCity);
    if(newCity)
      setter({ ...data, city: newCity })
  }

  const handleStateInputChange = (data, setter) => event => {
    const { name, value } = event.target

    let newState = states.find(s => s.id == value)
    console.warn(newState);
    if(newState)
      setter({ ...data, state: newState })

      axios.get(BaseURL + '/api/defaults/cities/'+value)
      .then((result) => {
        
     // this.props.enqueueSnackbar('Successfully loaded Notifications.')
      if(result.data.length>0)
      //this.props.dispatch({type:'FETCH_COUNTRIES',data:result.data});
      setCities(result.data)
      })
      .catch((ex) => {
          console.error(ex);
      });
  }

  const handleCountrySelectInputChange = (data, setter) => event => {

    const { name, value } = event.target
    //setter({ ...data, [name]: value })
    let newCountry= countries.find(c => c.id == value)
    console.warn(newCountry);
    if(newCountry)
      setter({ ...data, country: newCountry })

    axios.get(BaseURL + '/api/defaults/states/'+value)
                .then((result) => {
                  
               // this.props.enqueueSnackbar('Successfully loaded Notifications.')
                if(result.data.length>0)
                //this.props.dispatch({type:'FETCH_COUNTRIES',data:result.data});
                setStates(result.data)
                })
                .catch((ex) => {
                    console.error(ex);
                });

  };

  const addNewPhoneNumber = () => {
    console.log(newPhoneNumber);
   // let updatedCurrentUser = currentUser;
   // phoneNumbers = 
    setPhoneNumbers(phoneNumbers?[...phoneNumbers, newPhoneNumber]:[newPhoneNumber])
    setOpenPhoneNumberDialog(false);
  }

  const updatePhoneNumber = () => {
    let newPhoneNumbers = [...phoneNumbers.filter(p => {return p.id !== newPhoneNumber.id})]
    setPhoneNumbers([...newPhoneNumbers, newPhoneNumber])
    setOpenPhoneNumberDialog(false);
  }

  const addNewAddress = () => {
    console.log(newAddress);
    /*let updatedCurrentUser = currentUser;
    updatedCurrentUser.addresses = currentUser.addresses?[...currentUser.addresses, newAddress]:[newAddress]
    setCurrentUser(updatedCurrentUser)*/
    setAddresses(addresses?[...addresses, newAddress]:[newAddress])
   
    setOpenAddressDialog(false);
  }

  const updateAddress = () => {
    let newAddresses = [...addresses.filter(address => {return address.id !== newAddress.id})]
    setAddresses([...newAddresses, newAddress])
    setOpenAddressDialog(false);
   
  }

  const deleteAddress = (id) => {
    /*let updatedCurrentUser = currentUser;
    updatedCurrentUser.addresses = [...updatedCurrentUser.addresses.filter(address => {return address.id !== id})]
    setCurrentUser(updatedCurrentUser)*/

    setAddresses( [...addresses.filter(address => {return address.id !== id})])
  }

  const editAddress = (id) => {
    setIsEditingAddress(true);

    let currentAddress = addresses.find(address => address.id == id)
   
    if(currentAddress != null)
    {
      setNewAddress({...currentAddress });
      setOpenAddressDialog(true);
    }
    
  }

  const editPhoneNumber = (id) => {
    setIsEditingPhoneNumber (true);

    let currentPhoneNumber = phoneNumbers.find(p => p.id == id)
   
    if(currentPhoneNumber != null)
    {
      setNewPhoneNumber({...currentPhoneNumber });
      setOpenPhoneNumberDialog(true);
    }
    
  }

  const deletePhoneNumber = (id) => {
   // let updatedCurrentUser = currentUser;
   // updatedCurrentUser.phoneNumbers =
    setPhoneNumbers( [...phoneNumbers.filter(phoneNumber => {return phoneNumber.id !== id})])
  }

  const updateProfile = () => {
   
    setCurrentUser({...currentUser, addresses:[...addresses], phoneNumbers:[...phoneNumbers]})

    console.log(currentUser);
    props.updateUserProfile( {...currentUser, addresses:[...addresses], phoneNumbers:[...phoneNumbers]});

    if(currentUser.id == props.currentUser.id)
    {
      props.setCurrentUser({ ...currentUser, addresses:[...addresses], phoneNumbers:[...phoneNumbers]})
    }
  }

  const removeProfilePicture = () => {
    axios.delete(BaseURL + '/users/profilepicture', {}, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + props.currentUser.token
      }
    })
      .then((result) => {
        console.warn("result", result)
        //props.dispatch({type:'SET_CURRENT_USER', currentUser:{...props.currentUser, profilePictureId:null}});
        props.setCurrentUser({ ...props.currentUser, profilePictureId: null })
        /*
          let message = "Success!"
          if (!result.data.success) {
              message = result.data.message;
          }
          this.setState({
              ...state,
              justFileServiceResponse: message
          });
          */
      })
      .catch((ex) => {
        console.error(ex);
      });
  }

  function onChange(e) {
    let files = e.target.files;
    console.warn("data file", files);

    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      //console.warn("img data ", e.target.result)  

      //let newCurrentUser = {...props.currentUser, profilePictureUrl:e.target.result};
      //console.warn("img data ", newCurrentUser)  
      //props.dispatch({type:'SET_CURRENT_USER', currentUser:newCurrentUser});
      //setThumbnail(e.target.result) ;
    }

    //const url = "";
    //let formData = new FormData();
    //formData.append('File',files[0])

    let form = new FormData();
    /* for (var index = 0; index < files.length; index++) {
          var element = files[index];
          form.append('file', element);
      }*/

    form.append('file', files[0]);
    //formData.append('userId', '1223');

    axios.post(BaseURL + '/users/profilepicture', form, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: 'Bearer ' + props.currentUser.token
      }
    })
      .then((result) => {
        console.warn("result", result)
        //props.dispatch({type:'SET_CURRENT_USER', currentUser:{...props.currentUser, profilePictureId:result.data.id}});
        props.setCurrentUser({ ...props.currentUser, profilePictureId: result.data.id })
        /*
          let message = "Success!"
          if (!result.data.success) {
              message = result.data.message;
          }
          this.setState({
              ...state,
              justFileServiceResponse: message
          });
          */
      })
      .catch((ex) => {
        console.error(ex);
      });

    /*return axios({
      url:BaseURL + '/api/files/upload',
      method:"POST",
      headers:{
        'Content-Type':'multipart/form-data'
      },
      data: formData
    }).then(response=>console.warn("result", response))*/
  }

  function userAvatar() {

    if (currentUser && currentUser.profilePictureId) {
      return <Avatar alt="Remy Sharp" src={BaseURL + '/users/profilepicture/' + currentUser.id + "/" + currentUser.profilePictureId} style={{width:100, height:100}} className={classes.bigAvatar} />
    }
    else {
      return <Avatar alt="Remy Sharp" className={classes.bigAvatar} style={{width:100, height:100, fontSize: 24, background: currentUser.userColor }}>
        {(currentUser.firstName && currentUser.firstName != "") ? currentUser.firstName.charAt(0) : ""}{(currentUser.lastName && currentUser.lastName != "") ? currentUser.lastName.charAt(0) : ""}

      </Avatar>
    }
  }

  return (



    <main className={classes.content}>
      <Typography variant="h6" gutterBottom>
        User Profile
      </Typography>

      {currentUser != null ?

     
        <>
      <Dialog open={openPhoneNumberDialog} fullWidth onClose={() => setOpenPhoneNumberDialog(false)} aria-labelledby="form-dialog-title">
        
        <DialogTitle id="form-dialog-title">
          {isEditingPhoneNumber ? (<span>Edit Phone Number </span>
          ) : (<span>Add Number: </span>)
          }
          {"+"+newPhoneNumber.countryCode+newPhoneNumber.number}
        </DialogTitle>
        <DialogContent>
          
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="countryCode">Country Code</InputLabel>
            <Select
              fullWidth
              native
              value={newPhoneNumber.countryCode}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(newPhoneNumber, setNewPhoneNumber)}
              inputProps={{
                name: 'countryCode',
                id: 'countryCode',
              }}
            >
              <option value="" />
              {(countries && countries.length > 0) &&
                countries.map(country =>
                  <option value={country.countryCode}>{country.countryCode +", " + country.name}</option>
                )}

            </Select>
          </FormControl>

          <TextField
            margin="dense"
            id="number"
            label="Number"

            name="number"
            value={newPhoneNumber.number}
            onChange={handleInputChange(newPhoneNumber, setNewPhoneNumber)}
            fullWidth
          />
          <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="isPrimary" checked={newPhoneNumber.isPrimary == true} onChange={handleSelectInputChange(newPhoneNumber, setNewPhoneNumber)} style={{ color: '#1c75bc' }} />}
            label="Primary"
          />
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPhoneNumberDialog(false)} color="primary">
            Cancel
                </Button>
          {isEditingPhoneNumber ? (
            <Button onClick={updatePhoneNumber} color="primary">
              Update
                  </Button>
          ) : (
              <Button onClick={addNewPhoneNumber} color="primary">
                Add
                  </Button>
            )}
        </DialogActions>
      </Dialog>

    

      <Dialog open={openAddressDialog} fullWidth onClose={() => setOpenAddressDialog(false)} aria-labelledby="form-dialog-title">
          
        <DialogTitle id="form-dialog-title">
          {isEditingAddress ? (<span>Edit Address </span>
          ) : (<span>Add Address: </span>)
          }          
        </DialogTitle>
        <DialogContent>
          <TextField
              margin="dense"
              id="line1"
              label="Line 1"
              name="line1"
              value={newAddress.line1}
              onChange={handleInputChange(newAddress, setNewAddress)}
              fullWidth
            />
          <TextField
              margin="dense"
              id="line2"
              label="Line 2"
              name="line2"
              value={newAddress.line2}
              onChange={handleInputChange(newAddress, setNewAddress)}
              fullWidth
            />
         
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="countryName">Country</InputLabel>
            <Select
              fullWidth
              native
              value={newAddress.country && newAddress.country.id}
              onChange={handleCountrySelectInputChange(newAddress, setNewAddress)}
              inputProps={{
                name: 'countryName',
                id: 'countryName',
              }}
            >
              <option value="" />
              {(countries && countries.length > 0) &&
                countries.map(country =>
                  <option value={country.id}>{country.name}</option>
                )}

            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="state">State</InputLabel>
            <Select
              fullWidth
              native
              defaultValue={newAddress.state && newAddress.state.id}
              onChange={handleStateInputChange(newAddress, setNewAddress)}
              inputProps={{
                name: 'state',
                id: 'state',
              }}
            >
              <option value="" />
              {(states && states.length > 0) &&
                states.map(state =>
                  <option value={state.id}>{state.name}</option>
                )}

            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="city">City</InputLabel>
            <Select
              fullWidth
              native
              defaultValue={newAddress.city && newAddress.city.id}
              onChange={handleCityStateInputChange(newAddress, setNewAddress)}
              inputProps={{
                name: 'city',
                id: 'city',
              }}
            >
              <option value="" />
              {(cities && cities.length > 0) &&
                cities.map(city =>
                  <option value={city.id}>{city.name}</option>
                )}

            </Select>
          </FormControl>

         
          <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="isPrimary" checked={newAddress.isPrimary == true} onChange={handleSelectInputChange(newAddress, setNewAddress)} style={{ color: '#1c75bc' }} />}
            label="Primary"
          />
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddressDialog(false)} color="primary">
            Cancel
                </Button>
          {isEditingAddress ? (
            <Button onClick={updateAddress} color="primary">
              Update
                  </Button>
          ) : (
              <Button onClick={addNewAddress} color="primary">
                Add
                  </Button>
            )}
        </DialogActions>
      </Dialog>


      <Grid justify="center" container
        direction="column"
        justify="center"
        alignItems="center">
        {userAvatar()}

        <Grid justify="center" container
        direction="row"
        justify="center"
        alignItems="center">
        <input
          accept="image/*"
          className={classes.hidden}
          id="contained-button-file"
          type="file"
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="contained-button-file">
          <PlainButton component="span" className={classes.button} style={{textDecoration:'none'}}>
            Set Profile Photo
              </PlainButton>
        </label>

            {currentUser.profilePictureId && currentUser.profilePictureId != '' && <div><input

className={classes.hidden}
id="contained-button-file-2"

type="button"
onClick={(e) => removeProfilePicture()}
/>
<label htmlFor="contained-button-file-2">
<PlainButton component="span" className={classes.button}  style={{textDecoration:'none'}}>
  Remove Profile Photo
    </PlainButton>
</label></div>}
        
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.title}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'title',
                id: 'title',
              }}
            >
              <option value="" />
              {(titles && titles.length > 0) &&
                titles.map(title =>
                  <option value={title}>{title}</option>
                )}

            </Select>

          </FormControl>



        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="userName"
            name="userName"
            label="User name"
            value={currentUser.username}
            disabled
            fullWidth
            autoComplete="uname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={currentUser.firstName || ''}
            onChange={handleInputChange(currentUser, setCurrentUser)}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="otherName"
            name="otherName"
            label="Other name"
            value={currentUser.otherName || ''}
            onChange={handleInputChange(currentUser, setCurrentUser)}
            fullWidth
            autoComplete="oname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={currentUser.lastName || ''}
            onChange={handleInputChange(currentUser, setCurrentUser)}
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <KeyboardDatePicker
            disableToolbar
            format="DD/MM/YYYY"
            name="dateOfBirth"
            id="dateOfBirth"
            label="Date of Birth (dd/mm/yyyy)"
            value={currentUser.dateOfBirth}
            onChange={(date) => {setCurrentUser({ ...currentUser, dateOfBirth: date.toDate() }) }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

        </Grid>
        <Grid item xs={12} >
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.gender}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <option value="" />
              {(genders && genders.length > 0) &&
                genders.map(gender =>
                  <option value={gender}>{gender}</option>
                )}

            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="companyId">Company</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.companyId}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'companyId',
                id: 'companyId',
              }}
            >
              <option value="" />
              {(companies && companies.length > 0) &&
                companies.map(company =>
                  <option value={company.id}>{company.name}</option>
                )}

            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} sm={6}>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="accountRoleId">Role</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.accountRoleId}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'accountRoleId',
                id: 'accountRoleId',
              }}
            >
              <option value="" />
              {(accountRoles && accountRoles.length > 0) &&
                accountRoles.map(accountRole =>
                  <option value={accountRole.id}>{accountRole.name}</option>
                )}

            </Select>

          </FormControl>


        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="departmentId">Department</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.departmentId}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'departmentId',
                id: 'departmentId',
              }}
            >
              <option value="" />
              {(departments && departments.length > 0) &&
                departments.map(department =>
                  <option value={department.id}>{department.name}</option>
                )}

            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="jobTitleId">Job Title</InputLabel>
            <Select
              fullWidth
              native
              value={currentUser.jobTitleId}
              //value={accountRoles.find(i => i.id  == props.currentUser.accountRoleId) && accountRoles.find(i => i.id  == props.currentUser.accountRoleId).name}
              onChange={handleInputChange(currentUser, setCurrentUser)}
              inputProps={{
                name: 'jobTitleId',
                id: 'jobTitleId',
              }}
            >
              <option value="" />
              {(jobTitles && jobTitles.length > 0) &&
                jobTitles.map(jobTitle =>
                  <option value={jobTitle.id}>{jobTitle.name}</option>
                )}

            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="isActive" checked={currentUser.isActive == true} onChange={handleSelectInputChange(currentUser, setCurrentUser)} style={{ color: '#1c75bc' }} />}
            label="Active"
          />
        </Grid>
        <Grid item xs={12}>
          <PlainButton style={{ marginLeft: 5 }} onClick={handleAddressDialogOpen}>
            <AddIcon className={classes.customButtonIcon} />Add Address
                </PlainButton>

        </Grid>
        <Grid container spacing={1}  className={classes.listContainer}>
            {(addresses && addresses.length >0) ?                
              addresses.map(address => 
                <Grid item key={address.id} xs={12}>
                <Paper key={address.id} className={classes.paper} style={{background:'none'}}>
                <Grid container  direction="row"
  justify="space-between" spacing={2}>
                
                <Grid item xs direction="column">
                  <Typography style={{fontSize:12, color:'#555555'}} noWrap>Address</Typography>  
                  <Typography variant="h6" noWrap>{address.line1}</Typography>  
                  <Typography variant="h6" noWrap>{address.line2}</Typography> 
                  <Typography style={{fontSize:12, color:'#555555'}} noWrap>Country</Typography>  
                  <Typography variant="h6" noWrap>{address.country.name}</Typography>                   
                  <Typography style={{fontSize:12, color:'#555555'}} noWrap>State</Typography>  
                  <Typography variant="h6" noWrap>{address.state.name}</Typography>  
                  <Typography style={{fontSize:12, color:'#555555'}} noWrap>City</Typography>  
                  <Typography variant="h6" noWrap>{address.city.name}</Typography>  
                                 
                              
                </Grid>
                <Grid item xs container justify="flex-end" alignItems="center">                  
                  <IconButton size="small" color="primary" onClick={()=>editAddress(address.id)}>
                    <EditIcon  className={classes.iconButton2} />
                  </IconButton>
                  <IconButton size="small"  color="primary">
                    <DeleteIcon  className={classes.iconButton2} onClick={()=>deleteAddress(address.id)}/>
                  </IconButton>
                </Grid>
                </Grid>
            </Paper>
            </Grid>
              )
            : <Grid item xs={12} container  direction="column"
            justify="space-between" alignItems="center"><Typography  style={{margin:5,fontSize:14, color:'#777777'}}>No address entered.</Typography></Grid>}
        </Grid>

        <Grid item xs={12}>
          <PlainButton style={{ marginLeft: 5 }} onClick={handlePhoneNumberDialogOpen}>
            <AddIcon className={classes.customButtonIcon} />Add Phone Number
          </PlainButton>
        </Grid>

        <Grid container spacing={1}  className={classes.listContainer}>
            {(phoneNumbers && phoneNumbers.length >0) ?                
              phoneNumbers.map(phoneNumber => 
                <Grid item key={phoneNumber.id} xs={12}>
                <Paper key={phoneNumber.id} className={classes.paper} style={{background:'none'}}>
                <Grid container  direction="row"
  justify="space-between" spacing={2}>
                
                <Grid item xs>
                    <Typography variant="h6" noWrap>{"+"+phoneNumber.countryCode+phoneNumber.number}</Typography>                 
                </Grid>
                <Grid item xs container justify="flex-end" alignItems="center">                  
                  <IconButton size="small" color="primary" onClick={()=>editPhoneNumber(phoneNumber.id)}>
                    <EditIcon  className={classes.iconButton2} />
                  </IconButton>
                  <IconButton size="small"  color="primary" onClick={()=>deletePhoneNumber(phoneNumber.id)}>
                    <DeleteIcon  className={classes.iconButton2} />
                  </IconButton>
                </Grid>
                </Grid>
            </Paper>
            </Grid>
              )
            : <Grid item xs={12} container  direction="column"
            justify="space-between" alignItems="center"><Typography  style={{margin:5,fontSize:14, color:'#777777'}}>No phone number entered.</Typography></Grid>}
        </Grid>
       

        
        
        
        
        <Grid item xs={12}>
          <Button variant="contained" onClick={updateProfile} color="primary">
            Update
          </Button>
        </Grid>
      </Grid> </>:
      <Typography  style={{margin:5,fontSize:14, color:'#777777'}}>Selected user not found.</Typography>
              }
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    accountRoles: state.accountRoles,
    titles: state.titles,
    genders: state.genders,
    companies: state.companies,
    departments: state.departments,
    jobTitles: state.jobTitles,
    countries: state.countries,
    users:state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => { dispatch(setCurrentUser(user)) },
    updateUser: (user) => { dispatch(updateUser(user)) },
    updateUserProfile: (user) => {dispatch(updateUserProfile(user))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);