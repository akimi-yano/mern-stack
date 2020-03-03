function orderSupplies(item_str) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: () => 'mix it!'
        },
        brush: {
          product: 'Horsehair brush',
          directions: () => 'start painting!'
        },
        tarp: {
          product: 'A large tarp',
          directions: () => 'cover the floor!',
        }
      };
      if (item_str in warehouse) {
        resolve(warehouse[item_str]);
      } else {
        reject(new Error(`Item '${item_str}' is out of stock!`));
      }
    }, deliveryTime);
  });
}
function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}
// orderSupplies('brush', receivedItem);
// orderSupplies('paint', receivedItem);

// const promise = new Promise((resolve, reject) => {
// });
// console.log(promise);
const tarp = orderSupplies('tarp');
const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
tarp
  .then(receivedItem)
  .then(() => paint)
  .then(receivedItem)
  .then(() => brush)
  .then(receivedItem)
  .catch(error => console.log(error.message));

  // Promise.all([tarp, paint, brush])
  // .then(items => items.forEach(receivedItem))
  // .catch(error => console.log(error.message));

//   Promise.all([tarp, paint, brush, roller])
//   .then(items => items.forEach(receivedItem))
//   .catch(error => console.log(error.message));
// // => Item 'roller' is out of stock!


  const roller = orderSupplies('roller');
  roller
    .then(receivedItem)
    .catch(error => console.log(error.message));