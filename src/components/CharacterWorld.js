import React from 'react';
import { connect } from 'react-redux';

const isKnown = text => text && text !== 'unknown';

const CharacterWorld = ({ world }) =>
  <div id='character-world' className='col-md-6'>
    <h2>World</h2>
      <ul class="data-wrapper">
    {isKnown(world.name) && <li>Name: {world.name}</li>}
    {isKnown(world.population) && <li>Population: {world.population}</li>}
    {isKnown(world.diameter) && <li>Diameter: {world.diameter}km</li>}
    {isKnown(world.rotation_period) && <li>Day length: {world.rotation_period} hours</li>}
    {isKnown(world.orbital_period) && <li>Year length: {world.orbital_period} days</li>}
    {isKnown(world.climate) && <li>Climate: {world.climate}</li>}
      </ul>
    </div>;

const mapStateToProps = ({ character: { world } }) => ({
  world,
});

export default connect(mapStateToProps)(CharacterWorld);
