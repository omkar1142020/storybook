import React from 'react';
import './search.css';

const Search = () =>{
	return(
		<div className='center pt6'>
			<div className='center pa4 br3 shadow-5'>
				<button className='w-20 grow f4 link ph3 pv2 dib white bg-green'> Menu</button>
				<input className='f4 pa2 w-60 center' placeholder='who operates kern36' type='text' />
				<button className='w-20 grow f4 link ph3 pv2 dib white bg-blue'> Go</button>
			</div>
		</div>
		)
}

export default Search;