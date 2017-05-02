/**
 * Created by kz on 4/28/17.
 */

import React from 'react';
import { connect } from 'react-redux';


const ActiveCharacter = ({  profile, id }) =>
    <div className="container-fluid display-register">
        <div className="input-label">
            <span className="input-label-text" style={{display: 'inline-block', top: '3px', padding: '5px 10px', height: 36 + 'px'}}>Now Viewing</span>
            <p className="source-input" >{profile.name}</p>
            <span className="input-label-text" style={{display: 'inline-block', lineHeight: '16px', fontSize: '10px', letterSpacing:'.1em', padding: '3px 20px', width: 110 + 'px', top: 85 + 'px', height: 42 + 'px'}}>Active ID</span>
            <p className="source-input">{id}</p>
        </div>
    </div>;


const mapStateToProps = ({ character: { profile, id } }) => ({
    profile,
    id,
});


export default connect(mapStateToProps)(ActiveCharacter);
