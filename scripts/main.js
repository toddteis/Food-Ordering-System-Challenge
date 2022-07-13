const foodRepo = [
  {
    food: 'Burger',
    restuarant: 'Wild Burger Joint',
    price: 15,
  },
  {
    food: 'Pepperoni Pizza',
    restuarant: 'Awesome Pizza Place',
    price: 20,
  },
  {
    food: 'Chips',
    restuarant: 'Best Chippery',
    price: 10,
  },
];

// eslint-disable-next-line no-unused-vars
const orderingSystem = (() => {
  const placeOrder = (food) => {
    if (food) {
      const filtered = foodRepo.filter((item) => item.food.toLowerCase() === food.toLowerCase());
      const result = `${filtered[0].restuarant}, ${filtered[0].food}, $${filtered[0].price}`;
      return result;
    }

    const menu = [];
    for (let i = 0; i < foodRepo.length; i += 1) {
      menu.push(foodRepo[i].food);
    }

    const result = `Please enter a food from our menu: ${menu.join(', ')}`;

    return result;
  };

  return {
    placeOrder,
  };
})();
