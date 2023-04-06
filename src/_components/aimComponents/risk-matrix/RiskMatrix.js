import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { hseMatrix } from "../../../utility/riskAnalysisUtility";
import "./RiskMatrix.css";

export function SmlRiskMatrix({ lof, cof }) {
  return (
    <div className="matrixContainer smlMatrix">
      <table className="matrixTable">
        <tbody className="matrix">
          <tr>
            <td className="bT" rowSpan={5}>
              LF
            </td>
            <td>5</td>
            {hseMatrix[hseMatrix.length - 1].map((score, i) => (
              <td className={"data " + score}>
                {lof === 5 && cof === i + 1 ? score : ""}
              </td>
            ))}
          </tr>
          <tr>
            <td>4</td>
            {hseMatrix[hseMatrix.length - 2].map((score, i) => (
              <td className={"data " + score}>
                {lof === 4 && cof === i + 1 ? score : ""}
              </td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {hseMatrix[hseMatrix.length - 3].map((score, i) => (
              <td className={"data " + score}>
                {lof === 3 && cof === i + 1 ? score : ""}
              </td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {hseMatrix[hseMatrix.length - 4].map((score, i) => (
              <td className={"data " + score}>
                {lof === 2 && cof === i + 1 ? score : ""}
              </td>
            ))}
          </tr>
          <tr>
            <td>1</td>
            {hseMatrix[hseMatrix.length - 5].map((score, i) => (
              <td className={"data " + score}>
                {lof === 1 && cof === i + 1 ? score : ""}
              </td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={2}>Consequence of Failure from RBI</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function RiskMatrix(props) {
  const [anomalies, setAnomalies] = useState(
    () => props.newAnomalies || props.anomalies
  );

  useEffect(() => {
    setAnomalies(props.newAnomalies || props.anomalies)
  }, [props]);
  console.log("riskAnom", anomalies)
  const getScorePopulation = (lof, cof) => {
    return anomalies.filter(
      (anom) => anom.coF === cof && anom.loF === lof
    ).length;
  };
  return (
    <div className="matrixContainer">
      <h4 className="matrixHeader">Risk Matrix</h4>
      <table className="matrixTable">
        <thead className="matrixHead">
          <tr>
            <th colSpan={8}>Matrix Distribution</th>
          </tr>
        </thead>
        <tbody className="matrix">
          <tr>
            <td className="bT" rowSpan={5}>
              Likelihood Score
            </td>
            <td>5</td>
            <td>Very High</td>
            {hseMatrix[hseMatrix.length - 1].map((score, i) => (
              <td className={"data " + score}>
                {getScorePopulation(5, i + 1)}
              </td>
            ))}
          </tr>
          <tr>
            <td>4</td>
            <td>High</td>
            {hseMatrix[hseMatrix.length - 2].map((score, i) => (
              <td className={"data " + score}>
                {getScorePopulation(4, i + 1)}
              </td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            <td>Medium</td>
            {hseMatrix[hseMatrix.length - 3].map((score, i) => (
              <td className={"data " + score}>
                {getScorePopulation(3, i + 1)}
              </td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            <td>Low</td>
            {hseMatrix[hseMatrix.length - 4].map((score, i) => (
              <td className={"data " + score}>
                {getScorePopulation(2, i + 1)}
              </td>
            ))}
          </tr>
          <tr>
            <td>1</td>
            <td>Negligible</td>
            {hseMatrix[hseMatrix.length - 5].map((score, i) => (
              <td className={"data " + score}>
                {getScorePopulation(1, i + 1)}
              </td>
            ))}
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Negligible</td>
            <td>Low</td>
            <td>Medium</td>
            <td>High</td>
            <td>Extensive</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={5}>Consequence of Failure from RBI</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    anomalies: state.anomalies,
  };
};
export default connect(mapStateToProps)(RiskMatrix);
