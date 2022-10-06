import rl from "readline-sync";

let commands = [
  "list products",
  "show product",
  "add to cart",
  "show cart",
  "show total price",
];
let products = [
  {
    name: "hair spray",
    price: "$5",
    description: "keep your hair straight & tidy",
    upcCode: "123xyz567",
  },
  {
    name: "fruit loops",
    price: "$3",
    description: "best cereal ever",
    upcCode: "111yyy000",
  },
  {
    name: "tweezers",
    price: "$1",
    description: "Tweek, OW!",
    upcCode: "333398988",
  },
  {
    name: "bananananananas",
    price: "$29",
    description: "Yellow and Yummy",
    upcCode: "4011",
  },
  {
    name: "baseball cards",
    price: "$0.10",
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

let cart = [];
let totalPrice = 0;

while (true) {
  console.log("\n----------------\nThe commands are:", commands);

  const theCommand = rl.question("What is your command? ");

  if (theCommand === "list products") {
    console.log("Here is the list of products:");
    products.forEach((p) => {
      console.log("  - ", p.name);
    });
  } else if (theCommand === "show product") {
    const theName = rl.question("Which product do you want to see?");
    const theProduct = products.find((p) => p.name === theName);
    console.log("The product details are:\n", theProduct);
  } else if (theCommand === "add to cart") {
    const theName = rl.question("Which product do you want to add to cart? ");
    if (products.find((p) => p.name === theName)) {
      const theProduct = products.find((p) => p.name === theName);
      cart.push(theProduct);
      console.log("Added! Number of items in your cart: ", cart.length);
    } else {
      console.log("Invalid product! Try Again!");
    }
  }
  //show cart
  else if (theCommand === "show cart") {
    if (cart.length === 0) {
      console.log("Your cart is empty!");
    } else {
      console.log("\n");
      console.log("Here is your cart: ");
      cart.forEach((i) => {
        console.log("\n", i);
      });
    }
  }
  // Show total price
  else if (theCommand === "show total price") {
    totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + parseInt(cart[i].price.replace("$", ""));
    }

    console.log("Total Price: ", totalPrice);
    const confirmation = rl.question("are you sure to purchase?");

    if (confirmation === "yes") {
      console.log("Enjoy your purchases!");
      cart = [];
    } else {
      console.log("Go to your cart to purchase whenever you ready!");
    }
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}

/*TODO: To be added later
 const result = rl.question("Do you want to continue?");
   if (result === "No" || result === "no") {
     break;
     */
