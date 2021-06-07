import React, { Component } from 'react';
import './SingleProducto.css';
class SingleProducto extends Component {
   
   
render() {
  
    if (!this.props.producto) return null;
     const { imagen, nombre, precio, descripcion } = this.props.producto;


    return (

     
           
         <div className="info-producto">
                <div className="image">
                    <img src={`/img/${imagen}.png`} alt={nombre} />
                </div>
                <div className="info">
                    <h2>{nombre}</h2>
                    <p className="precio">$ {precio}</p>
                    <p>{descripcion}</p>
                </div>
            </div>
        
        )

}
}
export default SingleProducto;