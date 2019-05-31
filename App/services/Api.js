/* eslint-disable class-methods-use-this */
import axios from "axios";
import { get } from "lodash";
import { AsyncStorage } from "react-native";

axios.defaults.baseURL = "https://test.heritagewalk.app/api/v1";
class Api {
  state = {
    token: null,
    config: null
  };
  constructor() {
    this.setValue();
  }
  async setValue() {
    console.warn("from constructor");
    this.token = await AsyncStorage.getItem("token");
    this.config = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`
    };
  }
  async login(postData) {
    try {
      const data = await axios.post("/login", postData);
      const res = get(data, "data");
      return res.data;
    } catch (e) {
      const err = get(e, "response"); //while 'Error' response from server is inside e.response
      throw err.data;
    }
  }
  async postInitialRegister(postData) {
    try {
      const data = await axios.post("/signup", postData);
      const res = get(data, "data");
      return res;
    } catch (e) {
      const err = get(e, "response");
      throw err.data;
    }
  }
  async forgotPassword(postData) {
    try {
      const res = await axios.post("/forgot_password", postData);
      // const res = get(data, "message"); //Here no need to destructure for no object as child in response
      return res;
    } catch (e) {
      const err = get(e, "response");
      console.warn("from api", err);
      throw err.data;
    }
  }

  async verifyToken(postData) {
    try {
      const res = await axios.post("/verify_user", postData);
      // const res = get(data, "message"); //Here no need to destructure for no object as child in response
      return res;
    } catch (e) {
      const err = get(e, "response");
      console.warn("from api", err);
      throw err.data;
    }
  }
  async resetPassword(postData) {
    try {
      const res = await axios.post("/change_password", postData, {
        headers: this.config
      });
      // const res = get(data, "message"); //Here no need to destructure for no object as child in response
      return res;
    } catch (e) {
      const err = get(e, "response");
      console.warn("from api", err);
      throw err.data;
    }
  }
  async search(postData) {
    try {
      const data = await axios.post("/search", postData, {
        headers: this.config
      });
      const res = get(data, "data");
      return res;
    } catch (e) {
      const err = get(e, "response");
      throw err.data;
    }
  }

  async searchCategory(postData) {
    await this.setValue();
    try {
      const data = await axios.get("/team_levels", {
        headers: this.config
      });
      const res = get(data, "data");
      return res;
    } catch (e) {
      throw e;
    }
  }
  async searchLeague(postData) {
    try {
      const data = await axios.get("/league", {
        params: { team_level_id: postData },
        headers: this.config
      });
      const res = get(data, "data");
      return res;
    } catch (e) {
      throw e;
    }
  }
  async searchTeam(postData) {
    try {
      const { data } = await axios.get("/league/team", {
        params: { league_id: postData },
        headers: this.config
      });
      const res = get(data, "data");
      return res;
    } catch (err) {
      throw err;
    }
  }
  async downloadTeam(postData) {
    try {
      const { data } = await axios.get("/team/download", {
        headers: this.config,
        params: { team_id: postData }
      });
      // console.warn('from api', data.data)
      const res = get(data, "data");
      return res;
    } catch (err) {
      throw err;
    }
  }
  async sponsorList(postData) {
    await this.setValue();

    try {
      this.setValue();
      const data = await axios.get("/team/sponsor_list", {
        headers: this.config,
        params: { team_id: postData }
      });
      const res = get(data, "data");
      return res;
    } catch (e) {
      throw e;
    }
  }
  async templateType(postData) {
    try {
      const res = await axios.get("/poster/template_type", {
        headers: this.config
      });
      const data = get(res, "data");
      return data;
    } catch (err) {
      throw err;
    }
  }
  async templateList(postData) {
    await this.setValue();

    try {
      const res = await axios.get("/team/poster_lists", {
        headers: this.config,
        params: postData
      });
      const data = get(res, "data");
      return data;
    } catch (err) {
      console.warn("from error api", err);
      throw err;
    }
  }
  async myTeamList(postData) {
    await this.setValue();
    try {
      const res = await axios.get("/team/myteam_list", {
        headers: this.config
      });
      return res.data;
    } catch (e) {
      throw e;
    }
  }
  async deleteTeam(postData) {
    console.warn(postData);
    try {
      const res = await axios.post(
        "/team/delete_myteam",
        { team_id: postData },
        {
          headers: this.config
        }
      );
      console.warn(res);
      return res.data;
    } catch (e) {
      console.warn(e);
      throw e;
    }
  }
  async attemptToFetchOrders() {
    try {
      const { data } = await axios.get("/orders");
      const response = get(data, "data");
      return response;
    } catch (e) {
      throw e;
    }
  }

  async attemptToFetchDeletedTeams() {
    try {
      const { data } = await axios.get("/deleted_teams");
      const response = get(data, "data");
      return response;
    } catch (e) {
      throw e;
    }
  }
  async attemptToFetchOrders() {
    try {
      const { data } = await axios.get("/orders", {
        headers: this.config
      });
      const response = get(data, "data");

      return response;
    } catch (e) {
      throw e;
    }
  }

  async attemptToFetchNewsList() {
    try {
      const { data } = await axios.get("/news", {
        headers: this.config
      });
      const response = get(data, "data");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async attemptToFetchUserInfo() {
    try {
      const { data } = await axios.get("/profile", { headers: this.config });
      const response = get(data, "data");
      console.log(response, "res");
      return response;
    } catch (e) {
      throw e;
    }
  }

  async attemptToSaveUserInfo(name, mobile) {
    try {
      const { data } = await axios.post(
        "/update_profile",
        {
          name: name,
          mobile: mobile
        },
        { headers: this.config }
      );
      const response = get(data, "data");
      return response;
    } catch (e) {
      throw e;
    }
  }

  async attemptToFetchNotification() {
    try {
      const { data } = await axios.get("/notifications", {
        headers: this.config
      });
      const response = get(data, "notifications");
      return response;
    } catch (e) {
      throw e;
    }
  }

  async attempToSaveFeedback(name, notes) {
    try {
      const { data } = await axios.post(
        "/add_feedback",
        {
          name: name,
          content: notes
        },
        {
          headers: this.config
        }
      );
      const response = get(data, "data");
      return response;
    } catch (e) {
      throw e;
    }
  }

  async countries() {
    try {
      const res = await axios.get("/countries", {
        headers: this.config
      });
      const response = get(res, "data");
      return response;
    } catch (err) {
      throw err;
    }
  }
  async states(postData) {
    try {
      const res = await axios.get("/states", {
        headers: this.config,
        params: postData
      });
      const response = get(res, "data");
      return response;
    } catch (err) {
      throw err;
    }
  }
  async posterSize(postData) {
    try {
      const res = await axios.get("/poster/poster_sizes", {
        headers: this.config,
        params: postData
      });
      const response = get(res, "data");
      return response;
    } catch (err) {
      throw err;
    }
  }
  async posterRate(postData) {
    try {
      const res = await axios.get("/poster/poster_rate", {
        headers: this.config,
        params: postData
      });
      const response = get(res, "data");
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export default new Api();
