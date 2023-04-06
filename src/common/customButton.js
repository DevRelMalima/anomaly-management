import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

export const SheetDownloadButton = withStyles(theme => ({
    root: {
      color: '#FFFFFF',
      boxShadow:'none',      
      backgroundColor: '#2e7d32',
      '&:hover': {
        backgroundColor: '#689f38',
      },
    },
  }))(Button);