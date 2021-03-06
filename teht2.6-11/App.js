import React from 'react';
import Phonebook from './components/Phonebook';
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/persons')
        .then( response => {
            this.setState({persons: response.data})
        })
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()
        const names = []
        this.state.persons.map(person => names.push(person.name))
        if(names.includes(this.state.newName)) {
            window.alert("Nimi on jo luettelossa. Anna toinen nimi.")
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
        const filtered = this.state.persons.filter(person => {
            return person.name.toLowerCase()
            .includes(this.state.filter.toLowerCase())
        })
        return (
        <div>
            <h2>Puhelinluettelo</h2>
            <div>
                rajaa näytettäviä: <input value={this.state.filter} 
                onChange={this.handleFilterChange}/>
            </div>
            <h3>Lisää uusi</h3>
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
            <h3>Numerot</h3>
            <div>
                <Phonebook persons={filtered} />
            </div>
        </div>
        )
    } 
}

export default App