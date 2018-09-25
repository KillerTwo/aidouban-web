import axios from 'axios';

axios.defaults.baseURL = '/api';
let http = {

}

http.post = function(api, data) {
    return new Promise((resolve,reject)=>{
        axios.post(api,data)
        .then((res)=>{
            resolve(res);
        }).catch((err=>{
            reject(err);
        }));
    });
}

http.get = function(api, data) {
    return new Promise((resolve, reject)=>{
        axios.get(api, {
            params: {
                ...data
            }
        })
        .then((res)=>{
            resolve(res);
        })
        .catch((err)=>{
            reject(err);
        });
    });
}
export default http;