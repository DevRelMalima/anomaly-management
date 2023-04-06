import { authenticationService } from '@/_services';

export function axiosHelper(){

    const  authHeader = () => {
        // return authorization header with jwt token
        const currentUser = authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            return { Authorization: `Bearer ${currentUser.token}`, 'Access-Control-Allow-Origin': '*' };
        } else {
            return {'Access-Control-Allow-Origin': '*'};
        }
    }
}