import React from 'react'
import { Outlet } from 'react-router'
import TopNews from './top-news/topNews'
import './home.css'
import Sidebar from './sidebar/sidebar'

export default function Home() {


  return (
    <div className='dashboard-body'>
      <div className='sidebar-wrapper'>
        <Sidebar/>
      </div>
      <div className='header-wrapper'>
        <Outlet/>
      </div>
    </div>
  )
}
