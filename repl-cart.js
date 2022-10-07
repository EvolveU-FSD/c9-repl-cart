import rl from "readline-sync";
import { removeItemFromCart } from "./removeItem.js";

let commands = [
  "listProducts",
  "showProduct",
  "addToCart",
  "removeItem",
  "showCart",
  "done",
];
let products = [
  {
    name: "hairSpray",
    price: "$5",
    description: "keep your hair straight & tidy",
    upcCode: "123xyz567",
  },
  {
    name: "fruitLoops",
    price: "$2",
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
    name: "bananas",
    price: "$29",
    description: "Yellow and Yummy",
    upcCode: "4011",
  },
  {
    name: "basebalCards",
    price: "$0.10",
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

export let cart = [];
let doExit;

while (!doExit) {
  console.log("\n----------------\nThe commands are:", commands.join("  "));
  const theCommand = rl.question("What is your command? ");
  if (theCommand === "done") {
    doExit = true;
  } else if (theCommand === "listProducts") {
    console.log("Here is the list of products:");
    products.forEach((p) => {
      console.log("  - ", p.name);
    });
  } else if (theCommand === "showProduct") {
    const theName = rl.question("Which product do you want to see? ");
    const theProduct = products.find((p) => p.name === theName);
    console.log("The product details are:\n", theProduct);
  } else if (theCommand === "addToCart") {
    let moreItems;
    do {
      const theName = rl.question("Which product do you want to add to cart? ");
      const theProduct = products.find((p) => p.name === theName);
      cart.push(theProduct);
      console.log("Added! Number of items in your cart: ", cart.length);
      moreItems = rl.question("Do you want to add more items? (yes / no) ");
    } while (moreItems != "no");
  } else if (theCommand === "removeItem") {
    if (cart.length === 0) {
      console.log("There is nothing to remove from cart");
    } else {
      let removeItems = rl.question("Which item you want to remove? ");
      cart = cart.filter((ri) => {
        return ri.name != removeItems;
      });
      console.log(`Removing  ${removeItems}`);
    }
  } else if (theCommand === "showCart") {
    console.log("\n These are the products in your cart");
    cart.forEach((p) => {
      console.log(p.name);
    });
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
