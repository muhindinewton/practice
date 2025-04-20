import { ListProps } from "./types";

function List({ items = [], category = "Category" }: ListProps) {
  const listItems = items.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
