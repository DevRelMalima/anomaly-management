import React, { useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
import DialogPrompt from "./DialogPrompt";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { SheetDownloadButton } from "../../common/customButton";
import { saveAnomalyReview } from "../../_actions/anomalyActions";
import AnomalyRecordView from "./AnomalyRecordView";
import Typography from "@material-ui/core/Typography";
import AttachmentIcon from "@material-ui/icons/AttachFileOutlined";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "@/_utilities/CommonStyles";
import { authenticationService } from "@/_services";
import { downloadFile } from "../../utility/filesUtility";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace: "nowrap",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function preventDefault(event) {
  event.preventDefault();
}

const AnalysedAnomaliesTable = (props) => {
  const classes = useStyles();
  const emptyAnomalyReviwe = {
    reviewAction: "APPROVE",
    reviewComment: "",
  };
  const currentUser = authenticationService.currentUserValue;
  const [newAnomalyReview, setNewAnomalyReview] = React.useState({
    ...emptyAnomalyReviwe,
  });
  const [searchString, setSearchString] = React.useState("");
  const [rowData, setRowData] = React.useState(
    props.anomalies.filter((i) => i.isAnalysed == true)
  );
  console.log(rowData);
  const [filteredRowData, setFilteredRowData] =
    React.useState(rowData);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openRecordView, setOpenRecordView] = React.useState(false);
  const [dialogProps, setDialogProps] = React.useState({});

  const [selectedAnomaly, setSelectedAnomaly] = React.useState({});

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

  const downloadExcelFile = () => {
    downloadFile(
      "/api/anomalies/download/analysed_anomalies",
      "Anomalies.xlsx",
      "Excel"
    );
  };

  useEffect(() => {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter((i) => i.isAnalysed == true));
    setFilteredRowData(
      props.anomalies.filter((i) => i.isAnalysed == true)
    );

    //console.warn();

    if (openAlert) {
      setDialogProps({
        ...dialogProps,
        dialogTitle: "Review Anomaly",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + "",
      });
    } else if (openRecordView) {
      setDialogProps({
        ...dialogProps,
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + "",
      });
    } else {
      setSearchString("");
    }
  }, [props.anomalies, openAlert, setOpenRecordView]);

  const getAnomalyReviewStatus = (anomaly) => {
    if (anomaly.isApproved) {
      return (
        <div
          style={{
            display: "inline-block",
            color: "#FFFFFF",
            fontSize: 12,
            borderRadius: 4,
            padding: 2,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: "#218e06",
          }}
        >
          Approved
        </div>
      );
    } else if (anomaly.isReverted) {
      return (
        <div
          style={{
            display: "inline-block",
            color: "#000000",
            fontSize: 12,
            borderRadius: 4,
            padding: 2,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: "#ffc107",
          }}
        >
          Reverted
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "inline-block",
            color: "#FFFFFF",
            fontSize: 12,
            borderRadius: 4,
            padding: 2,
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: "#ff1100",
          }}
        >
          Rejected
        </div>
      );
    }
  };

  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }

  function showApprovalDialog(id) {
    setOpenAlert(true);

    let selAnomaly = props.anomalies.find((a) => {
      return a.id == id;
    });
    if (selAnomaly) {
      setNewAnomalyReview({ ...emptyAnomalyReviwe });
      setSelectedAnomaly({ ...selAnomaly });
    }
  }

  function showAnomalyRecordDialog(id) {
    setOpenRecordView(true);

    let selAnomaly = props.anomalies.find((a) => {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly({ ...selAnomaly });
    }
  }

  const handleReviewChange = (event) => {
    event.persist();
    // handleChange(event);
    const { name, value } = event.target;
    //console.log({ name, value })
    setNewAnomalyReview({ ...newAnomalyReview, [name]: value });
    //console.log(newAnomaly)
  };

  const applyReview = () => {
    if (newAnomalyReview.reviewAction == "APPROVE") {
      selectedAnomaly.isApproved = true;
      selectedAnomaly.reviewAction = newAnomalyReview.reviewAction;
    } else if (newAnomalyReview.reviewAction == "REJECT") {
      selectedAnomaly.isApproved = false;
      selectedAnomaly.reviewAction = newAnomalyReview.reviewAction;
    } else if (newAnomalyReview.reviewAction == "REVERT") {
      selectedAnomaly.isReverted = true;
      selectedAnomaly.reviewAction = newAnomalyReview.reviewAction;
    }
    selectedAnomaly.approvedBy = props.currentUser.id;
    selectedAnomaly.isReviewed = true;
    props.saveAnomalyReview(selectedAnomaly);
    console.warn(selectedAnomaly);
    console.warn(newAnomalyReview);
    setOpenAlert(false);
  };

  return (
    <React.Fragment>
      {/*<Title>Recent Orders</Title>*/}
      <div style={{ position: "relative" }}>
        {/*<input placeholder="Search..." style={{backgroundColor:'#EEEEEE',color:"#0099FF", fontWeight:'bold', border:'solid 1px #0099FF', borderRadius:4,margin:10,padding:8, width:'100%'}}
          onChange={handleSearchInputChange}
          value={searchString}
  />*/}

        <DialogPrompt
          open={openRecordView}
          {...dialogProps}
          okAction={null}
          cancelAction={() => setOpenRecordView(false)}
        >
          <AnomalyRecordView anomalyId={selectedAnomaly.id} />
        </DialogPrompt>

        <DialogPrompt
          open={openAlert}
          {...dialogProps}
          okAction={() => applyReview()}
          cancelAction={() => setOpenAlert(false)}
        >
          <RadioGroup
            aria-label="reviewAction"
            value={newAnomalyReview.reviewAction}
            onChange={handleReviewChange}
            row
            name="reviewAction"
          >
            {" "}
            {/*  value={value} onChange={handleChange} */}
            <FormControlLabel
              value="APPROVE"
              control={<Radio style={{ color: "#1c75bc" }} />}
              label="Approve"
            />
            <FormControlLabel
              value="REJECT"
              control={<Radio style={{ color: "#1c75bc" }} />}
              label="Reject"
            />
            <FormControlLabel
              value="REVERT"
              control={<Radio style={{ color: "#1c75bc" }} />}
              label="Revert"
            />
          </RadioGroup>
          <TextField
            autoComplete="reviewComment"
            name="reviewComment"
            variant="outlined"
            multiline
            rows={4}
            value={newAnomalyReview.reviewComment}
            fullWidth
            placeholder="Review Comment..."
            id="reviewComment"
            label="Review Comment"
            onChange={handleReviewChange}
          />
        </DialogPrompt>
        <div
          className={classes.search}
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            name="searchText"
            value={searchString}
            onChange={handleSearchInputChange}
            fullWidth
            placeholder="Search Component…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "Search" }}
          />
          <button
            style={{
              visibility:
                searchString == null || searchString == ""
                  ? "hidden"
                  : "visible",
              border: "solid 1px #999999",
              borderRadius: 4,
              margin: 10,
              position: "absolute",
              right: 0,
              top: 10,
              padding: 5,
            }}
            className="search"
            onClick={clearSearch}
          >
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
      <div style={{ padding: 10 }}>
        <Grid
          container
          spacing={2}
          justify="flex-end"
          direction="row"
        >
          <Grid item>
            <SheetDownloadButton
              size="small"
              color="primary"
              onClick={() => downloadExcelFile()}
              variant="contained"
            >
              <ArrowDownwardIcon fontSize="inherit" />
              Download Spreadsheet
            </SheetDownloadButton>
          </Grid>
          {/*<Grid item>
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
                S/N
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              ></StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Code
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Facility
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Equipment/Tag No.
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
                align="center"
              >
                Component
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Class
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                SoF
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                CoF
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                LoF
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                Priority
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFCC00", fontWeight: "bold" }}
                align="center"
              >
                Action
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFCC00", fontWeight: "bold" }}
                align="center"
              >
                Date Raised
              </StyledTableCell>
              <StyledTableCell
                style={{ color: "#FFCC00", fontWeight: "bold" }}
                align="center"
              >
                Close-out Date
              </StyledTableCell>

              <StyledTableCell
                style={{ color: "#FFCC00", fontWeight: "bold" }}
                align="center"
              >
                Stage
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRowData &&
              filteredRowData.map((row, i) => (
                <TableRow key={row.id}>
                  <StyledTableCell>{i + 1}</StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{ color: "#FF2200" }}
                  >
                    {row.isReviewed
                      ? getAnomalyReviewStatus(row)
                      : row.analysedBy == currentUser.id && (
                          <Button
                            onClick={() => showApprovalDialog(row.id)}
                            size="small"
                            variant="outlined"
                          >
                            Review
                          </Button>
                        )}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#0022FF", whiteSpace: "nowrap" }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => showAnomalyRecordDialog(row.id)}
                    >
                      {row.code}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#009444" }}>
                    {props.platforms.find((p) => p.id == row.platform)
                      ?.name || "--"}
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#FF2200" }}>
                    {row.equipmentTagNo}
                  </StyledTableCell>
                  <StyledTableCell>{row.component}</StyledTableCell>
                  <StyledTableCell>
                    <div
                      style={{
                        display: "inline-block",
                        color: "#FFFFFF",
                        fontSize: 12,
                        borderRadius: 4,
                        padding: 2,
                        paddingLeft: 5,
                        paddingRight: 5,
                        backgroundColor: "#FF9900",
                      }}
                    >
                      {props.anomalyClasses.find(
                        (p) => p.id == row.anomalyClass
                      )?.code || "--"}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#FF2200" }}>
                    {/* {props.soFs.find((p) => p.id == row.soF)?.name ||
                      "--"} */}
                    {row.soF}
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#FF2200" }}>
                    {/* {props.coFs.find((p) => p.id == row.coF)?.name ||
                      "--"} */}
                    {row.coF}
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#FF2200" }}>
                    {/* {props.loFs.find((p) => p.id == row.loF)?.name ||
                      "--"} */}
                    {row.loF}
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#009444" }}>
                    {/* {props.priorities.find(
                      (p) => p.id == row.priority
                    )?.name || "--"} */}

                    {row.priority}
                  </StyledTableCell>
                  <StyledTableCell>
                    {props.actions.find((p) => p.id == row.action)
                      ?.name || "--"}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
                    <Moment format="LL" date={row.dateRaised} />
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
                    <Moment format="LL" date={row.closeOutDate} />
                  </StyledTableCell>

                  <StyledTableCell style={{ color: "#009444" }}>
                    {row.isReviewed
                      ? row.isApproved
                        ? "Approved"
                        : "Pending Approval"
                      : "Pending Review"}
                  </StyledTableCell>
                </TableRow>
              ))}
            {filteredRowData && filteredRowData.length == 0 && (
              <TableRow style={{ minHeight: 50 }}>
                <TableCell
                  style={{
                    color: "#999999",
                    padding: 50,
                    fontSize: 30,
                    fontWeight: "normal",
                  }}
                  align="center"
                  colSpan={12}
                >
                  No Record
                </TableCell>
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnomalyReview: (data) => {
      dispatch(saveAnomalyReview(data));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    soFs: state.soFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    currentUser: state.currentUser
  };
};
// export default TodoList;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalysedAnomaliesTable);
