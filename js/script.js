var rest = Array("Dog House Grill", "Farmer Boys", "The Habit", "Phoenician Garden", "Pho 2006");

function randomRest() {
  var randomRest = rest[Math.floor(Math.random() * rest.length)];
  document.getElementById('randomRest').value = randomRest;
}

/* DINNER */

var dinner = Array("Dog House Grill", "Farmer Boys", "The Habit", "Phoenician Garden", "Pho 2006");

function randomDinn() {
  var randomDinn = dinner[Math.floor(Math.random() * dinner.length)];
  document.getElementById('randomDinn').value = randomDinn;
}

/* LUNCH */

var lunch = Array("Churrascos", "Ma n Paw", "Buffalo Ranch", "Mediterranean Grill");

function randomLunch() {
  var randomLunch = lunch[Math.floor(Math.random() * lunch.length)];
  document.getElementById('randomLunch').value = randomLunch;
}

/* BREAKFAST */

var brkfast = Array("Dennys", "Huckleberrys", "Batter up Pancakes");

function randomBrkfast() {
  var randomBrkfast = brkfast[Math.floor(Math.random() * brkfast.length)];
  document.getElementById('randomBrkfast').value = randomBrkfast;
}

/* FAST FOOD */

var fast = Array("McDonalds", "Taco Bell", "Triangle Burger", "Carls Jr");

function randomFast() {
  var randomFast = fast[Math.floor(Math.random() * fast.length)];
  document.getElementById('randomFast').value = randomFast;
}

/* NEW PLACES */

var newPlace = Array("Dog House Grill", "Farmer Boys");

function randomNewPlace() {
  var randomNewPlace = newPlace[Math.floor(Math.random() * newPlace.length)];
  document.getElementById('randomNewPlace').value = randomNewPlace;
}
