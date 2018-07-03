import React from 'react';

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

export default Kurssi