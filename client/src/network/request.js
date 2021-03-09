import axios from 'axios';
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/v1/',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    },err => {
        console.log(err);
    })
    return instance(config);
}
