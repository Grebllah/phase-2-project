import React from 'react';

function CharacterOptions ({ handleCharChange, characterData, excludedTerms }) {

    const filteredCharacters = characterData.filter((character) => excludedTerms.includes(character) === false)
    const mappedCharacters = filteredCharacters.map((character, i) => <option key = {i} value = {character}> {character} </option>)
    return (
    <div>
        <div className='characterSelect'>
            <select id="characterSelect" onChange = {handleCharChange}>
                <option value="">--</option>
                {mappedCharacters}
            </select>
        </div>
    </div>
);
}

export default CharacterOptions