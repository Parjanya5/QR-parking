import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <>
   <nav className="navbar  fixed-top bg-primary bg-opacity-50 mb-2">
  <div className="container-fluid mx-3 my-">
    <div className='d-flex align-items-center'>  
    <img src="https://vectorified.com/images/scan-qr-code-icon-17.png" className='rounded' alt=" src error" style={{height:'50px'}} />
    <a className="navbar-brand fs-4" href="#">Scan your car</a>
    </div>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end bg-secondary bg-opacity-50" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <div className='d-flex align-items-center'>
        <img src="https://vectorified.com/images/scan-qr-code-icon-17.png" className='rounded' alt=" src error" style={{height:'50px'}} />
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Scan your car</h5>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
          <li className="nav-item">
            <a className="nav-link active bg-light rounded bg-opacity-50" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link active bg-light rounded bg-opacity-50" aria-current="page" to={'/about'}>About</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link bg-light rounded bg-opacity-50 " href="#">Login</a>
          </li> */}
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle bg-light rounded  bg-opacity-50" to={'/signin'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </Link>
            <ul className="dropdown-menu bg-light bg-opacity-50 gap-5">
              <li><Link className="dropdown-item bg-light opacity-50" to={'/signup'}><span className='d-flex gap-2 align-items-center justify-content-center'><FaUser/>Sign-up User</span></Link></li>
              <li><Link className="dropdown-item bg-light opcatiy-50" to={'/'}><span className='d-flex gap-2 align-items-center justify-content-center'><FaUser/>Sign-in User</span></Link></li>
            </ul>
          </li>
        </ul>
        {/* <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
