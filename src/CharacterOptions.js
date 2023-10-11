import React from 'react';

function CharacterOptions ({ handleCharChange, characterData }) {
const mappedCharacters = characterData.map((character, i) => <option key = {i} value = {character}> {character} </option>)
return (
    <div>
        <div className='characterSelect'>
            <select id="characterSelect" onChange = {handleCharChange}>
                {mappedCharacters}
            </select>
        </div>
    </div>
);
}

export default CharacterOptions