// everything is set to 0 so it can change based on user input
let area = 0
let length = 0
let width = 0

// this is supposed to react when the button is clicked
document.getElementById('button').addEventListener('click', math)

// this is what it does to calculate the area and it displays in the answer box
function math () {
  length = document.getElementById('input').value
  width = length
  area = length * width
  document.getElementById('answer').innerHTML = (area)
}
