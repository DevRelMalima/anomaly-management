(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (theme) {
  var _ref;
  return _ref = {
    customButtonIcon: {
      fontSize: 16,
      marginRight: 2
    },
    search: _defineProperty({
      position: 'relative',
      border: '1px #CCCCCC solid',
      margin: 10,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[/* fade */ "d"])(theme.palette.common.white, 1.0),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[/* fade */ "d"])(theme.palette.common.white, 0.95)
      },
      marginLeft: 0,
      width: '100%',
      maxWidth: 560
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(4),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#999999'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    }),
    icon: {
      marginRight: theme.spacing(2)
    },
    root: {
      display: 'flex'
    },
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: drawerWidth,
      flexShrink: 0
    }),
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: 'rgba(156, 209, 149, 1)',
      color: '#555555'
    },
    menuButton: _defineProperty({
      marginRight: theme.spacing(0)
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    }),
    toolbar: theme.mixins.toolbar,
    toolbarTitle: {
      flexGrow: 1,
      verticalAlign: 'middle'
    },
    smallAvatar: {
      margin: 4,
      width: 32,
      height: 32
    },
    toolbarIcon: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontSize: 10,
      padding: '0 8px'
    }, theme.mixins.toolbar),
    drawerPaper: {
      width: drawerWidth,
      background: '#EFEFEF',
      color: '#1c75bc'
    },
    content: _defineProperty({
      flexGrow: 1,
      //padding: theme.spacing(5, 3),
      background: '#FFFFFF',
      position: 'relative',
      minHeight: '100vh',
      maxHeight: '100vh',
      width: '100vw'
    }, theme.breakpoints.up('sm'), {
      width: "calc(100vw - ".concat(drawerWidth + 50, "px)")
    }),
    childContent: {
      flexGrow: 1,
      padding: theme.spacing(5, 3),
      background: '#dae5e6',
      maxHeight: '100%'
    }
  }, _defineProperty(_ref, "icon", {
    marginRight: theme.spacing(2)
  }), _defineProperty(_ref, "iconButton", {
    margin: theme.spacing(1),
    fontSize: 24,
    color: '#444444'
  }), _defineProperty(_ref, "bigAvatar", {
    margin: 10,
    width: 120,
    height: 120
  }), _defineProperty(_ref, "heroContent", {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }), _defineProperty(_ref, "heroButtons", {
    marginTop: theme.spacing(4)
  }), _defineProperty(_ref, "modalDialog", {
    width: '100%'
  }), _defineProperty(_ref, "cardGrid", {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }), _defineProperty(_ref, "card", {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '5px #0099FF solid',
    minWidth: '100px'
  }), _defineProperty(_ref, "cardMedia", {
    paddingTop: '56.25%' // 16:9
  }), _defineProperty(_ref, "cardContent", {
    flexGrow: 1,
    height: '100%'
  }), _defineProperty(_ref, "link", {
    margin: theme.spacing(2, 0),
    fontSize: 16
  }), _defineProperty(_ref, "footer", {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }), _defineProperty(_ref, "listContainer", {
    maxWidth: '600px'
  }), _defineProperty(_ref, "paper", {
    margin: "".concat(theme.spacing(0.2), "px auto"),
    padding: theme.spacing(1),
    borderTop: '0px solid #0099FF',
    maxWidth: 600,
    boxShadow: 'none'
  }), _defineProperty(_ref, "taskPaper", {
    margin: "".concat(theme.spacing(1), "px auto"),
    padding: theme.spacing(2),
    borderTop: '5px solid #0099FF',
    boxShadow: 'none'
  }), _defineProperty(_ref, "iconButton", {
    margin: theme.spacing(.5),
    fontSize: 24,
    color: '#164265'
  }), _defineProperty(_ref, "iconButton2", {
    margin: theme.spacing(.5),
    fontSize: 20,
    color: '#555555'
  }), _defineProperty(_ref, "iconButton3", {
    margin: theme.spacing(1),
    fontSize: 45,
    color: '#555555'
  }), _defineProperty(_ref, "hidden", {
    display: 'none'
  }), _defineProperty(_ref, "ganttContainer", _defineProperty({
    marginLeft: drawerWidth,
    overflow: "scroll",
    maxWidth: '100%',
    display: 'flex',
    right: 0,
    position: "fixed"
  }, theme.breakpoints.up('sm'), {
    width: "calc(100% - ".concat(drawerWidth + 50, "px)")
  })), _defineProperty(_ref, "taskGroupCard", {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(255,255,255,0.18)',
    border: '0px dotted #7d8abb',
    width: 400,
    boxShadow: 'none',
    marginRight: '20px'
  }), _defineProperty(_ref, "taskGroupWrapper", {
    display: 'flex',
    maxHeight: '100%',
    flexWrap: 'wrap',
    justifyContent: 'left',
    overflow: 'hidden',
    /*height: 'calc(100% - 120px)',    */
    width: '100%',
    position: 'absolute',
    right: '0px',
    left: '0px',
    bottom: '0px',
    top: '200px'

    //width: `calc(100% - ${drawerWidth+50}px)`,
    //backgroundColor: theme.palette.background.paper,
  }), _defineProperty(_ref, "breadCrumbPaper", {
    maxWidth: 400,
    padding: theme.spacing(2),
    borderLeft: '0px solid #FF0099',
    background: 'none'
  }), _defineProperty(_ref, "formControl", {
    margin: theme.spacing(0),
    minWidth: 120
  }), _defineProperty(_ref, "listItem", {
    width: '100%',
    maxWidth: 600,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper
  }), _defineProperty(_ref, "gridList", {
    flexWrap: 'nowrap'
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //transform: 'translateZ(0)',
  }), _defineProperty(_ref, "fixedHeight", {
    height: 240
  }), _ref;
});

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);



function ViewTitle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    component: "h2",
    variant: "h6",
    style: {
      marginLeft: 15,
      color: '#1c75bc',
      fontWeight: 'normal'
    },
    gutterBottom: true
  }, props.children);
}
ViewTitle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatSizeUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadFile; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



var formatSizeUnits = function formatSizeUnits(bytes) {
  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "0 bytes";
  }
  return bytes;
};
var downloadFile = function downloadFile(linkurl, fileName, fileType) {
  if (fileType == 'Excel') {
    var currentUser = _services__WEBPACK_IMPORTED_MODULE_0__[/* authenticationService */ "a"].currentUserValue;
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer ".concat(currentUser.token)
      },
      responseType: 'blob'
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants_URLs_urls__WEBPACK_IMPORTED_MODULE_2__[/* BaseURL */ "a"] + "" + linkurl, config).then(function (response) {
      //console.warn("result", result)
      var url = window.URL.createObjectURL(new Blob([response.data]), {
        type: 'application/xlsx'
      });
      var link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    }).catch(function (ex) {
      console.error(ex);
    });
  } else {
    var _currentUser = _services__WEBPACK_IMPORTED_MODULE_0__[/* authenticationService */ "a"].currentUserValue;
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": "Bearer ".concat(_currentUser.token)
      }
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_constants_URLs_urls__WEBPACK_IMPORTED_MODULE_2__[/* BaseURL */ "a"] + linkurl, config) //'/api/files/download/'+fileId
    .then(function (response) {
      //console.warn("result", result)
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    }).catch(function (ex) {
      console.error(ex);
    });
  }
};

/***/ }),

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheetDownloadButton; });
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(299);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


var SheetDownloadButton = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (theme) {
  return {
    root: {
      color: '#FFFFFF',
      boxShadow: 'none',
      backgroundColor: '#2e7d32',
      '&:hover': {
        backgroundColor: '#689f38'
      }
    }
  };
})(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(299);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(981);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(979);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(980);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(978);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function DialogPrompt(props) {
  var cancelAction = props.cancelAction,
    okAction = props.okAction,
    open = props.open;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.dialogTitle || "Prompt"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dialogTitle = _React$useState2[0],
    setDialogTitle = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.dialogMessage || "Do you wish to continue?"),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dialogMessage = _React$useState4[0],
    setDialogMessage = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.okCaption || "Ok"),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    okCaption = _React$useState6[0],
    setOkCaption = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.cancelCaption || "Cancel"),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    cancelCaption = _React$useState8[0],
    setCancelCaption = _React$useState8[1];
  //const [okAction, setOkAction] = React.useState(props.okAction || null);
  console.log("Dialog props", props);
  function handleClickOpen() {
    setOpen(true);
  }
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    //setOpen(props.open)
    //setOkAction(props.okAction)
    setDialogTitle(props.dialogTitle);
    setDialogMessage(props.dialogMessage);
  }, [props]);
  function handleClose() {
    //console.error('11221');
    //console.warn('adadad'); 
    //console.warn(props.cancelAction)
    if (cancelAction) {
      cancelAction && cancelAction();
    }
  }
  function handleOkClick() {
    //console.warn(props.okAction)
    if (okAction) {
      okAction();
    }
    //setOpen(false);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    fullWidth: true,
    open: open,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    style: {
      padding: "6px 24px"
    },
    id: "alert-dialog-title"
  }, dialogTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    style: {
      marginBottom: "0px"
    },
    id: "alert-dialog-description"
  }, dialogMessage)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onClick: handleClose,
    color: "primary"
  }, cancelCaption), okAction && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onClick: handleOkClick,
    color: "primary",
    autoFocus: true
  }, okCaption))));
}
/* harmony default export */ __webpack_exports__["a"] = (DialogPrompt);

/***/ }),

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(276);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1037);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(228);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(299);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(193);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(110);
/* harmony import */ var _actions_anomalyActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utility_filesUtility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1068);
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(570);
/* harmony import */ var _material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(986);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(156);
/* harmony import */ var _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(977);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(981);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(979);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(978);
/* harmony import */ var _images_icons_files_file_icon_inline_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(361);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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












//import {countries} from 'countries-List';
//import { List } from '@material-ui/core';




















