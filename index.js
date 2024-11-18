const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 8 },
  { name: "Hawaiian", price: 8 },
  { name: "Veggie", price: 8 },
]

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj){
  menu.push(pizzaObj);
}

function placeOrder(pizzaName){
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}