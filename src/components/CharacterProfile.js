import React from 'react';
import { connect } from 'react-redux';



const CharacterProfile = ({ profile, world }) =>

  <div id='character-profile' className='col-md-6'>
    <h2>Profile</h2>
      <ul class="data-wrapper">
    {profile.name && <li>Name: {profile.name}</li>}
    {profile.height && <li>Height: {profile.height}cm</li>}
    {profile.mass && <li>Weight: {profile.mass}kg</li>}
    {world.name && <li>World: {world.name}</li>}
    {profile.gender && <li>Gender: {profile.gender}</li>}
      </ul>

  </div>;

const mapStateToProps = ({ character: { profile, world } }) => ({
  profile,
  world,
});


export default connect(mapStateToProps)(CharacterProfile);
