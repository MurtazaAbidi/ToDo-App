import React from 'react'
import logo from '../../assets/Login/LoginLogo.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { DashboardMenuItems } from './NavebarMenuItems'
import { useSnackBar } from '../../hooks/useSnakeBar'

const Navbar = () => {
  const showPopUp = useSnackBar();
  return (
    <div className='navbar-container'>
      <div className='navbar-logo' 
      // onClick={() => { navigate('../../#home') }}
      >
        <img src={logo} alt="" />
      </div>
      <div className='navbar-menuItems'>
        <ul>
          {DashboardMenuItems.map((element, index) => {
            return <li key={index}>
              {
                element.name === 'logout'
                  ?
                  <NavLink to={element.link} onClick={() => { 
                    showPopUp("Logout Successfully", "success");
                    localStorage.removeItem("to-do-app-logged-in");
                    window.location.reload();
                  }} className="dashboard-NavLinks"><span>{element.icon}</span><span>{element.name}</span></NavLink>
                  :
                  <NavLink to={element.link} className="dashboard-NavLinks"><span>{element.icon}</span><span>{element.name}</span></NavLink>
              }
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar