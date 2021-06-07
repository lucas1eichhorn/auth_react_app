import React, { Component } from 'react';
import './Contacto.css'
class Contacto extends Component {
    login = () => {
        console.log("sdasd");
        this.props.auth.login();
    }
    render() {

        //destructuring de objetos
        const { isAuthenticated } = this.props.auth;
        return (
            <React.Fragment>
                {isAuthenticated() && (
                    <form>
                        <legend>Formulario de contacto</legend>
                        <div className="input-field">
                            <label>Nombre:</label>
                            <input type="text" placeholder="Nombre" />
                        </div>
                        <div className="input-field">
                            <label>Email:</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <label>Mensaje:</label>
                            <textarea></textarea>
                        </div>
                        <div className="input-field enviar">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                )}
                {!isAuthenticated() && (
                    <div className="contenedor-boton">
                        <p>Debes estar logueado para er el contenido</p>
                        <a className="boton" onClick={this.login}>Iniciar Sesión</a>

                    </div>
                )}
            </React.Fragment>
        )
    }
}
export default Contacto;