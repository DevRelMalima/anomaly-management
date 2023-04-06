import {
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  REMOVE_SNACKBAR,
} from "../_actions/snackbarActions";
import {
  ADD_UPDATE,
  ADD_ANOMALY,
  DELETE_ANOMALY,
  UPDATE_ANOMALY,
} from "../_actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

const findNode = (id, currentNode, nodeChildrenName) => {
  var i, currentChild, result;

  if (id == currentNode.id) {
    return currentNode;
  } else {
    for (i = 0; i < currentNode[nodeChildrenName].length; i += 1) {
      currentChild = currentNode[nodeChildrenName][i];

      result = findNode(id, currentChild, nodeChildrenName);

      if (result !== false) {
        return result;
      }
    }

    return false;
  }
};

const initState = {
  isLoadingData: true,
  projects: [],
  taskGroups: [],
  tasks: [],
  countries: [],
  currentUser: null,
  genders: ["Male", "Female"],
  titles: ["Mr", "Mrs", "Engr", "Prof", "Ms"],
  roles: [],
  accountRoles: [],
  employmentTypes: [
    {
      type: "Temporary",
      name: "1562",
    },
    {
      type: "Fixed-term",
      name: "1122",
    },
    {
      type: "Full-time",
      name: "11112",
    },
    {
      type: "Part-time",
      name: "1442",
    },
  ],
  jobTitles: [],
  companies: [],
  users: [],
  files: [],
  folders: [],
  departments: [],
  notifications: [],
  anomalies: [
    /*{
            id:'f3007810-11ab-4cda-a54a-45cfc9448448',
            code:'AN-COBP1-004',
            platform:'a2907810-22db-4cdc-a54a-93cfc9448773',
            dateRaised:new Date(),
            equipmentTagNo:'P-100-GB-002',
            component:'3" Oil Line From COBP to PALP1',
            description:'',
            system:'a2907810-11ab-4cdc-a54a-93cfc9448443',
            anomalyClass:'a2907810-22db-4cdc-a54a-93cfc9448453',
            priority:'b2907810-11ab-3cdc-a51a-93cfc9448411',
            poF:'c2907810-11ab-4cdc-a54a-93cfc9448448',
            coF:'ef089bb1-6122-4ace-9320-d91db27e99d1',
            action:'a2907222-11ab-4cdc-a54a-93cfc9448443',
            isShutdownRequired:true,
            isAnalysed:true,
            isApproved:true,
            isRejected:false,
            isReviewed:true,
            analysedBy:null,
            approvedBy:null,
        },
        {
            id:'f2907810-31ab-4cda-a54a-45cfc9448448',
            code:'AN-COBP1-002',
            platform:'a2907810-22db-4cdc-a54a-93cfc9448773',
            dateRaised:new Date(),
            equipmentTagNo:'P-100-GB-002',
            component:'4" Oil Line From COBP to PALP1',
            description:'',
            system:'a2907810-11ab-4cdc-a54a-93cfc9448443',
            anomalyClass:'a2907810-22db-4cdc-a54a-93cfc9448453',
            priority:'b2907810-11ab-3cdc-a51a-93cfc9448411',
            poF:'c2907810-11ab-4cdc-a54a-93cfc9448448',
            coF:'ef089bb1-6122-4ace-9320-d91db27e99d1',
            action:'a2907222-11ab-4cdc-a54a-93cfc9448443',
            isShutdownRequired:false,
            isAnalysed:true,
            isApproved:false,
            isRejected:false,
            isReviewed:false,
            analysedBy:null,
            approvedBy:null,
        },
        {
            id:'f2907810-61ab-4cda-a54a-45cfc9448448',
            code:'AN-COBP1-004',
            platform:'a2907810-22db-4cdc-a54a-93cfc9448773',
            dateRaised:new Date(),
            equipmentTagNo:'P-100-GB-002',
            component:'3" Gas Line From COBP to PALP1',
            description:'',
            system:'a2907810-13ab-4cdc-a54a-93cfc9448443',
            anomalyClass:'a2907810-22db-4cdc-a54a-93cfc9448663',
            priority:'b2907810-11ab-3cdc-a51a-93cfc9448411',
            poF:'c2907810-11ab-4cdc-a54a-93cfc9448448',
            coF:'ef089bb1-6122-4ace-9320-d91db27e99d2',
            action:'a2907222-11ab-4cdc-a54a-93cfc9448443',
            isShutdownRequired:false,
            isAnalysed:true,
            isApproved:false,
            isRejected:false,
            isReviewed:false,
            analysedBy:null,
            approvedBy:null,
        },
        {
            id:'f2907810-81ab-4cda-a54a-45cfc9448448',
            code:'AN-COBP3-005',
            platform: 'a2907810-22db-4cdc-a54a-93cfc9448755',
            dateRaised:new Date(),
            equipmentTagNo:'P-100-GB-002',
            component:'4" Gas Line From COBP to PALP1',
            description:'',
            system:'a2907810-15ab-4cdc-a54a-93cfc9448443',
            anomalyClass:'a2907810-22db-4cdc-a54a-93cfc9448123',
            priority:'b2907810-11ab-3cdc-a54a-93cfc9448411',
            poF:'c2907810-11ab-4cdc-a54a-93cfc9448448',
            coF:'ef089bb1-6122-4ace-9320-d91db27e9955',
            action:'a2907222-19ab-4cdc-a54a-93cfc9448443',
            isShutdownRequired:false,
            isAnalysed:true,
            isApproved:false,
            isRejected:false,
            isReviewed:true,
            analysedBy:null,
            approvedBy:null,
        },
        {
            id:'f2907810-91ab-4cda-a54a-45cfc9448448',
            code:'AN-COBP3-005',
            platform:'a2907810-22db-4cdc-a54a-93cfc9448755',
            dateRaised:new Date(),
            equipmentTagNo:'P-100-GB-002',
            component:'4" Gas Line From COBP to PALP1',
            description:'',
            system:'a2907810-17ab-4cdc-a54a-93cfc9448443',
            anomalyClass:'a2907810-22db-4cdc-a54a-93cfc9448123',
            priority:null,
            poF:null,
            coF:null,
            action:null,
            isShutdownRequired:false,
            isAnalysed:false,
            isApproved:false,
            isRejected:false,
            isReviewed:false,
            analysedBy:null,
            approvedBy:null,
        }*/
  ],
  priorities: [
    /*{
            id:'b2907810-11ab-3cdc-a51a-93cfc9448411',
            name: 'P1',
            score: 10,
            index: 1,
        },
        {
            id:'b2907810-11ab-3cdc-a52a-93cfc9448411',
            name: 'P2',
            score: 10,
            index: 2,
        },
        {
            id:'b2907810-11ab-3cdc-a53a-93cfc9448411',
            name: 'P3',
            score: 10,
            index: 3,
        },
        {
            id:'b2907810-11ab-3cdc-a54a-93cfc9448411',
            name: 'P4',
            score: 10,
            index: 4,
        }*/
  ],
  loF:0,
  coF:0,
  soF:0,
  loFs: [
    /* {
            id:'b2907810-11ab-4cdc-a54a-93cfc9448448',
            name: 'L0',
            minDays:0,
            maxDays:180,
            score: 1,
        },
        {
            id:'c2907810-11ab-4cdc-a54a-93cfc9448448',
            name: 'L1',
            minDays:180,
            maxDays:360,
            score: 2,
        },
        {
            id:'d2907810-11ab-4cdc-a54a-93cfc9448448',
            name: 'L2',
            minDays:360,
            maxDays:1080,
            score: 3,
        },
        {
            id:'e2907810-11ab-4cdc-a54a-93cfc9448448',
            name: 'L3',
            minDays:1080,
            maxDays:1800,
            score: 4,
        },
        {
            id:'f2907810-11ab-4cdc-a54a-93cfc9448448',
            name: 'L4',
            minDays:1800,
            maxDays:0,
            score: 5,
        }*/
  ],
  coFs: [
    /*{
            id:'ef089bb1-6122-4ace-9320-d91db27e99d1',
            name: '0',
            score: 1,
        },
        {
            id:'ef089bb1-6122-4ace-9320-d91db27e99d2',
            name: '1',
            score: 2,
        },
        {
            id:'ef089bb1-6122-4ace-9320-d91db27e9955',
            name: '2',
            score: 3,
        },
        {
            id:'ef089bb1-6122-4ace-9320-d91db27e99d4',
            name: '3',
            score: 4,
        },
        {
            id:'ef089bb1-6122-4ace-9320-d91db27e99f4',
            name: '4',
            score: 5,
        }*/
  ],
  platforms: [
    /*{
            id: 'a2907810-22db-4cdc-a54a-93cfc9448773',
            name: 'COBP1',            
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448733',
            name: 'COBP2',            
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448755',
            name: 'COBP3',            
        },*/
  ],
  anomalyClasses: [
    /*{
            id: 'a2907810-22db-4cdc-a54a-93cfc9448453',
            name: 'Anode Wastage',   
            code:'ANW'         
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448123',
            name: 'Burial',   
            code:'BRL'         
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448663',
            name: 'Minor Coating Damage',   
            code:'CD1'         
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448333',
            name: 'Major Coating Damage',   
            code:'CD2'         
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448753',
            name: 'Leak',   
            code:'LEAK'         
        },
        {
            id: 'a2907810-22db-4cdc-a54a-93cfc9448443',
            name: 'Wall Thickness Reduction',   
            code:'WTR'         
        },*/
  ],
  systems: [
    /*{
            id: 'a2907810-11ab-4cdc-a54a-93cfc9448443',
            code: 'NH',            
        },
        {
            id: 'a2907810-13ab-4cdc-a54a-93cfc9448443',
            code: 'GH',            
        },
        {
            id: 'a2907810-15ab-4cdc-a54a-93cfc9448443',
            code: 'NW',            
        },
        {
            id: 'a2907810-17ab-4cdc-a54a-93cfc9448443',
            code: 'HD',            
        },
        {
            id: 'a2907810-19ab-4cdc-a54a-93cfc9448443',
            code: 'FL',            
        },
        {
            id: 'a2907810-21ab-4cdc-a54a-93cfc9448443',
            code: 'SW',            
        },*/
  ],
  actions: [
    /*{
            id: 'a2907222-11ab-4cdc-a54a-93cfc9448443',
            name: 'Inspection',            
        },
        {
            id: 'a2907222-13ab-4cdc-a54a-93cfc9448443',
            name: 'Engineering Evaluation',            
        },
        {
            id: 'a2907222-15ab-4cdc-a54a-93cfc9448443',
            name: 'Repair/Replacement',            
        },
        {
            id: 'a2907222-19ab-4cdc-a54a-93cfc9448443',
            name: 'Fabric Maintenance',            
        },
        {
            id: 'a2907222-21ab-4cdc-a54a-93cfc9448443',
            name: 'Temporary Repair Order',            
        },*/
  ],
  soFs: [],
  accountConfiguration: {},
  anomalyPermissions: [],
  anomalyOptions: {},
};

