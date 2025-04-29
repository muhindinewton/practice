import React, {useState} from 'react';
import ColorContext from './ColorContext';
import Header from './Header';
import ColorButton from './ColorButton'
import './App.css'

function App() {
  const [color, setColor] = useState('red');

  return (
    <ColorContext.Provider value={{color, setColor}}>
      <div className="app-container">
        <Header />
        <ColorButton />
      </div>
    </ColorContext.Provider>
  )
}

export default App
