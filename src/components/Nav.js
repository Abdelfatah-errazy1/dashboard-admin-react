import React from 'react'
import { useCookies} from 'react-cookie'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [cookie,_, removeCookie]=useCookies(['access_token'])
  const logout=()=>{
    removeCookie('access_token')
  }
  return (
    <nav className="nav-bar">
  
    </nav>
   

  )
}

export default Nav