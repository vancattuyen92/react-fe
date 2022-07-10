import axiosInstance from "./axiosInstance";

class HttpRequest {
  async post(url, data = {}, config = {}) {
    return axiosInstance.post(url, data, config)
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;