import axios from 'axios';

const apiRequest = (method, url, requestBody = null, cb = null) => {
  const headers = {
        'Content-Type': 'application/json',
  };
  return axios({
    method,
    url,
    data: requestBody,
    headers,
  }).then(res => {
    if (cb) cb(res);
    return res;
  });
};

export default apiRequest;
