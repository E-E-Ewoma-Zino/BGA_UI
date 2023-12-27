import { useEffect, useState, useRef } from "react";
import AdminService from "../../../services/admin/admin";
import axios from "axios";
import _route from "../../../constants/routes";
import ErrorHandling from "../../../helpers/errorhandling";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const useUpdateAdminClient = () => {
	const navigate = useNavigate()
	const user = useSelector((state) => state.auth.user)
    const [loading, setloading] = useState(false);
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const upDateAdmin = async (data, id) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await AdminService.upDateAdmin(data, id, user, source.current );
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
            }else {
                if(error.response){
                    console.log(error)
                    if(error.response.status === 401){
                        navigate(_route._admin_login)
                    }
                    ErrorHandling(error)
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

    return {upDateAdmin, loading};
}
 
export default useUpdateAdminClient;