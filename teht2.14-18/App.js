import React from 'react';
import Phonebook from './components/Phonebook';
import personService from './services/personService';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: ''
        }
        this.getPersons = this.getPersons.bind(this)
    }

    getPersons() {
        console.log("getting persons")
        personService.getAll()
        .then( response => {
            this.setState({persons: response.data})
        })
    }

    componentDidMount() {
        personService.getAll()
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
            personService.create(personObj)
            .then( response => {
                console.log(response.data)
                this.getPersons()
            })
            this.setState({ newName: '' })
            this.setState({ newNumber: '' })
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
                <Phonebook persons={filtered} handleDelete={this.getPersons} />
            </div>
        </div>
        )
    } 
}

export default App
