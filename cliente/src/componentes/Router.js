import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nosotros from './Nosotros';
import Error from './Error';
import infoProductos from '../datos/datos.json';
import Productos from './Productos';
import Header from './Header';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';
import Contacto from './Contacto';

class Router extends Component {
    //el state se crea vacio
    state = {
        productos: [],
        terminoBusqeuda: ''
    }
    //luego se agregan los elementos
    componentDidMount() {
        this.setState({ productos: infoProductos });
    }

    busquedaProducto = (busqueda) => {
        if (busqueda.length > 3) {
            this.setState({ terminoBusqeuda: busqueda });
        }else{
            this.setState({ terminoBusqeuda: "" });
        }
    }
    render() {
        let productos=[...this.state.productos];
        let busqueda=this.state.terminoBusqeuda;
        let resultado;
        if(busqueda!==""){
            console.log("no está vacio");
            resultado=productos.filter(producto=>(
                producto.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !==-1
            ))
        }else{
            console.log("vacio");
            resultado=productos;
        }

        return (
            <BrowserRouter>
                <div className="contenedor">
                    <Header />
                    <Navegacion />
                    <Switch>
                        {/**pasar datos al componente por props usamos render*/}
                        <Route exact path="/" render={() => (
                            <Productos productos={resultado} busquedaProducto={this.busquedaProducto}/>
                        )}>
                        </Route>
                        <Route exact path="/productos" render={() => (
                            <Productos productos={resultado} busquedaProducto={this.busquedaProducto}/>
                        )}>
                        </Route>
                        {/*para mostrar estatico usamos component,si no hay que pasar datos*/}
                        <Route exact path="/nosotros" component={Nosotros}></Route>

                        <Route exact path="/producto/:productoId" render={(props) => {
                            console.log(props)
                            let idProducto = props.location.pathname.replace('/producto/', '');
                            console.log(idProducto);
                            return (<SingleProducto producto={this.state.productos[idProducto]} />)

                        }}>
                        </Route>
                        <Route exact path="/contacto" component={Contacto}></Route>
                        <Route component={Error}></Route>
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
}

export default Router;