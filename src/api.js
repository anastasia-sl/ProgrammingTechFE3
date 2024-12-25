import axios from "axios";

const API_BASE = "/api";

export const registerUser = (data) => axios.post(`${API_BASE}/register`, data);
export const loginUser = (data) => axios.post(`${API_BASE}/login`, data);
export const getUser = (username) => axios.get(`${API_BASE}/users/${username}`);
export const getUserPosts = (username, page = 1) =>
    axios.get(`${API_BASE}/users/${username}/posts`, { params: { page } });
export const createPost = (username, data) =>
    axios.post(`${API_BASE}/users/${username}/posts`, data);
export const likePost = (username, postId) =>
    axios.put(`${API_BASE}/users/${username}/posts/${postId}/like`);
export const unlikePost = (username, postId) =>
    axios.delete(`${API_BASE}/users/${username}/posts/${postId}/like`);
