import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './components/homepage/homepage.jsx'
import Creategroup from './components/creategroup/creategroup.jsx'
import NotesGroup from './components/notes/notegroup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
