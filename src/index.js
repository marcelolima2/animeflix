import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ErrorPage from './pages/error';
import CadastroAnime from './pages/cadastro/anime';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/anime" component={CadastroAnime} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={ErrorPage} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root'),
);
