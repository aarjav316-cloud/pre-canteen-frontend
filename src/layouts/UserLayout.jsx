import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.jsx'

function UserLayout({children}) {

  const {logout} = useContext(AuthContext)

  return (
    <div>
        <nav className='bg-blue-600 p-4 text-white' >
           <span>User Navbar</span>
           <button onClick={logout}>  Logout</button>
        </nav>
        {children}
    </div>
  )
}

export default UserLayout







