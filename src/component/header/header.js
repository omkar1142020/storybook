import React from 'react';
import './header.css';

const Header = () =>{
	return(
		<nav className="zone blue sticky">
	      <ul className="main-nav">
	          <li>Wipro Holmes</li>
	          <li style={{ color: 'black' }}>IBM Watson</li>
	          <li>Petro Technical Search for Upstream</li>
	          <li style={{ color: 'black'}}>ENU BOT</li>
	          <li>Admin Menu</li>
	          <li className="push">Hello, guest	</li>
	  	  </ul>
  		</nav>
		);
	
};

export default Header;