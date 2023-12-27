import { useEffect, useState, useRef } from "react";
import MenuService from "../../../services/menu/admin";
import axios from "axios";
import ErrorHandling from "../../../helpers/errorhandling";
import { useNavigate } from "react-router-dom";
import _route from "../../../constants/routes";
import { useSelector } from "react-redux";

const useGetClientMenu = () => {
	const user = useSelector((state) => state.auth.user)
    const [loading, setloading] = useState(false);
    const CancelToken = axios.CancelToken;
    const navigate = useNavigate()
    const source = useRef();

   
    const getClientMenu = async (id, clientId) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            console.log(source.current)
            const res = await MenuService.getClientMenu(id, clientId, user, source.current );
            setloading(false)
            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                if(res.status === 200){
                    return res.data.result
                }
                if(res.status === 201){
                    return res.data.result
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
            } else {
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

    return {getClientMenu, loading};
}
 
export default useGetClientMenu;