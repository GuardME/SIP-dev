import { defineStore } from "pinia";
import axiosClient from "../axios";
import router from "../router";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        token: null,
        notification: {
            show: false,
            type: 'success',
            message: ''
        }
    }),
    getters: {
        
        // token: JSON.parse(localStorage.getItem('token'));
        user: (state) => state.authUser,
        tokenUser: localStorage.getItem("token"),
       
    },
    actions: {
        // setToken(res) {
        //     console.log('setAuth', res.data.data);
        // }
        // async getToken() {
        //     await axiosClient.get('/login');
        //     this.token = res.data;
        //     console.log(this.token);
        // },
        async handleLogin(data) {
            try {
                console.log(data.username);
                const res = await axiosClient.post("/login", {
                    username: data.username,
                    password: data.password
                });
                console.log(res.data.data.token);
                router.push({
                    name: 'kapal-pengawas'
                });
            } catch (error) {
                // if (error.res.status === 404 ) {
                //     console.log("error", error);
                // }
            }
        }
    }
});