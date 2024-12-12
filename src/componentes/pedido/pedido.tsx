import { useEffect, useState } from 'react'
import './pedido.css'
import { db } from '../../firebase'
import { collection, addDoc} from "firebase/firestore";

export function Pedido(){

    let [cantidad, setCantidad] = useState(1)
    let [usuario, setUsuario] = useState("Cliente1")
    let [botellon, setBotellon] = useState("")
    let [precio, setPrecio] = useState(18)

    function agregar(usuario,botellon,cantidad){addDoc(collection(db, "pedidos"), {
        usuario:usuario,
        botellon:botellon,
        cantidad:cantidad
    }
    )}

    function pedido(){
        agregar(usuario, botellon, cantidad)
    }

    return(
        <div className="contenedor_pedido">
            <h4>Realizar pedido</h4>
            <select className='cliente' onChange={(e)=>{setUsuario(e.target.value)}}>
                <option value="Cliente_1">Cliente_1</option>
                <option value="Cliente_2">Cliente_2</option>
                <option value="Cliente_3">Cliente_3</option>
            </select>
            <select className='botellon' onChange={(e)=>{setBotellon(e.target.value)}}>
                <option value="Botellon de 20 Lts">Botellon de 20 Lts</option>
                <option value="Botellon de 10 Lts">Botellon de 10 Lts</option>
                <option value="Botellon de 5 Lts">Botellon de 5 Lts</option>
            </select>
            <div className="caja_cantidad">
                <div className="caja_aumentar">
                    <div className="aumentar">
                        <p>Cantidad</p>
                        <div className="sumatoria">
                            <button onClick={()=>{setCantidad(cantidad = cantidad - 1)}}>-</button>
                            <label> {cantidad} </label>
                            <button onClick={()=>{setCantidad(cantidad = cantidad + 1)}}>+</button>
                        </div>
                        
                    </div>   
                    <div className="precio">
                        <p> {precio} </p>
                        <h5>Bs</h5>
                    </div>
                </div>
            </div>
            <button className="realizarPedido" onClick={()=>pedido()}>Realizar pedido</button>
        </div>
    )
}