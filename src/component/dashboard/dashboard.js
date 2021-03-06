import React from 'react';
import './dashboard.css';

const Dashboard = () =>{
	return(
		<div>
		  <div className='zo'>
			  	<h4>Xerox & Salesforce:CAC(Last 30 Days)</h4>
			  	<div className='heading'>
				  	<h4 style={{ color: 'blue' }}>xerox + cal</h4>
				</div>
				<div className='container'>
				  	<div className='lbox'>
				  	<h2>$3.86</h2>
				  	<h5>CAC Value</h5>
				  	</div>
				  	<div className='rbox'>
				  	<h3>-15%</h3>
				  	<h5>vs $4.60 prev 30 days</h5>
				  	</div>
				</div>
		  </div>
		  <div className='zo'>
		  	<h4>Salesforce Sales(This Month)</h4>
		  	<div className='container-2'>
		  	    <h4>$58,592</h4>
  				<meter Value='5.8' min='0' max='10'></meter>
			</div>
		  </div>
		  <div className='zo'>
		  	<h4>HubSpot Revenue This Month</h4>
		  	<div className='container-2'>
		  		<h4>$1,300,400</h4>
  				<meter Value='8' min='0' max='10'></meter>
			</div>
		  </div>
		</div>
		);
}

export default Dashboard;