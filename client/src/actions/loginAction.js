import axios from 'axios';
export function userLoginRequest(userData){
	return dispatch =>{
		return axios.post('/auth/login',userData);
	}
}