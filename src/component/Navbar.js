import React from 'react';
import '../App.css';
import scp from '../data.json';

const scpmenu = scp.map(
  (scp) =>{
    return(
      <li class="nav-item" ><a class="nav-link" href={'#'+scp.item}>{scp.item}</a></li>
    )
  }
);

function Navbar(){
    return(
      <div class="bg-dark fixed-top">
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active"><a class="nav-link" href={process.env.PUBLIC_URL} >Home</a></li>
                {scpmenu}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default Navbar;