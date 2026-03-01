import React from 'react'

function AdminLayout({children}) {
  return (
    <div>
      <nav className='bg-blue-800 p-4 text-white' >
        Admin dashboard
      </nav>
      {children}
    </div>
  )
}

export default AdminLayout
