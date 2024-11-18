type Pizza = {
  name: string
  price: number
}

type Order = {
  id: number,
  pizza: Pizza,
  status: "completed" | "ordered"
}



const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 9 },
  { name: "Hawaiian", price: 9 },
  { name: "Veggie", price: 7 },
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza){
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string){
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  if (!selectedPizza){
    console.error(`${pizzaName} does not exist`);
    return
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number){
  const orderFound = orderQueue.find(order => order.id === orderId);
  if (!orderFound){
    console.error(`Order nr ${orderFound} does not exist`);
    return
  }
  orderFound.status = "completed";
  return orderFound;
}

addNewPizza({ name: "Chicken pizza", price: 12 });
addNewPizza({ name: "BBQ", price: 10 });
addNewPizza({ name: "Spicy", price: 11 });

placeOrder("BBQ");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
