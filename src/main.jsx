import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './context/Context'
import { Provider } from './api/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context Children={<Provider child={<App/>}/>}/>
  </React.StrictMode>,
)