function preventDefault(event) {
  event.preventDefault();
}
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    },
    formControl: {
      minWidth: 120,
      width: "100%"
    }
  };
});
var AnomalyRecordView = function AnomalyRecordView(props) {
  var _props$platforms$find, _props$actions$find;
  var emptyAnomaly = {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(),
    code: "",
    platform: "",
    dateRaised: new Date(),
    equipmentTagNo: "",
    component: "",
    description: "",
    system: "",
    anomalyClass: "",
    priority: "",
    analyser: "",
    reviewer: "",
    loF: "",
    coF: "",
    soF: "",
    action: "",
    analysisComment: "",
    isShutdownRequired: false,
    isAnalysed: false,
    isApproved: false,
    analysedBy: null,
    approvedBy: null
  };

  //

  var selectedAnomaly = props.anomalies.find(function (p) {
    return p.id == props.anomalyId;
  });
  console.log("CAN", selectedAnomaly);
  var classes = useStyles();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(_objectSpread({}, selectedAnomaly)),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    newAnomaly = _React$useState2[0],
    setNewAnomaly = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    openImageViewDialog = _React$useState4[0],
    setOpenImageViewDialog = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedImageFile = _React$useState6[0],
    setSelectedImageFile = _React$useState6[1];
  var viewImageFile = function viewImageFile(f) {
    setSelectedImageFile(f);
    setOpenImageViewDialog(true);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [props.anomalies]);
  function saveAnomalyAnalysis() {
    // console.log("khhkhk", newAnomaly);
    props.saveAnomalyAnalysis(_objectSpread(_objectSpread({}, newAnomaly), {}, {
      isAnalysed: true
    }));
    //setNewAnomaly({...emptyAnomaly})
    props.enqueueSnackbar("Anomaly analysis saved", {
      variant: "success"
    });
    props.history.push("/anomalies/new_anomalies");
  }
  var handleFieldChange = function handleFieldChange(event) {
    event.persist();
    //handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.log({ name, value })
    setNewAnomaly(_objectSpread(_objectSpread({}, newAnomaly), {}, _defineProperty({}, name, value)));
    //console.log(newAnomaly)
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
    open: openImageViewDialog,
    fullWidth: true,
    "aria-labelledby": "form-dialog-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"], {
    id: "form-dialog-title"
  }, "Attachment:", selectedImageFile && selectedImageFile.fileName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"], {
    style: {
      padding: 0
    }
  }, selectedImageFile && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      margin: 5
    },
    src: _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_16__[/* BaseURL */ "a"] + "/api/files/download/" + selectedImageFile.fileId
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    onClick: function onClick() {
      return setOpenImageViewDialog(false);
    },
    color: "primary"
  }, "Close"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 18,
      color: "#555555"
    }
  }, newAnomaly.code), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Anomaly Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.code)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Facility"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, ((_props$platforms$find = props.platforms.find(function (p) {
    return p.id == newAnomaly.platform;
  })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Component"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.component)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Equipment/Tag No."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.equipmentTagNo)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Activity Method"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.activityMethod)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Date Raised"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_7___default.a, {
    format: "LL",
    date: newAnomaly.dateRaised
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "LoF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.loF)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "CoF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.coF)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Priority"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, newAnomaly.priority)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    item: true,
    xs: 12,
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, ((_props$actions$find = props.actions.find(function (p) {
    return p.id == newAnomaly.action;
  })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, newAnomaly.attachedFiles && newAnomaly.attachedFiles.map(function (file) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      item: true,
      key: file.id,
      xs: 12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
      key: file.id,
      className: classes.paper,
      style: {
        margin: 5
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      item: true,
      xs: true,
      container: true,
      direction: "row",
      alignItems: "flex-start"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      item: true
    }, file.fileClass === "IMAGE" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      onClick: function onClick() {
        return viewImageFile(file);
      },
      style: {
        cursor: "pointer",
        width: "100%",
        maxWidth: 400,
        borderRadius: 5,
        margin: 5
      },
      src: _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_16__[/* BaseURL */ "a"] + "/api/files/download/" + file.fileId
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_images_icons_files_file_icon_inline_svg__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
      style: {
        margin: 5,
        color: "FF9900"
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      item: true,
      container: true,
      direction: "column",
      style: {
        marginLeft: 10
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      variant: "h6",
      style: {
        fontSize: 14
      },
      noWrap: true
    }, file.fileName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      variant: "h6",
      style: {
        fontSize: 10
      },
      noWrap: true
    }, Object(_utility_filesUtility__WEBPACK_IMPORTED_MODULE_12__[/* formatSizeUnits */ "b"])(file.fileSize)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      size: "small",
      onClick: function onClick() {
        return Object(_utility_filesUtility__WEBPACK_IMPORTED_MODULE_12__[/* downloadFile */ "a"])("/api/files/download/" + file.fileId, file.fileName, file.fileType);
      },
      color: "primary"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CloudDownloadOutlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.iconButton2
    }))))));
  })))));
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveAnomalyAnalysis: function saveAnomalyAnalysis(data) {
      dispatch(Object(_actions_anomalyActions__WEBPACK_IMPORTED_MODULE_10__[/* saveAnomalyAnalysis */ "u"])(data));
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
    soFs: state.soFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    users: state.users,
    files: state.files
  };
};
// export default TodoList;
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, mapDispatchToProps)(Object(notistack__WEBPACK_IMPORTED_MODULE_11__["withSnackbar"])(AnomalyRecordView)));

/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _common_customStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1050);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1033);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1032);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(228);
/* harmony import */ var _components_aimComponents_AnalysedAnomaliesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1137);
/* harmony import */ var _components_aimComponents_ViewTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1052);
/* harmony import */ var _common_sideMenuComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(157);













var AnalysedAnomaliesView = function AnalysedAnomaliesView(props) {
  var classes = Object(_common_customStyles__WEBPACK_IMPORTED_MODULE_2__[/* useStyles */ "a"])();
  var fixedHeightPaper = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.paper, classes.fixedHeight);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_aimComponents_ViewTitle__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "Analysed Anomalies (" + props.anomalies.filter(function (a) {
    return a.isAnalysed & !a.isReviewed;
  }).length + ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    maxWidth: "lg",
    className: classes.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    container: true,
    spacing: 3
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_aimComponents_AnalysedAnomaliesTable__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    pt: 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_sideMenuComponents__WEBPACK_IMPORTED_MODULE_9__[/* Copyright */ "a"], null))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps)(AnalysedAnomaliesView));

/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(11);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1032);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(996);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(1036);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(1025);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 6 modules
var Select = __webpack_require__(993);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(1468);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(1037);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(984);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 5 modules
var formik_esm = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 89 modules
var yup_es = __webpack_require__(110);

// EXTERNAL MODULE: ./src/_actions/anomalyActions.js
var anomalyActions = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/notistack/build/index.js
var build = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(977);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(981);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(979);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(978);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./src/_actions/userActions.js
var userActions = __webpack_require__(131);

// EXTERNAL MODULE: ./src/_views/_fileManager/FilesView.js + 2 modules
var FilesView = __webpack_require__(349);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/node-libs-browser/node_modules/util/util.js
var util = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/purple.js
var purple = __webpack_require__(1467);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(84);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/_actions/folderActions.js
var folderActions = __webpack_require__(284);

// EXTERNAL MODULE: ./src/_actions/fileActions.js
var fileActions = __webpack_require__(285);

// CONCATENATED MODULE: ./src/_views/_fileManager/FilesDialogView.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










































//import FolderIcon from '@material-ui/icons/Folder';










var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  var _ref;
  return _ref = {
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(colorManipulator["d" /* fade */])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(colorManipulator["d" /* fade */])(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    }),
    icon: {
      marginRight: theme.spacing(2)
    },
    paper: {
      margin: "".concat(theme.spacing(1), "px auto"),
      padding: theme.spacing(2),
      borderTop: '5px solid #0099FF'
    },
    iconButton: {
      margin: theme.spacing(1),
      fontSize: 24,
      color: '#444444'
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4)
    },
    modalDialog: {
      width: '100%'
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderTop: '5px #0099FF solid',
      minWidth: '100px'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9
    },

    cardContent: {
      flexGrow: 1
    }
  }, _defineProperty(_ref, "iconButton", {
    margin: theme.spacing(.5),
    fontSize: 24,
    color: '#164265'
  }), _defineProperty(_ref, "iconButton2", {
    margin: theme.spacing(.5),
    fontSize: 20,
    color: '#555555'
  }), _defineProperty(_ref, "iconButton3", {
    margin: theme.spacing(1),
    fontSize: 40,
    color: '#555555'
  }), _defineProperty(_ref, "link", {
    margin: theme.spacing(2, 0),
    fontSize: 16,
    marginRight: theme.spacing(1)
  }), _defineProperty(_ref, "footer", {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }), _defineProperty(_ref, "listItem", {
    width: '100%',
    maxWidth: 560,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper
  }), _defineProperty(_ref, "input", {
    display: 'none'
  }), _ref;
});
var ColorButton = Object(withStyles["a" /* default */])(function (theme) {
  return {
    root: {
      color: theme.palette.getContrastText(purple["a" /* default */][500]),
      backgroundColor: purple["a" /* default */][500],
      '&:hover': {
        backgroundColor: purple["a" /* default */][700]
      }
    }
  };
})(Button["a" /* default */]);
function FilesDialogView(props) {
  var classes = useStyles();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    folderDialogOpen = _React$useState4[0],
    setFolderDialogOpen = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    fileDialogOpen = _React$useState6[0],
    setFileDialogOpen = _React$useState6[1];
  var folders = props.folders;
  var files = props.files;
  var isMultiSelect = props.isMultiSelect || false;
  //const { match: { params } } = props;
  //const currentFolderId = props.folderId || "";//params.folderId || "";
  var _React$useState7 = react_default.a.useState(props.selectedItem || ""),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    selectedItem = _React$useState8[0],
    setSelectedItem = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(props.selectedItems || []),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    selectedItems = _React$useState10[0],
    setSelectedItems = _React$useState10[1];
  var _React$useState11 = react_default.a.useState(props.folderId || ""),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    currentFolderId = _React$useState12[0],
    setCurrentFolderId = _React$useState12[1];
  var _React$useState13 = react_default.a.useState(""),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    searchString = _React$useState14[0],
    setSearchString = _React$useState14[1];
  var _React$useState15 = react_default.a.useState(folders.find(function (p) {
      return p.id == currentFolderId;
    })),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    currentFolder = _React$useState16[0],
    setCurrentFolder = _React$useState16[1];

  //const currentFolder = props.folders.find(p=> {return p.id == currentFolderId});

  var _React$useState17 = react_default.a.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    isEditingFolder = _React$useState18[0],
    setIsEditingFolder = _React$useState18[1];
  var _React$useState19 = react_default.a.useState({
      id: "",
      folderName: "",
      parentFolderId: ""
    }),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    newFolder = _React$useState20[0],
    setNewFolder = _React$useState20[1];
  var _React$useState21 = react_default.a.useState(false),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    isEditingFile = _React$useState22[0],
    setIsEditingFile = _React$useState22[1];
  var _React$useState23 = react_default.a.useState({
      id: "",
      fileName: "",
      folderId: ""
    }),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    newFile = _React$useState24[0],
    setNewFile = _React$useState24[1];
  var _React$useState25 = react_default.a.useState([0]),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    checked = _React$useState26[0],
    setChecked = _React$useState26[1];
  var handleToggle = function handleToggle(value) {
    return function () {
      var currentIndex = selectedItems.indexOf(value);
      var newChecked = _toConsumableArray(selectedItems);
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      console.warn(newChecked);
      setSelectedItems(newChecked);
      props.setSelectedItems(newChecked);
    };
  };
  function handleFolderDialogOpen() {
    setIsEditingFolder(false);
    setNewFolder({
      id: "",
      folderName: "",
      parentFolderId: currentFolderId
    });
    setFolderDialogOpen(true);
  }
  function handleFileDialogOpen() {
    setIsEditingFile(false);
    setNewFile({
      id: "",
      folderName: "",
      parentFolderId: currentFolderId
    });
    setFileDialogOpen(true);
  }
  function handleFolderDialogClose() {
    setFolderDialogOpen(false);
  }
  function handleFileDialogClose() {
    setFileDialogOpen(false);
  }
  var deleteFolder = function deleteFolder(folderId) {
    props.deleteFolder(folderId);
  };
  var deleteFile = function deleteFile(fileId) {
    props.deleteFile(fileId);
  };
  var editFolder = function editFolder(folderId) {
    setIsEditingFolder(true);
    var selectedFolder = folders.find(function (folder) {
      return folder.id == folderId;
    });
    if (selectedFolder) {
      setNewFolder(selectedFolder);
    }
    setFolderDialogOpen(true);
  };
  var editFile = function editFile(fileId) {
    setIsEditingFile(true);
    var selectedFile = files.find(function (file) {
      return file.id == fileId;
    });
    if (selectedFile) {
      setNewFile(selectedFile);
    }
    setFileDialogOpen(true);
  };
  var setSelection = function setSelection(event) {
    setSelectedItem(event.target.value);
  };
  var handleFolderInputChange = function handleFolderInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setNewFolder(_objectSpread(_objectSpread({}, newFolder), {}, _defineProperty({}, name, value)));
  };
  var handleSearchStringChange = function handleSearchStringChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setSearchString(value);
  };
  var handleFileInputChange = function handleFileInputChange(event) {
    var _event$target3 = event.target,
      name = _event$target3.name,
      value = _event$target3.value;
    setNewFile(_objectSpread(_objectSpread({}, newFile), {}, _defineProperty({}, name, value)));
  };
  function createFile() {
    props.createFile(_objectSpread(_objectSpread({}, newFile), {}, {
      id: Math.random()
    }));
    setFileDialogOpen(false);
  }
  function createFolder() {
    props.createFolder(_objectSpread({}, newFolder));
    setFolderDialogOpen(false);
  }
  function updateFolder() {
    props.updateFolder(newFolder);
    setFolderDialogOpen(false);
  }
  function updateFile() {
    props.updateFile(newFile);
    setFileDialogOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get('http://localhost:56941/api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  function onChange(e) {
    var files = e.target.files;
    console.warn("data file", files);
    var url = "";
    var form = new FormData();
    var _loop = function _loop() {
      var element = files[index];
      var reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = function (e) {
        props.createFile({
          fileName: element.name,
          id: Math.random(),
          folderId: currentFolderId
        });
        //console.warn("img data ", newCurrentUser)  
        //props.dispatch({type:'SET_CURRENT_USER', currentUser:newCurrentUser});
        //setThumbnail(e.target.result) ;
      };

      form.append('file', element);
      ////}

      form.append('file', element);
      axios_default.a.post('http://localhost:56941/api/files/upload', form, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (result) {
        console.warn("result", result);

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
      });
    };
    for (var index = 0; index < files.length; index++) {
      _loop();
    }

    /*return axios({
      url:'http://localhost:56941/api/files/upload',
      method:"POST",
      headers:{
        'Content-Type':'multipart/form-data'
      },
      data: formData
    }).then(response=>console.warn("result", response))*/
  }

  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(FilesView["a" /* default */], _extends({
    setSelectedItems: setSelectedItems
  }, props)));
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    projects: state.projects,
    users: state.users,
    files: state.files,
    folders: state.folders
  };
};
var FilesDialogView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteFolder: function deleteFolder(id) {
      dispatch(Object(folderActions["b" /* deleteFolder */])(id));
    },
    createFolder: function createFolder(folder) {
      dispatch(Object(folderActions["a" /* createFolder */])(folder));
    },
    updateFolder: function updateFolder(folder) {
      dispatch(Object(folderActions["c" /* updateFolder */])(folder));
    },
    deleteFile: function deleteFile(id) {
      dispatch(Object(fileActions["b" /* deleteFile */])(id));
    },
    createFile: function createFile(folder) {
      dispatch(Object(fileActions["a" /* createFile */])(folder));
    },
    updateFile: function updateFile(folder) {
      dispatch(Object(fileActions["c" /* updateFile */])(folder));
    }
  };
};
/* harmony default export */ var _fileManager_FilesDialogView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(mapStateToProps, FilesDialogView_mapDispatchToProps)(FilesDialogView)));
// EXTERNAL MODULE: ./src/_images/icons/files/file_icon.inline.svg
var file_icon_inline = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(24);
var DeleteOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(986);

