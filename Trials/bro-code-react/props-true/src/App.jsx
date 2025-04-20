/* props = read-only properties that are shared between components
          - A parent component can send data to a child component.
          - <component key=value />
*/
import Student from "./Students.jsx"

function App() {

  return (
    <>
      <Student name='Kamau' age = {30} isStudent = {true}/>
      <Student name='Njoroge' age = {42} isStudent = {false}/> 
      <Student name='Mwaniki' age = {50} isStudent = {false}/> 
      <Student name='Waiganjo' age = {27} isStudent = {true}/> 
      <Student name='Waiganjo' age = {27} isStudent = {true}/>
      <Student name='Mwangi' age = {70} isStudent = {true}/>
    </>
  )
}

export default App
