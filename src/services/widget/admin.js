import axios from 'axios';
import {_getAllWidget, _getSingleWidget, _postWidget, _upDateWidget, _deleteWidget} from "../../network/network"

const AdminServices = {
  getAllWidget: async (userId, user, source) => {
    return await axios.get(`${_getAllWidget}/${userId}`, {
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
  getSingleWidget: async (id, clientid, user, source) => {
    return await axios.get(`${_getSingleWidget}/${id}`, {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      params:{client: clientid}
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  deleteWidget: async (menuId, id, user, source) => {
    return await axios.delete(`${_deleteWidget}/${menuId}`, {
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
  postWidget: async (data, user, source) => {
    return await axios.post(_postWidget, data,  {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'multipart/form-data',
		Authorization: user.token.token,
		refreshToken: user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  upDateWidget: async (data, id, user, source) => {
    return await axios.patch(`${_upDateWidget}/${id}`, data,  {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'multipart/form-data',
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