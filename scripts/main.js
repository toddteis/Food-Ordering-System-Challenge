const menu = (() => {
  const repo = [
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

  function getMenu() {
    return repo;
  }

  return {
    getMenu,
  };
})();

// eslint-disable-next-line no-unused-vars
const orderingSystem = (() => {
  const placeOrder = (food) => {
    if (food) {
      const foodLC = food.toLowerCase();
      const filtered = menu.getMenu().filter((item) => item.food.toLowerCase() === foodLC);
      const result = `${filtered[0].restuarant}, ${filtered[0].food}, $${filtered[0].price}`;
      return result;
    }

    const foodNames = [];
    for (let i = 0; i < menu.getMenu().length; i += 1) {
      foodNames.push(menu.getMenu()[i].food);
    }

    const result = `Please enter a food from our menu: ${foodNames.join(', ')}`;

    return result;
  };

  return {
    placeOrder,
  };
})();
