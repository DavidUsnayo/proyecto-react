import './principal.css'
import { BsFillDice4Fill, BsHouseDoorFill } from "react-icons/bs";
import { Card } from '../componentes/card/card';
import { Cliente } from '../componentes/cliente/cliente';
import { Pedido } from '../componentes/pedido/pedido';

export function Principal(){

    return(
        <div className="caja_principal">
            <div className="inicio_arriba">
                <div>
                    <BsHouseDoorFill />
                    <h2>Inicio</h2>
                </div>
                <section>
                    <BsFillDice4Fill/>
                    {/* <p className='baseDatos'>Base <br /> Datos <br /> <small>FIREBASE</small> </p> */}
                </section>
            </div>
            <div className="caja_targetas">
                <Card titulo='Clientes nuevos' numero='18'/>
                <Card titulo='Prestamos activos' numero='25' fondo='#ffd4d4'/>
                <Card titulo='Pedidos totales' numero='1,236'/>
                <Card titulo='Ingresos totales' numero='1,783 Bs'/>
            </div>
            <h3 className='subtitulo'>Acciones rapidas</h3>
            <div className="seccion_dos">
                <div className="contenedor_clientes">
                    <h4>Clientes <span className="vista">Vista rapida</span> </h4>
                    <div className="caja_clientes">
                        <Cliente usuario='Daniela Ayala'/>
                        <Cliente usuario='Ruben Gonzales'/>
                        <Cliente usuario='Mariana Reyes'/>
                        <Cliente usuario='Julio Espinoza'/>
                    </div>
                </div>
                <Pedido/>
            </div>
        </div>
    )
}