// EXTERNAL MODULE: ./src/utility/filesUtility.js
var filesUtility = __webpack_require__(1068);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js
var FormHelperText = __webpack_require__(985);

// EXTERNAL MODULE: ./src/constants/URLs/urls.js
var urls = __webpack_require__(10);

// CONCATENATED MODULE: ./src/_components/aimComponents/AnomalyForm.js
function AnomalyForm_typeof(obj) { "@babel/helpers - typeof"; return AnomalyForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyForm_typeof(obj); }
function AnomalyForm_extends() { AnomalyForm_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomalyForm_extends.apply(this, arguments); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = AnomalyForm_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function AnomalyForm_toConsumableArray(arr) { return AnomalyForm_arrayWithoutHoles(arr) || AnomalyForm_iterableToArray(arr) || AnomalyForm_unsupportedIterableToArray(arr) || AnomalyForm_nonIterableSpread(); }
function AnomalyForm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyForm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function AnomalyForm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return AnomalyForm_arrayLikeToArray(arr); }
function AnomalyForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyForm_ownKeys(Object(source), !0).forEach(function (key) { AnomalyForm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyForm_slicedToArray(arr, i) { return AnomalyForm_arrayWithHoles(arr) || AnomalyForm_iterableToArrayLimit(arr, i) || AnomalyForm_unsupportedIterableToArray(arr, i) || AnomalyForm_nonIterableRest(); }
function AnomalyForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyForm_arrayLikeToArray(o, minLen); }
function AnomalyForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyForm_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AnomalyForm_defineProperty(obj, key, value) { key = AnomalyForm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyForm_toPropertyKey(arg) { var key = AnomalyForm_toPrimitive(arg, "string"); return AnomalyForm_typeof(key) === "symbol" ? key : String(key); }
function AnomalyForm_toPrimitive(input, hint) { if (AnomalyForm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyForm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

//import Link from '@material-ui/core/Link';











//import {countries} from 'countries-List';
//import { List } from '@material-ui/core';



//import Moment from 'react-moment';























function preventDefault(event) {
  event.preventDefault();
}
var AnomalyForm_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    },
    formControl: {
      minWidth: 120,
      width: "100%"
    },
    formControl2: {
      fontSize: "16px",
      marginTop: "12px",
      color: "rgba(0, 0, 0, 0.588)"
    }
  };
});
var AnomalyForm_AnomalyForm = function AnomalyForm(props) {
  var _emptyAnomaly;
  var emptyAnomaly = (_emptyAnomaly = {
    id: Object(v4["a" /* default */])(),
    code: "",
    platform: "",
    dateRaised: new Date(),
    equipmentTagNo: "",
    component: "",
    description: "",
    system: "",
    orientation: "",
    anomalyClass: "",
    analysedBy: "",
    designCode: "",
    yearOfBuild: "",
    isSCE: false,
    activityMethod: "",
    inspectionType: "",
    reviewer: "",
    priority: "",
    loF: 0,
    sof: 0,
    coF: 0,
    action: "",
    isShutdownRequired: false,
    isAnalysed: false,
    isApproved: false
  }, AnomalyForm_defineProperty(_emptyAnomaly, "analysedBy", null), AnomalyForm_defineProperty(_emptyAnomaly, "approvedBy", null), AnomalyForm_defineProperty(_emptyAnomaly, "attachedFiles", []), _emptyAnomaly);
  var classes = AnomalyForm_useStyles();
  var _React$useState = react_default.a.useState(AnomalyForm_objectSpread({}, emptyAnomaly)),
    _React$useState2 = AnomalyForm_slicedToArray(_React$useState, 2),
    newAnomaly = _React$useState2[0],
    setNewAnomaly = _React$useState2[1];
  var _React$useState3 = react_default.a.useState([]),
    _React$useState4 = AnomalyForm_slicedToArray(_React$useState3, 2),
    selectedFiles = _React$useState4[0],
    setSelectedFiles = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalyForm_slicedToArray(_React$useState5, 2),
    openAttachFilesDialog = _React$useState6[0],
    setAttachFilesDialog = _React$useState6[1];
  var _React$useState7 = react_default.a.useState(false),
    _React$useState8 = AnomalyForm_slicedToArray(_React$useState7, 2),
    openImageViewDialog = _React$useState8[0],
    setOpenImageViewDialog = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(null),
    _React$useState10 = AnomalyForm_slicedToArray(_React$useState9, 2),
    selectedImageFile = _React$useState10[0],
    setSelectedImageFile = _React$useState10[1];
  var _React$useState11 = react_default.a.useState({}),
    _React$useState12 = AnomalyForm_slicedToArray(_React$useState11, 2),
    dialogProps = _React$useState12[0],
    setDialogProps = _React$useState12[1];
  var _React$useState13 = react_default.a.useState({}),
    _React$useState14 = AnomalyForm_slicedToArray(_React$useState13, 2),
    isError = _React$useState14[0],
    setIsError = _React$useState14[1];
  var _React$useState15 = react_default.a.useState({}),
    _React$useState16 = AnomalyForm_slicedToArray(_React$useState15, 2),
    fieldErrorMessage = _React$useState16[0],
    setFieldErrorMessage = _React$useState16[1];
  var viewImageFile = function viewImageFile(f) {
    setSelectedImageFile(f);
    setOpenImageViewDialog(true);
  };
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
  var _React$useState17 = react_default.a.useState(AnomalyForm_toConsumableArray(props.users.map(function (u) {
      var up = getUserPermissions(u);
      return AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, u), up);
    }))),
    _React$useState18 = AnomalyForm_slicedToArray(_React$useState17, 2),
    users = _React$useState18[0],
    setUsers = _React$useState18[1];
  var files = props.files;
  var anomalyOptions = props.anomalyOptions;
  Object(react["useEffect"])(function () {
    if (props.anomalyId && props.isEdit) {
      var currentAnomaly = props.anomalies.find(function (p) {
        return p.id == props.anomalyId;
      });
      if (currentAnomaly) setNewAnomaly(AnomalyForm_objectSpread({}, currentAnomaly));
    } else if (props.anomalyId && props.isCopy) {
      var _currentAnomaly = props.anomalies.find(function (p) {
        return p.id == props.anomalyId;
      });
      if (_currentAnomaly) setNewAnomaly(AnomalyForm_objectSpread({}, _currentAnomaly));
    } else {
      setNewAnomaly(AnomalyForm_objectSpread({}, emptyAnomaly));
    }
    setUsers(AnomalyForm_toConsumableArray(props.users.map(function (u) {
      var up = getUserPermissions(u);
      return AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, u), up);
    })));
  }, [props.anomalies, props.isEdit, props.isCopy, props.systems, props.users]);

  //console.warn("usersPerm", users);
  /*useEffect(() => {
    setUsers([...props.users.map(u => { let up = getUserPermissions(u); return { ...u, ...up } })]);
  }, [props.anomalies, props.systems, props.users])*/

  var fieldValidators = [{
    name: "platform",
    message: "Please select a Facility"
  }, {
    name: "equipmentTagNo",
    message: "Please enter an Equipment Tag Number"
  }];

  /*** Simple Validator for required fields ***/

  function SimpleValidator(objectData, fields) {
    var errorInfos = [];
    var _iterator = _createForOfIteratorHelper(fields),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        var errorInfo = ValidateField(objectData, field);
        if (errorInfo) errorInfos.push(errorInfo);
      }

      // errorInfo = {errorState:{[field.name]:true},errorMessage:{[field.name]:[field.message]}};
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.error("dad, errorInfos", errorInfos);
    var newErrorState = {};
    var newErrorMessage = {};
    errorInfos.map(function (er) {
      newErrorState = AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newErrorState), er.errorState);
      newErrorMessage = AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newErrorMessage), er.errorMessage);
    });
    setIsError(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, isError), newErrorState));
    setFieldErrorMessage(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, fieldErrorMessage), newErrorMessage));
  }
  function ResetValidatorErrors(fields) {
    var _iterator2 = _createForOfIteratorHelper(fields),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var field = _step2.value;
        setIsError(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, isError), {}, AnomalyForm_defineProperty({}, field, false)));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  function IsErrorField() {
    // return Object.keys(isError).filter(key => allowed.includes(key))
  }
  function ResetValidator(field) {
    setIsError(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, isError), {}, AnomalyForm_defineProperty({}, field, false)));
  }
  var ValidateField = function ValidateField(objectData, field) {
    var setState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    //let isErrorList = [];
    var errorInfo = null;
    if (field.name in objectData) {
      if (objectData[field.name] == "") {
        errorInfo = {
          errorState: AnomalyForm_defineProperty({}, field.name, true),
          errorMessage: AnomalyForm_defineProperty({}, field.name, field.message)
        };
        //console.warn("validator", {...isError, [field.name]:true})
        //setIsError({...isError, [field.name]:true});
        //setFieldErrorMessage({...fieldErrorMessage, [field.name]:[field.message]});
      } else {
        errorInfo = {
          errorState: AnomalyForm_defineProperty({}, field.name, false),
          errorMessage: AnomalyForm_defineProperty({}, field.name, null)
        };
        //setIsError({...isError, [field.name]:false})
        //setFieldErrorMessage({...fieldErrorMessage, [field.name]:null});
      }
    }

    return errorInfo;
  };
  function addAnomaly() {
    var _props$platforms$find;
    SimpleValidator(newAnomaly, fieldValidators);
    console.error([isError, fieldErrorMessage]);
    //setIsError({...isError, ["platform"]:true})
    //return;

    var selectedPlatform = ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == newAnomaly.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--";
    props.addAnomaly(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newAnomaly), {}, {
      code: "AN-" + selectedPlatform + "-" + Math.floor(Math.random() * 101),
      id: Object(v4["a" /* default */])()
    }));
    setNewAnomaly(AnomalyForm_objectSpread({}, emptyAnomaly));
    //props.enqueueSnackbar('New anomaly saved', { variant:'success'});
    props.history.push("/anomalies/all_anomalies");
    // window.location.reload(true)
  }

  function updateAnomaly() {
    //let selectedPlatform =  props.platforms.find(p => p.id == newAnomaly.platform)?.name || "--"
    props.updateAnomaly(AnomalyForm_objectSpread({}, newAnomaly));
    //setNewAnomaly({...emptyAnomaly})
    //props.enqueueSnackbar('New anomaly saved', { variant:'success'});
    // props.history.push("/anomalies/all_anomalies");
  }

  /*** Anomaly File attachemnt ***/
  function attachFilesToAnomaly() {
    //console.warn("files attached...")
    //props.updateTask({ ...newTask, attachedFiles: [...newTask.attachedFiles, ...selectedFiles] });
    var anomalyFiles = files.filter(function (file) {
      return selectedFiles.includes(file.id);
    });
    anomalyFiles = anomalyFiles.map(function (afile) {
      return AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, afile), {}, {
        fileId: afile.id
      });
    });
    setNewAnomaly(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newAnomaly), {}, {
      attachedFiles: [].concat(AnomalyForm_toConsumableArray(newAnomaly.attachedFiles), AnomalyForm_toConsumableArray(anomalyFiles))
    }));
    console.log("attachFilesToTask", [].concat(AnomalyForm_toConsumableArray(newAnomaly.attachedFiles), AnomalyForm_toConsumableArray(anomalyFiles)));
    setAttachFilesDialog(false);
  }
  var removeAttachment = function removeAttachment(id) {
    setNewAnomaly(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newAnomaly), {}, {
      attachedFiles: newAnomaly.attachedFiles.filter(function (f) {
        return f.fileId != id;
      })
    }));
  };
  function handleCloseAttachFilesDialog() {
    setAttachFilesDialog(false);
  }
  function handleAttachFilesClickOpen() {
    var anomalyAttachmentIds = newAnomaly.attachedFiles.map(function (f) {
      return f.fileId;
    });
    newAnomaly.attachedFiles ? setSelectedFiles(AnomalyForm_toConsumableArray(anomalyAttachmentIds)) : setSelectedFiles([]);
    setDialogProps(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, dialogProps), {}, {
      dialogTitle: "Attach files to " + newAnomaly.code,
      selectedItems: newAnomaly.attachedFiles || [],
      setSelectedItems: function setSelectedItems(values) {
        setSelectedFiles(values);
        console.warn(values);
      }
    }));
    setAttachFilesDialog(true);
  }
  var handleFieldChange = function handleFieldChange(event) {
    event.persist();
    // handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.log({ name, value })
    setNewAnomaly(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newAnomaly), {}, AnomalyForm_defineProperty({}, name, value)));
    //console.log(newAnomaly)
  };

  var handleFieldChange2 = function handleFieldChange2(event) {
    event.persist();
    // handleChange(event);
    var _event$target2 = event.target,
      name = _event$target2.name,
      checked = _event$target2.checked;
    //console.log({ name, value })
    setNewAnomaly(AnomalyForm_objectSpread(AnomalyForm_objectSpread({}, newAnomaly), {}, AnomalyForm_defineProperty({}, name, checked)));
    //console.log(newAnomaly)
  };

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Dialog["a" /* default */], {
    open: openAttachFilesDialog,
    fullWidth: true,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, "Attach Files"), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(_fileManager_FilesDialogView, AnomalyForm_extends({
    isMultiSelect: true
  }, dialogProps))), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleCloseAttachFilesDialog,
    color: "primary"
  }, "Cancel"), react_default.a.createElement(Button["a" /* default */], {
    onClick: attachFilesToAnomaly,
    color: "primary"
  }, "Apply"))), react_default.a.createElement(Dialog["a" /* default */], {
    open: openImageViewDialog,
    fullWidth: true,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, "Attachment:", selectedImageFile && selectedImageFile.fileName), react_default.a.createElement(DialogContent["a" /* default */], {
    style: {
      padding: 0
    }
  }, selectedImageFile && react_default.a.createElement("img", {
    style: {
      margin: 5
    },
    src: urls["a" /* BaseURL */] + "/api/files/download/" + selectedImageFile.fileId
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: function onClick() {
      return setOpenImageViewDialog(false);
    },
    color: "primary"
  }, "Close"))), react_default.a.createElement("div", {
    style: {
      padding: 10,
      maxWidth: 800
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, props.isEdit ? react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    onClick: updateAnomaly,
    color: "primary",
    variant: "contained"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    onClick: addAnomaly,
    color: "primary",
    variant: "contained"
  }, "Save")), react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    color: "primary",
    component: react_router_dom["b" /* Link */],
    to: "/anomalies/all_anomalies",
    variant: "outlined"
  }, "Cancel")))), react_default.a.createElement("div", {
    style: {
      padding: 10,
      position: "relative",
      bottom: "0px",
      maxWidth: 800
    }
  }, react_default.a.createElement("form", {
    style: classes
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "platform"
  }, "Facility"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    error: isError["platform"] ? isError["platform"] : false,
    labelId: "platform",
    value: newAnomaly.platform,
    label: "platform",
    onChange: handleFieldChange,
    inputProps: {
      name: "platform",
      id: "platform"
    }
  }, props.platforms && props.platforms.map(function (platform) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: platform.id
    }, platform.name);
  })), react_default.a.createElement(FormHelperText["a" /* default */], {
    error: isError["platform"] ? isError["platform"] : false
  }, fieldErrorMessage["platform"]))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(TextField["a" /* default */], {
    size: "small",
    autoComplete: "equipmentTagNo",
    name: "equipmentTagNo",
    variant: "outlined",
    error: isError["equipmentTagNo"],
    helperText: fieldErrorMessage["equipmentTagNo"],
    fullWidth: true,
    value: newAnomaly.equipmentTagNo,
    onChange: handleFieldChange,
    id: "equipmentTagNo",
    label: "Equipment Tag No."
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(TextField["a" /* default */], {
    size: "small",
    autoComplete: "component",
    name: "component",
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.component,
    onChange: handleFieldChange,
    id: "component",
    label: "Component"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "system"
  }, "System"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "system",
    value: newAnomaly.system,
    label: "system",
    onChange: handleFieldChange,
    inputProps: {
      name: "system",
      id: "system"
    }
  }, props.systems && props.systems.map(function (system) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: system.id
    }, system.code);
  })))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(TextField["a" /* default */], {
    size: "small",
    name: "designCode",
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.designCode,
    onChange: handleFieldChange,
    id: "designCode",
    label: "Design Code"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(TextField["a" /* default */], {
    size: "small",
    autoComplete: "yearOfBuild",
    name: "yearOfBuild",
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.yearOfBuild,
    onChange: handleFieldChange,
    id: "yearOfBuild",
    label: "Year of Build"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl2
  }, "Safety Critical Equipment", react_default.a.createElement("span", {
    style: {
      width: "20%",
      position: "absolute",
      top: '-45%',
      right: '-8vw'
    }
  }, react_default.a.createElement(Checkbox["a" /* default */], {
    checked: newAnomaly.isSCE,
    name: "isSCE",
    onChange: handleFieldChange2,
    inputProps: {
      "aria-label": "controlled"
    },
    id: "isSCE"
  })))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "activityMethod"
  }, "Activity Method"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "activityMethod",
    value: newAnomaly.activityMethod,
    label: "activityMethod",
    onChange: handleFieldChange,
    inputProps: {
      name: "activityMethod",
      id: "activityMethod"
    }
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection"
  }, "Inspection"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Routine Monitoring/Maintenance"
  }, "Routine Monitoring/Maintenance"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Engineering Assessment"
  }, "Engineering Assessment")))), newAnomaly.activityMethod === 'Inspection' && react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "inspectionType"
  }, "Inspection Type"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "inspectionType",
    value: newAnomaly.inspectionType,
    label: "inspectionType",
    onChange: handleFieldChange,
    inputProps: {
      name: "inspectionType",
      id: "inspectionType"
    }
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection Visual (GVI, CVI)"
  }, "Inspection Visual (GVI, CVI)"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection Ultrasonic Testing UT"
  }, "Inspection Ultrasonic Testing UT"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection Magnetic Particle"
  }, "Inspection Magnetic Particle"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection Dye Penetrant Test"
  }, "Inspection Dye Penetrant Test"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: "Inspection Radiography"
  }, "Inspection Radiography")))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "anomalyClass"
  }, "Anomaly Class"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "anomalyClass",
    value: newAnomaly.anomalyClass,
    label: "anomalyClass",
    onChange: handleFieldChange,
    inputProps: {
      name: "anomalyClass",
      id: "anomalyClass"
    }
  }, props.anomalyClasses && props.anomalyClasses.map(function (c) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: c.id
    }, c.name + "(" + c.code + ")");
  })))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "analysedBy"
  }, "Analysis assigned to"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "analysedBy",
    value: newAnomaly.analysedBy,
    label: "Analysis assigned to",
    onChange: handleFieldChange,
    inputProps: {
      name: "analysedBy",
      id: "analysedBy"
    }
  }, users && users.filter(function (i) {
    return i.canAnalyse;
  }).map(function (c) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: c.id
    }, c.firstName + " " + c.lastName + (c.position ? " (" + c.position + ")" : ""));
  })))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(TextField["a" /* default */], {
    autoComplete: "description",
    name: "description",
    variant: "outlined",
    fullWidth: true,
    multiline: true,
    rows: "4",
    value: newAnomaly.description,
    onChange: handleFieldChange,
    id: "description",
    label: "Description"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return handleAttachFilesClickOpen();
    },
    variant: "outlined"
  }, "Attach Documents"))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, newAnomaly.attachedFiles && newAnomaly.attachedFiles.map(function (file) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: file.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: file.id,
      className: classes.paper,
      style: {
        margin: 5
      }
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      direction: "row",
      alignItems: "flex-start"
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true
    }, file.fileClass === "IMAGE" ? react_default.a.createElement("img", {
      onClick: function onClick() {
        return viewImageFile(file);
      },
      style: {
        cursor: "pointer",
        width: "100%",
        maxWidth: 400,
        borderRadius: 5,
        margin: 5
      },
      src: urls["a" /* BaseURL */] + "/api/files/download/" + file.fileId
    }) : react_default.a.createElement(file_icon_inline["a" /* default */], {
      style: {
        margin: 5,
        color: "FF9900"
      }
    })), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      container: true,
      direction: "column",
      style: {
        marginLeft: 10
      }
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      style: {
        fontSize: 14
      },
      noWrap: true
    }, file.fileName), react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      style: {
        fontSize: 10
      },
      noWrap: true
    }, Object(filesUtility["b" /* formatSizeUnits */])(file.fileSize)))), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return removeAttachment(file.fileId);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }))))));
};
var AnomalyForm_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addAnomaly: function addAnomaly(data) {
      dispatch(Object(anomalyActions["b" /* addAnomaly */])(data));
    },
    updateAnomaly: function updateAnomaly(data) {
      dispatch(Object(anomalyActions["x" /* updateAnomaly */])(data));
    },
    attachFilesToAnomaly: function attachFilesToAnomaly(task) {
      dispatch(Object(anomalyActions["c" /* attachFilesToAnomaly */])(task));
    }
  };
};
var AnomalyForm_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    platforms: state.platforms,
    systems: state.systems,
    anomalyClasses: state.anomalyClasses,
    anomalyPermissions: state.anomalyPermissions,
    users: state.users,
    files: state.files
  };
};
/* harmony default export */ var aimComponents_AnomalyForm = (Object(es["b" /* connect */])(AnomalyForm_mapStateToProps, AnomalyForm_mapDispatchToProps)(Object(build["withSnackbar"])(AnomalyForm_AnomalyForm)));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(1027);

