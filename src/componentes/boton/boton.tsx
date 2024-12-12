import './boton.css'
import { BsFillDice4Fill } from "react-icons/bs";

export function Boton(props){
    return(
        <div className="boton" style={{background:props.fondo, color:props.color}}>
            <BsFillDice4Fill />
            <p> {props.titulo} </p>
        </div>
    )
}