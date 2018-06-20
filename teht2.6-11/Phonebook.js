import React from 'react';
import Person from './Person';

const Phonebook = ( {persons} ) => {    
    return(
    <div><table width='400'><tbody>
        {persons.map(person => 
        <Person key={person.name} person={person} />)}
    </tbody></table></div>
    )
}

export default Phonebook
