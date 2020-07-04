import React from 'react';

const AppTableListItem = ({name,surname,age,city}) => {
    return (
        <ul>
    <span>{ name}</span>
    <span> { surname}</span>
    <span> { age}</span>
    <span> { city}</span>
            
        </ul>



    )
}

export default AppTableListItem;