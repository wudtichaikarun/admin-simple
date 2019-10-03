import axios from "axios";
import _isEmpty from "lodash/isEmpty";
import queryString from "query-string";
// import storage from "../core/storage";

export default function httpRequest(
  additionalUrl,
  params,
  serverUrl = process.env.REACT_APP_DISPATCHING.API_ENDPOINT
) {
  const headers = {};

  const queryUrl = _isEmpty(params.query) ? '' : `?${queryString.stringify(params.query)}` // prettier-ignore
  return axios({
    method: params.method,
    url: serverUrl + additionalUrl + queryUrl,
    data: params.data,
    headers
  })
    .then(res => res)
    .catch(err => {
      if (err && err.response.status === 401) {
        // storage.removeItem("access_token");
        // const loginURL = "/login";

        console.error("Call logout and redirect to ");
        // window.location = loginURL;
      }
      return Promise.reject(err);
    });
}
