import axios from "axios";

class TestService {

  constructor() {
    // Generic response to give API experiences internal issues.
    this.networkIssue = { status: 'dead' };
  }


  addNewWord(payload) {
    return axios
      .post(`http://localhost:5000/api/test`,
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
      .get(`http://localhost:5000/api/test`)
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