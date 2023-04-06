import React from "react";
import { connect } from "react-redux";
import {useStyles} from '../../common/customStyles'
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ActivitiesTable from '../../_components/aimComponents/ActivitiesTable';
import ViewTitle from '../../_components/aimComponents/ViewTitle'
import {ListItemLink, drawer, Copyright} from '../../common/sideMenuComponents'

const ActivitiesView = (props) => {
    
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <ViewTitle>{"All Activites (" + props.anomalies.filter(i => i.action != null).length + ")"}</ViewTitle>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>                      
            {/* Anomalies Table */}
            <Grid item xs={12}>            
                <ActivitiesTable />            
            </Grid>
        </Grid>
        <Box pt={4}>
            <Copyright />
        </Box>
        </Container>
    </main>
    );
}


const mapStateToProps = state => {
  
    return {
        anomalies:state.anomalies,
        actions:state.action,
      };
  };


export default connect(
    mapStateToProps,
)(ActivitiesView);