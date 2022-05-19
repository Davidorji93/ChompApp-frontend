import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const userLogin =(user)=>{
        setUser(user)
    }
    const userLogout =()=>{
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{userLogin, userLogout, children}} >
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth =()=>{
    return useContext(AuthContext)
}