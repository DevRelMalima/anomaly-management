import React, { useEffect } from "react";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from "uuid";
import { countries } from "countries-List";
import { List } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import { SheetDownloadButton } from "../../common/customButton";

import { DatePicker } from "@material-ui/pickers";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace: "nowrap",
  },
  body: {
    fontSize: 12,
    whiteSpace: "nowrap",
    padding: 8,
  },
}))(TableCell);

function preventDefault(event) {
  event.preventDefault();
}

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var nstopDate = moment(stopDate);
  while (currentDate <= nstopDate) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "months");
  }
  return dateArray;
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const ActivitiesTable = (props) => {
  const classes = useStyles();
  const [searchString, setSearchString] = React.useState("");
  const [rowData, setRowData] = React.useState(props.anomalies);
  const [filteredRowData, setFilteredRowData] =
    React.useState(rowData);
  const [searchFilter, setSearchFilter] = React.useState({
    startDate: new Date("01-01-" + new Date().getFullYear()),
    endDate: new Date(),
  });

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchString(value);

    if (value != null && value != "") {
      setFilteredRowData(
        rowData.filter(
          (r) => r.component.toLowerCase().indexOf(value) > -1
        )
      );
    } else {
      setFilteredRowData(rowData);
    }
  };

  // useEffect(() => {
  //   //setFilteredRowData(populateTableData(countries, props.caseData));
  //   //setRowData(populateTableData(countries, props.caseData));
  //   console.warn(props.anomalies);
  // }, [props.anomalies]);

  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }

  return (
    <React.Fragment>
      {/*<Title>Recent Orders</Title>*/}
      {/*<div style={{position:'relative'}}>
       
        <TextField
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
        <button style={{visibility: searchString ===  null || searchString ===  ''? 'hidden':"visible", 
        border:'solid 1px #999999', 
        borderRadius:4,
        margin:10,
        position:'absolute',
        right:0,
        top:10,
        padding:5 }} className="search" onClick={clearSearch}>
          Clear
        </button>
      </div>*/}
      <div style={{ padding: 10 }}>
        <Grid
          container
          spacing={2}
          justify="flex-end"
          direction="row"
        >
          <Grid item>
            <DatePicker
              size="small"
              openTo="month"
              style={{ fontSize: 10, padding: 0 }}
              inputVariant="outlined"
              label="Start Date"
              format="MM-DD-YYYY"
              views={["year", "month", "date"]}
              value={searchFilter.startDate}
              onChange={(date) => {
                setSearchFilter({
                  ...searchFilter,
                  startDate: date.toDate(),
                });
              }}
              InputAdornmentProps={{
                position: "start",
                fontSize: 10,
              }}
            />
          </Grid>
          <Grid item>
            <DatePicker
              size="small"
              openTo="month"
              inputVariant="outlined"
              label="End Date"
              format="MM-DD-YYYY"
              views={["year", "month", "date"]}
              value={searchFilter.endDate}
              onChange={(date) => {
                setSearchFilter({
                  ...searchFilter,
                  endDate: date.toDate(),
                });
                console.log(
                  "Get Date",
                  getDates(
                    new Date(searchFilter.startDate),
                    new Date(searchFilter.endDate)
                  )
                );
              }}
              InputAdornmentProps={{ position: "start" }}
            />
          </Grid>

          {/*<Grid item>
            <SheetDownloadButton size='small' color='primary' variant='contained'>Download Spreadsheet</SheetDownloadButton>
          </Grid>
          <Grid item>
            <Button size='small' color='primary' variant='outlined'>Advanced Search</Button>
          </Grid>*/}
        </Grid>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
                borderRadius: 5,
              }}
            >
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Date
              </StyledTableCell>
              {props.actions &&
                props.actions.map((row, i) => (
                  <StyledTableCell
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                    key={i}
                  >
                    {row.name}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getDates(
              new Date(searchFilter.startDate),
              new Date(searchFilter.endDate)
            ).map(
              (d, i) =>
                props.anomalies.filter(
                  (a) =>
                    moment(d).format("MMM YY") ===
                    moment(a.closeOutDate).format("MMM YY")
                ).length > 0 && (
                  <TableRow
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#000",
                      borderRadius: 5,
                    }}
                    key={i}
                  >
                    <StyledTableCell
                      style={{ color: "#0099FF", fontWeight: "bold" }}
                    >
                      <Moment format="LL" date={d} />
                    </StyledTableCell>
                    {props.actions &&
                      props.actions.map((row, i) => (
                        <StyledTableCell
                          style={{
                            color: "#555555",
                            fontWeight: "normal",
                            textAlign: "center",
                          }}
                        >
                          {props.anomalies.filter(
                            (i) =>
                              i.action === row.id &&
                              moment(d).format("MMM YY") ===
                                moment(i.closeOutDate).format(
                                  "MMM YY"
                                )
                          ).length || "-"}
                        </StyledTableCell>
                      ))}
                  </TableRow>
                )
            )}
            <TableRow style={{ minHeight: 50 }}>
              <StyledTableCell
                style={{ color: "#000", fontWeight: "bold" }}
              >
                Date
              </StyledTableCell>
              {props.actions && props.actions.length === 0 && (
                <TableCell
                  style={{
                    color: "#999999",
                    padding: 50,
                    fontSize: 30,
                    fontWeight: "normal",
                  }}
                  align="center"
                  colSpan={props.actions.length}
                >
                  No Record
                </TableCell>
              )}
            </TableRow>
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
};

const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    lofs: state.lofs,
    sofs: state.sofs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
  };
};

export default connect(mapStateToProps)(ActivitiesTable);
