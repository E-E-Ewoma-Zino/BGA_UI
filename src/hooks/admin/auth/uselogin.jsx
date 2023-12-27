import { useEffect, useState, useRef } from "react";
import AuthService from "../../../services/admin/auth";
import { useDispatch } from 'react-redux'
import { setUser } from "../../../redux/authreducer"
import axios from "axios";

const useLoginUser = () => {
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch()
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const loginUser = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AuthService.logIn(data, source.current );
            setloading(false)
            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                if(res.status === 200){
                    console.log(res)
                    console.log(res.data.result)
                    await dispatch(setUser(res.data.result))
                    localStorage.setItem('bga', JSON.stringify(res.data.result))
					window.NioApp.Toast('Login Successful', "success");
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                    console.log(error);
            } else {
                if(error.response){
                    console.log(error)
					window.NioApp.Toast(error.response.data.message, "warning");
                }else{
                    console.log(error)
					window.NioApp.Toast(error.message, "warning");
                }
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {loginUser, loading};
}
 
export default useLoginUser;