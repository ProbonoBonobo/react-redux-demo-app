import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile,
    setActiveCharacter
} from '../redux/character/actions';



const CharacterList = ({ characters, setCharacter, setClass }) =>
    <div id='character-list' className='col-lg-6'>
       <h2>Characters</h2>
        <ul class="data-wrapper" onChange={setClass(characters, setCharacter, setClass)}>
            {characters.map((c, i) =>
                <li
                    onClick={setCharacter(characters, c, i + 1)}
                    key={c.name}
                    className={c.isActive ? "active" : "inactive"}
                >
                    {c.name}
                </li>
            )}
        </ul>
    </div>;

const mapStateToProps = ({ characters, activeID, currentClass }) => ({
    characters,
    activeID,
    currentClass
});

const mapDispatchToProps = dispatch => ({
    setClass(characters, character, id) {
        console.log("setClass called with args:");
        console.log(characters);
        console.log(character);
        console.log(id);
        console.log(this);
    },
    setCharacter(characters, character, id) {
        console.log("setCharacter initialized with args:");
        console.log(character);
        console.log(id);
        character['id'] = id;
        characters['activeID'] = 0;
        return () => {
            console.log("setCharacter called with args:");
            console.log(characters);
            console.log(character);
            console.log(id);
            console.log("Active id on entrance: " + characters['activeID']);
            dispatch(setCurrentCharacter(id));
            dispatch(setActiveCharacter(id));
            dispatch(getCharacterProfile(id));
            character['isActive'] = true;
            characters['activeID'] = id;
            characters.map(function(character) {
                console.log(character);
                (characters['activeID'] === id)  ? (function() {
                    character['isActive'] = true;
                })() : (function() {
                    character['isActive'] = false;
                })();
                console.log("isActive?" + character['isActive']);
                return character;
            });
            console.log(character.className);
            console.log(character);
            console.log("Active id on exit: " + characters['activeID']);

        };
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
