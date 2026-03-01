import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children , allowedRoles}) => {

    const {user , loading} = useContext(AuthContext)

    if(loading) return <p>Loading...</p>

    if(!user) return <Navigate to='/login'/>

    if(!allowedRoles.includes(user.role))
        return <Navigate to='/' />


    return children;

}


export default ProtectedRoute;








