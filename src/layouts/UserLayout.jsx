import React from 'react'

function UserLayout({children}) {
  return (
    <div>
        <nav className='bg-blue-600 p-4 text-white' >
           User Navbar
        </nav>
        {children}
    </div>
  )
}

export default UserLayout



