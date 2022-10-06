import rl from 'readline-sync';

let finalPrice = [0, 0]
let commands = ['list products', 'show product', 'add to cart', 'show cart', 'checkout'];
let products = [
  {
    name: 'hair spray',
    price: '$5',
    description: 'keep your hair straight & tidy',
    upcCode: '123xyz567',
  },
  {
    name: 'fruit loops',
    price: '$2',
    description: 'best cereal ever',
    upcCode: '111yyy000',
  },
  {
    name: 'tweezers',
    price: '$1',
    description: 'Tweek, OW!',
    upcCode: '333398988',
  },
  {
    name: 'bananas',
    price: '$29',
    description: 'Yellow and Yummy',
    upcCode: '4011',
  },
  {
    name: 'baseball cards',
    price: '$0.10',
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

let cart = [];

while (true) {
  console.log('\n----------------\nThe commands are: ', commands);
  const theCommand = rl.question('What is your command? ');

  if (theCommand === 'list products') {
    console.log('Here is the list of products:');
    products.forEach((p) => {console.log('  - ', p.name)})
  } else if (theCommand === 'show product') {
    const theName = rl.question('Which product do you want to see? ');
    const theProduct = products.find((p) => p.name === theName);
    console.log('The product details are:\n', theProduct);
  } else if (theCommand === 'add to cart') {
    const theName = rl.question('Which product do you want to add to cart? ');
    const theProduct = products.find((p) => p.name === theName);
    cart.push(theProduct);
    console.log('Added! Number of items in your cart: ', cart.length);
  } else if (theCommand === 'show cart'){
    if(cart.length > 0) {
      cart.forEach((p) => {console.log('  - ', p.name)})
    } else {
      console.log('Your cart is empty.')
    }
  } else if (theCommand === 'checkout') {
     for (let i = 0; i < cart.length; i++) {
      if(cart[i].name === 'hair spray') {
        finalPrice[0] = finalPrice[0] + 5
      } else if(cart[i] === 'fruit loops') {
        finalPrice[0] = finalPrice[0]+ 2
      } else if(cart[i].name === 'tweezers') {
        finalPrice[0] = finalPrice[0] + 1
      } else if(cart[i].name === 'bananas') {
        finalPrice[0] = finalPrice[0] + 29
      }else if(cart[i].name === 'baseball cards') {
        finalPrice[1] = finalPrice[1] + 1
        if(finalPrice[1] === 10) {
          finalPrice[1] = finalPrice[1] - 10
          finalPrice[0] = finalPrice[0] + 1
        }
        
      }}
  
    console.log(`Your final price is $${finalPrice[0]}.${finalPrice[1]}0, thank you for shopping! `)
    break
  } 
  else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
