(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(17);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1037);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1036);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(1476);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(1479);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(1477);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(1478);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/countries-List/dist/index.es5.min.js
var index_es5_min = __webpack_require__(1070);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1475);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(297);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/common/customButton.js
var customButton = __webpack_require__(1073);

// EXTERNAL MODULE: ./src/_services/index.js + 25 modules
var _services = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(1078);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(233);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(606);

// EXTERNAL MODULE: ./src/_utilities/CommonStyles.js
var CommonStyles = __webpack_require__(53);

// EXTERNAL MODULE: ./src/utility/filesUtility.js
var filesUtility = __webpack_require__(1069);

// CONCATENATED MODULE: ./src/_components/aimComponents/NewAnomaliesTable.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


























var StyledTableCell = Object(withStyles["a" /* default */])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      whiteSpace: 'nowrap'
    },
    body: {
      fontSize: 14
    }
  };
})(TableCell["a" /* default */]);
function preventDefault(event) {
  event.preventDefault();
}
var NewAnomaliesTable_NewAnomaliesTable = function NewAnomaliesTable(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
  var currentUser = _services["a" /* authenticationService */].currentUserValue;
  var _React$useState3 = react_default.a.useState(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    })),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rowData = _React$useState4[0],
    setRowData = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(rowData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredRowData = _React$useState6[0],
    setFilteredRowData = _React$useState6[1];
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var value = event.target.value;
    setSearchString(value);
    if (value != null && value != '') {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };
  var downloadExcelFile = function downloadExcelFile() {
    Object(filesUtility["a" /* downloadFile */])('/api/anomalies/download/all_anomalies', 'Anomalies.xlsx', 'Excel');
  };
  Object(react["useEffect"])(function () {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }));
    setFilteredRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }));
    setSearchString('');
    //console.warn();
  }, [props.anomalies, props.loFs, props.anomalyClasses, props.coFs, props.priorities, props.actions]);
  function clearSearch() {
    setSearchString('');
    setFilteredRowData(rowData);
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, react_default.a.createElement("div", {
    className: classes.search,
    style: {
      width: '100%',
      maxWidth: '100%'
    }
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchString,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  }), react_default.a.createElement("button", {
    style: {
      visibility: searchString == null || searchString == '' ? 'hidden' : "visible",
      border: 'solid 1px #999999',
      borderRadius: 4,
      margin: 10,
      position: 'absolute',
      right: 0,
      top: 10,
      padding: 5
    },
    className: "search",
    onClick: clearSearch
  }, "Clear"))), react_default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(customButton["a" /* SheetDownloadButton */], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return downloadExcelFile();
    },
    variant: "contained"
  }, react_default.a.createElement(ArrowDownward_default.a, {
    fontSize: "inherit"
  }), "Download Spreadsheet")))), react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: '#FFFFFF',
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "S/N"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Code"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Facility"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Equipment/Tag No."), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Component"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Class"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "CoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "LoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Priority"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Action"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Date Raised"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Stage"))), react_default.a.createElement(TableBody["a" /* default */], null, filteredRowData && filteredRowData.map(function (row, i) {
    var _props$platforms$find, _props$anomalyClasses, _props$coFs$find, _props$loFs$find, _props$priorities$fin, _props$actions$find;
    return react_default.a.createElement(TableRow["a" /* default */], {
      key: row.id
    }, react_default.a.createElement(StyledTableCell, null, i + 1), react_default.a.createElement(StyledTableCell, {
      align: "center",
      style: {
        color: "#FF2200"
      }
    }, row.analysedBy == currentUser.id && react_default.a.createElement(Button["a" /* default */], {
      component: react_router_dom["b" /* Link */],
      to: "/anomalies/analyse_anomaly/" + row.id + "",
      size: "small",
      variant: "outlined"
    }, "Analyse")), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: 'nowrap'
      }
    }, row.code), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == row.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.equipmentTagNo), react_default.a.createElement(StyledTableCell, null, row.component), react_default.a.createElement(StyledTableCell, null, react_default.a.createElement("div", {
      style: {
        display: 'inline-block',
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 4,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FF9900"
      }
    }, ((_props$anomalyClasses = props.anomalyClasses.find(function (p) {
      return p.id == row.anomalyClass;
    })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--")), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, ((_props$coFs$find = props.coFs.find(function (p) {
      return p.id == row.coF;
    })) === null || _props$coFs$find === void 0 ? void 0 : _props$coFs$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, ((_props$loFs$find = props.loFs.find(function (p) {
      return p.id == row.loF;
    })) === null || _props$loFs$find === void 0 ? void 0 : _props$loFs$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$priorities$fin = props.priorities.find(function (p) {
      return p.id == row.priority;
    })) === null || _props$priorities$fin === void 0 ? void 0 : _props$priorities$fin.name) || "--"), react_default.a.createElement(StyledTableCell, null, ((_props$actions$find = props.actions.find(function (p) {
      return p.id == row.action;
    })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: 'nowrap'
      }
    }, react_default.a.createElement(dist_default.a, {
      format: "LL",
      date: row.dateRaised
    })), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, "Pending Analysis"));
  }), filteredRowData && filteredRowData.length == 0 && react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      minHeight: 50
    }
  }, react_default.a.createElement(TableCell["a" /* default */], {
    style: {
      color: "#999999",
      padding: 50,
      fontSize: 30,
      fontWeight: 'normal'
    },
    align: "center",
    colSpan: 12
  }, "No Record"))))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
// export default TodoList;
/* harmony default export */ var aimComponents_NewAnomaliesTable = (Object(es["b" /* connect */])(mapStateToProps)(NewAnomaliesTable_NewAnomaliesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1053);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/notistack/build/index.js
var build = __webpack_require__(76);

// CONCATENATED MODULE: ./src/_views/_aimViews/NewAnomaliesView.js









//import Deposits from './Deposits';




var NewAnomaliesView_NewAnomaliesView = function NewAnomaliesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "New Anomalies (" + props.anomalies.filter(function (i) {
    return i.isAnalysed == false;
  }).length + ")"), react_default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react_default.a.createElement(Container["a" /* default */], {
    maxWidth: "lg",
    className: classes.container
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(aimComponents_NewAnomaliesTable, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var NewAnomaliesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_NewAnomaliesView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(NewAnomaliesView_mapStateToProps)(NewAnomaliesView_NewAnomaliesView));

/***/ }),

/***/ 1204:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM/SURBVHgB7ZrLaxNBHMd/k0cTE5M+bGxrUltpi+JNqzbnGv8BUY/qSbAWamkSfCCKiGgTxZTaKgVPCiKIonhqemkPFaQHBaVVIS1tehI8SZ7N+Buxx272kUyH7Hwum8Ms2c93f7/J7GQBJBKJRCIxLQQM0nl/IVj89fs1ftwD4pGnlJ5Mx0982GqABQzQ+eBj0N7mnQVB5UuUnFKSZ9hAJ13xhV6LzzNrcdbZQTwKhFhOr8f635cbqCuArsRCr7XRO0+ElYczq6P979QM1hxA56PPfZYm9xxx2EWU3yAUzq7GQm/VnqApgB6UJ80oXyemPE7p51D+pZaTVAdwYOpLb8npEleewvm1WOgFaETVr0DXBMrvcM0LWvYUKL24Fg89Bx2UrYCeZ1/7LA7nHNhtQspTQgbSsdAU6ESxArqnvgWJwPI42w+mR48/AQMoVoC13v0GD2XlsfcMryi3i3JzQCvUOIaWwrWADABMjgwATI4MAEyO6QPQvSOkD0r84ZlxXMIOAA/wi5zdbfDzwsEtV6ocK4CSQDg5xlPegfLWBrfiMG4VEIjM3MOrGgQe4P12qpBncKmA9nDyLh6iwAMN8oyqV4A/On2HUrgKPGA9v68F5XeqPqWqAfijydu4SXkdeMB6nsnv8mg6rWotEAjP3ET5G8CD//I2jfKMqgTQHk2OAKG3gAfY844Ony55RsUD8Eemh7Hn48ADlK/r2A02Xz3opaJzQCCSHMLDQ+ADdez1ESPyjIoGgHuDCTwkgBP7X61QMIh8GAKTIwMAkyMDAJMjAwCTY4YAFBdLhleCpWyeLYHTsA2vyv359EN5AD4l2lrrnyoNMRQAk88uMncB3xNk8m1Nk8vDhxT3IHW3QClXhNz3NNBCEYQDnxLtLY1j5eQZuiqglC9CdmkNaE5U+Yax1MjhITXDNQdA84V/ZU9zBRAOLHt7s/dxauSIKnmGpgAo3vmMyPI+z0QqclTT1rvqOYAWNyCzJK68rcmdSEWOXQKNqKoAWmDy2PM46wsHYS9zuSaWrwQvgw7KBkCLbMLDO58RVL7BM7lyrU/znd9EsQVY2WcX16EkojxentXrGkd5Pv81SiQSiURSe/wFv3rqw425nDoAAAAASUVORK5CYII="

