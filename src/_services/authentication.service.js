import { BehaviorSubject } from "rxjs";
import axios from "axios";

//import config from 'config';
import { handleResponse } from "@/_helpers";
import { isNullOrUndefined } from "util";
import { BaseURL } from "../constants/URLs/urls";

//console.log(localStorage.setItem('currentUser', null));
//const currentUserSubject = new BehaviorSubject({firstname:"Karl", lastname:"Nwala",username:"karlnwala", password:"1234"})//isNullOrUndefined(localStorage.getItem('currentUser'))? null: new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  register,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};

function login(
  companyIdentifier,
  username,
  password,
  isRememberMe = true
) {
  const requestOptions = {
    url: BaseURL + "/users/authenticate/" + companyIdentifier,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { companyIdentifier, username, password },
  };

  /*return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });*/
  return axios(requestOptions)
    .then((response) => {
      console.log("Login response", response);
      if (response.request.status != 200) {
        if ([401, 403].indexOf(response.request.status) !== -1) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          authenticationService.logout();
          window.location.reload(true);
        }
        console.log(response);
      }

      return response.data;
    })
    .then((userInfo) => {
      //console.log("Login user",user)
      //console.warn(isRememberMe);
      if (userInfo) {
        let user = { ...userInfo.user, token: userInfo.token };

        if (isRememberMe) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("isRememberMe", isRememberMe);
          currentUserSubject.next(user);
        } else {
          localStorage.setItem("currentUser", null);
          localStorage.setItem("isRememberMe", null);
          currentUserSubject.next(null);
        }

        return user;
      }

      return null;
    })
    .catch((error) => {
      // Handle error response
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error("Network Error:", error.message);
      }
      return error.response.data.message;
    });
}

function register(firstname, lastname, username, password) {
  const requestOptions = {
    url: BaseURL + "/users/register",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { firstname, lastname, username, password },
  };

  return axios(requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);

      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}
