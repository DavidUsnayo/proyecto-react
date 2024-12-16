import './clientes.css'

interface propsClientes{
    usuario:string
}

export function Cliente(props:propsClientes){
    return(
        <div className="caja_cliente">
            <p className="perfil"></p>
            <h4 className='usuario'> {props.usuario} </h4>
            <p className="fecha">20/01/2023</p>
            <p className="money">100 Bs</p>
        </div>
    )
}