// EXTERNAL MODULE: ./src/utility/riskAnalysisUtility.js
var riskAnalysisUtility = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/esm/DatePicker.js + 13 modules
var DatePicker = __webpack_require__(1034);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/colors/lightBlue.js
var lightBlue = __webpack_require__(1192);
var lightBlue_default = /*#__PURE__*/__webpack_require__.n(lightBlue);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 13 modules
var createMuiTheme = __webpack_require__(275);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(1024);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(5);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./src/_components/aimComponents/AnomalyAnalysisForm.js
function AnomalyAnalysisForm_typeof(obj) { "@babel/helpers - typeof"; return AnomalyAnalysisForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyAnalysisForm_typeof(obj); }
function AnomalyAnalysisForm_toConsumableArray(arr) { return AnomalyAnalysisForm_arrayWithoutHoles(arr) || AnomalyAnalysisForm_iterableToArray(arr) || AnomalyAnalysisForm_unsupportedIterableToArray(arr) || AnomalyAnalysisForm_nonIterableSpread(); }
function AnomalyAnalysisForm_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyAnalysisForm_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function AnomalyAnalysisForm_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return AnomalyAnalysisForm_arrayLikeToArray(arr); }
function AnomalyAnalysisForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyAnalysisForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyAnalysisForm_ownKeys(Object(source), !0).forEach(function (key) { AnomalyAnalysisForm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyAnalysisForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyAnalysisForm_defineProperty(obj, key, value) { key = AnomalyAnalysisForm_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyAnalysisForm_toPropertyKey(arg) { var key = AnomalyAnalysisForm_toPrimitive(arg, "string"); return AnomalyAnalysisForm_typeof(key) === "symbol" ? key : String(key); }
function AnomalyAnalysisForm_toPrimitive(input, hint) { if (AnomalyAnalysisForm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyAnalysisForm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalyAnalysisForm_slicedToArray(arr, i) { return AnomalyAnalysisForm_arrayWithHoles(arr) || AnomalyAnalysisForm_iterableToArrayLimit(arr, i) || AnomalyAnalysisForm_unsupportedIterableToArray(arr, i) || AnomalyAnalysisForm_nonIterableRest(); }
function AnomalyAnalysisForm_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyAnalysisForm_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyAnalysisForm_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyAnalysisForm_arrayLikeToArray(o, minLen); }
function AnomalyAnalysisForm_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyAnalysisForm_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyAnalysisForm_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












//import {countries} from 'countries-List';
//import { List } from '@material-ui/core';













//import Moment from 'react-moment';

var defaultMaterialTheme = Object(createMuiTheme["a" /* default */])({
  palette: {
    primary: lightBlue_default.a
  }
});
function AnomalyAnalysisForm_preventDefault(event) {
  event.preventDefault();
}
var AnomalyAnalysisForm_useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    },
    formControl: {
      minWidth: 120,
      width: "100%"
    }
  };
});
var AnomalyAnalysisForm_AnomalyAnalysisForm = function AnomalyAnalysisForm(props) {
  var _props$platforms$find;
  var emptyAnomaly = {
    id: Object(v4["a" /* default */])(),
    code: "",
    platform: "",
    dateRaised: new Date(),
    equipmentTagNo: "",
    component: "",
    description: "",
    system: "",
    anomalyClass: "",
    priority: "",
    analyser: "",
    actionOwner: "",
    reviewer: "",
    loF: 0,
    soF: 0,
    coF: 0,
    closeOutDate: new Date(),
    action: "",
    analysisComment: "",
    isShutdownRequired: false,
    isAnalysed: false,
    isApproved: false,
    analysedBy: null,
    approvedBy: null
  };

  //

  var selectedAnomaly = props.anomalies.find(function (p) {
    return p.id == props.anomalyId;
  });
  //console.warn("AN",selectedAnomaly)
  var classes = AnomalyAnalysisForm_useStyles();
  var _React$useState = react_default.a.useState(AnomalyAnalysisForm_objectSpread({}, selectedAnomaly)),
    _React$useState2 = AnomalyAnalysisForm_slicedToArray(_React$useState, 2),
    newAnomaly = _React$useState2[0],
    setNewAnomaly = _React$useState2[1];
  var anomalyOptions = props.anomalyOptions;
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
  var _React$useState3 = react_default.a.useState(AnomalyAnalysisForm_toConsumableArray(props.users.map(function (u) {
      var up = getUserPermissions(u);
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, u), up);
    }))),
    _React$useState4 = AnomalyAnalysisForm_slicedToArray(_React$useState3, 2),
    users = _React$useState4[0],
    setUsers = _React$useState4[1];
  Object(react["useEffect"])(function () {
    var selectedAnomaly = props.anomalies.find(function (p) {
      return p.id == props.anomalyId;
    });
    setNewAnomaly(AnomalyAnalysisForm_objectSpread({}, selectedAnomaly));
    setUsers(AnomalyAnalysisForm_toConsumableArray(props.users.map(function (u) {
      var up = getUserPermissions(u);
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, u), up);
    })));
  }, [props.anomalies]);
  function saveAnomalyAnalysis() {
    // console.log("khhkhk", newAnomaly);
    props.saveAnomalyAnalysis(AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, newAnomaly), {}, {
      isAnalysed: true
    }));
    //setNewAnomaly({...emptyAnomaly})
    props.enqueueSnackbar("Anomaly analysis saved", {
      variant: "success"
    });
    props.history.push("/anomalies/new_anomalies");
  }
  var handleFieldChange = function handleFieldChange(event) {
    event.persist();
    //handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.log({ name, value })
    setNewAnomaly(AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, newAnomaly), {}, AnomalyAnalysisForm_defineProperty({}, name, value)));
    //console.log(newAnomaly)
  };

  // const handleCoFFieldChange = (event) => {
  //   event.persist();
  //   //handleChange(event);
  //   const { name, value } = event.target;
  //   console.log({ name, value });
  //   setNewAnomaly({ ...newAnomaly, [name]: value });
  //   //console.log(newAnomaly)
  //   if (newAnomaly.loF != null && newAnomaly.loF != "") {
  //     let enteredLoF = props.loFs.find((p) => {
  //       return p.id == newAnomaly.loF;
  //     });

  //     let enteredCoF = props.coFs.find((p) => {
  //       return p.id == value;
  //     });

  //     let maxCoF = props.coFs.reduce((t, a) => {
  //       if (t > a.score) return t;
  //       else return a.score;
  //     }, 0);

  //     let minCoF = props.coFs.reduce((t, a) => {
  //       if (t < a.score) return t;
  //       else return a.score;
  //     }, Infinity);

  //     let setPriority = getPriority(
  //       props.priorities,
  //       props.coFs,
  //       props.loFs,
  //       enteredLoF,
  //       enteredCoF
  //     );

  //     var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
  //     setNewAnomaly({
  //       ...newAnomaly,
  //       [name]: value,
  //       priority: setPriority.id,
  //       closeOutDate: moment(new Date()).add(
  //         enteredLoF.minDays +
  //           Math.round(
  //             dateRange * (enteredLoF.maxDays - enteredLoF.minDays)
  //           ),
  //         "days"
  //       ),
  //     });
  //   }
  // };
  var getCloseOut = function getCloseOut(p) {
    switch (p) {
      case "IA":
        return 10 * 12;
      case "P5":
        return 5 * 12;
      case "P4":
        return 36;
      case "P3":
        return 12;
      case "P2":
        return 6;
      case "P1":
        return 3;
      case "P0":
        return 1;
      default:
        return 0;
    }
  };
  var handleCOFFieldChange = function handleCOFFieldChange(event) {
    event.persist();
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    console.log({
      name: name,
      value: value
    });
    setNewAnomaly(function (prevState) {
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, AnomalyAnalysisForm_defineProperty({}, name, value));
    });
    var setPriority = Object(riskAnalysisUtility["a" /* getPriority */])(newAnomaly.loF, value);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly(function (prevState) {
      var _objectSpread4;
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, (_objectSpread4 = {}, AnomalyAnalysisForm_defineProperty(_objectSpread4, name, value), AnomalyAnalysisForm_defineProperty(_objectSpread4, "priority", setPriority), AnomalyAnalysisForm_defineProperty(_objectSpread4, "closeOutDate", moment_default()(new Date()).add(getCloseOut(setPriority), "months")), _objectSpread4));
    });
  };
  var handleLOFFieldChange = function handleLOFFieldChange(event) {
    event.persist();
    var _event$target3 = event.target,
      name = _event$target3.name,
      value = _event$target3.value;
    console.log({
      name: name,
      value: value
    });
    setNewAnomaly(function (prevState) {
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, AnomalyAnalysisForm_defineProperty({}, name, value));
    });
    var setPriority = Object(riskAnalysisUtility["a" /* getPriority */])(value, newAnomaly.coF);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly(function (prevState) {
      var _objectSpread6;
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, (_objectSpread6 = {}, AnomalyAnalysisForm_defineProperty(_objectSpread6, name, value), AnomalyAnalysisForm_defineProperty(_objectSpread6, "priority", setPriority), AnomalyAnalysisForm_defineProperty(_objectSpread6, "closeOutDate", moment_default()(new Date()).add(getCloseOut(setPriority), "months")), _objectSpread6));
    });
  };
  var handleSOFFieldChange = function handleSOFFieldChange(event) {
    event.persist();
    var _event$target4 = event.target,
      name = _event$target4.name,
      value = _event$target4.value;
    console.log({
      name: name,
      value: value
    });
    setNewAnomaly(function (prevState) {
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, AnomalyAnalysisForm_defineProperty({}, name, value));
    });
    var setPriority = Object(riskAnalysisUtility["b" /* getPrioritySoF */])(value);
    // props.priorities,
    // props.coFs,
    // props.loFs,
    // enteredLoF,
    // enteredCoF

    // var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
    setNewAnomaly(function (prevState) {
      var _objectSpread8;
      return AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, prevState), {}, (_objectSpread8 = {}, AnomalyAnalysisForm_defineProperty(_objectSpread8, name, value), AnomalyAnalysisForm_defineProperty(_objectSpread8, "priority", setPriority), AnomalyAnalysisForm_defineProperty(_objectSpread8, "closeOutDate", moment_default()(new Date()).add(getCloseOut(setPriority), "months")), _objectSpread8));
    });
  };
  var handlePoFFieldChange = function handlePoFFieldChange(event) {
    event.persist();
    //handleChange(event);
    var _event$target5 = event.target,
      name = _event$target5.name,
      value = _event$target5.value;
    console.log({
      name: name,
      value: value
    });
    setNewAnomaly(AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, newAnomaly), {}, AnomalyAnalysisForm_defineProperty({}, name, value)));
    //console.log(newAnomaly)
    if (newAnomaly.coF != null && newAnomaly.coF != "") {
      var _objectSpread10;
      var enteredLoF = props.loFs.find(function (p) {
        return p.id == value;
      });
      var enteredCoF = props.coFs.find(function (p) {
        return p.id == newAnomaly.coF;
      });
      var maxCoF = props.coFs.reduce(function (t, a) {
        if (t > a.score) return t;else return a.score;
      }, 0);
      var minCoF = props.coFs.reduce(function (t, a) {
        if (t < a.score) return t;else return a.score;
      }, Infinity);
      var setPriority = Object(riskAnalysisUtility["a" /* getPriority */])(props.priorities, props.coFs, props.loFs, enteredLoF, enteredCoF);
      var dateRange = (enteredCoF.score - minCoF) / (maxCoF - minCoF);
      setNewAnomaly(AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, newAnomaly), {}, (_objectSpread10 = {}, AnomalyAnalysisForm_defineProperty(_objectSpread10, name, value), AnomalyAnalysisForm_defineProperty(_objectSpread10, "priority", setPriority.id), AnomalyAnalysisForm_defineProperty(_objectSpread10, "closeOutDate", moment_default()(new Date()).add(enteredLoF.minDays + Math.round(dateRange * (enteredLoF.maxDays - enteredLoF.minDays)), "days")), _objectSpread10)));
    }
  };
  return react_default.a.createElement("div", {
    style: {
      maxWidth: 700
    }
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 18,
      color: "#555555"
    }
  }, newAnomaly.code), react_default.a.createElement("div", {
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
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    onClick: saveAnomalyAnalysis,
    color: "primary",
    variant: "contained"
  }, "Save Analysis")), react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(Button["a" /* default */], {
    size: "small",
    color: "primary",
    component: react_router_dom["b" /* Link */],
    to: "/anomalies/new_anomalies",
    variant: "outlined"
  }, "Cancel")))), react_default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Anomaly Code"), react_default.a.createElement(Typography["a" /* default */], null, newAnomaly.code)), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Facility"), react_default.a.createElement(Typography["a" /* default */], null, ((_props$platforms$find = props.platforms.find(function (p) {
    return p.id == newAnomaly.platform;
  })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--")), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Component"), react_default.a.createElement(Typography["a" /* default */], null, newAnomaly.component)), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Equipment/Tag No."), react_default.a.createElement(Typography["a" /* default */], null, newAnomaly.equipmentTagNo)), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Description"), react_default.a.createElement(Typography["a" /* default */], null, newAnomaly.description)), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(Typography["a" /* default */], {
    style: {
      fontSize: 16,
      fontWeight: "bold"
    }
  }, "Date Raised"), react_default.a.createElement(Typography["a" /* default */], null, react_default.a.createElement(dist_default.a, {
    format: "LL",
    date: newAnomaly.dateRaised
  }))))), react_default.a.createElement("div", {
    style: {
      padding: 10,
      position: "relative",
      bottom: "0px"
    }
  }, react_default.a.createElement("form", {
    style: classes
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "action"
  }, "Action"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "action",
    value: newAnomaly.action,
    label: "Action",
    onChange: handleFieldChange,
    inputProps: {
      name: "action",
      id: "action"
    }
  }, props.actions && props.actions.map(function (c) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: c.id
    }, c.name);
  })))), !anomalyOptions.isAnalysisRBIBased && react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "soF"
  }, "SoF"), react_default.a.createElement(Select["a" /* default */], {
    size: "small",
    inputProps: {
      name: "soF",
      id: "soF"
    },
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.soF,
    onChange: handleSOFFieldChange,
    labelId: "soF",
    label: "SoF"
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    value: 1
  }, "1"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 2
  }, "2"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 3
  }, "3"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 4
  }, "4"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 5
  }, "5")))), anomalyOptions.isAnalysisRBIBased && react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "loF"
  }, "LoF"), react_default.a.createElement(Select["a" /* default */], {
    size: "small",
    inputProps: {
      name: "loF",
      id: "loF"
    },
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.loF,
    onChange: handleLOFFieldChange,
    labelId: "loF",
    label: "LoF"
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    value: 1
  }, "1"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 2
  }, "2"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 3
  }, "3"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 4
  }, "4"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 5
  }, "5")))), anomalyOptions.isAnalysisRBIBased && react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "coF"
  }, "CoF"), react_default.a.createElement(Select["a" /* default */], {
    size: "small",
    inputProps: {
      name: "coF",
      id: "coF"
    },
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.coF,
    onChange: handleCOFFieldChange,
    labelId: "coF",
    label: "CoF"
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    value: 1
  }, "1"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 2
  }, "2"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 3
  }, "3"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 4
  }, "4"), react_default.a.createElement(MenuItem["a" /* default */], {
    value: 5
  }, "5")))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    style: {
      backgroundColor: "#dafff2"
    },
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "priority"
  }), react_default.a.createElement(TextField["a" /* default */], {
    size: "small",
    inputProps: {
      name: "priority",
      id: "priority",
      readOnly: true
    },
    variant: "outlined",
    fullWidth: true,
    value: newAnomaly.priority,
    labelId: "priority",
    label: "Priority"
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "actionOwner"
  }, "Action Owner"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "actionOwner",
    value: newAnomaly.actionOwner,
    label: "Action Owner",
    onChange: handleFieldChange,
    inputProps: {
      name: "actionOwner",
      id: "actionOwner"
    }
  }, props.users && props.users.map(function (c) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: c.id
    }, c.firstName + " " + c.lastName);
  })))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    name: "isShutdownRequired",
    value: newAnomaly.isShutdownRequired,
    onChange: handleFieldChange,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Shutdown Required"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(TextField["a" /* default */], {
    autoComplete: "analysisComment",
    name: "analysisComment",
    variant: "outlined",
    fullWidth: true,
    multiline: true,
    rows: "4",
    value: newAnomaly.analysisComment,
    onChange: handleFieldChange,
    id: "analysisComment",
    label: "Analysis Comment"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(ThemeProvider["a" /* default */], {
    theme: defaultMaterialTheme
  }, react_default.a.createElement(DatePicker["a" /* DatePicker */], {
    style: {
      backgroundColor: "#dafff2"
    },
    size: "small",
    openTo: "year",
    fullWidth: true,
    inputVariant: "outlined",
    label: "Close out Date",
    format: "MM-DD-YYYY",
    views: ["year", "month", "date"],
    value: newAnomaly.closeOutDate,
    onChange: function onChange(date) {
      setNewAnomaly(AnomalyAnalysisForm_objectSpread(AnomalyAnalysisForm_objectSpread({}, newAnomaly), {}, {
        closeOutDate: date.toDate()
      }));
    },
    InputAdornmentProps: {
      position: "start"
    }
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControl["a" /* default */], {
    size: "small",
    variant: "outlined",
    className: classes.formControl
  }, react_default.a.createElement(InputLabel["a" /* default */], {
    htmlFor: "reviewer"
  }, "Review assigned to"), react_default.a.createElement(Select["a" /* default */], {
    autoWidth: true,
    labelId: "reviewer",
    value: newAnomaly.reviewer,
    label: "Review assigned to",
    onChange: handleFieldChange,
    inputProps: {
      name: "reviewer",
      id: "reviewer"
    }
  }, users && users.filter(function (i) {
    return i.canReview;
  }).map(function (c) {
    return react_default.a.createElement(MenuItem["a" /* default */], {
      value: c.id
    }, c.firstName + " " + c.lastName);
  }))))))));
};
var AnomalyAnalysisForm_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveAnomalyAnalysis: function saveAnomalyAnalysis(data) {
      dispatch(Object(anomalyActions["u" /* saveAnomalyAnalysis */])(data));
    }
  };
};
var AnomalyAnalysisForm_mapStateToProps = function mapStateToProps(state) {
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
/* harmony default export */ var aimComponents_AnomalyAnalysisForm = (Object(es["b" /* connect */])(AnomalyAnalysisForm_mapStateToProps, AnomalyAnalysisForm_mapDispatchToProps)(Object(build["withSnackbar"])(AnomalyAnalysisForm_AnomalyAnalysisForm)));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// CONCATENATED MODULE: ./src/_views/_aimViews/NewAnomalyView.js
function NewAnomalyView_extends() { NewAnomalyView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NewAnomalyView_extends.apply(this, arguments); }














var NewAnomalyView_NewAnomalyView = function NewAnomalyView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var params = props.match.params;
  var currentAnomaly = props.anomalies.find(function (a) {
    return a.id == params.anomalyId;
  });
  //const anomalyId = props.anomalies.find(p => { return p.id == params.anomalyId });
  //console.warn(anomalyId)
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, props.isNew ? " New Anomaly" : props.isEdit ? "Edit Anomaly : ".concat(currentAnomaly === null || currentAnomaly === void 0 ? void 0 : currentAnomaly.code) : " Analyse Anomaly", " "), react_default.a.createElement("div", {
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
  }, props.isNew || props.isCopy ? react_default.a.createElement(aimComponents_AnomalyForm, NewAnomalyView_extends({
    anomalyId: params.anomalyId
  }, props)) : props.isEdit ? react_default.a.createElement(aimComponents_AnomalyForm, NewAnomalyView_extends({
    anomalyId: params.anomalyId
  }, props)) : react_default.a.createElement(aimComponents_AnomalyAnalysisForm, NewAnomalyView_extends({}, props, {
    anomalyId: params.anomalyId
  })))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var NewAnomalyView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_NewAnomalyView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(NewAnomalyView_mapStateToProps)(NewAnomalyView_NewAnomalyView));

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(11);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1032);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(1471);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(1469);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(1472);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(1473);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/countries-List/dist/index.es5.min.js
var index_es5_min = __webpack_require__(1069);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1470);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(84);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/common/customButton.js
var customButton = __webpack_require__(1072);

