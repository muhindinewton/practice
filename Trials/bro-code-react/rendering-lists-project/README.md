Filtering

```js
function List() {
  const fruits = [{id:1, name: "apple", calories: 95}, 
                    {id:2, name: "orange", calories: 45}, 
                    {id:3, name: "banana", calories: 105}, 
                    {id:4, name: "coconut", calories: 159},
                    {id:5, name: "mango", calories: 37}];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //sorting alphabetically
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); //sorting by calories
  // fruits.sort((a, b) => b.calories - a.calories); //reverse sorting by calories

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


  const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
  


  return (
    <ul className="font-sans ml-10 list-decimal">
      {listItems}
    </ul>
  )
}

export default List