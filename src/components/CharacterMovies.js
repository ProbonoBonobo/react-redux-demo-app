import React from 'react';
import { connect } from 'react-redux';

const CharacterMovies = ({ movies }) =>
  <div id='character-movies' className='col-md-6'>
    <h2>Movies</h2>
    <ul class="data-wrapper">
      {movies.map(movie => {
        const dateArray = movie.release_date.split('-');

        return <li key={movie.title}>{movie.title} ({dateArray[0]})</li>;
      })}
    </ul>
  </div>;

const mapStateToProps = ({ character: { movies } }) => ({
  movies,
});

export default connect(mapStateToProps)(CharacterMovies);