// EXTERNAL MODULE: ./src/_services/index.js + 25 modules
var _services = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AttachFileOutlined.js
var AttachFileOutlined = __webpack_require__(1078);
var AttachFileOutlined_default = /*#__PURE__*/__webpack_require__.n(AttachFileOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(1077);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(36);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(593);

// EXTERNAL MODULE: ./src/_utilities/CommonStyles.js
var CommonStyles = __webpack_require__(15);

// EXTERNAL MODULE: ./src/utility/filesUtility.js
var filesUtility = __webpack_require__(1068);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(5);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/_components/aimComponents/DialogPrompt.js
var DialogPrompt = __webpack_require__(1096);

// EXTERNAL MODULE: ./src/_components/aimComponents/AnomalyRecordView.js
var AnomalyRecordView = __webpack_require__(1097);

// CONCATENATED MODULE: ./src/_components/aimComponents/AnomaliesTable.js
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

var AnomaliesTable_AnomaliesTable = function AnomaliesTable(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(props.anomalies),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rowData = _React$useState4[0],
    setRowData = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(rowData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredRowData = _React$useState6[0],
    setFilteredRowData = _React$useState6[1];
  var _React$useState7 = react_default.a.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    openRecordView = _React$useState8[0],
    setOpenRecordView = _React$useState8[1];
  var _React$useState9 = react_default.a.useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    dialogProps = _React$useState10[0],
    setDialogProps = _React$useState10[1];
  var _React$useState11 = react_default.a.useState({}),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    selectedAnomaly = _React$useState12[0],
    setSelectedAnomaly = _React$useState12[1];
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
    Object(filesUtility["a" /* downloadFile */])("/api/anomalies/download/all_anomalies", "Anomalies.xlsx", "Excel");
  };
  Object(react["useEffect"])(function () {
    if (props.showOnlyOverDue) {
      setRowData(props.anomalies.filter(function (i) {
        return i.status != "CLOSED" && moment_default()(new Date(i.closeOutDate)) <= moment_default()(new Date());
      }));
      setFilteredRowData(props.anomalies.filter(function (i) {
        return i.status != "CLOSED" && moment_default()(new Date(i.closeOutDate)) <= moment_default()(new Date());
      }));
    } else if (props.showOnlyClosedOut) {
      setRowData(props.anomalies.filter(function (i) {
        return i.status == "CLOSED";
      }));
      setFilteredRowData(props.anomalies.filter(function (i) {
        return i.status == "CLOSED";
      }));
    } else {
      setRowData(props.anomalies);
      setFilteredRowData(props.anomalies);
    }
  }, [props.anomalies, props.showOnlyOverDue]);
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
      setDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selAnomaly.code + ""
      }));
    }
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(DialogPrompt["a" /* default */], _extends({
    open: openRecordView
  }, dialogProps, {
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
  }, "Code"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Facility"), react_default.a.createElement(StyledTableCell, {
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
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    soFs: state.soFs,
    coFs: state.coFs,
    loFs: state.loFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
/* harmony default export */ var aimComponents_AnomaliesTable = (Object(es["b" /* connect */])(mapStateToProps)(AnomaliesTable_AnomaliesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// CONCATENATED MODULE: ./src/_views/_aimViews/AnomaliesView.js













var AnomaliesView_AnomaliesView = function AnomaliesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, props.showOnlyOverDue ? "Overdue Anomalies" : props.showOnlyClosedOut ? "Closed Out Anomalies" : "All Anomalies (" + props.anomalies.length + ")"), react_default.a.createElement("div", {
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
  }, react_default.a.createElement(aimComponents_AnomaliesTable, {
    showOnlyOverDue: props.showOnlyOverDue,
    showOnlyClosedOut: props.showOnlyClosedOut
  }))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var AnomaliesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_AnomaliesView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(AnomaliesView_mapStateToProps)(AnomaliesView_AnomaliesView));

/***/ }),

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(11);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1032);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/react-chartjs-2/es/index.js
var react_chartjs_2_es = __webpack_require__(223);

