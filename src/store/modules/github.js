import axios from "axios";
import config from "@/config";
import { ErrorMessage } from "@/helpers/ErrorMessage";

export default {
    namespaced: true,
    state: {
        repos: [],
        selectedRepo: {},
        branches: [],
        commits: []
    },
    actions: {
        fetchAllRepos(context) {
            return axios.get(`${config.github_api_endpoint}/user/repos`, {
                headers: {
                    'Authorization': 'token ' + context.rootState.auth.token
                }
            })
                .then(res => {
                    context.commit("setAllRepos", res.data);
                    return res;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        },
        fetchAllBranchs(context) {
            return axios.get(`${context.state.selectedRepo.url}/branches`)
                .then(res => {
                    context.commit("setAllBranches", res.data);
                    return res;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        },
        fetchAllCommits(context, branch) {
            return axios.get(`${context.state.selectedRepo.url}/commits`, {
                params: {
                    sha: branch.name,
                }
            })
                .then(res => {
                    context.commit("setAllCommits", res.data);
                    return res.data;
                })
                .catch(err => {
                    return ErrorMessage(err);
                });
        }
    },
    mutations: {
        setAllRepos(state, repos) {
            state.repos = repos;
        },
        setSelectedRepo(state, repo) {
            state.selectedRepo = repo;
        },
        setAllBranches(state, branches) {
            state.branches = branches;
        },
        setAllCommits(state, commits) {
            state.commits = commits;
        },
    },
    getters: {
        getAllRepos(state) {
            return state.repos;
        },
        getSelectedRepo(state) {
            return state.selectedRepo;
        },
        getAllBranches(state) {
            return state.branches;
        },
        getAllCommits(state) {
            return state.commits;
        },
    }
}