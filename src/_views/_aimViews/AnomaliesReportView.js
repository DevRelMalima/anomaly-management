import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import ViewTitle from "../../_components/aimComponents/ViewTitle";
import { Copyright } from "../../common/sideMenuComponents";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import Logo from "../../_images/grasp_logo 1.png";
import RiskMatrix, {
  SmlRiskMatrix,
} from "../../_components/aimComponents/risk-matrix/RiskMatrix";
import AnomalyDashboard from "../../_components/aimComponents/AnomalyDashboardView";
import "./AnomaliesReport.css";
import {
  Checkbox,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StyledTableCell } from "../../_components/aimComponents/AnalysedAnomaliesTable";
import { BaseURL } from "../../constants/URLs/urls";

const AnomaliesReportView = (props) => {
  const [anoms, setAnoms] = useState(props.anomalies);
  const [users, setUsers] = useState(props.users);
  const [filterConstraint, setFilterConstraint] = useState("open");

  const handleFieldChange2 = (event) => {
    event.persist();
    // handleChange(event);
    const { name, checked } = event.target;
    //console.log({ name, value })
    setFilterConstraint(checked ? name : "");
    console.log(filterConstraint);
  };
  useEffect(() => {
    if (props.anomalies) setAnoms(props.anomalies);
    if (props.users) setUsers(props.users);
  }, [props.anomalies, props.users]);

  useEffect(() => {
    switch (filterConstraint) {
      case "open":
        setAnoms(
          props.anomalies.filter(
            (anomaly) => anomaly.status === "OPEN"
          )
        );
        break;
      case "live":
        setAnoms(
          props.anomalies.filter(
            (anomaly) => anomaly.status === "LIVE"
          )
        );
        break;
      case "closed":
        setAnoms(
          props.anomalies.filter(
            (anomaly) => anomaly.status === "CLOSED"
          )
        );
        break;
      case "canceled":
        setAnoms(
          props.anomalies.filter(
            (anomaly) => anomaly.status === "CANCELED_SUPERSEDED"
          )
        );
        break;
      case "pending":
        setAnoms(
          props.anomalies.filter((anomaly) => !anomaly.isAnalysed)
        );
        break;
      case "analysed":
        setAnoms(
          props.anomalies.filter((anomaly) => anomaly.isAnalysed)
        );
        break;
      case "approved":
        setAnoms(
          props.anomalies.filter((anomaly) => anomaly.isApproved)
        );
        break;

      default:
        setAnoms(props.anomalies);
        break;
    }
  }, [filterConstraint]);
  const getAnomalyReviewStatus = (anomaly) => {
    if (anomaly.status == "LIVE") {
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
          Live
        </div>
      );
    } else if (anomaly.status == "CLOSED") {
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
          Closed
        </div>
      );
    } else if (anomaly.status == "CANCELED") {
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
          Canceled
        </div>
      );
    } else if (anomaly.status == "CANCELED_SUPERSEDED") {
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
          {"Canceled & Superseded"}
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
          Open
        </div>
      );
    }
  };

  const print = async () => {
    var imgWidth = 210;
    var pageHeight = 295;
    const pages = Array.from(
      document.getElementsByClassName("divToPrint")
    );
    console.log(pages);
    const pdf = new jsPDF("p", "mm", "a4", true);
    let promises = pages.map((page) =>
      html2canvas(page, {
        useCORS: true,
        quality: 2,
        scale: 2,
      })
    );
    Promise.all(promises).then((canvases) => {
      console.log(canvases);
      canvases.forEach((canvas, i) => {
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        const imgData = canvas.toDataURL("image/png");
        if (i > 0) pdf.addPage();
        var position = 0;
        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= pageHeight;
        //pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');

        if (i > 0)
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(
              imgData,
              "PNG",
              0,
              position,
              imgWidth,
              imgHeight
            );
            heightLeft -= pageHeight;
          }
      });
      pdf.save("report.pdf");
    });
  };

  return (
    <main className="reportContainer">
      <ViewTitle>Report</ViewTitle>
      <div style={{ padding: 5 }}>
        <Button
          size="medium"
          color="primary"
          onClick={async () => await print()}
          variant="outlined"
        >
          Print
        </Button>
        <span style={{ color: "red", marginLeft: "10px" }}>
          Print only on desktop view
        </span>
      </div>
      <ViewTitle>Filter</ViewTitle>
      <div className="filterBoxes">
        <span>
          Open
          <Checkbox
            checked={filterConstraint === "open"}
            name={"open"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="open"
          />
        </span>
        <span>
          Live
          <Checkbox
            checked={filterConstraint === "live"}
            name={"live"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="live"
          />
        </span>
        <span>
          Closed
          <Checkbox
            checked={filterConstraint === "closed"}
            name={"closed"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="closed"
          />
        </span>
        <span>
          Canceled & Superseded
          <Checkbox
            checked={filterConstraint === "canceled"}
            name={"canceled"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="canceled"
          />
        </span>
        <span>
          Pending Analysis
          <Checkbox
            checked={filterConstraint === "pending"}
            name={"pending"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="pending"
          />
        </span>
        <span>
          Analysed
          <Checkbox
            checked={filterConstraint === "analysed"}
            name={"analysed"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="analysed"
          />
        </span>
        <span>
          Approved
          <Checkbox
            checked={filterConstraint === "approved"}
            name={"approved"}
            onChange={handleFieldChange2}
            inputProps={{ "aria-label": "controlled" }}
            id="approved"
          />
        </span>
      </div>

      <div id="divToPrint" className="pdfContainer">
        <div className="divToPrint page1Container">
          <ViewTitle>Anomalies Summary</ViewTitle>
          <RiskMatrix newAnomalies={anoms} />
          <AnomalyDashboard />
        </div>
        {anoms.map((anom) => (
          <>
            <div className="divToPrint anomalyPage">
              <div class="grid-container">
                <div class="grid-item reporthead">
                  <img src={Logo} alt="logo" className="reportLogo" />
                  <span className="reportHeader">
                    Anomaly Report for {anom.code}
                  </span>
                </div>
                <div class="grid-item smallHeads">
                  <span>Anomaly Information</span>
                </div>
                <div class="grid-item smallHeads">
                  <span>Risk Matrix</span>
                </div>
                <div class="grid-item 4">
                  <ReportContent
                    name={"Asset Type"}
                    value={
                      props.anomalyClasses.find(
                        (p) => p.id === anom.anomalyClass
                      )?.code || "--"
                    }
                  />
                  <ReportContent
                    name={"Facility"}
                    value={
                      props.platforms.find(
                        (p) => p.id === anom.platform
                      )?.name || "--"
                    }
                  />
                  <ReportContent
                    name={"Tag Number"}
                    value={anom.equipmentTagNo}
                  />
                  <ReportContent
                    name={"Component"}
                    value={anom.component}
                  />
                </div>
                <div class="grid-item 5 centerContent">
                  <SmlRiskMatrix lof={anom.loF} cof={anom.coF} />
                </div>
                <div class="grid-item smallHeads">
                  <span>Design Data</span>
                </div>
                <div class="grid-item 7">
                  <ReportContent
                    name={"Design Code"}
                    value={anom.designCode}
                  />
                  <ReportContent
                    name={"Year of Built (Installation)"}
                    value={anom.yearOfBuild}
                  />
                  <ReportContent
                    name={"Safety Critical Equipment: (Yes or No) "}
                    value={anom.isSCE ? "Yes" : "No"}
                  />
                </div>
                <div class="grid-item smallHeads">
                  <span>Anomaly Status</span>
                </div>
                <div class="grid-item 9">
                  <ReportContent
                    name={"Anomaly status"}
                    value={getAnomalyReviewStatus(anom)}
                  />
                  <ReportContent
                    name={"Shutdown Required"}
                    value={anom.isShutdownRequired ? "Yes" : "NO"}
                  />
                </div>
                <div class="grid-item smallHeads">
                  <span>Notes/Comments</span>
                </div>
                <div class="grid-item 11">
                  <ReportContent
                    name={"Notes"}
                    value={anom.description}
                    className="bigVal"
                  />
                </div>
                <div class="grid-item smallHeads">
                  <span>Inspection Data</span>
                </div>
                <div class="grid-item 13">
                  {InspectionTable(anom)}
                </div>
                <div class="grid-item smallHeads">
                  <span>Anomaly Analysis</span>
                </div>
                <div class="grid-item 15">
                  {AnalysisTable(anom, props)}
                </div>
                <div class="grid-item smallHeads">
                  <span>Recommendation</span>
                </div>
                <div class="grid-item">{RecomTable(anom, users)}</div>
                <div class="grid-item smallHeads">
                  <span>Images</span>
                </div>
                <div class="grid-item reportAttached">
                  {anom.attachedFiles.map((file, i) => (
                    <img
                      alt={file.fileName}
                      src={
                        BaseURL + "/api/files/download/" + file.fileId
                      }
                      key={i}
                      className="img"
                    />
                  ))}
                </div>
              </div>
            </div>
            <br />
          </>
        ))}
      </div>

      <Box pt={4}>
        <Copyright />
      </Box>
    </main>
  );
};
const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
    systems: state.systems,
    platforms: state.platforms,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    users: state.users,
  };
};
export default connect(mapStateToProps)(AnomaliesReportView);

function RecomTable(anom, users) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#7e4d11",
              color: "#FFFFFF",
            }}
          >
            <StyledTableCell
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
              align="center"
            >
              Activity Method
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Survey Date
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Due Date
            </StyledTableCell>

            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Analyst
            </StyledTableCell>

            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Approver
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={anom.id}>
            <StyledTableCell style={{ color: "#FF2200" }}>
              {anom.activityMethod}
            </StyledTableCell>
            <StyledTableCell
              style={{ color: "#FF2200", whiteSpace: "nowrap" }}
            >
              <Moment format="LL" date={anom.dateRaised} />
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FF2200",
                whiteSpace: "nowrap",
              }}
            >
              <Moment format="LL" date={anom.closeOutDate} />
            </StyledTableCell>
            <StyledTableCell>
              {anom.analysedBy
                ? users.find((user) => anom.analysedBy === user.id)
                    ?.firstName +
                  " " +
                  users.find((user) => anom.analysedBy === user.id)
                    ?.lastName
                : "--"}
            </StyledTableCell>
            <StyledTableCell>
              {anom.approvedBy
                ? users.find((user) => anom.approvedBy === user.id)
                    ?.firstName +
                  " " +
                  users.find((user) => anom.approvedBy === user.id)
                    ?.lastName
                : "--"}
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function InspectionTable(anom) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#7e4d11",
              color: "#FFFFFF",
            }}
          >
            <StyledTableCell
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
              align="center"
            >
              Component
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Survey Date
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Actvity Method
            </StyledTableCell>
            {anom.activityMethod === "Inspection" && (
              <StyledTableCell
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Inspection Type
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={anom.id}>
            <StyledTableCell>{anom.component}</StyledTableCell>

            <StyledTableCell
              style={{ color: "#FF2200", whiteSpace: "nowrap" }}
            >
              <Moment format="LL" date={anom.dateRaised} />
            </StyledTableCell>
            <StyledTableCell style={{ color: "#FF2200" }}>
              {anom.activityMethod}
            </StyledTableCell>
            {anom.activityMethod === "Inspection" && (
              <StyledTableCell style={{ color: "#FF2200" }}>
                {anom.inspectionType}
              </StyledTableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function AnalysisTable(anom, props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: "#7e4d11",
              color: "#FFFFFF",
            }}
          >
            <StyledTableCell
              style={{ color: "#FFFFFF", fontWeight: "bold" }}
              align="center"
            >
              Component
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Class
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              SoF
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              CoF
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              LoF
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Priority
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFCC00",
                fontWeight: "bold",
              }}
              align="center"
            >
              Action
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FFCC00",
                fontWeight: "bold",
              }}
              align="center"
            >
              Close-out Date
            </StyledTableCell>

            <StyledTableCell
              style={{
                color: "#FFCC00",
                fontWeight: "bold",
              }}
              align="center"
            >
              Stage
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={anom.id}>
            <StyledTableCell>{anom.component}</StyledTableCell>
            <StyledTableCell>
              <div
                style={{
                  display: "inline-block",
                  color: "#FFFFFF",
                  fontSize: 12,
                  borderRadius: 4,
                  padding: 2,
                  paddingLeft: 3,
                  paddingRight: 3,
                  backgroundColor: "#FF9900",
                }}
              >
                {props.anomalyClasses.find(
                  (p) => p.id == anom.anomalyClass
                )?.code || "--"}
              </div>
            </StyledTableCell>
            <StyledTableCell style={{ color: "#FF2200" }}>
              {/* {props.soFs.find((p) => p.id == anom.soF)?.name ||
          "--"} */}
              {anom.soF}
            </StyledTableCell>
            <StyledTableCell style={{ color: "#FF2200" }}>
              {/* {props.coFs.find((p) => p.id == anom.coF)?.name ||
          "--"} */}
              {anom.coF}
            </StyledTableCell>
            <StyledTableCell style={{ color: "#FF2200" }}>
              {/* {props.loFs.find((p) => p.id == anom.loF)?.name ||
          "--"} */}
              {anom.loF}
            </StyledTableCell>
            <StyledTableCell style={{ color: "#009444" }}>
              {/* {props.priorities.find(
          (p) => p.id == anom.priority
        )?.name || "--"} */}

              {anom.priority}
            </StyledTableCell>
            <StyledTableCell>
              {props.actions.find((p) => p.id == anom.action)?.name ||
                "--"}
            </StyledTableCell>
            <StyledTableCell
              style={{
                color: "#FF2200",
                whiteSpace: "nowrap",
              }}
            >
              <Moment format="LL" date={anom.closeOutDate} />
            </StyledTableCell>

            <StyledTableCell style={{ color: "#009444" }}>
              {anom.isReviewed
                ? anom.isApproved
                  ? "Approved"
                  : "Pending Approval"
                : "Pending Review"}
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ReportContent({ name, value, className = "" }) {
  return (
    <div className={`reportCont ${className}`}>
      <span>{name}</span>
      <span>:</span>
      <span>{value ? value : "--"}</span>
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{
  /* <Grid container spacing={3}>
          <Grid
            id="divToPrint"
            style={{ maxWidth: 700 }}
            item
            xs={12}
          >
            <div
              style={{
                fontSize: 24,
                background: "#333333",
                color: "#ffffff",
                padding: 5,
              }}
            >
              Anomaly Report
            </div>
            <div
              style={{
                fontSize: 14,
                border: "1px solid #333333",
                color: "#333333",
                padding: 5,
                textAlign: "right",
              }}
            >
              <Moment format="LL" date={new Date()} />
            </div>
            <RiskMatrixChart />
            <AnomalyCharts />
            <div>Overdue Anomalies</div>
            <AnomaliesTable showOnlyOverDue={true} />
          </Grid>
        </Grid> */
}
