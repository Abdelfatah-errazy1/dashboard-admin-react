import React from 'react'
import { useCookies} from 'react-cookie'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [cookie,_, removeCookie]=useCookies(['access_token'])
  const logout=()=>{
    removeCookie('access_token')
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-uppercace">Dashbord Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggler="navbar-toggler" 
        data-bs-target="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbar-toggler">
          <form action="" class="d-flex ms-auto">
            <div class="input-group">
              <input type="text"  class="form-control"/>
              <button class="btn btn-primary" id="button-search">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a href="" class="nav-link dorpdown-toggler" id="navbarDropdown" data-bs-toggle="dropdown">
                <i class="bi bi-person-fill"></i>
              </a>
           
              <ul class="dropdown-menu dropdown-menu-end">
                <li class="dropdown-item">action</li>
                <li class="dropdown-item">another action</li>
                <li class="dropdown-item"></li>
              </ul>
            </li>
          </ul>
         </div>
      </div>
    </nav>
  )
}

export default Nav