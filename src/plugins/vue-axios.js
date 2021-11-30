import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from '../router'
import store from '../store';

//const baseURL = 'http://localhost:8089';
const baseURL = 'https://miproyecto-plandenegocio.herokuapp.com';
axios.defaults.baseURL = baseURL;

//https://miproyecto-plandenegocio.herokuapp.com/

axios.interceptors.request.use(
    config => {
        const tokenlocalstorage = window.localStorage.getItem('vuex');
        if(tokenlocalstorage !== null){
            const token = JSON.parse(tokenlocalstorage).auth.token;        
            config.headers['token-b29'] = token;
        }
        return config
    },
    err => Promise.reject(err)
)

// axios.interceptors.response.use(
//     config => config,
//     err => {
//         console.log(err);
//         return Promise.reject(err);
//         if(err.response.status == 401 || err.response.statusCode == 401){
//             store.commit('auth/logout');
//             router.push('/login')
//         }else{
//             return Promise.reject(err)
//         }
//     }
// )

Vue.use(VueAxios, axios);