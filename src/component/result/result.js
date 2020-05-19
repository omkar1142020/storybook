import React from 'react';
import './result.css';

const Result = () =>{
	return(
		<div>
			<div className='fl'>
			<h1> Results </h1>
			<p> The well kern 36 has Operator: CHEVRON U.S.A.INC</p>
			<h4> Document : N/A </h4>
			</div>
			<div className='fr pt5'>
			<table>
				  <thead>
				    <tr>
				      <th>Well Logs</th>
				      <th>Seismic</th>
				      <th>Synthetics</th>
				      <th>Check Shot</th>
				      <th>VSP</th>
				      <th>Well Design</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>N/A</td>
				      <td>N/A</td>
				      <td>N/A</td>
				      <td>N/A</td>
				      <td>N/A</td>
				      <td>N/A</td>
				    </tr>
				  </tbody>
			</table>
			</div>
		</div>
		);
}

export default Result;