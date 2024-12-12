import './navegacion.css'
import { Boton } from '../componentes/boton/boton'
export function Navegacion(){

    return(
        <div className="caja_navegacion">
            <h3 className='smart'>Smart <span className="whater">whater</span> </h3>
            <Boton titulo='Inicio' fondo='#f2f2f2' color='black'/>
            <Boton titulo='Clientes'/>
            <Boton titulo='Mapa de clientes'/>
            <Boton titulo='Monitoreo de distribuidores'/>
            <Boton titulo='Ventas'/>
            <Boton titulo='Pedidos'/>
            <Boton titulo='Prestamos'/>
            <Boton titulo='Finanzas'/>
            <Boton titulo='Reportes '/>
            <Boton titulo='Configuracion'/>
            <div className="caja_salir">
                <h2>➨</h2>
                <button className="calir">Salir</button>
            </div>
        </div>
    )
}