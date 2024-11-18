
/*
// First file

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 9 },
  { name: "Hawaiian", price: 9 },
  { name: "Veggie", price: 7 },
]

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj){
  menu.push(pizzaObj);
}

function placeOrder(pizzaName){
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId){
  const orderFound = orderQueue.find(order => order.id === orderId);
  orderFound.status = "completed";
  return orderFound;
}

addNewPizza({ name: "Chicken pizza", cost: 12 });
addNewPizza({ name: "BBQ", cost: 10 });
addNewPizza({ name: "Spicy", cost: 11 });

placeOrder("BBQ");
completeOrder("1");

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
*/
