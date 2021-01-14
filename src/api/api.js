import axios from "axios";

const api = axios.create({
	baseURL: "https://developers.zomato.com/api/v2.1/locations?query=sao%20paulo",
	headers:{
		'user-key':'5da17e64ca3931cc962de699d11dd82e' // Passar para .env 
	}
});

export default api;