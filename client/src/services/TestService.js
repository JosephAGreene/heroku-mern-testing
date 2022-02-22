import axios from "axios";
import API from "./apiVariable.js";

class TestService {

  constructor() {
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }

  addNewWord(payload) {
    return axios
      .post(`${API}/test`,
        {
          ...payload
        }
      )
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          return error.response;
        } else {
          return this.networkIssue;
        }
      });
  }

  getWords() {
    return axios
      .get(`${API}/test`)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          return error.response;
        } else {
          return this.networkIssue;
        }
      });
  }

}

export default new TestService();