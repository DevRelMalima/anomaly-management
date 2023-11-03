import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { ErrorMessage } from "formik";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
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

export const CustomForm = (props) => {
  const {
    values: { companyIdentifier, username, password, isRememberMe },
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

  const [identifierVisibility, setIdentifierVisibility] =
    React.useState("none");

  const [identifierVisibilityState, setIdentifierVisibilityState] =
    React.useState(true);
  //console.table(props);

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const handleCheckChange = (value) => (event) => {
    value = event.target.checked;
  };

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

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {/* <div>{errors.username}</div> */}
      <div className="form-group">
        <FormControlLabel
          checked={identifierVisibilityState}
          onChange={handleIdentifierVisibility()}
          control={<Checkbox style={{ color: "#1c75bc" }} />}
          label="I'm an Administrator"
        />

        <TextField
          name="companyIdentifier"
          helperText={
            touched.companyIdentifier ? errors.companyIdentifier : ""
          }
          error={Boolean(errors.companyIdentifier)}
          label="Company Identifier"
          margin="normal"
          fullWidth
          style={{ display: identifierVisibility }}
          variant="outlined"
          value={companyIdentifier}
          onChange={handleChange}
          autoFocus
        />
        <ErrorMessage
          name="companyIdentifier"
          component="div"
          className="invalid-feedback"
        />
      </div>

      <div className="form-group">
        <TextField
          name="username"
          helperText={touched.username ? errors.username : ""}
          error={Boolean(errors.username)}
          label={
            identifierVisibilityState ? "Admin Username" : "Username"
          }
          margin="normal"
          fullWidth
          variant="outlined"
          value={username}
          onChange={handleChange}
          autoFocus
        />
        <ErrorMessage
          name="username"
          component="div"
          className="invalid-feedback"
        />
      </div>

      <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={Boolean(errors.password)}
        label="Password"
        margin="normal"
        fullWidth
        autoComplete="current-password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <div>{errors.password}</div>

      <FormControlLabel
        control={
          <Checkbox
            name="isRememberMe"
            checked={isRememberMe}
            onChange={handleChange}
            style={{ color: "#1c75bc" }}
          />
        }
        label="Remember me"
      />
      <div className={classes.wrapper}>
        <ColorButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValid || isSubmitting}
        >
          Submit
        </ColorButton>
        {isSubmitting && (
          <CircularProgress
            size={24}
            className={classes.buttonProgress}
          />
        )}
      </div>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>

      {status && <div className={"alert alert-danger"}>{status}</div>}
    </form>
  );
};
