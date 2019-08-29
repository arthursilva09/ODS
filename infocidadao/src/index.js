import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Infocidadao from './pages/Infocidadao'
import Objetivos from './pages/Objetivos'
import Onu from './pages/Onu'
import Opiniao from './pages/Opiniao'
import Teste from './pages/Teste'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Infocidadao} />
            <Route path="/objetivos" component={Objetivos} />
            <Route path="/onu" component={Onu} />
            <Route path="/opiniao" component={Opiniao} />
            <Route path="/teste" component={Teste} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
