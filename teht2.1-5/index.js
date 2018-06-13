import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = (props) => {
    const osat = props.kurssi.osat
    return <div>
        {osat.map((osa) => 
        <div key={osa.id}>
        <Osa osa ={osa.nimi} tehtavia={osa.tehtavia} /></div>)}
    </div>
}

const Yhteensa = (props) => {
    const osat = props.kurssi.osat
    const reducer = (acc, current) =>  acc + current.tehtavia;
    const yht = osat.reduce(reducer, 0);
    return(
        <div>
            <p>Yhteensä {yht} tehtävää</p>
        </div>
    ) 
}

const Kurssi = (props) => {
    const kurssi = props.kurssi
    return(
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
        </div>
    )
}

const Ohjelma = (props) => {
    const kurssit = props.kurssit
    return <div>
        {kurssit.map((kurssi) => 
        <div key={kurssi.id}>
        <Kurssi kurssi={kurssi} /></div>)} 
    </div>
}

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                {
                    nimi: 'Reactin perusteet',
                    tehtavia: 10,
                    id: 1
                },
                {
                    nimi: 'Tiedonvälitys propseilla',
                    tehtavia: 7,
                    id: 2
                },
                {
                    nimi: 'Komponenttien tila',
                    tehtavia: 14,
                    id: 3
                }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]
    
    return (
        <div>
            <h1>Opetusohjelma</h1>
            <Ohjelma kurssit={kurssit} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root')
)