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
import AnalysedAnomaliesTable from '../../_components/aimComponents/AnalysedAnomaliesTable';
import ViewTitle from '../../_components/aimComponents/ViewTitle'
import {ListItemLink, drawer, Copyright} from '../../common/sideMenuComponents'



const AnalysedAnomaliesView = (props) => {
    
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
    <main className={classes.content}>
        <ViewTitle>{"Analysed Anomalies (" + props.anomalies.filter(a => a.isAnalysed & !a.isReviewed).length + ")"}</ViewTitle>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>                      
            {/* Anomalies Table */}
            <Grid item xs={12}>
            
                <AnalysedAnomaliesTable  />
            
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
      };
  };


export default connect(
    mapStateToProps,
)(AnalysedAnomaliesView);