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
        async getAccessToken(context, code) {
            return await axios.post("/api/login/oauth/access_token", null, {
                headers: { Accept: 'application/json' }, params: {
                    client_id: config.client_id,
                    client_secret: config.client_secret,
                    code
                }
            })
                .then(res => {
                    context.commit("setToken", res.data.access_token);
                    return res;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        },
        fetchUser(context) {
            if (context.state.token) {
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
            } else {
                return ErrorMessage("No token");
            }
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