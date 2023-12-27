import axios from "axios";
import {
  _getAllAdmin,
  _getSingleAdmin,
  _postAdmin,
  _upDateAdmin,
  _delteAdmin,
} from "../../network/network";

const AdminServices = {
  getAllAdmin: async (user, source) => {
    return await axios
      .get(_getAllAdmin, {
        // cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token.token,
		  refreshToken: user.token.refreshToken
        },
        // withCredentials: true
      })
      .then((res) => {
        return res;
      });
  },
  getSingleAdmin: async (id, user, source) => {
    return await axios
      .get(`${_getSingleAdmin}/${id}`, {
        // cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token.token,
		  refreshToken: user.token.refreshToken
        },
        // withCredentials: true
      })
      .then((res) => {
        return res;
      });
  },
  deleteAdmin: async (id, user, source) => {
    return await axios
      .delete(`${_delteAdmin}/${id}`, {
        // cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token.token,
		  refreshToken: user.token.refreshToken
        },
        // withCredentials: true
      })
      .then((res) => {
        return res;
      });
  },
  postAdmin: async (data, user, source) => {
    return await axios
      .post(_postAdmin, data, {
        // cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token.token,
		  refreshToken: user.token.refreshToken
        },
        // withCredentials: true
      })
      .then((res) => {
        return res;
      });
  },
  upDateAdmin: async (data, id, user, source) => {
    return await axios
      .patch(`${_upDateAdmin}/${id}`, data, {
        // cancelToken: source.token,
        headers: {
          "Content-Type": "application/json",
          Authorization: user.token.token,
		  refreshToken: user.token.refreshToken
        },
        // withCredentials: true
      })
      .then((res) => {
        return res;
      });
  },
};

export default AdminServices;
