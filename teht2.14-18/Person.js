import React from 'react';
import personService from '../services/personService';


const Person = (props) => {
    const person = props.person
    const handleDelete = props.handleDelete
    return (
        <tr><td width='200'>{person.name}: </td>
        <td width='150'>{person.number}</td>
        <td width='50'><button onClick = {function() {
                        if(window.confirm(
                            "Haluatko poistaa henkilön " + person.name)) {
                                let id =  String(person.id)
                                console.log("but id " + id)
                                personService.deletePerson(id)
                                .then( () => {
                                console.log("deleting person" + id)
                                handleDelete()
                                id = ""})
                                }
                        }}
                        >poista</button></td></tr>
    )    
}

export default Person