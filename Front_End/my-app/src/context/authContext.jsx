import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
export const AuthContext = createContext()


export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setAuth] = useState(undefined)

  useEffect(() => {
    //setAuth(false) // change this flag to true if user is logged in otherwise keep it false
    const token = localStorage.getItem('authToken')
    const user = JSON.parse(localStorage.getItem('user'))
    if (token) {
      setUser(user)
      setAuth(true)
     
    }
  }, [])

  const login = async ( email, password) => {
    try {
      const response = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/login`, {
            email, password
      }) // request to login API end POINT
      const { token, user } = response.data
      setAuth(true) 
      setUser(user)
      localStorage.setItem("authToken", token)
      localStorage.setItem("user", JSON.stringify(user))
      return { status: true }
    } catch ( error ) {
      return {
        status: false,
        error: error.response.data.message || error.message
      }
    }
  }

  
  const signUp = async ({first_name, last_name, email, password, phone, address, gender, age}) => {
    try {
      const response = await axios.post(`http://localhost:${process.env.REACT_APP_API_PORT}/api/new-user`, {
          first_name, last_name, email, password, phone, address, gender, age
      }) // request to login API end POINT

      const { status } = response.data

      return { status: true }
    } catch ( error ) {
      return {
        status: false,
        error: error.response.data.message || error.message
      }
    }

  }

  const logout = async () => {
    try {
      //const response = await axios() request to logout API end POINT
      localStorage.clear()
      setAuth(false) 
    } catch ({message}) {
      return {
        status: false,
        error: message
      }
    }
  }

  return (
    <AuthContext.Provider value={{user, isAuth, login, signUp, logout, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const value = useContext(AuthContext)
  if (!value)
    throw Error("useAuth must be used inside the AuthContextProvider")
  return value
}
