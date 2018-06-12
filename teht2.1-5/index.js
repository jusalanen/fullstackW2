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
    let c = 0
    osat.map((osa) => {
        c += osa.tehtavia
        return c
    })
    return (
        <div>
            <p>Yhteensä {c} tehtävää</p>
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

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
      },
      {
        nimi: 'Redux',
        tehtavia: 7,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)