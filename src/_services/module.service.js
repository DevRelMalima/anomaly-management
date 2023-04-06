import { authHeader, handleResponse } from '@/_helpers';
import {BaseURL} from '../constants/URLs/urls';

export const moduleService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(BaseURL + "BaseURL/modules", requestOptions).then(handleResponse);
}