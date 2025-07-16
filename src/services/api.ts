import axios from "axios";

const PROJECT_TOKEN='665de6d7e88051d60408c32d';

export const api = axios.create({
    baseURL: `https://${PROJECT_TOKEN}.mockapi.io`,
    headers: {
    'Content-Type': 'application/json',
  },
})