const rootReducer = (state = initState, action) => {
  //console.log(action)
  //console.log(state.notifications)
  switch (action.type) {
    case "SET_CURRENT_USER": {
      //console.error("current_user",action.currentUser)
      let isRememberMe = localStorage.getItem("isRememberMe");

      if (isRememberMe && isRememberMe == "true") {
        console.log("www", isRememberMe);
        localStorage.removeItem("currentUser");
        localStorage.setItem(
          "currentUser",
          JSON.stringify(action.currentUser)
        );
      }

      return {
        ...state,
        currentUser: action.currentUser,
      };
    }
    case "DELETE_USER": {
      return {
        ...state,
        users: [
          ...state.users.filter((user) => {
            return user.id !== action.id;
          }),
        ],
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        users: state.users.map((user, i) =>
          user.id === action.user.id ? action.user : user
        ),
      };
    }
    case "UPDATE_ONLINE_STATUS": {
      let updatedUser = state.users.find((user) => {
        return user.id == action.userId;
      });
      if (updatedUser != null) updatedUser.isOnline = action.status;

      return {
        ...state,
        users: updatedUser
          ? state.users.map((user, i) =>
              user.id === updatedUser.id ? updatedUser : user
            )
          : [...state.users],
      };
    }
    case "CREATE_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    // Files
    case "DELETE_FOLDER": {
      return {
        ...state,
        folders: [
          ...state.folders.filter((folder) => {
            return folder.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_FOLDER": {
      return {
        ...state,
        folders: state.folders.map((folder) =>
          folder.id === action.data.id ? action.data : folder
        ),
      };
    }
    case "CREATE_FOLDER":
      return {
        ...state,
        folders: [...state.folders, action.data],
      };
    case "FETCH_FOLDERS":
      return {
        ...state,
        folders: [...state.folders, ...action.data],
      };
    // Files
    case "DELETE_FILE": {
      return {
        ...state,
        files: [
          ...state.files.filter((file) => {
            return file.id !== action.id;
          }),
        ],
      };
    }
    case "UPDATE_FILE": {
      return {
        ...state,
        files: state.files.map((file) =>
          file.id === action.file.id ? action.file : file
        ),
      };
    }
    case "CREATE_FILE":
      return {
        ...state,
        files: [...state.files, action.file],
      };
    case "FETCH_FILES":
      return {
        ...state,
        files: [...state.files, ...action.files],
      };
    // Job Title
    case "DELETE_JOB_TITLE": {
      return {
        ...state,
        jobTitles: [
          ...state.jobTitles.filter((jobTitle) => {
            return jobTitle.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_JOB_TITLE": {
      return {
        ...state,
        jobTitles: state.jobTitles.map((jobTitle, i) =>
          jobTitle.id === action.data.id ? action.data : jobTitle
        ),
      };
    }
    case "CREATE_JOB_TITLE":
      return {
        ...state,
        jobTitles: [...state.jobTitles, action.data],
      };
    case "FETCH_JOB_TITLES":
      return {
        ...state,
        jobTitles: [...state.jobTitles, ...action.data],
      };
    // Roles
    case "DELETE_ROLE": {
      return {
        ...state,
        roles: [
          ...state.roles.filter((role) => {
            return role.id !== action.id;
          }),
        ],
      };
    }
    case "UPDATE_ROLE": {
      return {
        ...state,
        roles: state.roles.map((role, i) =>
          role.id === action.role.id ? action.role : role
        ),
      };
    }
    case "CREATE_ROLE":
      return {
        ...state,
        roles: [...state.roles, action.role],
      };
    case "FETCH_ROLES":
      return {
        ...state,
        roles: [...state.roles, ...action.roles],
      };
    case "FETCH_COUNTRIES":
      return {
        ...state,
        countries: [...state.countries, ...action.data],
      };

    // Companies
    case "DELETE_COMPANY": {
      return {
        ...state,
        companies: [
          ...state.companies.filter((company) => {
            return company.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_COMPANY": {
      return {
        ...state,
        companies: state.companies.map((company, i) =>
          company.id === action.data.id ? action.data : company
        ),
      };
    }
    case "CREATE_COMPANY":
      return {
        ...state,
        companies: [...state.companies, action.data],
      };
    case "FETCH_COMPANIES":
      return {
        ...state,
        companies: [...state.companies, ...action.data],
      };
    // AccountRole
    case "DELETE_ACCOUNT_ROLE": {
      return {
        ...state,
        accountRoles: [
          ...state.accountRoles.filter((accountRole) => {
            return accountRole.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_ACCOUNT_ROLE": {
      return {
        ...state,
        accountRoles: state.accountRoles.map((accountRole, i) =>
          accountRole.id === action.data.id
            ? action.data
            : accountRole
        ),
      };
    }
    case "CREATE_ACCOUNT_ROLE":
      return {
        ...state,
        accountRoles: [...state.accountRoles, action.data],
      };
    case "FETCH_ACCOUNT_ROLES":
      return {
        ...state,
        accountRoles: [...state.accountRoles, ...action.data],
      };

    // Department
    case "DELETE_DEPARTMENT": {
      return {
        ...state,
        departments: [
          ...state.departments.filter((department) => {
            return department.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_DEPARTMENT": {
      return {
        ...state,
        departments: state.departments.map((department, i) =>
          department.id === action.data.id ? action.data : department
        ),
      };
    }
    case "CREATE_DEPARTMENT":
      return {
        ...state,
        departments: [...state.departments, action.data],
      };
    case "FETCH_DEPARTMENTS":
      return {
        ...state,
        departments: [...state.departments, ...action.data],
      };

    // Anomalies
    case ADD_ANOMALY: {
      /*const { anomaly } = action.payload;
            console.warn( anomaly)
            return {
              ...state,
              anomalies: [...state.anomalies, { ...anomaly }],
            };
            return state;*/
      return {
        ...state,
        anomalies: [...state.anomalies, action.data],
      };
    }

    case "ADD_ANOMALIES": {
      return {
        ...state,
        anomalies: [...state.anomalies, ...action.data],
      };
    }

    case DELETE_ANOMALY: {
      /*const { id } = action.payload;
              return {
                ...state,
                anomalies: [...state.anomalies.filter(u => u.id != id) ],
              };*/
      return {
        ...state,
        anomalies: [
          ...state.anomalies.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_ANOMALY_STATUS": {
      var updatedAnomalies = state.anomalies.map((a, i) =>
        a.id === action.data.currentAnomaly.id
          ? action.data.currentAnomaly
          : a
      );

      if (action.data.cloneAnomaly) {
        updatedAnomalies = [
          ...updatedAnomalies,
          { ...action.data.cloneAnomaly },
        ];
      }

      return {
        ...state,
        anomalies: [...updatedAnomalies],
      };
    }
    case UPDATE_ANOMALY: {
      /*return{
                  ...state,                    
                  anomalies: state.anomalies.map(
                      (anomaly) => anomaly.id === action.payload.anomaly.id ? action.payload.anomaly
                                              : anomaly
                  )                
              } */
      return {
        ...state,
        anomalies: state.anomalies.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }

    case "FETCH_ANOMALIES":
      return {
        ...state,
        anomalies: [...action.data],
      };

    // Anomaly Actions
    case "DELETE_ANOMALY_ACTION": {
      return {
        ...state,
        actions: [
          ...state.actions.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_ANOMALY_ACTION": {
      return {
        ...state,
        actions: state.actions.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_ANOMALY_ACTION":
      return {
        ...state,
        actions: [...state.actions, action.data],
      };
    case "FETCH_ANOMALY_ACTIONS":
      return {
        ...state,
        actions: [...action.data],
      };

    // Anomaly Class
    case "DELETE_ANOMALY_CLASS": {
      return {
        ...state,
        anomalyClasses: [
          ...state.anomalyClasses.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_ANOMALY_CLASS": {
      return {
        ...state,
        anomalyClasses: state.anomalyClasses.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_ANOMALY_CLASS":
      return {
        ...state,
        anomalyClasses: [...state.anomalyClasses, action.data],
      };
    case "FETCH_ANOMALY_CLASSES":
      return {
        ...state,
        anomalyClasses: [...action.data],
      };

    // Anomaly System
    case "DELETE_ANOMALY_SYSTEM": {
      return {
        ...state,
        systems: [
          ...state.systems.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_ANOMALY_SYSTEM": {
      return {
        ...state,
        systems: state.systems.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_ANOMALY_SYSTEM":
      return {
        ...state,
        systems: [...state.systems, action.data],
      };
    case "FETCH_ANOMALY_SYSTEMS":
      return {
        ...state,
        systems: [...action.data],
      };

    // Anomaly CoF
    case "DELETE_COF": {
      return {
        ...state,
        coFs: [
          ...state.coFs.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_COF": {
      return {
        ...state,
        coFs: state.coFs.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_COF":
      return {
        ...state,
        coFs: [...state.coFs, action.data],
      };
    case "FETCH_COFS":
      return {
        ...state,
        coFs: [...action.data],
      };
    // Anomaly SoF
    case "DELETE_SOF": {
      return {
        ...state,
        soFs: [
          ...state.soFs.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_SOF": {
      return {
        ...state,
        soFs: state.soFs.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_SOF":
      return {
        ...state,
        soFs: [...state.soFs, action.data],
      };
    case "FETCH_SOFS":
      return {
        ...state,
        soFs: [...action.data],
      };

    // Anomaly loF
    case "DELETE_LOF": {
      return {
        ...state,
        loFs: [
          ...state.loFs.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_LOF": {
      return {
        ...state,
        loFs: state.loFs.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_LOF":
      return {
        ...state,
        loFs: [...state.loFs, action.data],
      };
    case "FETCH_LOFS":
      return {
        ...state,
        loFs: [...action.data],
      };

    // Anomaly Priority
    case "DELETE_PRIORITY": {
      return {
        ...state,
        priorities: [
          ...state.priorities.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_PRIORITY": {
      return {
        ...state,
        priorities: state.priorities.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_PRIORITY":
      return {
        ...state,
        priorities: [...state.priorities, action.data],
      };
    case "FETCH_PRIORITIES":
      return {
        ...state,
        priorities: [...action.data],
      };

    // Anomaly Platforms
    case "DELETE_PLATFORM": {
      return {
        ...state,
        platforms: [
          ...state.platforms.filter((a) => {
            return a.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_PLATFORM": {
      return {
        ...state,
        platforms: state.platforms.map((a, i) =>
          a.id === action.data.id ? action.data : a
        ),
      };
    }
    case "CREATE_PLATFORM":
      return {
        ...state,
        platforms: [...state.platforms, action.data],
      };
    case "FETCH_PLATFORMS":
      return {
        ...state,
        platforms: [...action.data],
      };

    // Anomaly User Permissions
    case "UPDATE_ANOMALY_PERMISSION": {
      console.warn("AO - JHGJGHJHHGH update", { ...action.data });
      console.warn(
        "AO - JHGJGHJHHGH perm ",
        state.anomalyPermissions
      );
      return {
        ...state,
        anomalyPermissions: state.anomalyPermissions.map((a, i) =>
          a.user === action.data.user ? action.data : a
        ),
      };
    }
    case "FETCH_ANOMALY_PERMISSIONS": {
      return {
        ...state,
        anomalyPermissions: [...action.data],
      };
    }
    // Anomaly Options
    case "UPDATE_ANOMALY_OPTIONS": {
      return {
        ...state,
        anomalyOptions: { ...action.data },
      };
    }
    case "FETCH_ANOMALY_OPTIONS": {
      return {
        ...state,
        anomalyOptions: { ...action.data },
      };
    }
    // Anomaly Options
    case "UPDATE_ACCOUNT_CONFIGURATIONS": {
      return {
        ...state,
        accountConfiguration: { ...action.data },
      };
    }
    case "FETCH_ACCOUNT_CONFIGURATIONS":
      return {
        ...state,
        accountConfiguration: { ...action.data },
      };
    // Projects
    case "DELETE_PROJECT": {
      let newProjects = state.projects.filter((project) => {
        return project.id !== action.data;
      });

      return {
        ...state,
        projects: newProjects,
      };
    }
    case "UPDATE_PROJECT": {
      //let newProjects = state.projects.filter(project => {return project.id !== action.project.id});
      //newProjects = [...newProjects, action.project]
      return {
        ...state,
        //projects:newProjects,
        projects: state.projects.map((project, i) =>
          project.id === action.data.id ? action.data : project
        ),
      };
    }
    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.data],
      };
    case "FETCH_PROJECTS":
      return {
        ...state,
        projects: [...state.projects, ...action.data],
      };
    // Projects Task Group
    case "DELETE_TASK_GROUP": {
      let newTaskGroups = state.taskGroups.filter((taskGroup) => {
        return taskGroup.id !== action.id;
      });

      return {
        ...state,
        taskGroups: newTaskGroups,
      };
    }
    case "UPDATE_TASK_GROUP": {
      //let newTaskGroups = state.taskGroups.filter(project => {return project.id !== action.project.id});
      //newTaskGroups = [...newTaskGroups, action.taskGroup]
      return {
        ...state,

        taskGroups: state.taskGroups.map((taskGroup, i) =>
          taskGroup.id === action.taskGroup.id
            ? action.taskGroup
            : taskGroup
        ),
      };
    }
    case "ADD_TASK_GROUP":
      return {
        ...state,
        taskGroups: [...state.taskGroups, action.taskGroup],
      };
    case "FETCH_TASK_GROUPS":
      return {
        ...state,
        taskGroups: [...state.taskGroups, ...action.taskGroups],
      };
    // Projects Task Group
    case "DELETE_TASK": {
      let newTasks = state.tasks.filter((task) => {
        return task.id !== action.id;
      });

      return {
        ...state,
        tasks: newTasks,
      };
    }
    case "UPDATE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.task.id ? action.task : task
        ),
      };
    }
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case "FETCH_TASKS":
      return {
        ...state,
        tasks: [...state.tasks, ...action.tasks],
      };

    // Notifications
    case "DELETE_NOTIFICATION": {
      return {
        ...state,
        notifications: [
          ...state.notifications.filter((notification) => {
            return notification.id !== action.data;
          }),
        ],
      };
    }
    case "UPDATE_NOTIFICATION": {
      return {
        ...state,
        notifications: state.notifications.map((n) =>
          n.id === action.data.id ? action.data : n
        ),
      };
    }
    case "FETCH_NOTIFICATIONS":
      return {
        ...state,
        notifications: [...action.data],
      };
    /*case 'DELETE_TASK_GROUP':
            {
                let project = state.projects.find(project => {return project.id == action.taskGroup.projectModelId});
                let projectTaskGroup = project.taskGroups.filter(taskgroup => {return taskgroup.id !== action.taskGroup.id});
                
                project = {...project, taskGroups:projectTaskGroup}

                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                }
            }
        case 'UPDATE_TASK_GROUP':
            {
                let project = state.projects.find(project => {return project.id == action.taskGroup.projectModelId});
                
                project.taskGroups = [...project.taskGroups.map(
                    (taskgroup, i) => taskgroup.id === action.taskGroup.id ? action.taskGroup
                                            : taskgroup)]
               
                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                }                
            }
        case 'ADD_TASK_GROUP':
            {
                let project = state.projects.find(project => {return project.id == action.taskGroup.projectModelId});
                
                project.taskGroups = [...project.taskGroups, action.taskGroup]

                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                }                
            }*/

    /*    case 'DELETE_TASK':
            {
                let project = state.projects.find(p => {return p.id == action.task.projectModelId});
                let projectTaskGroup = project.taskGroups.find(tg => {return tg.id == action.task.task.taskGroupId});
                //projectTaskGroup.tasks = projectTaskGroup.tasks? [...projectTaskGroup.tasks, action.task.task]:[action.task.task]
                
                projectTaskGroup.tasks = projectTaskGroup.tasks.filter((prj) => prj.id !== action.task.task.id )

                project.taskGroups = [...project.taskGroups.map(
                    (prj, i) => prj.id === projectTaskGroup.id ? projectTaskGroup
                                            : prj)]
                                
                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                   
                }               
            }
        case 'UPDATE_TASK':
            {
                let project = state.projects.find(p => {return p.id == action.task.projectModelId});
                let projectTaskGroup = project.taskGroups.find(tg => {return tg.id == action.task.task.taskGroupId});
                //projectTaskGroup.tasks = projectTaskGroup.tasks? [...projectTaskGroup.tasks, action.task.task]:[action.task.task]
                
                projectTaskGroup.tasks = [...projectTaskGroup.tasks.map(
                    (prj, i) => prj.id === action.task.task.id ? action.task.task
                                            : prj)]

                project.taskGroups = [...project.taskGroups.map(
                    (prj, i) => prj.id === projectTaskGroup.id ? projectTaskGroup
                                            : prj)]
                                
                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                   
                }                  
            }
        case 'ADD_TASK':
            {
                let project = state.projects.find(p => {return p.id == action.task.projectModelId});
                let projectTaskGroup = project.taskGroups.find(tg => {return tg.id == action.task.task.taskGroupId});
                projectTaskGroup.tasks = projectTaskGroup.tasks? [...projectTaskGroup.tasks, action.task.task]:[action.task.task]
                
                project.taskGroups = [...project.taskGroups.map(
                    (prj, i) => prj.id === projectTaskGroup.id ? projectTaskGroup
                                            : prj)]
                                
                return{
                    ...state,
                    projects:[...state.projects.map(
                        (prj, i) => prj.id === project.id ? project
                                                : prj)]
                   
                }                
            }*/

    case ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            key:
              action.notification.options &&
              action.notification.options.key,
            ...action.notification,
          },
        ],
      };

    case CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          action.dismissAll || notification.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        ),
      };

    case REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
