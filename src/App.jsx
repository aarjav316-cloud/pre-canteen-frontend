import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoutes.jsx'
import UserLayout from './layouts/UserLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'

function App() {
  return (
    <>

    <Routes>
 
      <Route path='/login' element={<h1>Login Page</h1>} />

      <Route path='/'
             element={
               <ProtectedRoute allowedRoles={["student"]} >
                   <UserLayout>
                     <h1>Student home</h1>
                   </UserLayout>
               </ProtectedRoute>
             }
       />
      
      <Route path='/admin'
             element={
               <ProtectedRoute allowedRoles={["admin" , "staff"]} >
                  <AdminLayout>
                    <h1>Admin dashboard</h1>
                  </AdminLayout>
               </ProtectedRoute>
             }  
      />

    </Routes> 
      
    </>
  )
}

export default App









