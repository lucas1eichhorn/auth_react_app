import React, { Component } from 'react';
import './Navegacion.css';
import { NavLink } from 'react-router-dom'
class Navegacion extends Component {
    cerrarSesion = () => {
        this.props.auth.logout();
    }

    iniciarSesion = () => {
        this.props.auth.login();
    }


    render() {
        
        const { isAuthenticated } = this.props.auth;
        let resultado;
        console.log("estado:", isAuthenticated());
        if (isAuthenticated()) {
            resultado = <a onClick={this.cerrarSesion}>Salir</a>
        } else {
            resultado = <a onClick={this.iniciarSesion}>Iniciar sesión</a>
        }


        console.log(this.props.auth.getAccessToken());
        return (
            <div className="navegacion">
                <NavLink to={'/nosotros'} activeClassName="activo">Nosotros</NavLink>
                <NavLink to={'/productos'} activeClassName="activo">Productos</NavLink>
                <NavLink to={'/contacto'} activeClassName="activo">Contactos</NavLink>
                {resultado}

            </div>
        )
    }
}
export default Navegacion;