/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(302);
            var content = __webpack_require__(1206);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(303);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".anomalyPage {\r\n  border: 4px solid #ee9a2d;\r\n}\r\n.filterBoxes{\r\n  width: 100%;\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.pdfContainer {\r\n  width: 97%;\r\n}\r\n.centerContent {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.grid-container > .grid-item {\r\n  border: 1px solid #08153269;\r\n  font-size: 12px;\r\n}\r\n.grid-container > .grid-item:nth-child(2n + 6) {\r\n  background-color: #c7c7c7;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 40px 20px auto 20px auto 20px auto 20px auto 20px auto 20px auto 20px auto 20px auto;\r\n  grid-column-gap: -5px;\r\n  grid-row-gap: -5px;\r\n}\r\n.reporthead {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n.reporthead span {\r\n  justify-self: center;\r\n  font-weight: 700;\r\n  align-self: center;\r\n}\r\n.reporthead img {\r\n  height: 30px;\r\n  align-self: center;\r\n}\r\n.smallHeads {\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n.MuiTableCell-root.MuiTableCell-root {\r\n  padding: 16px 11px;\r\n}\r\n.reportCont {\r\n  display: grid;\r\n  grid-template-columns: 4fr 2fr 2fr;\r\n  grid-template-rows: 1fr;\r\n  margin: 10px 5px;\r\n  margin-bottom: 0;\r\n}\r\n.bigVal {\r\n  grid-template-columns: 2fr 1fr 5fr;\r\n}\r\n.grid-item.reportAttached{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding: 10px 0;\r\n}\r\n.grid-item.reportAttached img{ \r\n  min-height: 173px;\r\n  max-height: 250px;\r\n  max-width: 100%;\r\n  margin-right: 10px;\r\n}\r\n.grid-container > .grid-item:nth-child(1) {\r\n  grid-column: 1/7;\r\n  grid-row: 2/1;\r\n  font-size: 16px;\r\n}\r\n\r\n.grid-container > .grid-item:nth-child(2) {\r\n  grid-column: 1/4;\r\n  grid-row: 2/3;\r\n  background-color: #c7c7c7;\r\n}\r\n\r\n.grid-container > .grid-item:nth-child(3) {\r\n  grid-column: 4/7;\r\n  grid-row: 2/3;\r\n  background-color: #c7c7c7;\r\n}\r\n\r\n.grid-container > .grid-item:nth-child(4) {\r\n  grid-column: 1/4;\r\n  grid-row: 3/3;\r\n}\r\n\r\n.grid-container > .grid-item:nth-child(5) {\r\n  grid-column: 4/7;\r\n  grid-row: 3/6;\r\n}\r\n.grid-container > .grid-item:nth-child(6) {\r\n  grid-column: 1/4;\r\n  grid-row: 4/4;\r\n}\r\n.grid-container > .grid-item:nth-child(7) {\r\n  grid-column: 1/4;\r\n  grid-row: 5/6;\r\n}\r\n.grid-container > .grid-item:nth-child(8) {\r\n  grid-column: 1/7;\r\n  grid-row: 6/6;\r\n}\r\n.grid-container > .grid-item:nth-child(9) {\r\n  grid-column: 1/7;\r\n  grid-row: 7/7;\r\n}\r\n.grid-container > .grid-item:nth-child(10) {\r\n  grid-column: 1/7;\r\n  grid-row: 8/8;\r\n}\r\n.grid-container > .grid-item:nth-child(11) {\r\n  grid-column: 1/7;\r\n  grid-row: 9/9;\r\n}\r\n.grid-container > .grid-item:nth-child(12) {\r\n  grid-column: 1/7;\r\n  grid-row: 10/10;\r\n}\r\n.grid-container > .grid-item:nth-child(13) {\r\n  grid-column: 1/7;\r\n  grid-row: 11/11;\r\n}\r\n.grid-container > .grid-item:nth-child(14) {\r\n  grid-column: 1/7;\r\n  grid-row: 12/12;\r\n}\r\n.grid-container > .grid-item:nth-child(15) {\r\n  grid-column: 1/6;\r\n  grid-row: 13/13;\r\n}\r\n.grid-container > .grid-item:nth-child(16) {\r\n  grid-column: 1/6;\r\n  grid-row: 14/14;\r\n}\r\n.grid-container > .grid-item:nth-child(17) {\r\n  grid-column: 1/6;\r\n  grid-row: 15/15;\r\n}\r\n.grid-container > .grid-item:nth-child(18) {\r\n  grid-column: 1/6;\r\n  grid-row: 16/16;\r\n}\r\n.grid-container > .grid-item:nth-child(19) {\r\n  grid-column: 1/6;\r\n  grid-row: 17/17;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/_views/_aimViews/NewAnomalyView.js + 3 modules
var NewAnomalyView = __webpack_require__(1132);

// EXTERNAL MODULE: ./src/_views/_aimViews/NewAnomaliesView.js + 1 modules
var NewAnomaliesView = __webpack_require__(1133);

// EXTERNAL MODULE: ./src/_views/_aimViews/AnomaliesView.js + 1 modules
var AnomaliesView = __webpack_require__(1134);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(17);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1037);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1036);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(1476);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(1479);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(1477);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(1478);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/countries-List/dist/index.es5.min.js
var index_es5_min = __webpack_require__(1070);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1475);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(297);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/common/customButton.js
var customButton = __webpack_require__(1073);

// EXTERNAL MODULE: ./src/_services/index.js + 25 modules
var _services = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AttachFileOutlined.js
var AttachFileOutlined = __webpack_require__(1079);
var AttachFileOutlined_default = /*#__PURE__*/__webpack_require__.n(AttachFileOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(1078);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(233);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(606);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(88);
var DeleteOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/EditOutlined.js
var EditOutlined = __webpack_require__(123);
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/PostAddOutlined.js
var PostAddOutlined = __webpack_require__(1194);
var PostAddOutlined_default = /*#__PURE__*/__webpack_require__.n(PostAddOutlined);

// EXTERNAL MODULE: ./src/_utilities/CommonStyles.js
var CommonStyles = __webpack_require__(53);

// EXTERNAL MODULE: ./src/_actions/anomalyActions.js
var anomalyActions = __webpack_require__(1051);

// EXTERNAL MODULE: ./src/_components/AlertDialog.js
var AlertDialog = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(36);

// EXTERNAL MODULE: ./src/utility/filesUtility.js
var filesUtility = __webpack_require__(1069);

// EXTERNAL MODULE: ./src/_components/aimComponents/DialogPrompt.js
var DialogPrompt = __webpack_require__(1097);

// EXTERNAL MODULE: ./src/_components/aimComponents/AnomalyRecordView.js
var AnomalyRecordView = __webpack_require__(1098);

// CONCATENATED MODULE: ./src/_components/aimComponents/UserAnomaliesTable.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





































var StyledTableCell = Object(withStyles["a" /* default */])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      whiteSpace: "nowrap"
    },
    body: {
      fontSize: 14
    }
  };
})(TableCell["a" /* default */]);
function preventDefault(event) {
  event.preventDefault();
}

/*const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));*/

