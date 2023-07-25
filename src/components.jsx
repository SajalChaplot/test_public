import React from 'react';



const Navbar = () => {
    return (
      <nav className="navbar" style={{ position: 'fixed', width: '100vw' }}>
        <div id="nav-content">
          <Link to="/">
            <div id="logo" style={{ height: '30px', width: '30px' }}>
              <img src="../img/logo_black.png" alt="logo" />
            </div>
          </Link>
  
          <div id="links">
            <ul>
              <Link to="/"><li>About</li></Link>
              <Link to="/work"><li>Work</li></Link>
              <a href="Sajal_CV.pdf" target="_blank"><li>Resume</li></a>
            </ul>
          </div>
        </div>
      </nav>
    );
  };


  