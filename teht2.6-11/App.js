import React from 'react';

const Person = ( {person} ) => {
    return (
        <tr><td width='200'>{person.name}: </td>
        <td width='200'>{person.number}</td></tr>
    )    
}

const Phonebook = ( {persons} ) => {
    return(
    <div><table width='400'><tbody>
        {persons.map(person => 
        <Person key={person.name} person={person} />)}
    </tbody></table></div>
    )   
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [
            { name: 'Arto Hellas', 
            number: '040-123456' },
            { name: 'Valtteri Vihavainen', 
            number: '0400-4561145' }
        ],
        newName: '',
        newNumber: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()
        const names = []
        this.state.persons.map(person => names.push(person.name))
        if(names.includes(this.state.newName)) {
            window.alert("Nimi on jo luettelossa. Anna uusi nimi.")
            this.setState({ newName: '' })
        } else {
            const personObj = {
                name: this.state.newName,
                number: this.state.newNumber
            }
            const persons = this.state.persons.concat(personObj)
            this.setState({
                persons, 
                newName: '',
                newNumber: ''
            })
        }        
    }

    render() {
        return (
        <div>
            <h2>Puhelinluettelo</h2>
            <form onSubmit={this.addPerson}>
                <div>
                    nimi: <input value={this.state.newName} 
                    onChange={this.handleNameChange}/>
                </div>
                <div>
                    numero: <input value={this.state.newNumber} 
                    onChange={this.handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            <div>
                <Phonebook persons={this.state.persons} />
            </div>
        </div>
        )
    }
}

export default App