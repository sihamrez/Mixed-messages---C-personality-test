// Random C personality test
// Project that outputs random test results

    // Random Color generator
    var favoriteColor = ["Blue", "Red", "Green", "Yellow"];
    var randomColor = favoriteColor[Math.floor(Math.random()* favoriteColor.length)];
    console.log("Based on your answers; The computer chose" + " " + randomColor + " " + "as your favorite color;");

    // Random Trip generator
    var favoriteTrip = ["Beach", "Mountain", "Desert", "Jungle"];
    var randomTrip = favoriteTrip[Math.floor(Math.random()* favoriteTrip.length)];
    console.log(randomTrip+ " " + "as your favorite trip;");

    var favoriteAnimal = ["Tiger", "Cat", "Dog", "Fish"];
    var randomAnimal = favoriteAnimal[Math.floor(Math.random()* favoriteAnimal.length)];
    console.log("and"+ " " + randomAnimal+ " " + "as your favorite animal.");
    
   // Random message or test results generator
   if (randomColor === "Blue" && randomTrip === "Beach" && randomAnimal === "Cat" ) {
       console.log("Your C type personality is: Influence!");
   } else if(randomColor === "Red" && randomTrip === "Jungle" && randomAnimal === "Tiger" ) {
    console.log("Your C type personality is: Dominance!");
   } else if(randomColor === "Green" && randomTrip === "Mountain" && randomAnimal === "Dog") {
    console.log("Your C type personality is: Contiousness!");
   } else if(randomColor === "Yellow" && randomTrip === "Desert" && randomAnimal === "Fish") {
    console.log("Your C type personality is: Steadiness!");
   } else {
    console.log("Conflicting results!!! Please review your answers.");
   }