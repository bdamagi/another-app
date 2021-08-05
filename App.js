import './App.css';
import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { asyncComponent, Header, Navigation } from './components'

const About = asyncComponent(() => import('./pages/About/About'))
const Home = asyncComponent(() => import('./pages/Home'))

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />           
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

