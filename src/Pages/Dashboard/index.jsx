import React from 'react'
import { Outlet } from 'react-router-dom'
// import './DashboardStyles.css'
import Navbar from '../../components/Navbar';

const Dashboard = () => {
    
    return (
        <div className='Dashboard-container'>
            <div className='Dashboard-sideMenu'>
                <Navbar />
            </div>
            <div className='Dashboard-main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard