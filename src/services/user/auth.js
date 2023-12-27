import axios from 'axios';
import {_logInUser} from "../../network/network"

const Authservices = {
  logIn: async (data, source) => {
    return await axios.post(_logInUser, data, {
      // cancelToken: source.token,
    }).then((res) => {
      console.log(res)
      return res
    })
  }


}

export default Authservices