import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { authenticationService, dataloaderService } from '@/_services';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {CustomForm} from './CustomForm'
import Logo from '@/_images/grasp_logo.inline.svg';
import {connect} from 'react-redux';


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy;&nbsp;
      <Link color="inherit" href="https://granomaly.com/">
       Granomaly
      </Link>
      {' Team.'}
    </Typography>
  );
}



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#FFFFFF'//theme.palette.common.,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0099FF',//theme.palette.secondary.main,
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



class UserLogin1 extends React.Component {
//    export default function UserLogin() {
  

  constructor(props) {
    super(props);    
    const { match: { params } } = props;
    console.warn(props)
    // redirect to home if already logged in
    if (authenticationService.currentUserValue) { 
        this.props.history.push('/');
    }    
  }

render(){
   // const classes = useStyles();

   const classes1 = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#ff9900'// theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      fontSize: '40px;'
    },
  }));

  const classes = this.props.classes;
  //console.log(useStyles.call());

  const change = (name, e) => {
    e.persist();
    //handleChange(e);
    setFieldTouched(name, true, false);
  };

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Logo/>
        
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik className={classes.form}
                    initialValues={{
                        companyIdentifier: this.props.match.params.companyIdentifier || '',
                        username: '',
                        password: '',
                        isRememberMe: true
                    }}
                    validationSchema={Yup.object().shape({
                        companyIdentifier: Yup.string(),
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onChange = { (event) => {
                      console.log(event)
                      /*const value = target.type === 'checkbox' ? target.checked : target.value;
                        const target = event.target;
                        const value = target.type === 'checkbox' ? target.checked : target.value;
                        const name = target.name;
                    
                        event.persist()
                        this.setState(prevState => ({
                          values: {
                            ...prevState.values,
                            [name]: value
                          },

                        }));*/
                      }
                    }
                    onSubmit={({ companyIdentifier, username, password, isRememberMe }, { setStatus, setSubmitting }) => {
                        
                        setStatus();
                        authenticationService.login(companyIdentifier, username, password, isRememberMe)
                            .then(
                                user => {
                                   // const { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
                                   // console.log("loggedIn", userInfo)

                                   
                                   if(user)
                                   {
                                        //let user = {...userInfo.user, token:userInfo.token}
                                        console.log("loggedIn", user)
                                        this.props.dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Login successful.',
                                        options: {
                                            key: new Date().getTime() + Math.random(),
                                            variant: 'success'}}})
                                        this.props.dispatch({type:'SET_CURRENT_USER', currentUser:user});
                                        this.props.history.push("/"); 
                                        dataloaderService.fetchData(user, this.props.dispatch )  
                                        //authenticationService.currentUserValue = user;    
                                        setTimeout(window.location.reload(), 3000);                             
                                        
                                   }
                                   else
                                   {
                                    this.props.dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Invalid Username/Password.',
                                    options: {
                                        key: new Date().getTime() + Math.random(),
                                        variant: 'error'}}})
                                    setSubmitting(false);
                                    //setStatus("error");
                                   }
                                    
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                    console.warn("Another error", error);
                                    
                                }
                            );
                    }}

                    render={                      
                        (props) => <CustomForm {...props} style={classes} />}
                    
         />
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
    }
}


function UserLogin(props) {
  const classes = useStyles();
  return <UserLogin1  {...props}  classes={classes} />;
}

//export {UserLogin};
//let UserLoginComponent = connect()(UserLogin);
export default connect()(UserLogin);// {UserLoginComponent as UserLogin}

/*function UserLogin2(){
  return useStyles({
  '@global': {
    body: {
      backgroundColor: '#FFFFFF',
    },
  },
  paper: {
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '1px',
    backgroundColor: '#FF9900',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '1px',
  },
  submit: {
    margin: '3px 0px',
  },
})(<UserLogin1/> );
} */