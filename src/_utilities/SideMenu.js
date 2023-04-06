import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AppsOutlined from '@material-ui/icons/AppsOutlined';

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
      const { icon, primary, secondary, key, to, showIcon, isSelected } = this.props;
      return (
        <li>
          <ListItem selected={isSelected} key={key} to={to} button component={renderLink }>
            {showIcon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={primary} secondary={secondary}/>
          </ListItem>
        </li>
      );
    }
  }



  export function drawer(menuItems, classes, selectedPath = null){
    
    return (<div>
      <Hidden >
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        {['Apps'].map((text, index) => (
            <ListItemLink showIcon={true} isSelected={false} button key={text} to={"/"} primary={text} icon={<AppsOutlined style={{color:'#1c75bc'}} />} />
        ))}
      </List>
      <Divider />
      <List>
      {menuItems.map((menuItem) => (
            <ListItemLink showIcon={false} button key={menuItem.id} to={menuItem.link} primary={menuItem.caption} 
            isSelected={selectedPath !=null && selectedPath==menuItem.link?true:false} secondary={menuItem.secondaryCaption} icon={menuItem.icon} />
        ))}
      </List>
    </div>);
  };




