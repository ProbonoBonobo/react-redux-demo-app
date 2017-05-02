import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';
import CharacterMovies from './CharacterMovies';
import ActiveCharacter from './ActiveCharacter';

const App = () =>

  <div className='container'>
      <div className='row'>
         <ActiveCharacter />
      </div>
      <div className='row'>
          <CharacterList />
          <CharacterProfile />
      </div>
      <div className='row'>
          <CharacterWorld />
          <CharacterMovies />
    </div>
  </div>;

export default App;
