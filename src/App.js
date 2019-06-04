import React, { Component } from 'react';
import Display from './components/Display'
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component= {Display} /> 
          </Switch>
        </div>
      </BrowserRouter>
    )
  } 
}

export default App
