import httpRequest from "../utils/request";
// const baseURL = `/rules`;
// const serverUrl = process.env.REACT_APP_DISPATCHING.API_ENDPOINT;

export const getAllRules = query => {
  const URL = `/rules`;
  return httpRequest(URL, { method: "get", query });
};
