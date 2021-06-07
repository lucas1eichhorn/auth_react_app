import React, { Component } from 'react';
import './Buscador.css'
class Buscador extends Component {
    leerDatos = (e) => {
       // console.log(e.target.value)
       const termino=e.target.value;
       //enviamos por props
       this.props.busqueda(termino);
    }
    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Busqueda" onChange={this.leerDatos} />
            </form>
        )
    }
}
export default Buscador