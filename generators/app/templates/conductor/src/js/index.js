import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, navigate } from '@joduplessis/conductor'

function HomePage(props) {
  return (
    <div>
      <h1>Home page</h1>
      <p>{props.content}</p>
    </div>
  )
}

function AboutPage(props) {
  return (
    <div>
      <h1>About page</h1>
      <p>{props.content}</p>
    </div>
  )
}

function AboutPersonPage(props) {
  return (
    <div>
      <h1>About Person page</h1>
      <p>{props.content}</p>
      <small>Name: {props.name}</small>
    </div>
  )
}

function App(props) {
  return (
    <Routes>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/about/jo')}>About Jo (URL parameter)</button>
      <hr />
      <Route path="/home" component={HomePage} routeProps={{ content: 'Home page text' }} />
      <Route path="/about" component={AboutPage} routeProps={{ content: 'About page text' }} />
      <Route path="/about/:name" component={AboutPersonPage} routeProps={{ content: 'About Person page text' }} />
    </Routes>
  )
}

// prettier-ignore
ReactDOM.render(<App />, document.getElementById("root"))
