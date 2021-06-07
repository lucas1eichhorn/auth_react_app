import React from 'react';
import { Route, Router } from 'react-router-dom';
//auth0
import Callback from './Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

//componentes
import Nosotros from './Nosotros';
import Productos from './Productos';
import Header from './Header';
import SingleProducto from './SingleProducto';
import Navegacion from './Navegacion';
import Contacto from './Contacto';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="contenedor">
        <Header />
        <Navegacion auth={auth} />


        {/**pasar datos al componente por props usamos render*/}
        {/**cada componente que necesite autenticacion le pasamos auth y props */}
        <Route exact path="/" render={(props) => (
          <Productos auth={auth} {...props} />
        )}>
        </Route>
        <Route exact path="/productos" render={(props) => (
          <Productos auth={auth} {...props} />
        )}>
        </Route>
        <Route exact path="/producto/:productoId" render={(props) => {
          console.log(props)
          let idProducto = props.location.pathname.replace('/producto/', '');
          console.log(idProducto);
          return (<SingleProducto producto={this.state.productos[idProducto]} auth={auth} {...props} />)

        }}>
        </Route>
        {/*para mostrar estatico usamos component,si no hay que pasar datos, sin auth ni props-> no segura*/}
        <Route exact path="/contacto" render={(props) => (
          <Contacto auth={auth} {...props} />
        )}></Route>
        <Route exact path="/nosotros" component={Nosotros}></Route>

        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}
