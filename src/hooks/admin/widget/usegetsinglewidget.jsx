import { useEffect, useState, useRef } from "react";
import WidgetService from "../../../services/widget/admin";
import { Warning } from "../../../helpers/toastify/toastify";
import axios from "axios";
import ErrorHandling from "../../../helpers/errorhandling";
import { useNavigate } from "react-router-dom";
import _route from "../../../constants/routes";
import { useSelector } from "react-redux";

const useGetSingleWidget = () => {
	const user = useSelector((state) => state.auth.user)
    const [loading, setloading] = useState(false);
    const CancelToken = axios.CancelToken;
    const navigate = useNavigate()
    const source = useRef();

   
    const getSingleWidget = async (id, clientid) => {
        if (source.current === undefined) {
            source.current = CancelToken.source();
          }
        try {
            setloading(true);
            console.log(source.current)
            const res = await WidgetService.getSingleWidget(id, clientid, user, source.current );
            setloading(false)
            if(!res) {
				window.NioApp.Toast('An error occured', "warning");
            }else{
                if(res.status === 200){
                    return res.data.result
                }
            }
            
        } catch (error) {
            setloading(false);
            if (axios.isCancel(error)) {
                    console.log(error);
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

    return {getSingleWidget, loading};
}
 
export default useGetSingleWidget;