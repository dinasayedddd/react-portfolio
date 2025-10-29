import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
      
    </div>
  )
}
