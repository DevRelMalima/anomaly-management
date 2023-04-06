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
import { Link as ReactLink } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Moment from "react-moment";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import {
  colorInterpolator,
  colorInterpolator4,
} from "../../utility/colors";
import { getPriority } from "../../utility/riskAnalysisUtility";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace: "nowrap",
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}))(TableCell);

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const getMax = (arr, propt) => {
  let maxValue = 0;

  arr.forEach((ele) => {
    if (ele[propt] > maxValue) maxValue = ele[propt];
  });
  return maxValue;
};

const coFs = [1, 2, 3, 4, 5];
const loFs = [1, 2, 3, 4, 5];

const NewAnomaliesTable = (props) => {
  const classes = useStyles();
  const [searchString, setSearchString] = React.useState("");
  const [rowData, setRowData] = React.useState(
    props.anomalies.filter((i) => i.isAnalysed == false)
  );
  const [filteredRowData, setFilteredRowData] =
    React.useState(rowData);

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

  useEffect(() => {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter((i) => i.isAnalysed == false));
    //console.warn();
  }, [props.anomalies]);

  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }

  return (
    <React.Fragment>
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
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell colSpan={coFs.length} align="center">
                Matrix
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell
                align="center"
                style={{ backgroundColor: "#FFFFFF" }}
                rowSpan={loFs.length + 1}
              >
                Probability
              </StyledTableCell>
            </TableRow>

            {loFs &&
              loFs
                .sort((a, b) => b - a)
                .map((row, j) => (
                  <TableRow
                    style={{
                      backgroundColor: "#333333",
                      color: "#FFFFFF",
                      borderRadius: 5,
                    }}
                  >
                    <StyledTableCell style={{ fontWeight: "bold" }}>
                      {" "}
                      {loFs[j]}
                    </StyledTableCell>
                    {coFs &&
                      coFs.map((col, i) => (
                        <StyledTableCell
                          align="center"
                          style={{
                            fontWeight: "bold",
                            backgroundColor: colorInterpolator4(
                              "#ff0000",
                              "#ff9900",
                              "#ffe601",
                              "#b2fb72",
                              "#78e816",
                              ((getMax(coFs, "score") + 1 - coFs[i]) *
                                (getMax(loFs, "score") +
                                  1 -
                                  loFs[j])) /
                                (getMax(coFs, "score") *
                                  getMax(loFs, "score"))
                            ),
                          }}
                        >
                          {getPriority(loFs[j], coFs[i])}
                        </StyledTableCell>
                      ))}
                  </TableRow>
                ))}

            <TableRow
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
                borderRadius: 5,
              }}
            >
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell> </StyledTableCell>
              {coFs &&
                coFs.map((col, i) => (
                  <StyledTableCell
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    {coFs[i]}
                  </StyledTableCell>
                ))}
            </TableRow>
            <TableRow
              style={{
                backgroundColor: "#333333",
                color: "#FFFFFF",
                borderRadius: 5,
              }}
            >
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell colSpan={coFs.length} align="center">
                Consequence
              </StyledTableCell>
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
    loFs: state.loFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
  };
};
// export default TodoList;
export default connect(mapStateToProps)(NewAnomaliesTable);
