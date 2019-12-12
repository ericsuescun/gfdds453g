import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Aca deben ir los links de navegacion*/}
          <ul>
            <li>
              <Link to='/page1'>Page 1</Link>
            </li>
            <li>
              <Link to='/page2'>Page 2</Link>
            </li>
          </ul>
        </nav>
        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
        <Switch>
          <Route exact path='/' component={Page1} />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          
          <Route path='*' component={NotFound} />

        </Switch>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
