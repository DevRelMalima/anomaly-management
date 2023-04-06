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

import AnomalyForm from '../../_components/aimComponents/AnomalyForm';
import AnomalyAnalysisForm from '../../_components/aimComponents/AnomalyAnalysisForm';
import ViewTitle from '../../_components/aimComponents/ViewTitle'
import {ListItemLink, drawer, Copyright} from '../../common/sideMenuComponents'



const NewAnomalyView = (props) => {
    
    const classes = useStyles();
    const { match: { params } } = props;

    const currentAnomaly =  props.anomalies.find(a => a.id == params.anomalyId)
    //const anomalyId = props.anomalies.find(p => { return p.id == params.anomalyId });
    //console.warn(anomalyId)
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return(
    <main className={classes.content}>
        <ViewTitle>{props.isNew? " New Anomaly" :  props.isEdit ? `Edit Anomaly : ${currentAnomaly?.code}`: " Analyse Anomaly" } </ViewTitle>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>                      
            {/* Anomalies Table */}
            <Grid item xs={12}>
                {props.isNew || props.isCopy? <AnomalyForm  anomalyId={params.anomalyId} {...props} /> :  props.isEdit ? <AnomalyForm anomalyId={params.anomalyId} {...props} />: <AnomalyAnalysisForm {...props} anomalyId={params.anomalyId} /> }            
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
)(NewAnomalyView);