import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { authenticationService } from "@/_services";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AlertDialog from "./AlertDialog";
import axios from "axios";
import { history } from "@/_helpers";
import { connect } from "react-redux";
import Logo from "@/_images/grasp_logo.inline.svg";
import { BaseURL } from "../constants/URLs/urls";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

function FooterComponent() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy;&nbsp;
      <Link color="inherit" href="https://granomaly.com/">
        Granomaly
      </Link>
      {" Team."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FF9900",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    backgroundColor: "#1c75bc",
    "&:hover": {
      backgroundColor: "#27aae1",
    },
  },
}))(Button);

function UserRegistration(props) {
  const classes = useStyles();

  const handleIdentifierVisibility = (name) => (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
      setIdentifierVisibility("none");
      setIdentifierVisibilityState(true);
    } else {
      setIdentifierVisibility("block");
      setIdentifierVisibilityState(false);
    }
  };

  const [identifierVisibilityState, setIdentifierVisibilityState] =
    React.useState(true);

  const [identifierVisibility, setIdentifierVisibility] =
    React.useState("none");
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Granomaly - Create Account`;

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      history.push("/");
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography style={{ margin: 5 }} component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            companyidentifier: "",
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            isAdmin: false,
          }}
          validationSchema={Yup.object().shape({
            companyidentifier: Yup.string(), //.notRequired(),
            firstname: Yup.string().required(
              "First Name is required"
            ),
            lastname: Yup.string().required("Last Name is required"),
            username: Yup.string()
              .required("Username is required")
              .email(),
            password: Yup.string().required("Password is required"),
            isAdmin: Yup.bool(),
          })}
          onSubmit={(
            {
              companyidentifier,
              firstname,
              lastname,
              username,
              password,
              isAdmin,
            },
            { setStatus, setSubmitting }
          ) => {
            setStatus();

            let companyDomain =
              companyidentifier != "" ? "/" + companyidentifier : "";

            const requestOptions = {
              url: BaseURL + "/users/register" + companyDomain,
              method: "POST",
              headers: { "Content-Type": "application/json" },
              data: {
                companyidentifier,
                firstname,
                lastname,
                username,
                password,
                isAdmin,
              },
            };

            axios(requestOptions)
              .then((response) => {
                console.log(response);
                //console.log(this)
                //setDialogOpen(true);
                props.dispatch({
                  type: "ENQUEUE_SNACKBAR",
                  notification: {
                    message: "Account created...",
                    options: {
                      key: new Date().getTime() + Math.random(),
                      variant: "success",
                    },
                  },
                });

                setTimeout(function () {
                  props.history.push("/#login");
                }, 1500);
              })
              .then((user) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                /*localStorage.setItem('currentUser', JSON.stringify(user));
                              currentUserSubject.next(user);                  
                            return user;*/
                console.log(user);
              })
              .catch((e) => {
                setSubmitting(false);
                setStatus(e);
                console.log(e.response.data.message);
                props.dispatch({
                  type: "ENQUEUE_SNACKBAR",
                  notification: {
                    message: e.response.data.message,
                    options: {
                      key: new Date().getTime() + Math.random(),
                      variant: "error",
                    },
                  },
                });
              });

            /*authenticationService.register(firstname, lastname, username, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                                    //console.log('open dialog')
                                    //setDialogOpen(true);
                                    this.props.history.push(from);
                                    
                                },
                                error => {
                                    console.log(error)
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );*/
          }}
          render={(props) => {
            const {
              values: {
                companyidentifier,
                firstname,
                lastname,
                username,
                password,
              },
              errors,
              touched,
              handleSubmit,
              handleChange,
              isValid,
              setFieldTouched,
              isSubmitting,
              status,
              style,
            } = props;

            const change = (name, e) => {
              e.persist();
              handleChange(e);
              setFieldTouched(name, true, false);
            };

            return (
              <form onSubmit={handleSubmit} style={classes}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      name="isAdmin"
                      onChange={handleChange}
                      control={
                        <Checkbox style={{ color: "#1c75bc" }} />
                      }
                      label="I'm an Administrator"
                    />

                    <TextField
                      autoComplete="companyidentifier"
                      name="companyidentifier"
                      variant="outlined"
                      required
                      fullWidth
                      value={companyidentifier}
                      onChange={handleChange}
                      id="companyidentifier"
                      label="Company Identifier"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstname"
                      variant="outlined"
                      required
                      fullWidth
                      value={firstname}
                      onChange={handleChange}
                      id="firstname"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      value={lastname}
                      onChange={handleChange}
                      name="lastname"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Email Address"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      autoComplete="username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChange}
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          style={{ color: "#1c75bc" }}
                        />
                      }
                      label="I agree with the Terms & Conditions of this platform."
                    />
                  </Grid>
                </Grid>
                <div className={classes.wrapper}>
                  <ColorButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </ColorButton>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      href="#/login"
                      style={{ fontSize: 16 }}
                      variant="body2"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        />
      </div>
      <Box mt={5}>
        <FooterComponent />
      </Box>
    </Container>
  );
}

/*function UserRegistration(props) {
  const classes = useStyles();
  return <UserRegistration1  {...props}  classes={classes} />;
}*/
//export {UserRegistration}
export default connect()(UserRegistration);