var UserAnomaliesTable_UserAnomaliesTable = function UserAnomaliesTable(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
  var currentUser = _services["a" /* authenticationService */].currentUserValue;
  var _React$useState3 = react_default.a.useState(props.anomalies.filter(function (i) {
      return i.user == currentUser.id;
    })),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rowData = _React$useState4[0],
    setRowData = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(rowData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredRowData = _React$useState6[0],
    setFilteredRowData = _React$useState6[1];
  var _React$useState7 = react_default.a.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    openAlert = _React$useState8[0],
    setOpenAlert = _React$useState8[1];
  var _React$useState9 = react_default.a.useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    dialogProps = _React$useState10[0],
    setDialogProps = _React$useState10[1];
  var _React$useState11 = react_default.a.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    openRecordView = _React$useState12[0],
    setOpenRecordView = _React$useState12[1];
  var _React$useState13 = react_default.a.useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    anomalyDialogProps = _React$useState14[0],
    setAnomalyDialogProps = _React$useState14[1];
  var _React$useState15 = react_default.a.useState({}),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    selectedAnomaly = _React$useState16[0],
    setSelectedAnomaly = _React$useState16[1];
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var value = event.target.value;
    setSearchString(value);
    if (value != null && value != "") {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };
  var deleteAnomaly = function deleteAnomaly(anomaly) {
    if (anomaly) {
      setOpenAlert(true);
      setDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete Anomaly",
        dialogMessage: "Delete Anomaly: " + anomaly.code,
        okAction: function okAction() {
          props.deleteAnomaly(anomaly);
          setOpenAlert(false);
        }
      }));
    }
  };
  var downloadExcelFile = function downloadExcelFile() {
    Object(filesUtility["a" /* downloadFile */])("/api/anomalies/download/anomalies_by_user", "Anomalies.xlsx", "Excel");
  };
  Object(react["useEffect"])(function () {
    setFilteredRowData(props.anomalies.filter(function (i) {
      return i.user == currentUser.id;
    }));
    setRowData(props.anomalies.filter(function (i) {
      return i.user == currentUser.id;
    }));
  }, [props.anomalies]);
  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }
  function showAnomalyRecordDialog(id) {
    setOpenRecordView(true);
    var selAnomaly = props.anomalies.find(function (a) {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly(_objectSpread({}, selAnomaly));
      setAnomalyDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selAnomaly.code + ""
      }));
    }
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(AlertDialog["a" /* default */], _extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement(DialogPrompt["a" /* default */], _extends({
    open: openRecordView
  }, anomalyDialogProps, {
    okAction: null,
    cancelAction: function cancelAction() {
      return setOpenRecordView(false);
    }
  }), react_default.a.createElement(AnomalyRecordView["a" /* default */], {
    anomalyId: selectedAnomaly.id
  })), react_default.a.createElement("div", {
    className: classes.search,
    style: {
      width: "100%",
      maxWidth: "100%"
    }
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchString,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "Search"
    }
  }), react_default.a.createElement("button", {
    style: {
      visibility: searchString == null || searchString == "" ? "hidden" : "visible",
      border: "solid 1px #999999",
      borderRadius: 4,
      margin: 10,
      position: "absolute",
      right: 0,
      top: 10,
      padding: 5
    },
    className: "search",
    onClick: clearSearch
  }, "Clear")), react_default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(customButton["a" /* SheetDownloadButton */], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return downloadExcelFile();
    },
    variant: "contained"
  }, react_default.a.createElement(ArrowDownward_default.a, {
    fontSize: "inherit"
  }), "Download Spreadsheet")))), react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "S/N"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Code"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Platform"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Equipment/Tag No."), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Component"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Class"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "SoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "CoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "LoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Priority"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Action"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Date Raised"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Stage"))), react_default.a.createElement(TableBody["a" /* default */], null, filteredRowData && filteredRowData.map(function (row, i) {
    var _props$platforms$find, _props$anomalyClasses, _props$actions$find;
    return react_default.a.createElement(TableRow["a" /* default */], {
      key: row.id
    }, react_default.a.createElement(StyledTableCell, null, react_default.a.createElement("span", {
      style: {
        padding: "2px 10px",
        fontSize: 12,
        color: "#FFFFFF",
        borderRadius: 10,
        backgroundColor: "#444444"
      }
    }, i + 1)), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      component: react_router_dom["b" /* Link */],
      to: "/anomalies/edit/" + row.id + "/",
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      toolTip: "Copy",
      size: "small",
      component: react_router_dom["b" /* Link */],
      to: "/anomalies/copy/" + row.id + "/",
      color: "primary"
    }, react_default.a.createElement(PostAddOutlined_default.a, {
      className: classes.iconButton2
    }))), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteAnomaly(row);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))), react_default.a.createElement(StyledTableCell, {
      align: "center",
      style: {
        color: "#555555",
        whiteSpace: "nowrap",
        fontSize: 11
      }
    }, row.attachedFiles.length > 0 ? react_default.a.createElement("div", null, react_default.a.createElement(AttachFileOutlined_default.a, null), react_default.a.createElement("div", null, row.attachedFiles.length, " Attachment(s)")) : "No attachment"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#0099FF",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement("div", {
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return showAnomalyRecordDialog(row.id);
      }
    }, row.code)), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == row.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, row.equipmentTagNo), react_default.a.createElement(StyledTableCell, null, row.component), react_default.a.createElement(StyledTableCell, null, react_default.a.createElement("div", {
      style: {
        display: "inline-block",
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 4,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FF9900"
      }
    }, ((_props$anomalyClasses = props.anomalyClasses.find(function (p) {
      return p.id == row.anomalyClass;
    })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--")), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.soF), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.coF), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.loF), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, row.priority), react_default.a.createElement(StyledTableCell, null, ((_props$actions$find = props.actions.find(function (p) {
      return p.id == row.action;
    })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement(dist_default.a, {
      format: "LL",
      date: row.dateRaised
    })), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, !row.isAnalysed ? "Pending Analysis" : row.isApproved ? "Approved" : "Pending Approval"));
  }), filteredRowData && filteredRowData.length == 0 && react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      minHeight: 50
    }
  }, react_default.a.createElement(TableCell["a" /* default */], {
    style: {
      color: "#999999",
      padding: 50,
      fontSize: 30,
      fontWeight: "normal"
    },
    align: "center",
    colSpan: 12
  }, "No Record"))))));
};
var UserAnomaliesTable_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAnomaly: function deleteAnomaly(data) {
      dispatch(Object(anomalyActions["h" /* deleteAnomaly */])(data));
    }
  };
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
/* harmony default export */ var aimComponents_UserAnomaliesTable = (Object(es["b" /* connect */])(mapStateToProps, UserAnomaliesTable_mapDispatchToProps)(UserAnomaliesTable_UserAnomaliesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1053);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(180);

// CONCATENATED MODULE: ./src/_views/_aimViews/UserAnomaliesView.js














var UserAnomaliesView_UserAnomaliesView = function UserAnomaliesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  var currentUser = _services["a" /* authenticationService */].currentUserValue;
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Anomalies Raised by Me (" + props.anomalies.filter(function (a) {
    return a.user == currentUser.id;
  }).length + ")"), react_default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react_default.a.createElement(Container["a" /* default */], {
    maxWidth: "lg",
    className: classes.container
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(aimComponents_UserAnomaliesTable, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var UserAnomaliesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_UserAnomaliesView = (Object(es["b" /* connect */])(UserAnomaliesView_mapStateToProps)(UserAnomaliesView_UserAnomaliesView));
// EXTERNAL MODULE: ./src/_views/_aimViews/AnomalyStatisticsView.js + 1 modules
var AnomalyStatisticsView = __webpack_require__(1135);

// EXTERNAL MODULE: ./src/_views/_aimViews/AnalysedAnomaliesView.js
var AnalysedAnomaliesView = __webpack_require__(1109);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(357);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js + 1 modules
var RadioGroup = __webpack_require__(1486);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(1038);

// CONCATENATED MODULE: ./src/_components/aimComponents/ApprovedAnomaliesTable.js
function ApprovedAnomaliesTable_typeof(obj) { "@babel/helpers - typeof"; return ApprovedAnomaliesTable_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ApprovedAnomaliesTable_typeof(obj); }
function ApprovedAnomaliesTable_extends() { ApprovedAnomaliesTable_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ApprovedAnomaliesTable_extends.apply(this, arguments); }
function ApprovedAnomaliesTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ApprovedAnomaliesTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ApprovedAnomaliesTable_ownKeys(Object(source), !0).forEach(function (key) { ApprovedAnomaliesTable_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ApprovedAnomaliesTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ApprovedAnomaliesTable_defineProperty(obj, key, value) { key = ApprovedAnomaliesTable_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ApprovedAnomaliesTable_toPropertyKey(arg) { var key = ApprovedAnomaliesTable_toPrimitive(arg, "string"); return ApprovedAnomaliesTable_typeof(key) === "symbol" ? key : String(key); }
function ApprovedAnomaliesTable_toPrimitive(input, hint) { if (ApprovedAnomaliesTable_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ApprovedAnomaliesTable_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ApprovedAnomaliesTable_slicedToArray(arr, i) { return ApprovedAnomaliesTable_arrayWithHoles(arr) || ApprovedAnomaliesTable_iterableToArrayLimit(arr, i) || ApprovedAnomaliesTable_unsupportedIterableToArray(arr, i) || ApprovedAnomaliesTable_nonIterableRest(); }
function ApprovedAnomaliesTable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ApprovedAnomaliesTable_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ApprovedAnomaliesTable_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ApprovedAnomaliesTable_arrayLikeToArray(o, minLen); }
function ApprovedAnomaliesTable_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ApprovedAnomaliesTable_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ApprovedAnomaliesTable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
































var ApprovedAnomaliesTable_StyledTableCell = Object(withStyles["a" /* default */])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      whiteSpace: "nowrap"
    },
    body: {
      fontSize: 14
    }
  };
})(TableCell["a" /* default */]);
function ApprovedAnomaliesTable_preventDefault(event) {
  event.preventDefault();
}
var ApprovedAnomaliesTable_ApprovedAnomaliesTable = function ApprovedAnomaliesTable(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var emptyAnomalyReview = {
    reviewAction: "APPROVE",
    reviewComment: ""
  };
  var _React$useState = react_default.a.useState(ApprovedAnomaliesTable_objectSpread({}, emptyAnomalyReview)),
    _React$useState2 = ApprovedAnomaliesTable_slicedToArray(_React$useState, 2),
    newAnomalyReview = _React$useState2[0],
    setNewAnomalyReview = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = ApprovedAnomaliesTable_slicedToArray(_React$useState3, 2),
    searchString = _React$useState4[0],
    setSearchString = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(props.anomalies.filter(function (i) {
      return i.isReviewed && i.isApproved;
    })),
    _React$useState6 = ApprovedAnomaliesTable_slicedToArray(_React$useState5, 2),
    rowData = _React$useState6[0],
    setRowData = _React$useState6[1];
  var _React$useState7 = react_default.a.useState(rowData),
    _React$useState8 = ApprovedAnomaliesTable_slicedToArray(_React$useState7, 2),
    filteredRowData = _React$useState8[0],
    setFilteredRowData = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = ApprovedAnomaliesTable_slicedToArray(_React$useState9, 2),
    openAlert = _React$useState10[0],
    setOpenAlert = _React$useState10[1];
  var _React$useState11 = react_default.a.useState(false),
    _React$useState12 = ApprovedAnomaliesTable_slicedToArray(_React$useState11, 2),
    openRecordView = _React$useState12[0],
    setOpenRecordView = _React$useState12[1];
  var _React$useState13 = react_default.a.useState({}),
    _React$useState14 = ApprovedAnomaliesTable_slicedToArray(_React$useState13, 2),
    dialogProps = _React$useState14[0],
    setDialogProps = _React$useState14[1];
  var _React$useState15 = react_default.a.useState("OPEN"),
    _React$useState16 = ApprovedAnomaliesTable_slicedToArray(_React$useState15, 2),
    newAnomalyStatus = _React$useState16[0],
    setNewAnomalyStatus = _React$useState16[1];
  var _React$useState17 = react_default.a.useState({}),
    _React$useState18 = ApprovedAnomaliesTable_slicedToArray(_React$useState17, 2),
    selectedAnomaly = _React$useState18[0],
    setSelectedAnomaly = _React$useState18[1];
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var value = event.target.value;
    setSearchString(value);
    if (value != null && value != "") {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };
  var downloadExcelFile = function downloadExcelFile() {
    Object(filesUtility["a" /* downloadFile */])("api/anomalies/download/approved_anomalies", "Approved Anomalies.xlsx", "Excel");
  };
  Object(react["useEffect"])(function () {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(function (i) {
      return i.isReviewed && i.isApproved;
    }));
    setFilteredRowData(props.anomalies.filter(function (i) {
      return i.isReviewed && i.isApproved;
    }));

    //console.warn();

    if (openAlert) {
      setNewAnomalyStatus(selectedAnomaly.status);
      setDialogProps(ApprovedAnomaliesTable_objectSpread(ApprovedAnomaliesTable_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Anomaly Status",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + ""
      }));
    } else if (openRecordView) {
      setDialogProps(ApprovedAnomaliesTable_objectSpread(ApprovedAnomaliesTable_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + ""
      }));
    } else {
      setSearchString("");
    }
  }, [props.anomalies, openAlert, setOpenRecordView]);
  var getAnomalyReviewStatus = function getAnomalyReviewStatus(anomaly) {
    if (anomaly.status == "LIVE") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#FFFFFF",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#218e06"
        }
      }, "Live");
    } else if (anomaly.status == "CLOSED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Closed");
    } else if (anomaly.status == "CANCELED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Canceled");
    } else if (anomaly.status == "CANCELED_SUPERSEDED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Canceled & Superseded");
    } else {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#FFFFFF",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ff1100"
        }
      }, "Open");
    }
  };
  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }
  function showApprovalDialog(id) {
    setOpenAlert(true);
    var selAnomaly = props.anomalies.find(function (a) {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly(ApprovedAnomaliesTable_objectSpread({}, selAnomaly));
    }
  }
  function showAnomalyRecordDialog(id) {
    setOpenRecordView(true);
    var selAnomaly = props.anomalies.find(function (a) {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly(ApprovedAnomaliesTable_objectSpread({}, selAnomaly));
    }
  }
  var handleAnomalyStatusChange = function handleAnomalyStatusChange(event) {
    event.persist();
    // handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.log({ name, value })
    setNewAnomalyStatus(value);
    //console.log(newAnomaly)
  };

  var applyStatus = function applyStatus() {
    /*if(newAnomalyReview.reviewAction == 'APPROVE')
      {
          selectedAnomaly.isApproved = true;
      }
        else if(newAnomalyReview.reviewAction == 'REJECT')
      {
          selectedAnomaly.isApproved = false;
      }
        else if(newAnomalyReview.reviewAction == 'REVERT')
      {
          selectedAnomaly.isReverted = true;
      }*/

    // selectedAnomaly.isReviewed = true;
    selectedAnomaly.status = newAnomalyStatus;
    props.saveAnomalyStatus(selectedAnomaly);
    setNewAnomalyStatus("OPEN");
    setOpenAlert(false);
  };

  /*const handleReviewChange = event => {
    event.persist();
   // handleChange(event);
    const { name, value } = event.target  
    //console.log({ name, value })                        
    setNewAnomalyReview({ ...newAnomalyReview, [name]: value })
    //console.log(newAnomaly)
  };*/

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, react_default.a.createElement(DialogPrompt["a" /* default */], ApprovedAnomaliesTable_extends({
    open: openRecordView
  }, dialogProps, {
    okAction: null,
    cancelAction: function cancelAction() {
      return setOpenRecordView(false);
    }
  }), react_default.a.createElement(AnomalyRecordView["a" /* default */], {
    anomalyId: selectedAnomaly.id
  })), react_default.a.createElement(DialogPrompt["a" /* default */], ApprovedAnomaliesTable_extends({
    open: openAlert
  }, dialogProps, {
    okAction: function okAction() {
      return applyStatus();
    },
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }), react_default.a.createElement(RadioGroup["a" /* default */], {
    "aria-label": "anomalyStatus",
    value: newAnomalyStatus,
    onChange: handleAnomalyStatusChange,
    row: true,
    name: "anomalyStatus"
  }, " ", react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: "OPEN",
    control: react_default.a.createElement(Radio["a" /* default */], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Open"
  }), react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: "LIVE",
    control: react_default.a.createElement(Radio["a" /* default */], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Live"
  }), react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: "CLOSED",
    control: react_default.a.createElement(Radio["a" /* default */], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Closed"
  }), react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: "CANCELED_SUPERSEDED",
    control: react_default.a.createElement(Radio["a" /* default */], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Canceled & Superseded"
  }))), react_default.a.createElement("div", {
    className: classes.search,
    style: {
      width: "100%",
      maxWidth: "100%"
    }
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchString,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "Search"
    }
  }), react_default.a.createElement("button", {
    style: {
      visibility: searchString == null || searchString == "" ? "hidden" : "visible",
      border: "solid 1px #999999",
      borderRadius: 4,
      margin: 10,
      position: "absolute",
      right: 0,
      top: 10,
      padding: 5
    },
    className: "search",
    onClick: clearSearch
  }, "Clear"))), react_default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(customButton["a" /* SheetDownloadButton */], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return downloadExcelFile();
    },
    variant: "contained"
  }, react_default.a.createElement(ArrowDownward_default.a, {
    fontSize: "inherit"
  }), "Download Spreadsheet")))), react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "S/N"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Code"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Facility"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Equipment/Tag No."), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Component"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Class"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "SoF"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "CoF"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "LoF"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Priority"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Action"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Date Raised"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Stage"))), react_default.a.createElement(TableBody["a" /* default */], null, filteredRowData && filteredRowData.map(function (row, i) {
    var _props$platforms$find, _props$anomalyClasses, _props$actions$find;
    return react_default.a.createElement(TableRow["a" /* default */], {
      key: row.id
    }, react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, null, i + 1), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      align: "center",
      style: {
        color: "#FF2200"
      }
    }, getAnomalyReviewStatus(row)), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      align: "center",
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, (row.status != "CLOSED" || row.status != "CANCELED_SUPERSEDED" || row.status != "CANCELED") && react_default.a.createElement(Button["a" /* default */], {
      onClick: function onClick() {
        return showApprovalDialog(row.id);
      },
      size: "small",
      variant: "outlined"
    }, "Set status")), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#0022FF",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement("div", {
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return showAnomalyRecordDialog(row.id);
      }
    }, row.code)), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == row.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.equipmentTagNo), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, null, row.component), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, null, react_default.a.createElement("div", {
      style: {
        display: "inline-block",
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 4,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FF9900"
      }
    }, ((_props$anomalyClasses = props.anomalyClasses.find(function (p) {
      return p.id == row.anomalyClass;
    })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--")), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.soF), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.coF), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.loF), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, row.priority), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, null, ((_props$actions$find = props.actions.find(function (p) {
      return p.id == row.action;
    })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react_default.a.createElement(dist_default.a, {
      format: "LL",
      date: row.dateRaised
    })), react_default.a.createElement(ApprovedAnomaliesTable_StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, getAnomalyReviewStatus(row) ? getAnomalyReviewStatus(row) : "Pending Status Confirmation"));
  }), filteredRowData && filteredRowData.length == 0 && react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      minHeight: 50
    }
  }, react_default.a.createElement(TableCell["a" /* default */], {
    style: {
      color: "#999999",
      padding: 50,
      fontSize: 30,
      fontWeight: "normal"
    },
    align: "center",
    colSpan: 12
  }, "No Record"))))));
};
var ApprovedAnomaliesTable_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveAnomalyStatus: function saveAnomalyStatus(data) {
      dispatch(Object(anomalyActions["o" /* saveAnomalyStatus */])(data));
    }
  };
};
var ApprovedAnomaliesTable_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    soFs: state.soFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
// export default TodoList;
/* harmony default export */ var aimComponents_ApprovedAnomaliesTable = (Object(es["b" /* connect */])(ApprovedAnomaliesTable_mapStateToProps, ApprovedAnomaliesTable_mapDispatchToProps)(ApprovedAnomaliesTable_ApprovedAnomaliesTable));
// CONCATENATED MODULE: ./src/_views/_aimViews/ApprovedAnomaliesView.js













