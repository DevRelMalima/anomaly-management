import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function ViewTitle(props) {
  return (
    <Typography component="h2" variant="h6" style={{marginLeft:15,color:'#1c75bc', fontWeight:'normal'}} gutterBottom>
      {props.children}
    </Typography>
  );
}

ViewTitle.propTypes = {
  children: PropTypes.node,
};