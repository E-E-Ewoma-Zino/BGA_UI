import { useEffect, useState, useRef } from "react";
import AdminService from "../../../services/admin/admin";
import axios from "axios";
import { useSelector } from "react-redux";

const useCreateAdmin = () => {
	const user = useSelector((state) => state.auth.user)
    const [loading, setloading] = useState(false);
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const createAdmin = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AdminService.postAdmin(data, user, source.current );
            setloading(false)
            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                if(res.status === 200){
					window.NioApp.Toast(res.data.message, "success");
                    return true
                }else if(res.status === 201){
					window.NioApp.Toast(res.data.message, "success");
                    return true
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                    console.log(error);
            }else {
                if(error.response){
					window.NioApp.Toast(error.response.data.message, "warning");
                }else{
					window.NioApp.Toast(error.message, "error");
                }
            }
        }
       
    }
    
    useEffect(()=>{
        return () =>{ 
            if (source.current != null) source.current.cancel()
        }
    }, [])

    return {createAdmin, loading};
}
 
export default useCreateAdmin;