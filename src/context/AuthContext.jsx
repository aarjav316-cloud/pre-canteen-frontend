import API from "../api/axios.js";
import { useEffect, useState , createContext} from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)


    useEffect(() => {
       const token = localStorage.getItem("token")

       if(token){
        const storedUser = JSON.parse(localStorage.getItem("user"))
        setUser(storedUser)
       }

       setLoading(false)
    },[])


    const login = async (email , password) => {
        const {data} =  await API.post('/auth/login' , {
            email,
            password
        })

        localStorage.setItem("token" , data.token);

        const userData = parseJwt(data.token)

        localStorage.setItem("user" , JSON.stringify(userData))

        setUser(userData)
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user , login , logout , loading
        }} >  
            {children}
        </AuthContext.Provider>
    )
}


function parseJwt(token) {
    return JSON.parse(atob(token.split(".")[1]));
  }






  
