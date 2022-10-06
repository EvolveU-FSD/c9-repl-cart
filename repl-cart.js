import rl from 'readline-sync';

let commands = ['List products \[L\]', 'Show product \[S\]', 'Add to cart \[A\]','show Cart \[C\]','Remove last item from cart \[R\]','checKout \[K\]'];
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
    price: 0.10,
    description: "Let's Go Blue Jays",
    upcCode: null,
  },
];

let commandsList = commands.join(' --- ')
let cart = [];

while (true) {
  console.log('---------------------------------------\nThe commands are:', commandsList);
  const theCommand = rl.question('\nWhat is your command? ');

  if (theCommand === 'list products' || theCommand === 'l') {
    console.log('Here is the list of products:');
    products.forEach((p) => {console.log('  - ', p.name)})
  } else if (theCommand === 'show product' || theCommand === 's') {
    let productNameList = products.map(({name})=>(name))
    console.log(`\n${productNameList.join(' --- ')}\n`)
    console.log("\nHere are the list of the name of the products you can buy from our store:")
    const theName = rl.question('Which product do you want to see more information with? ');
    const theProduct = products.find((p) => p.name === theName);
    console.log('The product details are:\n', theProduct);
  } else if (theCommand === 'add to cart' || theCommand === 'a') {
    console.log("\nHere are the list of the name of the products you can buy from our store:")
    let productNameList = products.map(({name})=>(name))
    console.log(`\n${productNameList.join(' --- ')}\n`)
    const theName = rl.question('Which product do you want to add to cart? ');
    const theProduct = products.find((p) => p.name === theName);
    cart.push(theProduct);
    console.log('Added! Number of items in your cart: ', cart.length);
  } else if (theCommand === 'show cart' || theCommand === 'c') {
    let cartTotalPrice = 0
    for (let i = 0; i < cart.length;i++) 
    cartTotalPrice = cartTotalPrice + cart[i].price
    let cartNameList = cart.map(({name})=>(name))
    console.log(cartNameList.join(' --- '))
    console.log(`The total price is $${cartTotalPrice}`)
    // console.log(cartTotalName)
  } else if (theCommand === 'remove last item from cart'|| theCommand === 'r') {
    let cartLastItemRemove = cart.pop()
    cartLastItemRemove
    let cartNameList = cart.map(({name})=>(name))
    console.log(`Here are the items in your cart: ${cartNameList}`)
  } else if (theCommand === 'checkout' || theCommand === 'k') {
    let cartTotalPrice = 0
    for (let i = 0; i < cart.length;i++) 
    cartTotalPrice = cartTotalPrice + cart[i].price
    // let cartNameList = cart.map(({name})=>(name))
    // let cartPriceList = cart.map(({price})=>(price))
    // console.log(cartNameList, cartPriceList)
    cart.forEach((l) => {console.log('  - ', l.name, `   $`,l.price)})
    console.log(`The total price is $${cartTotalPrice}`)
  } else {
    console.log(`Invalid command: ${theCommand}`);
  }
}
