//Exercise 21
let x = "John"
let y = "Doe"

console.log(x, y)

//Exercise 22
const person = {
  name: "Ronaldo",
  surname: "Christiano",
  email: "ronaldo.christiano@gmail.com"
}
console.log(person)

//Exercise 23

delete person.email // or delete person["email"]

//Exercise 24

const arrayOfCities = [
  "manchester",
  "chicago",
  "london",
  "lagos",
  "munich",
  "paris",
  "liverpool",
  "geneva",
  "abuja",
  "michigan"
]

//Exercise 25

console.log(arrayOfCities)

//Exercise 26

let arrayRandom = []

for (let i = 1; i < 100; i++) {
  arrayRandom.push(Math.floor(Math.random() * i + 1))
}

console.log("The array of random number is:", arrayRandom)

//Exercise 27

const minAndMax = function () {
  const min = Math.min(...arrayRandom)
  console.log("The minimum value is " + min)
  const max = Math.max(...arrayRandom)
  console.log("The maximum value is " + max)
}
console.log(minAndMax())

//Exercise 28

let thisArr = []
for (let i = 0; i < 4; i++) {
  let current = []
  for (let j = 0; j < 10; j++) {
    current.push(Math.floor(Math.random() * 10))
  }
  thisArr.push(current)
}
console.log(thisArr)

//Exercise 31

const getElement = document.getElementById("container")

console.log(getElement)

//Exercise 32

const getAllTd = document.getElementsByTagName("td")

console.log(getAllTd)

//Exercise 33

const printTd = function () {
  for (let i = 0; i < getAlltd.length; i++) {
    getAlltd[i].innerText
  }
}
console.log(printTd)

//Exercise 34

const changeH1 = function () {
  const h1 = document.getElementById("title")
  h1.innerText = " New H1"
}

//Exercise 35

const extraRow = function () {
  const cTable = document.getElementById("table")
  const addERow = document.createElement("tr")
  addERow.className = "tr"
  addERow.innerText = "This row was created with JS"
  cTable.appendChild(addERow)
}
console.log(extraRow)

//Exercise 36

const addClass = function () {
  const tableRow = document.querySelectorAll("tr")
  for (let i = 0; i < tableRow.length; i++) {
    tableRow[i].classList.add("test")
  }
}

//Exercise 37

const addRedBackground = function () {
  const links = document.querySelectorAll("a")
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red"
  }
}

//Exercise 38

window.onload = function () {}

//Exercise 39
const addNewListItems = function () {
  const list = document.querySelector("ul")
  const newItem = document.createElement("li")
  newItem.innerText = "This list item was created using JS"
  newItem.style.color = "red"
  list.appendChild(newItem)
}

//Exercise 40
const deleteList = function () {
  const list = document.querySelector("ol")
  console.log(list)
  list.innerHtml = ""
}
