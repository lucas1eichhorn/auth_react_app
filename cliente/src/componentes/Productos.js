import React, { Component } from 'react';
import Producto from './Producto';
import './Productos.css';
import Buscador from './Buscador';
import Axios from 'axios';


class Productos extends Component {
    //el state se crea vacio
    state = {
        productos: [],
        terminoBusqeuda: ''
    }
    //luego se agregan los elementos
    componentDidMount() {
        this.queryAPI();
    }
    login = () => {
        this.props.auth.login();
    }
    queryAPI = () => {
        console.log(this.props.auth.isAuthenticated());
        console.log(this.props.auth.getAccessToken());

        const { getAccessToken } = this.props.auth;

        const headers = { 'Authorization': `Bearer ${getAccessToken()}` };
        const url = "http://localhost:5000/productos";

        //mandamos los headers de autorizacion
        return Axios.get(url, { headers }).then(res => {
            console.log(res.data);
            this.setState({ productos: res.data })
        })
    }
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="productos">

                {isAuthenticated() && (
                    <React.Fragment>
                        <h2>Nuestros Productos</h2>
                        <Buscador busqueda={this.props.busquedaProducto} />
                        <ul className="lista-productos">
                            {Object.keys(this.state.productos).map(producto => (
                                <Producto info={this.state.productos[producto]} key={producto} />
                            ))}
                        </ul>
                    </React.Fragment>
                )}

                {!isAuthenticated() && (
                    <div className="contenedor-boton">
                        <p>Debes estar logueado para er el contenido</p>
                        <a className="boton" onClick={this.login}>Iniciar Sesión</a>

                    </div>
                )}
            </div>
        )
    }
}
export default Productos;