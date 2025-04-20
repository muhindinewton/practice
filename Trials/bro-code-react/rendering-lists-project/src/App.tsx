import List from './List'

function App() {

  const fruits = [{id:1, name: "apple", calories: 95}, 
                  {id:2, name: "orange", calories: 45}, 
                  {id:3, name: "banana", calories: 105}, 
                  {id:4, name: "coconut", calories: 159},
                  {id:5, name: "mango", calories: 37}];

  const vegetables = [{id:6, name: "spinach", calories: 23}, 
                      {id:7, name: "broccoli", calories: 55}, 
                      {id:8, name: "cabbage", calories: 32}, 
                      {id:9, name: "cucumber", calories: 16},
                      {id:10, name: "carrot", calories: 41}];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

    </>
  )
}

export default App
