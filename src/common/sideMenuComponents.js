import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import withStyles  from '@material-ui/core/styles/withStyles';
import Hidden from '@material-ui/core/Hidden';
import AppsOutlined from '@material-ui/icons/AppsOutlined';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Badge from '@material-ui/core/Badge'

const renderLink = React.forwardRef((itemProps, ref) => (
    // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
    <RouterLink {...itemProps} ref={ref} />
  ));

export class ListItemLink extends React.Component {
    /*renderLink = React.forwardRef((itemProps, ref) => (
      // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
      <RouterLink to={this.props.to} {...itemProps} ref={ref} />
    ));*/

      //<RouterLink to={this.props.to} />
    render() {
        //console.log(this.props);
      const { icon, primary, secondary, itemKey, to, showIcon, isSelected } = this.props;

      //console.warn('key', itemKey)
      return (
       
          <ListItem style={{fontSize:11,paddingBottom:0,paddingTop:0,borderBottom:'1px dotted #777777'}} selected={isSelected} key={itemKey} to={to} button component={renderLink }>
            {showIcon && <ListItemIcon>{icon}</ListItemIcon>}
            
            <ListItemText primary={primary} secondary={<Typography style={{fontSize:10, color:"#777777"}} >{secondary}</Typography>} style={{color:'#1c75bc'}}/>
           
          </ListItem>
        
      );
    }
  }

  export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://cvupdates.com/">
          Anomaly Manager
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -13,
      top: 8,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      background:"#ff9900",
    },
  }))(Badge);

  export function drawer(menuItems, classes, selectedPath = null){
    
    return (<div>
      <Hidden >
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List style={{paddingBottom:0,backgroundColor:'#c6e2f9'}}>
        {['Menu'].map((text, index) => (
            <ListItemLink showIcon={true} isSelected={false} button key={text} itemKey={text} to={"/"} primary={text} icon={<ArrowBack style={{color:'#1c75bc'}} />} />
        ))}
      </List>
      {/*<Divider />*/}
      <List style={{paddingTop:0}}>
      {menuItems.map((menuItem) => (
        
        <ListItemLink showIcon={false} button key={menuItem.id} itemKey={menuItem.id} to={menuItem.link} primary={menuItem.showBadge?<StyledBadge badgeContent={menuItem.badgeContent} color="error"><Typography style={{color:'#1c75bc',fontSize:13}} >{menuItem.caption}</Typography></StyledBadge>:<Typography style={{color:'#1c75bc',fontSize:13}} >{menuItem.caption}</Typography>} 
            isSelected={selectedPath !=null && selectedPath==menuItem.link?true:false} secondary={menuItem.secondaryCaption} icon={menuItem.icon} />
     
            
        ))}
      </List>
    </div>);
  };