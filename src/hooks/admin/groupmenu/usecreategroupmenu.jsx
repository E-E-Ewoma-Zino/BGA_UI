import { useEffect, useState, useRef } from "react";
import GroupMenuService from "../../../services/groupmenu/admin";
import axios from "axios";
import { useSelector } from "react-redux";
import _route from "../../../constants/routes";
import ErrorHandling from "../../../helpers/errorhandling";
import { useNavigate } from "react-router-dom";

const useCreateGroupMenu = () => {
	const navigate = useNavigate()
	const user = useSelector((state) => state.auth.user)
    const [loading, setloading] = useState(false);
    const CancelToken = axios.CancelToken;
    const source = useRef();

   
    const createGroupMenu = async (data) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            const res = await GroupMenuService.postGroupMenu(data, user, source.current );
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

    return {createGroupMenu, loading};
}
 
export default useCreateGroupMenu;