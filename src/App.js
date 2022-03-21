import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-header">Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
      <br />
      <Link to="/movies/new" className="add-movie">ADICIONAR CARTÃO</Link>
    </HashRouter>
  );
}

export default App;
