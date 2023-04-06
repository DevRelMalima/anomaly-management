import React , {useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import {countries} from 'countries-List';
import {Link as ReactLink} from 'react-router-dom';
import TableContainer from '@material-ui/core/TableContainer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import TextField from '@material-ui/core/TextField';
import {SheetDownloadButton} from '../../common/customButton';
import { authenticationService } from '@/_services';
import AttachmentIcon from '@material-ui/icons/AttachFileOutlined';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from '@/_utilities/CommonStyles';
import {downloadFile} from '../../utility/filesUtility';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace:'nowrap'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function preventDefault(event) {
  event.preventDefault();
}


const NewAnomaliesTable = (props) => {
  
  const classes = useStyles();
  const [searchString, setSearchString] = React.useState('');
  const currentUser = authenticationService.currentUserValue;  
  const [rowData, setRowData] = React.useState(props.anomalies.filter(i => i.isAnalysed == false));
  const [filteredRowData, setFilteredRowData] = React.useState(rowData);



  const handleSearchInputChange = event => {
    const { value } = event.target
    setSearchString(value)

    if(value != null && value !='')
    {
        setFilteredRowData(rowData.filter(r => r.component.toLowerCase().indexOf(value)> -1));
    }
    else
    {
        setFilteredRowData(rowData);
    }
  }

  const downloadExcelFile = () => {
   
    downloadFile('/api/anomalies/download/all_anomalies', 'Anomalies.xlsx', 'Excel');   
  
  }

  useEffect(() => {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(i => i.isAnalysed == false));
    setFilteredRowData(props.anomalies.filter(i => i.isAnalysed == false));
    setSearchString('');
    //console.warn();
  }, [props.anomalies,props.loFs,props.anomalyClasses,props.coFs,props.priorities,props.actions])
  

  function clearSearch()
  {
    setSearchString('');
    setFilteredRowData(rowData);
  }

  return (
    <React.Fragment>
      {/*<Title>Recent Orders</Title>*/}
      <div style={{position:'relative'}}>
        {/*<input placeholder="Search..." style={{backgroundColor:'#EEEEEE',color:"#0099FF", fontWeight:'bold', border:'solid 1px #0099FF', borderRadius:4,margin:10,padding:8, width:'100%'}}
          onChange={handleSearchInputChange}
          value={searchString}
  />*/}
            <div className={classes.search} style={{width:'100%', maxWidth:'100%'}}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                name="searchText"                
                value={searchString}
                onChange={handleSearchInputChange}
                fullWidth
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
                />
                <button style={{visibility: searchString == null || searchString == ''? 'hidden':"visible", 
              border:'solid 1px #999999', 
              borderRadius:4,
              margin:10,
              position:'absolute',
              right:0,
              top:10,
              padding:5 }} className="search" onClick={clearSearch}>
                Clear
              </button>
            </div>
        {/*<TextField
              autoComplete="component"
              name="component"
              variant="outlined"
              fullWidth    
              placeholder="Search..."                       
              value={searchString}
              onChange={handleSearchInputChange}
              id="component"
              label="Search"
            />
        <button style={{visibility: searchString == null || searchString == ''? 'hidden':"visible", 
        border:'solid 1px #999999', 
        borderRadius:4,
        margin:10,
        position:'absolute',
        right:0,
        top:10,
        padding:5 }} className="search" onClick={clearSearch}>
          Clear
        </button>*/}
      </div>
      <div style={{padding:10}}>
        <Grid container spacing={2} justify='flex-end' direction="row"> 
          <Grid item>
            <SheetDownloadButton size='small' color='primary' onClick={()=>downloadExcelFile()} variant='contained'>
              <ArrowDownwardIcon fontSize="inherit" />Download Spreadsheet
            </SheetDownloadButton>
          </Grid>
          {/*<Grid item>
            <Button size='small' color='primary' variant='outlined'>Advanced Search</Button>
          </Grid>*/}
        </Grid>
      </div>
      <TableContainer component={Paper}>
      <Table>
      <TableHead >
          <TableRow style={{backgroundColor:"#333333", color:'#FFFFFF', borderRadius:5}}>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>S/N</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}></StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>Code</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>Facility</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>Equipment/Tag No.</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}} align="center">Component</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>Class</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>CoF</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>LoF</StyledTableCell>
            <StyledTableCell style={{color:"#FFFFFF", fontWeight:'bold'}}>Priority</StyledTableCell>
            <StyledTableCell style={{color:"#FFCC00", fontWeight:'bold'}} align="center">Action</StyledTableCell>
            <StyledTableCell style={{color:"#FFCC00", fontWeight:'bold'}} align="center">Date Raised</StyledTableCell>
            <StyledTableCell style={{color:"#FFCC00", fontWeight:'bold'}} align="center">Stage</StyledTableCell>               
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRowData && filteredRowData.map((row, i) => (
            <TableRow key={row.id}>
              <StyledTableCell>{i+1}</StyledTableCell>
              <StyledTableCell align='center' style={{color:"#FF2200"}}>
                  { row.analysedBy == currentUser.id && <Button component={ReactLink} to={ "/anomalies/analyse_anomaly/"+row.id+""}  size="small" variant="outlined" >Analyse</Button>}
              </StyledTableCell>              
              <StyledTableCell style={{color:"#FF2200",whiteSpace:'nowrap'}}>{row.code}</StyledTableCell>
              <StyledTableCell style={{color:"#009444"}}>{props.platforms.find(p => p.id == row.platform)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#FF2200"}}>{row.equipmentTagNo}</StyledTableCell>
              <StyledTableCell>{row.component}</StyledTableCell>
              <StyledTableCell>
                <div style={{display:'inline-block',color:"#FFFFFF", fontSize:12, borderRadius:4, padding:2, paddingLeft:5, paddingRight:5, backgroundColor:"#FF9900"}}>
                  {props.anomalyClasses.find(p => p.id == row.anomalyClass)?.code || "--"}
                </div>     
              </StyledTableCell>         
              <StyledTableCell style={{color:"#FF2200"}}>{props.coFs.find(p => p.id == row.coF)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#FF2200"}}>{props.loFs.find(p => p.id == row.loF)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#009444"}}>{props.priorities.find(p => p.id == row.priority)?.name || "--"}</StyledTableCell>
              <StyledTableCell>{props.actions.find(p => p.id == row.action)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#FF2200",whiteSpace:'nowrap'}}><Moment format="LL" date={row.dateRaised}/></StyledTableCell>
              <StyledTableCell style={{color:"#009444"}}>{"Pending Analysis"}</StyledTableCell>
            </TableRow>
          ))}
           {filteredRowData && filteredRowData.length == 0 && (
                <TableRow style={{ minHeight:50}}>
                  <TableCell style={{color:"#999999", padding:50, fontSize:30, fontWeight:'normal'}} align="center" colSpan={12} >No Record</TableCell>
                </TableRow>
          )}
        </TableBody>
      </Table>
      </TableContainer>
      {/*<div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
          </div>*/}
    </React.Fragment>
  );
}

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
  // export default TodoList;
  export default connect(mapStateToProps)(NewAnomaliesTable);