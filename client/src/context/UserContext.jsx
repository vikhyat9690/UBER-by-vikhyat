import React, { createContext, useState } from "react"


export const createDataContext = createContext();

const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  })
  return (
    <createDataContext.Provider value={[user, setUser]}>
      {children}
    </createDataContext.Provider>
  )
}
export default UserContext
