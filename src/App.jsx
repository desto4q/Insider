import React, { useContext, useLayoutEffect } from 'react'
import WebFont from 'webfontloader';
import Router from './router/Router'
import "./App.scss"
import { userContext } from './context/Context';
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif', "Montserrat"]
  }
});

function App() {
  let {updateWindow} = useContext(userContext)
  useLayoutEffect(()=>{
    let  header = document.querySelector("title").innerHTML= "INsider";
    updateWindow()
  })
  let {theme} = useContext(userContext)
  return (
    <div className="App" id={theme}>
      <Router/>
    </div>
  )
}

export default App


