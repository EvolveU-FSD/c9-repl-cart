import rl from 'readline-sync';

let commands = [
  'list products',
  'show product',
  'add to cart',
  'show cart',
  'remove from cart',
  'checkout',
];
let products = [
  {
    name: 'hair spray',
    price: 5,
    description: 'keep your hair straight & tidy',
    upcCode: '123xyz567',
  },
  {
    name: 'fruit loops',
    price: 2,
    description: 'best cereal ever',
    upcCode: '111yyy000',
  },
  {
    name: 'tweezers',
    price: 1,
    description: 'Tweek, OW!',
    upcCode: '333398988',
  },
  {
    name: 'bananas',
    price: 29,
    description: 'Yellow and Yummy',
    upcCode: '4011',
  },
  {
    name: 'baseball cards',
    price: 0.1,
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

let cart = [];

while (true) {
  console.log('\n----------------\nThe commands are:', commands);
  const theCommand = rl.question('What is your command? ');

  if (theCommand === 'list products') {
    console.log('Here is the list of products:');
    products.forEach((p) => {
      console.log('  - ', p.name);
    });
  } else if (theCommand === 'show product') {
    const theName = rl.question('\nWhich product do you want to see? ');
    const theProduct = products.find((p) => p.name === theName);
    console.log('The product details are:\n', theProduct);
  } else if (theCommand === 'add to cart') {
    const theName = rl.question('\nWhich product do you want to add to cart? ');
    const theProduct = products.find((p) => p.name === theName);
    cart.push(theProduct);
    console.log(`\n${theProduct.name} Added!` + '\nNumber of items in your cart: ', cart.length);
  } else if (theCommand === 'show cart') {
    if (cart.length === 0) {
      console.log('\nYour cart is empty!');
    } else {
      console.log('\nHere is your cart - \n');
      cart.forEach((theCart) => {
        console.log(theCart.name);
      });
    }
  } else if (theCommand === 'remove from cart') {
    console.log('\nWhat do you want to remove? \n ');
    cart.forEach((theCart) => {
      console.log(theCart.name);
    });

    const itemToRemove = rl.question('\nSelect the item to remove ');
    const trashCart = cart.find((p) => p.name === itemToRemove);
    cart.shift(trashCart);
    console.log(`\n${trashCart.name} removed! `);
  } else if (theCommand === 'checkout') {
    console.log('\nAre you ready to checkout?');
    console.log('\nYour cart total is: ');
    let cartTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      cartTotal += cart[index].price;
    }
    console.log(cartTotal);
  } else {
    console.log(`Invalid command: ${commands}`);
  }
}
