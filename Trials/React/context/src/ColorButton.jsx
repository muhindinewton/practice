import React, {useContext} from 'react'
import ColorContext from './ColorContext';

function ColorButton() {
  const {setColor} = useContext(ColorContext);
  return (
    <div className="button-group">
        <button className="color-button-red" onClick={() => setColor('red')}>Red</button>
        <button className="color-button-green" onClick={() => setColor('green')}>Green</button>
        <button className="color-button-blue" onClick={() => setColor('blue')}>Blue</button>
    </div>
  )
}

export default ColorButton