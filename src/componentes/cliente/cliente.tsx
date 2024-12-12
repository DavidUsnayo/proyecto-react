import './clientes.css'
export function Cliente(props){
    return(
        <div className="caja_cliente">
            <p className="perfil"></p>
            <h4 className='usuario'> {props.usuario} </h4>
            <p className="fecha">20/01/2023</p>
            <p className="money">100 Bs</p>
        </div>
    )
}