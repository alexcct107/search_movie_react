import React, { Component } from 'react'
import { Detail } from './pages/Detail';
import Home from './pages/Home';
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  

  render() {
    const url = new URL (document.location)
    const page = url.searchParams.has('id') ? 
    <Detail id={url.searchParams.get('id')} /> :
    <Home />
    return(
      <div className='App'>
        {page}
      </div>
    )
  }
}
export default App;
