var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("\n")

// Write a for loop that prints out the contents of ingredients:
for (var i = 0 ; i < ingredients.length ; i++) {
  console.log(ingredients[i]);
}
console.log("\n")

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var l = ingredients.length;
for (var i = l - 1 ; i >= 0 ; i--) {
  console.log(ingredients[i]);
}