// EXTERNAL MODULE: ./src/utility/colors.js
var colors = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(5);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(276);

// CONCATENATED MODULE: ./src/_components/aimComponents/AnomalyCharts.js










var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    },
    fixedHeight: {
      height: 240
    }
  };
});
var AnomalyCharts_pieData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "Rainfall",
    backgroundColor: "rgba(75,192,192,1)",
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 2,
    data: [65, 59, 80, 81, 56]
  }]
};
var barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [{
    label: "My First dataset",
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};
var AnomalyCharts_priorities = ["IA", "P5", "P4", "P3", "P2", "P1", "P0"];
function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function GetAnomalyClassesStatistics(anomalies, anomalyClasses) {
  var labels = [];
  var data = [];
  var backgroundColor = [];
  var indx = 0;
  anomalyClasses && anomalyClasses.map(function (ac) {
    indx++;
    var anomaliesCount = anomalies.filter(function (i) {
      return i.anomalyClass == ac.id;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac.name);
    backgroundColor.push(Object(colors["a" /* colorInterpolator4 */])("#0099ff", "#ff1100", "#ffe601", "#3fb57f", "#0011ff", indx / anomalyClasses.length));
  });
  return {
    labels: labels,
    datasets: [{
      label: "Rainfall",
      borderWidth: 1,
      data: data,
      backgroundColor: backgroundColor
    }]
  };
}
function GetAnomalyPriorityStatistics(anomalies, priorities) {
  var labels = [];
  var data = [];
  var backgroundColor = [];
  var indx = 0;
  priorities && priorities.map(function (ac) {
    indx++;
    var anomaliesCount = anomalies.filter(function (i) {
      return i.priority == ac;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac);
    backgroundColor.push(Object(colors["a" /* colorInterpolator4 */])("#0099ff", "#ff1100", "#ffe601", "#3fb57f", "#0011ff", indx / priorities.length));
  });
  return {
    labels: labels,
    datasets: [{
      label: "Rainfall",
      borderWidth: 1,
      data: data,
      backgroundColor: backgroundColor
    }]
  };
}
function GetAnomalyActionsStatistics(anomalies, actions) {
  var labels = [];
  var data = [];
  var backgroundColor = [];
  var indx = 0;
  actions && actions.map(function (ac) {
    indx++;
    var anomaliesCount = anomalies.filter(function (i) {
      return i.action == ac.id;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac.name);
    backgroundColor.push(Object(colors["a" /* colorInterpolator4 */])("#0099ff", "#ff1100", "#ffe601", "#3fb57f", "#0011ff", indx / actions.length));
  });
  return {
    labels: labels,
    datasets: [{
      label: "Rainfall",
      borderWidth: 1,
      data: data,
      backgroundColor: backgroundColor
    }]
  };
}
function GetAnomalyCoFsStatistics(anomalies, coFs) {
  var labels = [];
  var data = [];
  coFs && coFs.map(function (ac) {
    var anomaliesCount = anomalies.filter(function (i) {
      return i.coF == ac.id;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac.name);
  });
  return {
    labels: labels,
    datasets: [{
      label: "CoFs",
      borderWidth: 1,
      data: data,
      backgroundColor: "orange"
    }]
  };
}
function GetAnomalyPlatformStatistics(anomalies, platforms) {
  var labels = [];
  var data = [];
  platforms && platforms.map(function (ac) {
    var anomaliesCount = anomalies.filter(function (i) {
      return i.platform == ac.id;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac.name);
  });
  return {
    labels: labels,
    datasets: [{
      label: "Facilities",
      borderWidth: 1,
      data: data,
      backgroundColor: "orange"
    }]
  };
}
function GetAnomalyClassByRiskStatistics(anomalies, anomalyClasses, priorities) {
  var datasets = [];
  var labels = [];
  anomalyClasses && anomalyClasses.map(function (ac) {
    labels.push(ac.name);
  });
  var labels2 = [];
  var backgroundColor = [];
  var indx = 0;
  priorities && priorities.map(function (pr) {
    indx++;
    //labels2.push(pr.name);
    backgroundColor.push(getRandomColor());
    var data = [];
    anomalyClasses && anomalyClasses.map(function (ac) {
      //labels.push(ac.name);
      var anomaliesCount = anomalies.filter(function (i) {
        return i.anomalyClass == ac.id && i.priority == pr;
      }).length;
      data.push(anomaliesCount);
    });
    datasets.push({
      label: pr,
      borderWidth: 1,
      data: data,
      backgroundColor: Object(colors["a" /* colorInterpolator4 */])("#0099ff", "#ff9900", "#ffe601", "#b2fb72", "#220000", indx / priorities.length)
    });
  });
  return {
    labels: labels,
    //:['label'],
    datasets: datasets
  };
}
// Group by CoF and PoF
function GetAnomalyPlatformByCoFPoFStatistics(anomalies, platforms, priorities) {
  var datasets = [];
  var labels = [];
  platforms && platforms.map(function (ac) {
    labels.push(ac.name);
  });
  var labels2 = [];
  var backgroundColor = [];
  var indx = 0;
  priorities && priorities.map(function (pr) {
    indx++;
    //labels2.push(pr.name);
    backgroundColor.push(getRandomColor());
    var data = [];
    platforms && platforms.map(function (ac) {
      //labels.push(ac.name);
      var anomaliesCount = anomalies.filter(function (i) {
        return i.platform === ac.id && i.priority === pr;
      }).length;
      data.push(anomaliesCount);
    });
    datasets.push({
      label: pr,
      borderWidth: 1,
      data: data,
      backgroundColor: Object(colors["a" /* colorInterpolator4 */])("#0099ff", "#ff1100", "#ffe601", "#b2fb72", "#220000", indx / priorities.length)
    });
  });
  return {
    labels: labels,
    //:['label'],
    datasets: datasets
  };
}
function GetAnomalyLoFsStatistics(anomalies, loFs) {
  var labels = [];
  var data = [];
  loFs && loFs.map(function (ac) {
    var anomaliesCount = anomalies.filter(function (i) {
      return i.loF == ac.id;
    }).length;
    data.push(anomaliesCount);
    labels.push(ac.name);
  });
  return {
    labels: labels,
    datasets: [{
      label: "LoFs",
      borderWidth: 1,
      data: data,
      backgroundColor: "purple"
    }]
  };
}
var AnomalyCharts_InfoWidget = function InfoWidget(value, title) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#1c75bc";
  return react_default.a.createElement("div", {
    style: {
      border: "0px solid ".concat(color),
      minWidth: 80,
      borderRadius: 3,
      display: "inline-block",
      margin: 2
    }
  }, react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      background: "#e8f9fd",
      color: "".concat(color),
      fontSize: 24,
      fontWeight: "bold"
    }
  }, value), react_default.a.createElement("div", {
    style: {
      textAlign: "center",
      background: "".concat(color),
      color: "#FFFFFF",
      fontSize: 13,
      fontWeight: "normal",
      padding: "2px 8px"
    }
  }, title));
};
var AnomalyCharts_AnomalyCharts = function AnomalyCharts(props) {
  //populateTableData(countries, caseData)

  //const [stateData, setStateData] = React.useState(populateTableData(countries, caseData));

  var pieData = GetAnomalyClassesStatistics(props.anomalies, props.anomalyClasses);
  var pieActionData = GetAnomalyActionsStatistics(props.anomalies, props.actions);
  var barCoFData = GetAnomalyCoFsStatistics(props.anomalies, props.coFs);
  var barLoFData = GetAnomalyLoFsStatistics(props.anomalies, props.loFs);
  var barPlatformData = GetAnomalyPlatformStatistics(props.anomalies, props.platforms);
  var barPlatformByCoFPoF = GetAnomalyPlatformByCoFPoFStatistics(props.anomalies, props.platforms, AnomalyCharts_priorities);
  var piePrioritiesData = GetAnomalyPriorityStatistics(props.anomalies, AnomalyCharts_priorities);
  var barRiskByClass = GetAnomalyClassByRiskStatistics(props.anomalies, props.anomalyClasses, AnomalyCharts_priorities);
  var classes = useStyles();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("div", {
    style: {
      padding: 10,
      width: "100%"
    }
  }, react_default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      margin: 0,
      width: "100%",
      overflow: "auto"
    }
  }, AnomalyCharts_InfoWidget(props.anomalies.length, "Anomalies"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (a) {
    return a.status == "OPEN";
  }).length, "Live", "#555555"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (a) {
    return a.status == "CLOSED";
  }).length, "Closed", "#555555"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (a) {
    return a.isAnalysed;
  }).length, "Analysed", "#555555"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (a) {
    return a.isReviewed;
  }).length, "Reviewed", "#555555"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (a) {
    return a.isApproved;
  }).length, "Approved", "#555555"), AnomalyCharts_InfoWidget(props.anomalies.filter(function (i) {
    return i.status != "CLOSED" && moment_default()(new Date(i.closeOutDate));
  }).length, "Overdue", "#555555")), react_default.a.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 5,
      width: "100%"
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 8,
    lg: 9
  }, react_default.a.createElement(Paper["a" /* default */], {
    className: fixedHeightPaper
  }, react_default.a.createElement(react_chartjs_2_es["b" /* Pie */], {
    style: {
      width: "90%",
      height: "90%"
    },
    data: pieActionData,
    options: {
      title: {
        display: true,
        text: "Anomaly Distribution by Actions",
        fontSize: 14
      },
      legend: {
        display: true,
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 4,
    lg: 3
  }, react_default.a.createElement(Paper["a" /* default */], {
    className: fixedHeightPaper
  }, react_default.a.createElement(react_chartjs_2_es["b" /* Pie */], {
    style: {
      width: "90%",
      height: "90%"
    },
    data: piePrioritiesData,
    options: {
      title: {
        display: true,
        text: "Anomaly Distribution by Priorities",
        fontSize: 14
      },
      legend: {
        display: true,
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 6
  }, react_default.a.createElement(Paper["a" /* default */], {
    style: {
      minHeight: 320
    },
    className: classes.paper
  }, react_default.a.createElement(react_chartjs_2_es["a" /* Bar */], {
    data: barPlatformData,
    options: {
      title: {
        display: true,
        text: "Anomaly Distribution by Facility",
        fontSize: 14
      },
      legend: {
        display: true,
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    md: 6
  }, react_default.a.createElement(Paper["a" /* default */], {
    style: {
      minHeight: 320
    },
    className: classes.paper
  }, react_default.a.createElement(react_chartjs_2_es["a" /* Bar */], {
    data: barRiskByClass,
    options: {
      title: {
        display: true,
        text: "Anomaly Risk Distribution by Class",
        fontSize: 14
      },
      legend: {
        display: true,
        position: "bottom"
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
      maintainAspectRatio: false
    }
  }))), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(Paper["a" /* default */], {
    style: {
      minHeight: 320
    },
    className: classes.paper
  }, react_default.a.createElement(react_chartjs_2_es["a" /* Bar */], {
    data: barPlatformByCoFPoF,
    options: {
      title: {
        display: true,
        text: "Anomaly Risk Distribution by Facility",
        fontSize: 14
      },
      legend: {
        display: true,
        position: "bottom"
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
      maintainAspectRatio: false
    }
  }))))));
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
/* harmony default export */ var aimComponents_AnomalyCharts = (Object(es["b" /* connect */])(mapStateToProps)(AnomalyCharts_AnomalyCharts));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// CONCATENATED MODULE: ./src/_views/_aimViews/AnomalyStatisticsView.js











//import Deposits from './Deposits';
//import AnomaliesTable from '../../_components/aimComponents/AnomaliesTable';


var AnomalyStatisticsView_AnomalyStatisticsView = function AnomalyStatisticsView(_ref) {
  var info = _ref.info;
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Anomaly Statistics"), react_default.a.createElement("div", {
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
  }, react_default.a.createElement(aimComponents_AnomalyCharts, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
/* harmony default export */ var _aimViews_AnomalyStatisticsView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(null)(AnomalyStatisticsView_AnomalyStatisticsView));

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(11);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1032);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(1471);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(1469);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(1472);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(1473);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/countries-List/dist/index.es5.min.js
var index_es5_min = __webpack_require__(1069);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1470);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(84);

// EXTERNAL MODULE: ./src/utility/colors.js
var colors = __webpack_require__(210);

// EXTERNAL MODULE: ./src/utility/riskAnalysisUtility.js
var riskAnalysisUtility = __webpack_require__(68);

// CONCATENATED MODULE: ./src/_components/aimComponents/RiskMatrixChart.js
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
      fontSize: 14,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    }
  };
})(TableCell["a" /* default */]);
function preventDefault(event) {
  event.preventDefault();
}
var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    }
  };
});
var getMax = function getMax(arr, propt) {
  var maxValue = 0;
  arr.forEach(function (ele) {
    if (ele[propt] > maxValue) maxValue = ele[propt];
  });
  return maxValue;
};
var coFs = [1, 2, 3, 4, 5];
var loFs = [1, 2, 3, 4, 5];
var RiskMatrixChart_NewAnomaliesTable = function NewAnomaliesTable(props) {
  var classes = useStyles();
  var _React$useState = react_default.a.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
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
    if (value != null && value != "") {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };
  Object(react["useEffect"])(function () {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }));
    //console.warn();
  }, [props.anomalies]);
  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, null), react_default.a.createElement(StyledTableCell, null), react_default.a.createElement(StyledTableCell, {
    colSpan: coFs.length,
    align: "center"
  }, "Matrix"))), react_default.a.createElement(TableBody["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], null, react_default.a.createElement(StyledTableCell, {
    align: "center",
    style: {
      backgroundColor: "#FFFFFF"
    },
    rowSpan: loFs.length + 1
  }, "Probability")), loFs && loFs.sort(function (a, b) {
    return b - a;
  }).map(function (row, j) {
    return react_default.a.createElement(TableRow["a" /* default */], {
      style: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        borderRadius: 5
      }
    }, react_default.a.createElement(StyledTableCell, {
      style: {
        fontWeight: "bold"
      }
    }, " ", loFs[j]), coFs && coFs.map(function (col, i) {
      return react_default.a.createElement(StyledTableCell, {
        align: "center",
        style: {
          fontWeight: "bold",
          backgroundColor: Object(colors["a" /* colorInterpolator4 */])("#ff0000", "#ff9900", "#ffe601", "#b2fb72", "#78e816", (getMax(coFs, "score") + 1 - coFs[i]) * (getMax(loFs, "score") + 1 - loFs[j]) / (getMax(coFs, "score") * getMax(loFs, "score")))
        }
      }, Object(riskAnalysisUtility["a" /* getPriority */])(loFs[j], coFs[i]));
    }));
  }), react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, null, " "), react_default.a.createElement(StyledTableCell, null, " "), coFs && coFs.map(function (col, i) {
    return react_default.a.createElement(StyledTableCell, {
      align: "center",
      style: {
        fontWeight: "bold"
      }
    }, coFs[i]);
  })), react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, null), react_default.a.createElement(StyledTableCell, null), react_default.a.createElement(StyledTableCell, {
    colSpan: coFs.length,
    align: "center"
  }, "Consequence"))))));
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
/* harmony default export */ var RiskMatrixChart = (Object(es["b" /* connect */])(mapStateToProps)(RiskMatrixChart_NewAnomaliesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// CONCATENATED MODULE: ./src/_views/_aimViews/RiskMatrixView.js













var RiskMatrixView_RiskMatrixView = function RiskMatrixView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "Risk Matrix (" + props.anomalies.filter(function (a) {
    return a.isAnalysed;
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
  }, react_default.a.createElement(RiskMatrixChart, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var RiskMatrixView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_RiskMatrixView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(RiskMatrixView_mapStateToProps)(RiskMatrixView_RiskMatrixView));

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledTableCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1027);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1471);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1474);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1469);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1472);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1473);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(156);
/* harmony import */ var countries_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1069);
/* harmony import */ var countries_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(countries_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1470);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(228);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(299);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1025);
/* harmony import */ var _DialogPrompt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1096);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1480);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1035);
/* harmony import */ var _common_customButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1072);
/* harmony import */ var _actions_anomalyActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25);
/* harmony import */ var _AnomalyRecordView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1097);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1077);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(593);
/* harmony import */ var _utilities_CommonStyles__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(16);
/* harmony import */ var _utility_filesUtility__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(1068);
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

