var ApprovedAnomaliesView_ApprovedAnomaliesView = function ApprovedAnomaliesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Approved Anomalies (" + props.anomalies.filter(function (a) {
    return a.isReviewed & a.isApproved;
  }).length + ")"), react_default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react_default.a.createElement(Container["a" /* default */], {
    maxWidth: "lg",
    className: classes.container
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(aimComponents_ApprovedAnomaliesTable, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var ApprovedAnomaliesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_ApprovedAnomaliesView = (Object(es["b" /* connect */])(ApprovedAnomaliesView_mapStateToProps)(ApprovedAnomaliesView_ApprovedAnomaliesView));
// EXTERNAL MODULE: ./src/_views/_aimViews/RiskMatrixView.js + 1 modules
var RiskMatrixView = __webpack_require__(1136);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(604);

// EXTERNAL MODULE: ./node_modules/react-spreadsheet/dist/SpreadsheetStateProvider.js + 21 modules
var SpreadsheetStateProvider = __webpack_require__(1461);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 6 modules
var Select = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(1473);

// EXTERNAL MODULE: ./node_modules/react-promise-tracker/lib/index.js
var lib = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/notistack/build/index.js
var build = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Stepper/Stepper.js + 1 modules
var Stepper = __webpack_require__(1487);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Step/Step.js
var Step = __webpack_require__(1480);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js + 3 modules
var StepLabel = __webpack_require__(1484);

// CONCATENATED MODULE: ./src/_components/aimComponents/ExcelDataImport.js
function ExcelDataImport_typeof(obj) { "@babel/helpers - typeof"; return ExcelDataImport_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ExcelDataImport_typeof(obj); }
function ExcelDataImport_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ExcelDataImport_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ExcelDataImport_ownKeys(Object(source), !0).forEach(function (key) { ExcelDataImport_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ExcelDataImport_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ExcelDataImport_defineProperty(obj, key, value) { key = ExcelDataImport_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ExcelDataImport_toPropertyKey(arg) { var key = ExcelDataImport_toPrimitive(arg, "string"); return ExcelDataImport_typeof(key) === "symbol" ? key : String(key); }
function ExcelDataImport_toPrimitive(input, hint) { if (ExcelDataImport_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ExcelDataImport_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || ExcelDataImport_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ExcelDataImport_arrayLikeToArray(arr); }
function ExcelDataImport_slicedToArray(arr, i) { return ExcelDataImport_arrayWithHoles(arr) || ExcelDataImport_iterableToArrayLimit(arr, i) || ExcelDataImport_unsupportedIterableToArray(arr, i) || ExcelDataImport_nonIterableRest(); }
function ExcelDataImport_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ExcelDataImport_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ExcelDataImport_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ExcelDataImport_arrayLikeToArray(o, minLen); }
function ExcelDataImport_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ExcelDataImport_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ExcelDataImport_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























var steps = ["Upload", "Data selection", "Preview Anomalies"];
var ExcelDataImport_ExcelDataImport = function ExcelDataImport(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _useState = Object(react["useState"])([]),
    _useState2 = ExcelDataImport_slicedToArray(_useState, 2),
    sdata = _useState2[0],
    setSData = _useState2[1];
  var _useState3 = Object(react["useState"])([]),
    _useState4 = ExcelDataImport_slicedToArray(_useState3, 2),
    spreadsheets = _useState4[0],
    setSpreadsheets = _useState4[1];
  var _useState5 = Object(react["useState"])(null),
    _useState6 = ExcelDataImport_slicedToArray(_useState5, 2),
    activeSpreadsheet = _useState6[0],
    setActiveSpreadsheet = _useState6[1];
  var _useState7 = Object(react["useState"])(null),
    _useState8 = ExcelDataImport_slicedToArray(_useState7, 2),
    activeSpreadsheetHeader = _useState8[0],
    setActiveSpreadsheetHeader = _useState8[1];
  var _useState9 = Object(react["useState"])(0),
    _useState10 = ExcelDataImport_slicedToArray(_useState9, 2),
    activeSpreadsheetHeaderIndex = _useState10[0],
    setActiveSpreadsheetHeaderIndex = _useState10[1];
  var _useState11 = Object(react["useState"])(false),
    _useState12 = ExcelDataImport_slicedToArray(_useState11, 2),
    isExcelUploaded = _useState12[0],
    setIsExcelUploaded = _useState12[1];
  var _useState13 = Object(react["useState"])([]),
    _useState14 = ExcelDataImport_slicedToArray(_useState13, 2),
    extractedAnomalies = _useState14[0],
    setExtractedAnomalies = _useState14[1];
  var _React$useState = react_default.a.useState(0),
    _React$useState2 = ExcelDataImport_slicedToArray(_React$useState, 2),
    activeStep = _React$useState2[0],
    setActiveStep = _React$useState2[1];
  var handleNext = function handleNext() {
    setActiveStep(activeStep + 1);
  };
  var handleBack = function handleBack() {
    setActiveStep(activeStep - 1);
  };
  var clearUploadData = function clearUploadData() {
    setActiveStep(0);
    setExtractedAnomalies(0);
    setIsExcelUploaded(false);
    setSpreadsheets([]);
    setActiveSpreadsheet(null);
    setActiveSpreadsheetHeader(null);
    setActiveSpreadsheetHeaderIndex(0);
  };
  var _useState15 = Object(react["useState"])([{
      fieldName: "Platform",
      name: "platform",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Code",
      name: "code",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Equipment Tag No.",
      name: "equipmentTagNo",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Description",
      name: "description",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Component",
      name: "component",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "System",
      name: "system",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Orientation",
      name: "orientation",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Anomaly Class",
      name: "anomalyClass",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }, {
      fieldName: "Analysed By",
      name: "analysedBy",
      id: Object(v4["a" /* default */])(),
      columnCaption: "",
      columnIndex: 0
    }]),
    _useState16 = ExcelDataImport_slicedToArray(_useState15, 2),
    modelMapFields = _useState16[0],
    setModelMapFields = _useState16[1];
  var handleColumnFieldMapChange = function handleColumnFieldMapChange(modelMapField, event) {
    console.log(modelMapField);
    console.log(event);
    event.persist();
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;

    //let modelMapField = modelMapFields.find(i => i.id == value.id)

    var header = activeSpreadsheetHeader[value]; //.find(i => i.id == value.id)
    console.log(value);
    console.log(header);
    if (modelMapField && header) {
      modelMapField.columnCaption = header.value;
      modelMapField.columnIndex = value;
      setModelMapFields(_toConsumableArray(modelMapFields.map(function (a, i) {
        return a.id === modelMapField.id ? modelMapField : a;
      })));
    }
    for (var i = activeSpreadsheetHeaderIndex; i < activeSpreadsheet.length - activeSpreadsheetHeaderIndex; i++) {}
    //setActiveSpreadsheetHeaderIndex(value)

    //if(value >= 0 && value <= activeSpreadsheet.length)
    //{
    //    setActiveSpreadsheetHeader(activeSpreadsheet[value]);
    //}
  };

  var handleRowNumberChange = function handleRowNumberChange(event) {
    event.persist();
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setActiveSpreadsheetHeaderIndex(value);
    if (value >= 0 && value <= activeSpreadsheet.length) {
      setActiveSpreadsheetHeader(activeSpreadsheet[value]);
    }
  };
  var importAnomalies = function importAnomalies() {
    props.addAnomalies(extractedAnomalies);
    console.warn(extractedAnomalies);
    handleNext();
  };
  var extractAnomalies = function extractAnomalies() {
    //setActiveSpreadsheetHeaderIndex(value)

    var newAnomaly = {
      code: "",
      platform: "",
      dateRaised: new Date(),
      equipmentTagNo: "",
      component: "",
      description: "",
      orientation: "",
      system: "",
      anomalyClass: "",
      analysedBy: null
    };
    var extractedAnomalies = [];
    var _loop = function _loop() {
      var anomaly = ExcelDataImport_objectSpread(ExcelDataImport_objectSpread({}, newAnomaly), {}, {
        id: Object(v4["a" /* default */])()
      });
      modelMapFields.map(function (m) {
        anomaly[m.name] = activeSpreadsheet[i][m.columnIndex].value;
      });
      extractedAnomalies.push(anomaly);
    };
    for (var i = activeSpreadsheetHeaderIndex + 1; i < activeSpreadsheet.length; i++) {
      _loop();
    }
    setExtractedAnomalies([].concat(extractedAnomalies));
    handleNext();
  };
  function _onChange(e) {
    var files = e.target.files;
    console.warn("data file", files);
    var currentUser = _services["a" /* authenticationService */].currentUserValue;
    var url = "";
    var uploadedFiles = [];
    var _loop2 = function _loop2() {
      var form = new FormData();
      var element = files[index];
      var reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = function (e) {
        // props.createFile({fileName:element.name, fileType:element.type,fileSize:element.size,id:Math.random(),folderId:currentFolderId});
      };
      var fileUploadId = Object(v4["a" /* default */])();
      uploadedFiles.push({
        fileName: element.name,
        fileType: element.type,
        fileSize: element.size,
        uploadProgress: 0,
        id: fileUploadId
      });

      //setSelectedFiles([...uploadedFiles ])

      form.append("file", element);
      config = {
        onUploadProgress: function onUploadProgress(progressEvent) {
          var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          console.log(percentCompleted);
          console.log("Total Size", progressEvent.total);
          var fileUps = uploadedFiles.find(function (f) {
            return f.id == fileUploadId;
          });
          //console.warn('selectedfileids', fileIds);
          console.error("hello", fileUploadId);
          console.warn("hello2", uploadedFiles);
          if (fileUps) {
            fileUps.uploadProgress = percentCompleted;
          }
          var updatedSelectedFiles = uploadedFiles.map(function (f, i) {
            return f.id === fileUploadId ? fileUps : f;
          });

          //setSelectedFiles([...updatedSelectedFiles ])
        },

        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer ".concat(currentUser.token)
        }
      };
      Object(lib["trackPromise"])(axios_default.a.post(" /api/anomalies/import/" + fileUploadId, form, config).then(function (result) {
        console.warn("import_result", result);
        setSData(result.data[0].data);
        setSpreadsheets(result.data);
        setIsExcelUploaded(true);
        if (result.data.length > 0) {
          var activeSheet = result.data[0];
          setActiveSpreadsheet(activeSheet.data);
          setActiveSpreadsheetHeader(activeSheet.data[0]);
        }
        /*let message = "Success!"
                if (!result.data.success) {
                    message = result.data.message;
                }
                this.setState({
                    ...state,
                    justFileServiceResponse: message
                });*/
      }).catch(function (ex) {
        console.error(ex);
      }));
    };
    for (var index = 0; index < files.length; index++) {
      var config;
      _loop2();
    }

    //console.warn("img data ", selectedFiles)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["a" /* default */], {
          container: true,
          direction: "column",
          justify: "center",
          alignItems: "center"
        }, !isExcelUploaded && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("input", {
          accept: "xls/*",
          style: {
            display: "none"
          },
          id: "contained-button-file",
          type: "file",
          onChange: function onChange(e) {
            return _onChange(e);
          }
        }), react_default.a.createElement("label", {
          htmlFor: "contained-button-file"
        }, react_default.a.createElement(Button["a" /* default */], {
          component: "span",
          className: classes.button
        }, "Upload Excel file...")))));
      case 1:
        return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["a" /* default */], {
          container: true,
          spacing: 3
        }, react_default.a.createElement(Grid["a" /* default */], {
          item: true,
          xs: 12,
          sm: 6
        }, "Header Row Number"), react_default.a.createElement(Grid["a" /* default */], {
          item: true,
          xs: 12,
          sm: 6
        }, react_default.a.createElement(Select["a" /* default */], {
          autoWidth: true,
          labelId: "activeSpreadsheetHeaderIndex",
          value: activeSpreadsheetHeaderIndex,
          label: "activeSpreadsheetHeaderIndex",
          onChange: handleRowNumberChange,
          inputProps: {
            name: "activeSpreadsheetHeaderIndex",
            id: "activeSpreadsheetHeaderIndex"
          }
        }, activeSpreadsheet && activeSpreadsheet.map(function (columnHeader, index) {
          return react_default.a.createElement(MenuItem["a" /* default */], {
            value: index
          }, index + 1);
        })))), react_default.a.createElement(Grid["a" /* default */], {
          item: true,
          xs: 12
        }, react_default.a.createElement(MapperComponent, {
          mapObjects: modelMapFields,
          columnHeaders: activeSpreadsheetHeader
        })));
      case 2:
        return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["a" /* default */], {
          container: true,
          spacing: 3
        }, react_default.a.createElement(Grid["a" /* default */], {
          item: true,
          xs: 12
        }, react_default.a.createElement(FormControlLabel["a" /* default */], {
          control: react_default.a.createElement(Checkbox["a" /* default */], {
            color: "secondary",
            name: "saveAddress",
            value: "yes"
          }),
          label: "Overwrite anomalies with same Code"
        })), react_default.a.createElement(Grid["a" /* default */], {
          item: true,
          xs: 12
        }, react_default.a.createElement(ExtractedAnomaliesPreview, null))));
      default:
        throw new Error("Unknown step");
    }
  }
  var MyComponent = function MyComponent(_ref) {
    var data = _ref.data;
    return react_default.a.createElement(SpreadsheetStateProvider["a" /* default */], {
      data: data
    });
  };
  var ExtractedAnomaliesPreview = function ExtractedAnomaliesPreview() {
    return react_default.a.createElement(TableContainer["a" /* default */], {
      component: Paper["a" /* default */]
    }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
      style: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        borderRadius: 5
      }
    }, modelMapFields.map(function (m) {
      return react_default.a.createElement(TableCell["a" /* default */], {
        style: {
          padding: 3,
          color: "#FFFFFF",
          fontWeight: "bold"
        }
      }, m.fieldName);
    }))), react_default.a.createElement(TableBody["a" /* default */], null, extractedAnomalies && extractedAnomalies.map(function (em) {
      return react_default.a.createElement(TableRow["a" /* default */], {
        style: {
          backgroundColor: "#FFFFFF",
          color: "#FFFFFF",
          borderRadius: 5
        }
      }, modelMapFields.map(function (m) {
        return em[m.name] && react_default.a.createElement(TableCell["a" /* default */], {
          style: {
            padding: 3,
            color: "#0099FF",
            fontWeight: "bold"
          }
        }, react_default.a.createElement(Typography["a" /* default */], null, em[m.name]));
      }));
    }))));
  };
  var MapperComponent = function MapperComponent(_ref2) {
    var mapObjects = _ref2.mapObjects,
      columnHeaders = _ref2.columnHeaders;
    return react_default.a.createElement(TableContainer["a" /* default */], {
      component: Paper["a" /* default */]
    }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
      style: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        borderRadius: 5
      }
    }, react_default.a.createElement(TableCell["a" /* default */], {
      style: {
        padding: 3,
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    }, "Field"), react_default.a.createElement(TableCell["a" /* default */], {
      style: {
        padding: 3,
        color: "#FFFFFF",
        fontWeight: "bold"
      }
    }, "Column"))), react_default.a.createElement(TableBody["a" /* default */], null, mapObjects && mapObjects.map(function (mapObject) {
      return react_default.a.createElement(TableRow["a" /* default */], {
        style: {
          backgroundColor: "#FFFFFF",
          color: "#FFFFFF",
          borderRadius: 5
        }
      }, react_default.a.createElement(TableCell["a" /* default */], {
        style: {
          padding: 3,
          color: "#0099FF",
          fontWeight: "bold"
        }
      }, react_default.a.createElement(Typography["a" /* default */], null, mapObject.fieldName)), react_default.a.createElement(TableCell["a" /* default */], {
        style: {
          padding: 3,
          color: "#0099FF",
          fontWeight: "bold"
        }
      }, react_default.a.createElement(Select["a" /* default */], {
        autoWidth: true,
        labelId: "platform",
        value: mapObject.columnIndex,
        label: "platform",
        onChange: function onChange(e) {
          return handleColumnFieldMapChange(mapObject, e);
        },
        inputProps: {
          name: "platform",
          id: "platform"
        }
      }, columnHeaders && columnHeaders.map(function (columnHeader, index) {
        return react_default.a.createElement(MenuItem["a" /* default */], {
          value: index
        }, columnHeader.value);
      }))));
    }))));
  };
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Stepper["a" /* default */], {
    activeStep: activeStep,
    className: classes.stepper
  }, steps.map(function (label) {
    return react_default.a.createElement(Step["a" /* default */], {
      key: label
    }, react_default.a.createElement(StepLabel["a" /* default */], null, label));
  })), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 0
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    style: {
      position: "relative",
      width: "100%"
    }
  }, isExcelUploaded && activeSpreadsheet && react_default.a.createElement("div", {
    style: {
      width: "100%",
      overflowX: "scroll"
    }
  }, react_default.a.createElement(MyComponent, {
    data: activeSpreadsheet
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, spreadsheets && spreadsheets.map(function (spreadsheet) {
    return react_default.a.createElement(Button["a" /* default */], {
      size: "small",
      variant: "outlined",
      style: {
        margin: 3,
        color: spreadsheet.data == activeSpreadsheet ? "#0099FF" : "#555555"
      },
      onClick: function onClick() {
        return setActiveSpreadsheet(spreadsheet.data);
      }
    }, spreadsheet.name);
  }))), activeStep === steps.length ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h5",
    gutterBottom: true
  }, "Anomalies Uploaded"), react_default.a.createElement(Button["a" /* default */], {
    onClick: clearUploadData,
    className: classes.button
  }, "Import again...")) : react_default.a.createElement(react_default.a.Fragment, null, getStepContent(activeStep), react_default.a.createElement("div", {
    className: classes.buttons
  }, activeStep !== 0 && react_default.a.createElement(Button["a" /* default */], {
    onClick: handleBack,
    className: classes.button,
    size: "small",
    style: {
      margin: 3
    }
  }, "Back"), activeSpreadsheet && react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    color: "primary",
    size: "small",
    style: {
      margin: 3
    },
    onClick: function onClick() {
      return activeStep > 0 ? activeStep === steps.length - 1 ? importAnomalies() : extractAnomalies() : handleNext();
    },
    className: classes.button
  }, activeStep > 0 ? activeStep === steps.length - 1 ? "Import" : "Preview" : "Next"))));
};
var ExcelDataImport_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addAnomalies: function addAnomalies(data) {
      dispatch(Object(anomalyActions["a" /* addAnomalies */])(data));
    }
  };
};
var ExcelDataImport_mapStateToProps = function mapStateToProps(state) {
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
    users: state.users,
    anomalyOptions: state.anomalyOptions,
    anomalyPermissions: state.anomalyPermissions
  };
};
/* harmony default export */ var aimComponents_ExcelDataImport = (Object(es["b" /* connect */])(ExcelDataImport_mapStateToProps, ExcelDataImport_mapDispatchToProps)(Object(build["withSnackbar"])(ExcelDataImport_ExcelDataImport)));
// CONCATENATED MODULE: ./src/_views/_aimViews/ExcelDataImportView.js













