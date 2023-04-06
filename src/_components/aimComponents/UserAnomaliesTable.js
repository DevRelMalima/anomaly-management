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
import TextField from "@material-ui/core/TextField";
import { SheetDownloadButton } from "../../common/customButton";
import { authenticationService } from "@/_services";
import axios from "axios";
import AttachmentIcon from "@material-ui/icons/AttachFileOutlined";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import DetailsIcon from "@material-ui/icons/DetailsRounded";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import { useStyles } from "@/_utilities/CommonStyles";
import { deleteAnomaly } from "../../_actions/anomalyActions";
import AlertDialog from "../../_components/AlertDialog";
import { Link as ReactLink } from "react-router-dom";
import { downloadFile } from "../../utility/filesUtility";

import DialogPrompt from "./DialogPrompt";
import AnomalyRecordView from "./AnomalyRecordView";

const StyledTableCell = withStyles((theme) => ({
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

/*const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));*/

const UserAnomaliesTable = (props) => {
  const classes = useStyles();
  const [searchString, setSearchString] = React.useState("");
  const currentUser = authenticationService.currentUserValue;
  const [rowData, setRowData] = React.useState(
    props.anomalies.filter((i) => i.user == currentUser.id)
  );
  const [filteredRowData, setFilteredRowData] =
    React.useState(rowData);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [dialogProps, setDialogProps] = React.useState({});

  const [openRecordView, setOpenRecordView] = React.useState(false);
  const [anomalyDialogProps, setAnomalyDialogProps] = React.useState(
    {}
  );

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
  const deleteAnomaly = (anomaly) => {
    if (anomaly) {
      setOpenAlert(true);

      setDialogProps({
        ...dialogProps,
        dialogTitle: "Delete Anomaly",
        dialogMessage: "Delete Anomaly: " + anomaly.code,
        okAction: () => {
          props.deleteAnomaly(anomaly);
          setOpenAlert(false);
        },
      });
    }
  };

  const downloadExcelFile = () => {
    downloadFile(
      "/api/anomalies/download/anomalies_by_user",
      "Anomalies.xlsx",
      "Excel"
    );
  };

  useEffect(() => {
    setFilteredRowData(
      props.anomalies.filter((i) => i.user == currentUser.id)
    );
    setRowData(
      props.anomalies.filter((i) => i.user == currentUser.id)
    );
  }, [props.anomalies]);

  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }

  function showAnomalyRecordDialog(id) {
    setOpenRecordView(true);

    let selAnomaly = props.anomalies.find((a) => {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly({ ...selAnomaly });
      setAnomalyDialogProps({
        ...dialogProps,
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selAnomaly.code + "",
      });
    }
  }

  return (
    <React.Fragment>
      <AlertDialog
        open={openAlert}
        cancelAction={() => setOpenAlert(false)}
        {...dialogProps}
      />

      <DialogPrompt
        open={openRecordView}
        {...anomalyDialogProps}
        okAction={null}
        cancelAction={() => setOpenRecordView(false)}
      >
        <AnomalyRecordView anomalyId={selectedAnomaly.id} />
      </DialogPrompt>
      {/*<Title>Recent Orders</Title>*/}
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
          placeholder="Search…"
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
              </div>*/}
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
              ></StyledTableCell>
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
                Platform
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
                Stage
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRowData &&
              filteredRowData.map((row, i) => (
                <TableRow key={row.id}>
                  <StyledTableCell>
                    <span
                      style={{
                        padding: "2px 10px",
                        fontSize: 12,
                        color: "#FFFFFF",
                        borderRadius: 10,
                        backgroundColor: "#444444",
                      }}
                    >
                      {i + 1}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
                    <IconButton
                      size="small"
                      component={ReactLink}
                      to={"/anomalies/edit/" + row.id + "/"}
                      color="primary"
                    >
                      <EditIcon className={classes.iconButton2} />
                    </IconButton>
                    <IconButton
                      toolTip={"Copy"}
                      size="small"
                      component={ReactLink}
                      to={"/anomalies/copy/" + row.id + "/"}
                      color="primary"
                    >
                      <PostAddOutlinedIcon
                        className={classes.iconButton2}
                      />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => deleteAnomaly(row)}
                      color="primary"
                    >
                      <DeleteIcon className={classes.iconButton2} />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{
                      color: "#555555",
                      whiteSpace: "nowrap",
                      fontSize: 11,
                    }}
                  >
                    {row.attachedFiles.length > 0 ? (
                      <div>
                        <AttachmentIcon />
                        <div>
                          {row.attachedFiles.length} Attachment(s)
                        </div>
                      </div>
                    ) : (
                      "No attachment"
                    )}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#0099FF", whiteSpace: "nowrap" }}
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
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
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
                  {/* <StyledTableCell style={{color:"#FF2200"}}>{props.coFs.find(p => p.id == row.coF)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#FF2200"}}>{props.loFs.find(p => p.id == row.loF)?.name || "--"}</StyledTableCell>
              <StyledTableCell style={{color:"#009444"}}>{props.priorities.find(p => p.id == row.priority)?.name || "--"}</StyledTableCell>
              <StyledTableCell>{props.actions.find(p => p.id == row.action)?.name || "--"}</StyledTableCell> */}
                  <StyledTableCell>
                    {props.actions.find((p) => p.id == row.action)
                      ?.name || "--"}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ color: "#FF2200", whiteSpace: "nowrap" }}
                  >
                    <Moment format="LL" date={row.dateRaised} />
                  </StyledTableCell>
                  <StyledTableCell style={{ color: "#009444" }}>
                    {!row.isAnalysed
                      ? "Pending Analysis"
                      : row.isApproved
                      ? "Approved"
                      : "Pending Approval"}
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
    deleteAnomaly: (data) => {
      dispatch(deleteAnomaly(data));
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
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAnomaliesTable);
