import './boton.css'
import { BsFillDice4Fill } from "react-icons/bs";

interface propsBoton {
    titulo:string
    fondo?:string
    color?:string
}

export function Boton(props:propsBoton){
    return(
        <div className="boton" style={{background:props.fondo, color:props.color}}>
            <BsFillDice4Fill />
            <p> {props.titulo} </p>
        </div>
    )
}