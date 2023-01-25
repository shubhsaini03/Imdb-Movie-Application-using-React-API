import React from 'react';
import MovieListHeading from './MovieListHeading';

const SearchBox = (props) => {
	return (
		
		<section id='search'>
			<div className='container-fluid' id='header'>
				<div className='row'>
					<div className='col-md-4'>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv3kz3Zu6qCIprsCVMai0FL45B3o4F9bhkw&usqp=CAU" />
					</div>
					<div className='col-md-8'>
						<p>About us</p>
						<p>movies</p>
						<p>Booking</p>
						<p>		Home</p>
						
					</div>
				</div>
			</div>
<div className='container'>
			<div className='row'>
				<h1 className='mb-4'>Imdb Movie List</h1>
				
				<div className='col-md-3'></div>
				<div className='col-md-6'>
				<input

				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
				</div>
			
		</div>
		</div>
		</section>
	);
};

export default SearchBox;