import React, { Component } from 'react';
import Todos from './todos/Todos'
import Nav from './navbar/Nav'
import Done_todos from './done-todos/Done_todos'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Todos} />
        <Route path="/Done_todos" component={Done_todos} />
      </div>
    </BrowserRouter>
  )
}

export default App;
