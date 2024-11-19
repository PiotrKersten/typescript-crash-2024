type Pizza = {
  id: number
  name: string
  price: number
}

type Order = {
  id: number
  pizza: Pizza
  status: "completed" | "ordered"
}


const menu: Pizza[] = [
  { id: 1,name: "Margherita", price: 8 },
  { id: 2,name: "Pepperoni", price: 9 },
  { id: 3, name: "Hawaiian", price: 9 },
  { id: 4, name: "Veggie", price: 7 },

]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza): void{
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined{
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

function completeOrder(orderId: number): Order | undefined{
  const orderFound = orderQueue.find(order => order.id === orderId);
  if (!orderFound){
    console.error(`Order nr ${orderFound} does not exist`);
    return
  }
  orderFound.status = "completed";
  return orderFound;
}


export function getPizzaDetail(identifier: number | string): Pizza | undefined{
  if(typeof(identifier) === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  }else if(typeof(identifier) === "number") {
    return menu.find(pizza => pizza.id === identifier)
  }else{
    throw new TypeError("'identifier' must be a string or intiger value")
  }
}



addNewPizza({ id: 5, name: "Chicken pizza", price: 12 });
addNewPizza({ id: 6, name: "BBQ", price: 10 });
addNewPizza({ id: 7, name: "Spicy", price: 11 });

placeOrder("BBQ");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
