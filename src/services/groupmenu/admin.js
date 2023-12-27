import axios from 'axios';
import {_getAllGroupMenu, _getSingleGroupMenu, _postGroupMenu, _upDateGroupMenu, _deleteGroupMenu} from "../../network/network"


const AdminServices = {
  getAllGroupMenu: async (userId, user, source) => {
    return await axios.get(`${_getAllGroupMenu}/${userId}`, {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  getSingleGroupMenu: async (id, user, source) => {
    return await axios.get(`${_getSingleGroupMenu}/${id}`, {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  deleteGroupMenu: async (menuId, id, user, source) => {
    return await axios.delete(`${_deleteGroupMenu}/${menuId}`, {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      data: {client:id}
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  postGroupMenu: async (data, user, source) => {
    return await axios.post(_postGroupMenu, data,  {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  upDateGroupMenu: async (data, id, user, source) => {
    return await axios.patch(`${_upDateGroupMenu}/${id}`, data,  {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  }


}

export default AdminServices