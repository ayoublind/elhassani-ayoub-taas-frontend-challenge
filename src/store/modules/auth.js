import axios from "axios";
import config from "@/config";
import { ErrorMessage } from "@/helpers/ErrorMessage";

export default {
    namespaced: true,
    state: {
        token: '',
        user: {}
    },
    actions: {
        getAccessToken(context, code) {
            return axios.post("/api/login/oauth/access_token", null, {
                headers: { Accept: 'application/json' }, params: {
                    client_id: config.client_id,
                    client_secret: config.client_secret,
                    code
                }
            })
                .then(res => {
                    console.log("Data From Auth:", res.data);
                    context.commit("setToken", res.data.access_token);
                    return res;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        },
        fetchUser(context) {
            return axios.get(`${config.github_api_endpoint}/user`, {
                headers: {
                    'Authorization': 'token ' + context.state.token
                }
            })
                .then(res => {
                    context.commit("setUser", res.data);
                    return res;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        isAuthenticated(state) {
            return state.token ? true : false;
        },
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
    }
}