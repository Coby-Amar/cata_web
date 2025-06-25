import axios from "axios"
import { ACCES_TOKEN } from "../utils/conts"

const appAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})

appAxios.defaults.headers.post['Content-Type'] = 'application/json'

appAxios.interceptors.request.use(config => {
    const token = localStorage.getItem(ACCES_TOKEN)
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, (error) => error)

appAxios.interceptors.response.use((res) => {
    const accessToken = res.data[ACCES_TOKEN]
    if (accessToken) {
        localStorage.setItem(ACCES_TOKEN, accessToken)
    }
    return res
}, async (error) => {
    const { response, config } = error
    if (response && response.status === 401 && !config.url.includes('refresh')) {
        try {
            await appAxios.post('/auth/refresh_token')
            return axios(config)
        } catch (error) {
            return Promise.reject(error)
        }
    }
})


export default appAxios