var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function (theme) {
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
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);
function preventDefault(event) {
  event.preventDefault();
}
var AnalysedAnomaliesTable = function AnalysedAnomaliesTable(props) {
  var classes = Object(_utilities_CommonStyles__WEBPACK_IMPORTED_MODULE_25__[/* useStyles */ "a"])();
  var emptyAnomalyReviwe = {
    reviewAction: "APPROVE",
    reviewComment: ""
  };
  var currentUser = _services__WEBPACK_IMPORTED_MODULE_26__[/* authenticationService */ "a"].currentUserValue;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(_objectSpread({}, emptyAnomalyReviwe)),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    newAnomalyReview = _React$useState2[0],
    setNewAnomalyReview = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    searchString = _React$useState4[0],
    setSearchString = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.anomalies.filter(function (i) {
      return i.isAnalysed == true;
    })),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    rowData = _React$useState6[0],
    setRowData = _React$useState6[1];
  console.log(rowData);
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(rowData),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    filteredRowData = _React$useState8[0],
    setFilteredRowData = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    openAlert = _React$useState10[0],
    setOpenAlert = _React$useState10[1];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    openRecordView = _React$useState12[0],
    setOpenRecordView = _React$useState12[1];
  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    dialogProps = _React$useState14[0],
    setDialogProps = _React$useState14[1];
  var _React$useState15 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({}),
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
  var downloadExcelFile = function downloadExcelFile() {
    Object(_utility_filesUtility__WEBPACK_IMPORTED_MODULE_27__[/* downloadFile */ "a"])("/api/anomalies/download/analysed_anomalies", "Anomalies.xlsx", "Excel");
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == true;
    }));
    setFilteredRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == true;
    }));

    //console.warn();

    if (openAlert) {
      setDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Review Anomaly",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + ""
      }));
    } else if (openRecordView) {
      setDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Anomaly",
        dialogMessage: "Anomaly: " + selectedAnomaly.code + ""
      }));
    } else {
      setSearchString("");
    }
  }, [props.anomalies, openAlert, setOpenRecordView]);
  var getAnomalyReviewStatus = function getAnomalyReviewStatus(anomaly) {
    if (anomaly.isApproved) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "Approved");
    } else if (anomaly.isReverted) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "Reverted");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      }, "Rejected");
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
      setNewAnomalyReview(_objectSpread({}, emptyAnomalyReviwe));
      setSelectedAnomaly(_objectSpread({}, selAnomaly));
    }
  }
  function showAnomalyRecordDialog(id) {
    setOpenRecordView(true);
    var selAnomaly = props.anomalies.find(function (a) {
      return a.id == id;
    });
    if (selAnomaly) {
      setSelectedAnomaly(_objectSpread({}, selAnomaly));
    }
  }
  var handleReviewChange = function handleReviewChange(event) {
    event.persist();
    // handleChange(event);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.log({ name, value })
    setNewAnomalyReview(_objectSpread(_objectSpread({}, newAnomalyReview), {}, _defineProperty({}, name, value)));
    //console.log(newAnomaly)
  };

  var applyReview = function applyReview() {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogPrompt__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], _extends({
    open: openRecordView
  }, dialogProps, {
    okAction: null,
    cancelAction: function cancelAction() {
      return setOpenRecordView(false);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnomalyRecordView__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"], {
    anomalyId: selectedAnomaly.id
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DialogPrompt__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], _extends({
    open: openAlert
  }, dialogProps, {
    okAction: function okAction() {
      return applyReview();
    },
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"], {
    "aria-label": "reviewAction",
    value: newAnomalyReview.reviewAction,
    onChange: handleReviewChange,
    row: true,
    name: "reviewAction"
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: "APPROVE",
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Approve"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: "REJECT",
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Reject"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    value: "REVERT",
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], {
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Revert"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
    autoComplete: "reviewComment",
    name: "reviewComment",
    variant: "outlined",
    multiline: true,
    rows: 4,
    value: newAnomalyReview.reviewComment,
    fullWidth: true,
    placeholder: "Review Comment...",
    id: "reviewComment",
    label: "Review Comment",
    onChange: handleReviewChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.search,
    style: {
      width: "100%",
      maxWidth: "100%"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.searchIcon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_23___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_24__[/* default */ "a"], {
    name: "searchText",
    value: searchString,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search Component\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "Search"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
  }, "Clear"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_customButton__WEBPACK_IMPORTED_MODULE_19__[/* SheetDownloadButton */ "a"], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return downloadExcelFile();
    },
    variant: "contained"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_22___default.a, {
    fontSize: "inherit"
  }), "Download Spreadsheet")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "S/N"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Facility"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Equipment/Tag No."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    align: "center"
  }, "Component"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Class"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "SoF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "CoF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "LoF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Priority"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Date Raised"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Close-out Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: "bold"
    },
    align: "center"
  }, "Stage"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, filteredRowData && filteredRowData.map(function (row, i) {
    var _props$platforms$find, _props$anomalyClasses, _props$actions$find;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      key: row.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, null, i + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      align: "center",
      style: {
        color: "#FF2200"
      }
    }, row.isReviewed ? getAnomalyReviewStatus(row) : row.analysedBy == currentUser.id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      onClick: function onClick() {
        return showApprovalDialog(row.id);
      },
      size: "small",
      variant: "outlined"
    }, "Review")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#0022FF",
        whiteSpace: "nowrap"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return showAnomalyRecordDialog(row.id);
      }
    }, row.code)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == row.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.equipmentTagNo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, null, row.component), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.soF), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.coF), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.loF), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, row.priority), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, null, ((_props$actions$find = props.actions.find(function (p) {
      return p.id == row.action;
    })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      format: "LL",
      date: row.dateRaised
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: "nowrap"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_14___default.a, {
      format: "LL",
      date: row.closeOutDate
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, row.isReviewed ? row.isApproved ? "Approved" : "Pending Approval" : "Pending Review"));
  }), filteredRowData && filteredRowData.length == 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    style: {
      minHeight: 50
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
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
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveAnomalyReview: function saveAnomalyReview(data) {
      dispatch(Object(_actions_anomalyActions__WEBPACK_IMPORTED_MODULE_20__[/* saveAnomalyReview */ "v"])(data));
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
    soFs: state.soFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions,
    currentUser: state.currentUser
  };
};
// export default TodoList;
/* harmony default export */ __webpack_exports__["b"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(mapStateToProps, mapDispatchToProps)(AnalysedAnomaliesTable));

/***/ })

}]);