import React from 'react'
import './Navbar'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark ">
  <div  className="container-fluid d-flex justify-content-center">
    <span className="navbar-brand mb-0 h1 fs-1">Tic-Tac-Toe</span>
  </div>
  
  {/* <div class="form-check form-switch float-right">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</div> */}
</nav>
    </div>
  )
}

export default Navbar
