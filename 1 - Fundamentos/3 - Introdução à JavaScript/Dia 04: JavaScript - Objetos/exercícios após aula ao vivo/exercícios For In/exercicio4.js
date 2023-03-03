let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

let Pizzas = '';
function orderedPizzas(order) {
    let arrayPizzas = Object.keys(order.order.pizza);
    for (let index = 0; index < arrayPizzas.length; index +=1) {
        pizzas += arrayPizzas[index];
        pizzas += ', ';
    }
}
orderedPizzas(order);
console.log(`orderedPizzas = ${pizzas}`);
