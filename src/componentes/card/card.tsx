import './card.css'
export function Card(props){

    return(
        <div className="caja_card">
            <h5> {props.titulo} </h5>
            <h2> {props.numero} </h2>
            <p> <span className="porcentaje" style={{background:props.fondo}}>+0.2%</span> En el ultimo mes </p>
        </div>
    )
}