var ExcelDataImportView_ExcelDataImportView = function ExcelDataImportView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Anomaly Import"), react_default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react_default.a.createElement(Container["a" /* default */], {
    maxWidth: "lg",
    className: classes.container
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(aimComponents_ExcelDataImport, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var ExcelDataImportView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_ExcelDataImportView = (Object(es["b" /* connect */])(ExcelDataImportView_mapStateToProps)(ExcelDataImportView_ExcelDataImportView));
// EXTERNAL MODULE: ./node_modules/jspdf/dist/jspdf.es.min.js
var jspdf_es_min = __webpack_require__(1203);

// EXTERNAL MODULE: ./node_modules/html2canvas/dist/html2canvas.js
var html2canvas = __webpack_require__(1141);
var html2canvas_default = /*#__PURE__*/__webpack_require__.n(html2canvas);

// EXTERNAL MODULE: ./src/_images/grasp_logo 1.png
var grasp_logo_1 = __webpack_require__(1204);
var grasp_logo_1_default = /*#__PURE__*/__webpack_require__.n(grasp_logo_1);

// EXTERNAL MODULE: ./src/_components/aimComponents/risk-matrix/RiskMatrix.js
var RiskMatrix = __webpack_require__(576);

// EXTERNAL MODULE: ./src/_components/aimComponents/AnomalyDashboardView.js
var AnomalyDashboardView = __webpack_require__(433);

// EXTERNAL MODULE: ./src/_views/_aimViews/AnomaliesReport.css
var AnomaliesReport = __webpack_require__(1205);

// EXTERNAL MODULE: ./src/_components/aimComponents/AnalysedAnomaliesTable.js
var AnalysedAnomaliesTable = __webpack_require__(1138);

// EXTERNAL MODULE: ./src/constants/URLs/urls.js
var urls = __webpack_require__(10);

// CONCATENATED MODULE: ./src/_views/_aimViews/AnomaliesReportView.js
function AnomaliesReportView_typeof(obj) { "@babel/helpers - typeof"; return AnomaliesReportView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomaliesReportView_typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == AnomaliesReportView_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function AnomaliesReportView_slicedToArray(arr, i) { return AnomaliesReportView_arrayWithHoles(arr) || AnomaliesReportView_iterableToArrayLimit(arr, i) || AnomaliesReportView_unsupportedIterableToArray(arr, i) || AnomaliesReportView_nonIterableRest(); }
function AnomaliesReportView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomaliesReportView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomaliesReportView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomaliesReportView_arrayLikeToArray(o, minLen); }
function AnomaliesReportView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomaliesReportView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomaliesReportView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var AnomaliesReportView_AnomaliesReportView = function AnomaliesReportView(props) {
  var _useState = Object(react["useState"])(props.anomalies),
    _useState2 = AnomaliesReportView_slicedToArray(_useState, 2),
    anoms = _useState2[0],
    setAnoms = _useState2[1];
  var _useState3 = Object(react["useState"])(props.users),
    _useState4 = AnomaliesReportView_slicedToArray(_useState3, 2),
    users = _useState4[0],
    setUsers = _useState4[1];
  var _useState5 = Object(react["useState"])("open"),
    _useState6 = AnomaliesReportView_slicedToArray(_useState5, 2),
    filterConstraint = _useState6[0],
    setFilterConstraint = _useState6[1];
  var handleFieldChange2 = function handleFieldChange2(event) {
    event.persist();
    // handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      checked = _event$target.checked;
    //console.log({ name, value })
    setFilterConstraint(checked ? name : "");
    console.log(filterConstraint);
  };
  Object(react["useEffect"])(function () {
    if (props.anomalies) setAnoms(props.anomalies);
    if (props.users) setUsers(props.users);
  }, [props.anomalies, props.users]);
  Object(react["useEffect"])(function () {
    switch (filterConstraint) {
      case "open":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.status === "OPEN";
        }));
        break;
      case "live":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.status === "LIVE";
        }));
        break;
      case "closed":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.status === "CLOSED";
        }));
        break;
      case "canceled":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.status === "CANCELED_SUPERSEDED";
        }));
        break;
      case "pending":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return !anomaly.isAnalysed;
        }));
        break;
      case "analysed":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.isAnalysed;
        }));
        break;
      case "approved":
        setAnoms(props.anomalies.filter(function (anomaly) {
          return anomaly.isApproved;
        }));
        break;
      default:
        setAnoms(props.anomalies);
        break;
    }
  }, [filterConstraint]);
  var getAnomalyReviewStatus = function getAnomalyReviewStatus(anomaly) {
    if (anomaly.status == "LIVE") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#FFFFFF",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#218e06"
        }
      }, "Live");
    } else if (anomaly.status == "CLOSED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Closed");
    } else if (anomaly.status == "CANCELED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Canceled");
    } else if (anomaly.status == "CANCELED_SUPERSEDED") {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#000000",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ffc107"
        }
      }, "Canceled & Superseded");
    } else {
      return react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          color: "#FFFFFF",
          fontSize: 12,
          borderRadius: 4,
          padding: 2,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: "#ff1100"
        }
      }, "Open");
    }
  };
  var print = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var imgWidth, pageHeight, pages, pdf, promises;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              imgWidth = 210;
              pageHeight = 295;
              pages = Array.from(document.getElementsByClassName("divToPrint"));
              console.log(pages);
              pdf = new jspdf_es_min["a" /* default */]("p", "mm", "a4", true);
              promises = pages.map(function (page) {
                return html2canvas_default()(page, {
                  useCORS: true,
                  quality: 2,
                  scale: 2
                });
              });
              Promise.all(promises).then(function (canvases) {
                console.log(canvases);
                canvases.forEach(function (canvas, i) {
                  var imgHeight = canvas.height * imgWidth / canvas.width;
                  var heightLeft = imgHeight;
                  var imgData = canvas.toDataURL("image/png");
                  if (i > 0) pdf.addPage();
                  var position = 0;
                  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                  heightLeft -= pageHeight;
                  //pdf.addImage(imgData, 'JPEG', 0, 0);
                  // pdf.output('dataurlnewwindow');

                  if (i > 0) while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                  }
                });
                pdf.save("report.pdf");
              });
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function print() {
      return _ref.apply(this, arguments);
    };
  }();
  return react_default.a.createElement("main", {
    className: "reportContainer"
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Report"), react_default.a.createElement("div", {
    style: {
      padding: 5
    }
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "medium",
    color: "primary",
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return print();
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    variant: "outlined"
  }, "Print"), react_default.a.createElement("span", {
    style: {
      color: "red",
      marginLeft: "10px"
    }
  }, "Print only on desktop view")), react_default.a.createElement(ViewTitle["a" /* default */], null, "Filter"), react_default.a.createElement("div", {
    className: "filterBoxes"
  }, react_default.a.createElement("span", null, "Open", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "open",
    name: "open",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "open"
  })), react_default.a.createElement("span", null, "Live", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "live",
    name: "live",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "live"
  })), react_default.a.createElement("span", null, "Closed", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "closed",
    name: "closed",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "closed"
  })), react_default.a.createElement("span", null, "Canceled & Superseded", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "canceled",
    name: "canceled",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "canceled"
  })), react_default.a.createElement("span", null, "Pending Analysis", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "pending",
    name: "pending",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "pending"
  })), react_default.a.createElement("span", null, "Analysed", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "analysed",
    name: "analysed",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "analysed"
  })), react_default.a.createElement("span", null, "Approved", react_default.a.createElement(Checkbox["a" /* default */], {
    checked: filterConstraint === "approved",
    name: "approved",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "approved"
  }))), react_default.a.createElement("div", {
    id: "divToPrint",
    className: "pdfContainer"
  }, react_default.a.createElement("div", {
    className: "divToPrint page1Container"
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Anomalies Summary"), react_default.a.createElement(RiskMatrix["b" /* default */], {
    newAnomalies: anoms
  }), react_default.a.createElement(AnomalyDashboardView["a" /* default */], null)), anoms.map(function (anom) {
    var _props$anomalyClasses, _props$platforms$find;
    return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
      className: "divToPrint anomalyPage"
    }, react_default.a.createElement("div", {
      class: "grid-container"
    }, react_default.a.createElement("div", {
      class: "grid-item reporthead"
    }, react_default.a.createElement("img", {
      src: grasp_logo_1_default.a,
      alt: "logo",
      className: "reportLogo"
    }), react_default.a.createElement("span", {
      className: "reportHeader"
    }, "Anomaly Report for ", anom.code)), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Anomaly Information")), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Risk Matrix")), react_default.a.createElement("div", {
      class: "grid-item 4"
    }, react_default.a.createElement(ReportContent, {
      name: "Asset Type",
      value: ((_props$anomalyClasses = props.anomalyClasses.find(function (p) {
        return p.id === anom.anomalyClass;
      })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--"
    }), react_default.a.createElement(ReportContent, {
      name: "Facility",
      value: ((_props$platforms$find = props.platforms.find(function (p) {
        return p.id === anom.platform;
      })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"
    }), react_default.a.createElement(ReportContent, {
      name: "Tag Number",
      value: anom.equipmentTagNo
    }), react_default.a.createElement(ReportContent, {
      name: "Component",
      value: anom.component
    })), react_default.a.createElement("div", {
      class: "grid-item 5 centerContent"
    }, react_default.a.createElement(RiskMatrix["a" /* SmlRiskMatrix */], {
      lof: anom.loF,
      cof: anom.coF
    })), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Design Data")), react_default.a.createElement("div", {
      class: "grid-item 7"
    }, react_default.a.createElement(ReportContent, {
      name: "Design Code",
      value: anom.designCode
    }), react_default.a.createElement(ReportContent, {
      name: "Year of Built (Installation)",
      value: anom.yearOfBuild
    }), react_default.a.createElement(ReportContent, {
      name: "Safety Critical Equipment: (Yes or No) ",
      value: anom.isSCE ? "Yes" : "No"
    })), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Anomaly Status")), react_default.a.createElement("div", {
      class: "grid-item 9"
    }, react_default.a.createElement(ReportContent, {
      name: "Anomaly status",
      value: getAnomalyReviewStatus(anom)
    }), react_default.a.createElement(ReportContent, {
      name: "Shutdown Required",
      value: anom.isShutdownRequired ? "Yes" : "NO"
    })), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Notes/Comments")), react_default.a.createElement("div", {
      class: "grid-item 11"
    }, react_default.a.createElement(ReportContent, {
      name: "Notes",
      value: anom.description,
      className: "bigVal"
    })), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Inspection Data")), react_default.a.createElement("div", {
      class: "grid-item 13"
    }, InspectionTable(anom)), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Anomaly Analysis")), react_default.a.createElement("div", {
      class: "grid-item 15"
    }, AnalysisTable(anom, props)), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Recommendation")), react_default.a.createElement("div", {
      class: "grid-item"
    }, RecomTable(anom, users)), react_default.a.createElement("div", {
      class: "grid-item smallHeads"
    }, react_default.a.createElement("span", null, "Images")), react_default.a.createElement("div", {
      class: "grid-item reportAttached"
    }, anom.attachedFiles.map(function (file, i) {
      return react_default.a.createElement("img", {
        alt: file.fileName,
        src: urls["a" /* BaseURL */] + "/api/files/download/" + file.fileId,
        key: i,
        className: "img"
      });
    })))), react_default.a.createElement("br", null));
  })), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null)));
};
var AnomaliesReportView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    systems: state.systems,
    platforms: state.platforms,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    users: state.users
  };
};
/* harmony default export */ var _aimViews_AnomaliesReportView = (Object(es["b" /* connect */])(AnomaliesReportView_mapStateToProps)(AnomaliesReportView_AnomaliesReportView));
function RecomTable(anom, users) {
  var _users$find, _users$find2, _users$find3, _users$find4;
  return react_default.a.createElement(TableContainer["a" /* default */], null, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#7e4d11",
      color: "#FFFFFF"
    }
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Activity Method"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Survey Date"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Due Date"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Analyst"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Approver"))), react_default.a.createElement(TableBody["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    key: anom.id
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.activityMethod), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200",
      whiteSpace: "nowrap"
    }
  }, react_default.a.createElement(dist_default.a, {
    format: "LL",
    date: anom.dateRaised
  })), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200",
      whiteSpace: "nowrap"
    }
  }, react_default.a.createElement(dist_default.a, {
    format: "LL",
    date: anom.closeOutDate
  })), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, anom.analysedBy ? ((_users$find = users.find(function (user) {
    return anom.analysedBy === user.id;
  })) === null || _users$find === void 0 ? void 0 : _users$find.firstName) + " " + ((_users$find2 = users.find(function (user) {
    return anom.analysedBy === user.id;
  })) === null || _users$find2 === void 0 ? void 0 : _users$find2.lastName) : "--"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, anom.approvedBy ? ((_users$find3 = users.find(function (user) {
    return anom.approvedBy === user.id;
  })) === null || _users$find3 === void 0 ? void 0 : _users$find3.firstName) + " " + ((_users$find4 = users.find(function (user) {
    return anom.approvedBy === user.id;
  })) === null || _users$find4 === void 0 ? void 0 : _users$find4.lastName) : "--")))));
}
function InspectionTable(anom) {
  return react_default.a.createElement(TableContainer["a" /* default */], null, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#7e4d11",
      color: "#FFFFFF"
    }
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Component"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Survey Date"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Actvity Method"), anom.activityMethod === "Inspection" && react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Inspection Type"))), react_default.a.createElement(TableBody["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    key: anom.id
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, anom.component), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200",
      whiteSpace: "nowrap"
    }
  }, react_default.a.createElement(dist_default.a, {
    format: "LL",
    date: anom.dateRaised
  })), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.activityMethod), anom.activityMethod === "Inspection" && react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.inspectionType)))));
}
function AnalysisTable(anom, props) {
  var _props$anomalyClasses2, _props$actions$find;
  return react_default.a.createElement(TableContainer["a" /* default */], null, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#7e4d11",
      color: "#FFFFFF"
    }
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Component"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Class"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "SoF"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "CoF"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "LoF"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Priority"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Action"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Close-out Date"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Stage"))), react_default.a.createElement(TableBody["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    key: anom.id
  }, react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, anom.component), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, react_default.a.createElement("div", {
    style: {
      display: "inline-block",
      color: "#FFFFFF",
      fontSize: 12,
      borderRadius: 4,
      padding: 2,
      paddingLeft: 3,
      paddingRight: 3,
      backgroundColor: "#FF9900"
    }
  }, ((_props$anomalyClasses2 = props.anomalyClasses.find(function (p) {
    return p.id == anom.anomalyClass;
  })) === null || _props$anomalyClasses2 === void 0 ? void 0 : _props$anomalyClasses2.code) || "--")), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.soF), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.coF), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200"
    }
  }, anom.loF), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#009444"
    }
  }, anom.priority), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], null, ((_props$actions$find = props.actions.find(function (p) {
    return p.id == anom.action;
  })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#FF2200",
      whiteSpace: "nowrap"
    }
  }, react_default.a.createElement(dist_default.a, {
    format: "LL",
    date: anom.closeOutDate
  })), react_default.a.createElement(AnalysedAnomaliesTable["a" /* StyledTableCell */], {
    style: {
      color: "#009444"
    }
  }, anom.isReviewed ? anom.isApproved ? "Approved" : "Pending Approval" : "Pending Review")))));
}
function ReportContent(_ref3) {
  var name = _ref3.name,
    value = _ref3.value,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? "" : _ref3$className;
  return react_default.a.createElement("div", {
    className: "reportCont ".concat(className)
  }, react_default.a.createElement("span", null, name), react_default.a.createElement("span", null, ":"), react_default.a.createElement("span", null, value ? value : "--"));
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(1034);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(1035);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 4 modules
var Hidden = __webpack_require__(603);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(1110);
var useTheme_default = /*#__PURE__*/__webpack_require__.n(useTheme);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/node-libs-browser/node_modules/util/util.js
var util = __webpack_require__(74);

// EXTERNAL MODULE: ./src/_components/CustomAppBar.js + 1 modules
var CustomAppBar = __webpack_require__(137);

// CONCATENATED MODULE: ./src/_modules/AnomaliesModule.js
function AnomaliesModule_typeof(obj) { "@babel/helpers - typeof"; return AnomaliesModule_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomaliesModule_typeof(obj); }
function AnomaliesModule_extends() { AnomaliesModule_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomaliesModule_extends.apply(this, arguments); }
function AnomaliesModule_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomaliesModule_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomaliesModule_ownKeys(Object(source), !0).forEach(function (key) { AnomaliesModule_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomaliesModule_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomaliesModule_defineProperty(obj, key, value) { key = AnomaliesModule_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomaliesModule_toPropertyKey(arg) { var key = AnomaliesModule_toPrimitive(arg, "string"); return AnomaliesModule_typeof(key) === "symbol" ? key : String(key); }
function AnomaliesModule_toPrimitive(input, hint) { if (AnomaliesModule_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomaliesModule_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomaliesModule_slicedToArray(arr, i) { return AnomaliesModule_arrayWithHoles(arr) || AnomaliesModule_iterableToArrayLimit(arr, i) || AnomaliesModule_unsupportedIterableToArray(arr, i) || AnomaliesModule_nonIterableRest(); }
function AnomaliesModule_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomaliesModule_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomaliesModule_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomaliesModule_arrayLikeToArray(o, minLen); }
function AnomaliesModule_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomaliesModule_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomaliesModule_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















//import Logo from '@/_images/grasp_logo.inline.svg';





//import {setCaseRecords} from '../redux/actions'


function AnomaliesModule(props) {
  var container = props.container;
  var classes = Object(customStyles["a" /* useStyles */])();
  var theme = useTheme_default()();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomaliesModule_slicedToArray(_React$useState, 2),
    mobileOpen = _React$useState2[0],
    setMobileOpen = _React$useState2[1];
  //const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);
  var currentUser = _services["a" /* authenticationService */].currentUserValue;
  var currentUserPermissions = props.anomalyPermissions.find(function (i) {
    return i.user == currentUser.id;
  });
  var getUserPermissions = function getUserPermissions(user) {
    var userPermissions = props.anomalyPermissions.find(function (i) {
      return i.user == user.id;
    });
    if (!userPermissions) {
      return {
        user: user.id,
        canAnalyse: false,
        canCreate: true,
        canReview: false,
        canSetStatus: false
      };
    } else return userPermissions;
  };
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  var menuItems = [getUserPermissions(currentUser).canCreate && {
    id: "1",
    key: "1",
    caption: "New Anomaly",
    secondaryCaption: "Create a new anomaly",
    link: "/anomalies/new"
  }, getUserPermissions(currentUser).canCreate && {
    id: "2",
    key: "2",
    caption: "Excel Import",
    secondaryCaption: "Import anomalies from excel",
    link: "/anomalies/excel_data_import"
  }, {
    id: "3",
    key: "3",
    caption: "All Anomalies ",
    secondaryCaption: "View all anomalies",
    link: "/anomalies/all_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.length
  }, {
    id: "4",
    key: "4",
    caption: "Anomalies Raised by Me",
    secondaryCaption: "View all anomalies raised by me",
    link: "/anomalies/user_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.user == currentUser.id;
    }).length
  }, {
    id: "5",
    key: "5",
    caption: "New Anomalies ",
    secondaryCaption: "View all new anomalies, pending analysis",
    link: "/anomalies/new_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }).length
  }, {
    id: "6",
    key: "6",
    caption: "Analysed Anomalies ",
    secondaryCaption: "View all analysed anomalies, pending approval",
    link: "/anomalies/analysed_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.isAnalysed == true && i.isReviewed == false;
    }).length
  }, {
    id: "7",
    key: "7",
    caption: "Approved Anomalies ",
    secondaryCaption: "View all approved anomalies",
    link: "/anomalies/approved_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.isAnalysed == true && i.isReviewed & i.isApproved;
    }).length
  }, {
    id: "8",
    key: "8",
    caption: "Report",
    secondaryCaption: "Print Anomalies Summary Report",
    link: "/anomalies/report"
  }
  /*{
    id:"8",
    key:"8",
    caption:"Attachments",
    secondaryCaption:"View all anomaly documents",
    link:"/anomalies/attachments"
  },*/];

  console.warn("menuItems", menuItems.filter(function (i) {
    return i != false;
  }));
  axios_default.a.interceptors.request.use(function (config) {
    config.headers = AnomaliesModule_objectSpread(AnomaliesModule_objectSpread({}, config.headers), {}, {
      'Access-Control-Allow-Origin': '*'
    });
    return config;
  });
  var drawerMenu = Object(sideMenuComponents["b" /* drawer */])(menuItems.filter(function (i) {
    return i != false;
  }), classes, props.location && props.location.pathname);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(react_router_dom["a" /* HashRouter */], null, react_default.a.createElement(CssBaseline["a" /* default */], null), react_default.a.createElement(CustomAppBar["a" /* default */], AnomaliesModule_extends({}, props, {
    handleDrawerToggle: handleDrawerToggle
  })), react_default.a.createElement("nav", {
    className: classes.drawer,
    "aria-label": "Mailbox folders"
  }, react_default.a.createElement(Hidden["a" /* default */], {
    smUp: true,
    implementation: "css"
  }, react_default.a.createElement(Drawer["a" /* default */], {
    container: container,
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }, drawerMenu)), react_default.a.createElement(Hidden["a" /* default */], {
    xsDown: true,
    implementation: "css"
  }, react_default.a.createElement(Drawer["a" /* default */], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawerMenu))), react_default.a.createElement("main", {
    className: classes.content,
    style: {
      paddingTop: 80
    }
  }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/new",
    render: function render(props) {
      return react_default.a.createElement(NewAnomalyView["a" /* default */], AnomaliesModule_extends({}, props, {
        isNew: true,
        isEdit: false
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/analyse_anomaly/:anomalyId",
    render: function render(props) {
      return react_default.a.createElement(NewAnomalyView["a" /* default */], AnomaliesModule_extends({}, props, {
        isNew: false
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/all_anomalies",
    component: AnomaliesView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/user_anomalies",
    component: _aimViews_UserAnomaliesView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/new_anomalies",
    component: NewAnomaliesView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/edit/:anomalyId",
    render: function render(props) {
      return react_default.a.createElement(NewAnomalyView["a" /* default */], AnomaliesModule_extends({}, props, {
        isEdit: true,
        isNew: false
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/copy/:anomalyId",
    render: function render(props) {
      return react_default.a.createElement(NewAnomalyView["a" /* default */], AnomaliesModule_extends({}, props, {
        isEdit: false,
        isCopy: true,
        isNew: true
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/analysed_anomalies",
    component: AnalysedAnomaliesView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/approved_anomalies",
    component: _aimViews_ApprovedAnomaliesView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/excel_data_import",
    component: _aimViews_ExcelDataImportView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/riskmatrix",
    component: RiskMatrixView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/statistics",
    component: AnomalyStatisticsView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/anomalies/report",
    component: _aimViews_AnomaliesReportView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/",
    component: AnomaliesView["a" /* default */]
  })))));
}
var AnomaliesModule_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCaseRecords: function (_setCaseRecords) {
      function setCaseRecords(_x2) {
        return _setCaseRecords.apply(this, arguments);
      }
      setCaseRecords.toString = function () {
        return _setCaseRecords.toString();
      };
      return setCaseRecords;
    }(function (data) {
      dispatch(setCaseRecords(data));
    })
    // addUpdate:(data) => {dispatch(addUpdate(data))},   
  };
};

var AnomaliesModule_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    anomalyPermissions: state.anomalyPermissions
  };
};
/* harmony default export */ var _modules_AnomaliesModule = __webpack_exports__["default"] = (Object(es["b" /* connect */])(AnomaliesModule_mapStateToProps, AnomaliesModule_mapDispatchToProps)(AnomaliesModule));

/***/ })

}]);