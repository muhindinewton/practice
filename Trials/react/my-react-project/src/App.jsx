
import './App.css'
import Welcome from './components/Welcome.jsx'
import {useContext, createContext} from 'react'; 

const userContext = createContext()

function App() {

  return (
    <div>
      <h1>Introduction to React</h1>
      <>
      <Welcome name="Njoroge"/>
      <Welcome name="Kamau"/>
      </>

    </div>
  );

}

export default App
