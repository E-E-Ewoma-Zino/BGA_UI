import axios from 'axios';
import {_getAllAdminClient, _getSingleAdminClient, _postAdminClient, _upDateAdminClient, _deleteClient} from "../../network/network"

const AdminClientServices = {
  getAllClient: async (user, source) => {
    return await axios.get(_getAllAdminClient, {
      // cancelToken: source.token,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token.token,
		"refreshToken": user.token.refreshToken
      },
      // withCredentials: true
    }).then((res) => {
      console.log(res)
      return res
    })
  },
  getSingleClient: async (id, user, source) => {
    return await axios.get(`${_getSingleAdminClient}/${id}`, {
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
  deleteClient: async (id, user, source) => {
    return await axios.delete(`${_deleteClient}/${id}`, {
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
  postClient: async (data, user, source) => {
    return await axios.post(_postAdminClient, data,  {
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
  upDateClient: async (data, id, user, source) => {
    return await axios.patch(`${_upDateAdminClient}/${id}`, data,  {
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

export default AdminClientServices