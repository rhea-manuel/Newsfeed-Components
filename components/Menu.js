// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(items) {

  const menuDiv = document.createElement('div')
  menuDiv.className = 'menu'

  const ul = document.createElement('ul')
  menuDiv.appendChild(ul)

  for (let i = 0; i < items.length; i++) {
    const curItem = document.createElement('li')
    curItem.textContent = items[i]
    ul.appendChild(curItem)
  }

  const button = document.querySelector('.menu-button')

  button.addEventListener('click', function () {
    gsap.from(menuDiv, {scaleX:0, duration:.5, transformOrigin: 'left'})
    gsap.to(menuDiv, {scaleX:1, duration:.5, transformOrigin: 'left'})

    menuDiv.classList.toggle('menu--open')
  })

  button.addEventListener('mouseover', function () {
    gsap
      .to('.menu-button', {
        scale: 1.25,
        // ease:'bounce'
      })
  })

  button.addEventListener('mouseleave', function () {
    gsap
      .to('.menu-button', {
        x: 0,
        scale: 1
      })
  })

  return menuDiv
}

const menu = menuMaker(menuItems)
const header = document.querySelector('.header')
console.log(header)
header.appendChild(menu)


