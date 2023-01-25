import React, { useState, useEffect } from 'react';
import './index.css'
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue = 'avatar') => {
		// searchValue = 'avatar';
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=6cace1e8`;

		// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=76ebb82c`;

		const response = await fetch(url);
		const responseJson = await response.json();
		console.log(responseJson);
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		
		
		<div className='container-fluid movie-app'>
			
			<div className='app'>
				
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='movielistwrapper'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>
<h3>favourite</h3>			
		<div className='movielistwrapper'>
			
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
			
			<h3>All Movies</h3>
			
			<div className='moviewrapper'>
					
						<MovieList
					movies={movies}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/> 
				
				
				</div>
				
				
			
		
	</div>
	);
};

export default App;