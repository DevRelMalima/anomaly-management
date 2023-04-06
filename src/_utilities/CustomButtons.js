import Button from '@material-ui/core/Button';
import {withStyles } from '@material-ui/core/styles';

export const PlainButton = withStyles(theme => ({
    root: {
      margin: theme.spacing(2, 0),
      
      marginRight: theme.spacing(1),
      fontSize:15,
      textTransform:'none',
      fontWeight:'semi-bold',
      Border:'0px',
        color: '#1c75bc',
      '&:hover': {
        color: '#27aae1',
      },
    },
  }))(Button);

  export const ColorButton = withStyles(theme => ({
    root: {
      fontSize:10,
      color: '#FFFFFF',
      backgroundColor: '#1c75bc',
      '&:hover': {
        backgroundColor: '#27aae1',
      },
    },
  }))(Button);