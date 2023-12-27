
import { useDispatch } from 'react-redux'
import { setUser } from "../../../redux/authreducer"

const useLogOutUser = () => {
    const dispatch = useDispatch()

   
    const logOutUser = async (data) => {
        await dispatch(setUser(null))
        localStorage.removeItem('bga')
        return true
    
       
    }

    return {logOutUser};
}
 
export default useLogOutUser;