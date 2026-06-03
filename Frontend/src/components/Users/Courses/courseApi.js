import axios from "axios";
import { API_BASE_URL } from "../../../Api/config";

const API = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCourses = async (query, maxResults, token) => {
  const res = await API.get("courses/", {
    params: {
      query,
      max_results: maxResults,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};