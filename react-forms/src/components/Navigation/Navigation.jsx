import React from 'react'

const Navigation = ({ auth }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <a className="navbar-brand" href="#">My App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* { auth ? <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
              :
              <li className="nav-item">
                <button className='btn btn-warning'>Login</button>
              </li>
            } */}
            { auth && <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            }
            { !auth && <li className="nav-item">
                <button className='btn btn-warning'>Login</button>
              </li>
            }


          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Navigation