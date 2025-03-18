//! THE DOM IS A TREE
//? Finding a node in JS
//?1. document.getElementById()
/*
=> returns only one element, since css ids are unique. Example:
for thwe following DOM tree:

<div>
  <h5 id="greeting">Hello!</h5>
</div>

==> we could get  h5 element with: 
document.getElementById('greeting')
*/

//?2. document.getElementByClassName()
/*
=> returns a HTMLCollection of all the elements with the given class as class names do not need to be unique. Example:

<div>
  <div class="banner">
    <h1>Hello!</h1>
  </div>

  <div class="banner">
    <h1>Sup?</h1>
  </div>

  <div class="banner">
    <h5>Tinier heading</h5>
  </div>
</div>

We could find all of the elements with the class name "banner" by calling document.getElementsByClassName('banner').
*/

//? document.getElementsByTagName()
/*
You can use this method if you don't know an element's id or class, but you do know its tag name (the tag name is the thing between the <>, e.g., div, h1, header, article etc.). Since tag names aren't unique, this method also returns an HTMLCollection.


*/

//! JavaScript Query Selector Methods - Finding nested nodes
//=> Query selectors arent limited to one tag name,
//? querySelector()
/*
=> takes one argument, a string of one or more css-compatible selectorys, and returns the first element that matches. Example:
<body>
  <div>Hello!</div>
  <div>Goodbye!</div>
</body>
document.querySelector('div') returns the first div

<body>
  <div>
    <ul class="ranked-list">
      <li>1</li>
      <li>
        <div>
          <ul>
            <li>2</li>
          </ul>
        </div>
      </li>
      <li>3</li>
    </ul>
  </div>

  <div>
    <ul class="unranked-list">
      <li>6</li>
      <li>2</li>
      <li>
        <div>4</div>
      </li>
    </ul>
  </div>
</body>

const li2 = document,querySelector("ul.ranked-list li ul li");
li2;
=> <li>2</li>

const div4 = document.querySelector("ul.unranked-list li div")
li;
=> <div>4</div>
*/

//?querySelectorAll()
/*
works like querySelector() but returns a NodeList collection of all matching elements. example:
<body>
  <main id="app">
    <ul class="ranked-list">
      <li>1</li>
      <li>2</li>
    </ul>

    <ul class="ranked-list">
      <li>10</li>
      <li>11</li>
    </ul>
  </main>
</body>

document.getElementById("app").querySelectorAll("ul.ranked-list li");
=><li>1</li>, <li>2</li>, <li>10</li>, <li>11</li>
*/
