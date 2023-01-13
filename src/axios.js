// import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "api";

import axios from "axios";

const axiosClient = axios.create({
    // baseURL: `${import.meta.env.API_BASE_URL}/api/v1`
    baseURL: 'https://sipmdjpsdkp.kkp.go.id/sip-api/api'
});


export default axiosClient;
