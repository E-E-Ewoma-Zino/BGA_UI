import axios from 'axios';
import {_getAllMenu, _getSingleMenu, _postMenu, _upDateMenu, _deleteMenu, _getClientMenu} from "../../network/network"


const AdminServices = {
  getAllMenu: async (userId, user, source) => {
    return await axios.get(`${_getAllMenu}/${userId}`, {
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
  getSingleMenu: async (id, user, source) => {
    return await axios.get(`${_getSingleMenu}/${id}`, {
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
  deleteMenu: async (menuId, id, user, source) => {
    return await axios.delete(`${_deleteMenu}/${menuId}`,  {
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
  postMenu: async (data, user, source) => {
    return await axios.post(_postMenu, data,  {
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
  upDateMenu: async (data, id, user, source) => {
    return await axios.patch(`${_upDateMenu}/${id}`, data,  {
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
  getClientMenu: async (id, clientId, user, source) => {
    return await axios.get(`${_getClientMenu}/${clientId}`,  {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      params:{widget: id}
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  }


}

export default AdminServices