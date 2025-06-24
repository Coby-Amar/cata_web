import axios from "axios";
const appAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
    xsrfCookieName: import.meta.env.VITE_XSRF_COOKIE_NAME,
    xsrfHeaderName: import.meta.env.VITE_XSRF_TOKEN_NAME,
})

appAxios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

export default appAxios