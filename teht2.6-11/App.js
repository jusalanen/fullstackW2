import React from 'react';

const Person = ( {person} ) => {
    return (
        <li>{person.name}</li>
    )    
}

const Phonebook = ( {persons} ) => {
    return(
    <ul>
        {persons.map(person => 
        <Person key={person.name} person={person} />)}
    </ul>
    )   
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [
            { name: 'Arto Hellas' }
        ],
        newName: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
      }

    addPerson = (event) => {
        event.preventDefault()
        const personObj = {
            name: this.state.newName,
        }
        const persons = this.state.persons.concat(personObj)
        this.setState({
            persons, 
            newName: ''
        })
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
