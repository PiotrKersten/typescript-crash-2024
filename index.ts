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

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 9 },
  { id: nextPizzaId++, name: "Hawaiian", price: 9 },
  { id: nextPizzaId++, name: "Veggie", price: 7 },

]


const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza);
  return newPizza
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



addNewPizza({ name: "Chicken pizza", price: 12 });
addNewPizza({ name: "BBQ", price: 10 });
addNewPizza({ name: "Spicy", price: 11 });


console.log("Menu: ", menu);

