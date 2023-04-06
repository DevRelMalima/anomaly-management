import React from "react";
import { connect } from "react-redux";
import {Bar, Pie, Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {colorInterpolator, colorInterpolator4} from '../../utility/colors';
import moment from 'moment';

const pieData = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function GetAnomalyClassesStatistics(anomalies, anomalyClasses)
{
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let indx = 0;
  anomalyClasses &&  anomalyClasses.map(ac => 
    { 

      indx++;

            var anomaliesCount = anomalies.filter(i => i.anomalyClass == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name);
            backgroundColor.push(colorInterpolator4("#0099ff", "#ff1100","#ffe601","#3fb57f", "#0011ff", indx/anomalyClasses.length));
            
    })

    return {
      labels,
      datasets: [
        {
          label: 'Rainfall',          
          borderWidth: 1,
          data,
          backgroundColor,
        }
      ]
    }
}

function GetAnomalyPriorityStatistics(anomalies, priorities)
{
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let indx = 0;
  priorities &&  priorities.map(ac => 
    { 
            indx++;
            var anomaliesCount = anomalies.filter(i => i.priority == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name);
            backgroundColor.push(colorInterpolator4("#0099ff", "#ff1100","#ffe601","#3fb57f", "#0011ff",  indx/priorities.length));
           
    })

    return {
      labels,
      datasets: [
        {
          label: 'Rainfall',          
          borderWidth: 1,
          data,
          backgroundColor,
        }
      ]
    }
}

function GetAnomalyActionsStatistics(anomalies, actions)
{
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let indx = 0;
  actions &&  actions.map(ac => 
    { 
      indx++;

            var anomaliesCount = anomalies.filter(i => i.action == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name); 
            backgroundColor.push(colorInterpolator4("#0099ff", "#ff1100","#ffe601","#3fb57f", "#0011ff",  indx/actions.length));

            
    })

    return {
      labels,
      datasets: [
        {
          label: 'Rainfall',          
          borderWidth: 1,
          data,
          backgroundColor,
        }
      ]
    }
}

function GetAnomalyCoFsStatistics(anomalies, coFs)
{
  let labels = [];
  let data = [];
  
  coFs &&  coFs.map(ac => 
    { 
            var anomaliesCount = anomalies.filter(i => i.coF == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name);
            
    })

    return {
      labels,
      datasets: [
        {
          label: 'CoFs',          
          borderWidth: 1,
          data,
          backgroundColor:'orange',
        }
      ]
    }
}

function GetAnomalyPlatformStatistics(anomalies, platforms)
{
  let labels = [];
  let data = [];
  
  platforms &&  platforms.map(ac => 
    { 
            var anomaliesCount = anomalies.filter(i => i.platform == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name);
            
    })

    return {
      labels,
      datasets: [
        {
          label: 'Facilities',          
          borderWidth: 1,
          data,
          backgroundColor:'orange',
        }
      ]
    }
}


function GetAnomalyClassByRiskStatistics(anomalies, anomalyClasses, priorities)
{
  let datasets = [];
  let labels = [];

  anomalyClasses && anomalyClasses.map(ac => {

      labels.push(ac.name);

    })

     
      let labels2 = [];
      let backgroundColor = [];
      let indx = 0;
      priorities &&  priorities.map(pr => 
      {              
              indx++;
              //labels2.push(pr.name);
              backgroundColor.push(getRandomColor());
              let data = [];
              anomalyClasses && anomalyClasses.map(ac => {

                //labels.push(ac.name);
                var anomaliesCount = anomalies.filter(i => i.anomalyClass == ac.id && i.priority == pr.id).length;
                data.push(anomaliesCount);
          
              })
              
              datasets.push({
                label: pr.name,          
                borderWidth: 1,
                data,
                backgroundColor:colorInterpolator4("#0099ff", "#ff9900","#ffe601","#b2fb72", "#220000", indx/priorities.length)
                
                
              });             
              
      });

  return {
    labels,//:['label'],
    datasets
  }


}
// Group by CoF and PoF
function GetAnomalyPlatformByCoFPoFStatistics(anomalies, platforms, priorities)
{
  
  let datasets = [];
  let labels = [];

  platforms && platforms.map(ac => {

      labels.push(ac.name);

    })

     
      let labels2 = [];
      let backgroundColor = [];
      let indx = 0;
      priorities &&  priorities.map(pr => 
      {              
              indx++;
              //labels2.push(pr.name);
              backgroundColor.push(getRandomColor());
              let data = [];
              platforms && platforms.map(ac => {

                //labels.push(ac.name);
                var anomaliesCount = anomalies.filter(i => i.platform == ac.id && i.priority == pr.id).length;
                data.push(anomaliesCount);
          
              })
              
              datasets.push({
                label: pr.name,          
                borderWidth: 1,
                data,
                backgroundColor:colorInterpolator4("#0099ff", "#ff1100","#ffe601","#b2fb72", "#220000", indx/priorities.length)
                
                
              });             
              
      });

  return {
    labels,//:['label'],
    datasets
  }

    
}

function GetAnomalyLoFsStatistics(anomalies, loFs)
{
  let labels = [];
  let data = [];
  
  loFs &&  loFs.map(ac => 
    { 
            var anomaliesCount = anomalies.filter(i => i.loF == ac.id).length;
            data.push(anomaliesCount);
            labels.push(ac.name);
            
    })

    return {
      labels,
      datasets: [
        {
          label: 'LoFs',          
          borderWidth: 1,
          data,
          backgroundColor:'purple',
        }
      ]
    }
}

const InfoWidget = (value, title, color = '#1c75bc') => (
        <div style={{border:`0px solid ${color}`, minWidth:80, borderRadius:3, display:'inline-block', margin:2}}>
            <div style={{textAlign:'center', background:'#e8f9fd', color:`${color}`, fontSize:24, fontWeight:'bold'}}>{value}</div>
            <div style={{textAlign:'center', background:`${color}`, color:'#FFFFFF', fontSize:13, fontWeight:'normal', padding:'2px 8px'}}>{title}</div>
        </div>
);

const AnomalyDashboard = (props) => {
 //populateTableData(countries, caseData)

 //const [stateData, setStateData] = React.useState(populateTableData(countries, caseData));

 const pieData = GetAnomalyClassesStatistics(props.anomalies, props.anomalyClasses);
 const pieActionData = GetAnomalyActionsStatistics(props.anomalies, props.actions);
 const barCoFData = GetAnomalyCoFsStatistics(props.anomalies, props.coFs);
 const barLoFData = GetAnomalyLoFsStatistics(props.anomalies, props.loFs);
 const barPlatformData = GetAnomalyPlatformStatistics(props.anomalies, props.platforms);
 const barPlatformByCoFPoF = GetAnomalyPlatformByCoFPoFStatistics(props.anomalies, props.platforms, props.priorities);
 const piePrioritiesData = GetAnomalyPriorityStatistics(props.anomalies, props.priorities);
 const barRiskByClass = GetAnomalyClassByRiskStatistics(props.anomalies, props.anomalyClasses, props.priorities);

  return (
    <div style={{padding:10, width:'100%'}}> 

    <div style={{display:'flex', flexDirection:'row', justifyContent:'left', margin:0, width:'100%', overflow:'auto'}}>
        {InfoWidget(props.anomalies.length, 'Anomalies')}
        {InfoWidget(props.anomalies.filter(a => a.status == 'OPEN').length, "Live", '#555555')}
        {InfoWidget(props.anomalies.filter(a => a.status == 'CLOSED').length,"Closed", '#555555')}
        {InfoWidget(props.anomalies.filter(a => a.isAnalysed).length,"Analysed", '#555555')}
        {InfoWidget(props.anomalies.filter(a => a.isReviewed).length,"Reviewed", '#555555')} 
        {InfoWidget(props.anomalies.filter(a => a.isApproved).length,"Approved", '#555555')}    
        {InfoWidget(props.anomalies.filter(i => i.status != "CLOSED" && moment(new Date(i.closeOutDate))).length,"Overdue", '#555555')}        
    </div>

    <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', justifyContent:'space-around', margin:5, width:'100%'}}>
              {/*<div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>
                  <Doughnut style={{width:'90%', height:'90%'}}
                    data={pieData}
                    options={{
                      title:{
                        display:true,
                        text:'Anomaly Distribution by Classes',
                        fontSize:14
                      },
                      legend:{
                        display:true,
                        position:'bottom'
                      },
                      responsive: true,
                      maintainAspectRatio:false
                    }}
                  />
                  </div>*/}
             
              <div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>           
                <Pie style={{width:'90%', height:'90%'}}
                  data={pieActionData}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Distribution by Actions',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
              </div>  

              <div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>           
                <Pie style={{width:'90%', height:'90%'}}
                  data={piePrioritiesData}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Distribution by Priorities',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
              </div>   


              {/*<div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>
                <Bar
                  data={barCoFData}
                  options={{
                    title:{
                      display:true,
                      text:'CoFs',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
                </div>*/}  

              {/*<div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>
                <Bar
                  data={barLoFData}
                  options={{
                    title:{
                      display:true,
                      text:'LoFs',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
                </div> */} 
              <div style={{border:'1px dotted #999999',minHeight:'400px', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5, maxWidth:600}}>
                <Bar
                  data={barPlatformData}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Distribution by Facility',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
              </div>  

              <div style={{border:'1px dotted #999999',minHeight:'400px', width:'96%', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5}}>
                <Bar
                  data={barPlatformByCoFPoF}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Risk Distribution by Facility',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    scales: {
                      xAxes: [{
                          stacked: false
                      }],
                      yAxes: [{
                          stacked: false
                      }]
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
              </div>  

              <div style={{border:'1px dotted #999999',minHeight:'400px', width:'96%', padding:'10px 30px', background:"#EEEEEE", borderRadius:3, margin:5,}}>
                <Bar
                  data={barRiskByClass}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Risk Distribution by Class',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    scales: {
                      xAxes: [{
                          stacked: true
                      }],
                      yAxes: [{
                          stacked: true
                      }]
                    },
                    responsive: true,
                    maintainAspectRatio:false
                  }}
                />
              </div>  

               

              
    </div>

   {/* <Grid container spacing={2}>
            <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'space-around', margin:5}}> 
                  <div style={{border:'1px dotted #999999',width:'100%', borderRadius:3, margin:5, maxWidth:600}}>
                  <Doughnut
                    data={pieData}
                    options={{
                      title:{
                        display:true,
                        text:'Anomaly Distribution by Classes',
                        fontSize:14
                      },
                      legend:{
                        display:true,
                        position:'bottom'
                      },
                     
                    }}
                  />
                  </div>
             
              <div style={{border:'1px dotted #999999',width:'100%', borderRadius:3, margin:5, maxWidth:600, minHeight:200}}>           
                <Pie
                  data={pieActionData}
                  options={{
                    title:{
                      display:true,
                      text:'Anomaly Distribution by Actions',
                      fontSize:14
                    },
                    legend:{
                      display:true,
                      position:'bottom'
                    },
                    responsive: true,
                      maintainAspectRatio:true
                  }}
                />
                </div>
            </div>
            <Grid item xs={12} sm={6}> 
            <Bar
              data={barCoFData}
              options={{
                title:{
                  display:true,
                  text:'CoFs',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'bottom'
                },
                responsive: true,
                maintainAspectRatio:false
              }}
            />
               
            </Grid>
            <Grid item xs={12} sm={6}> 
            <Bar
              data={barLoFData}
              options={{
                title:{
                  display:false,
                  text:'LoFs',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'bottom'
                },
                responsive: true,
                maintainAspectRatio:false
              }}
            />
               
            </Grid>
           
            </Grid>*/}
      

      

      

      
    </div>
  );
};


const mapStateToProps = state => {
  
  return {
      anomalies:state.anomalies,
      priorities:state.priorities,
      systems:state.systems,
      platforms:state.platforms,
      coFs:state.coFs,
      loFs:state.loFs,
      anomalyClasses:state.anomalyClasses,
      actions:state.actions,
    };
};

export default connect(mapStateToProps)(AnomalyDashboard);