/**
 * Created by kz on 4/28/17.
 */

import React from 'react';
import { connect } from 'react-redux';


const ActiveCharacter = ({  profile, id }) =>
    <div className="container-fluid display-register">
        <div className="input-label">
            <span className="input-label-text" id="labelA" >Now Viewing</span>
            <p className="source-input" >{profile.name}</p>
            <span className="input-label-text" id="labelB" >Active ID</span>
            <p className="source-input">{id}</p>
        </div>
    </div>;


const mapStateToProps = ({ character: { profile, id } }) => ({
    profile,
    id,
});


export default connect(mapStateToProps)(ActiveCharacter);
