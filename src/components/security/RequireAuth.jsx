import { Navigate, useLocation } from 'react-router-dom'
import AuthHelper from '../utils/AuthHelper'
import { useAuth } from "./auth"

export const RequireAuth =({children})=>{
    const location = useLocation()
    const auth = useAuth()
    
    if(!AuthHelper.isLoggedIn()){
        return <Navigate to='/login'  state={{ path: location.pathname}} />
    }
    else{
        return children
    }
}