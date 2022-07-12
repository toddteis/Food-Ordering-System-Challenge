const foodRepo = [
  {
    foodName: 'Burger',
    restuarant: 'Wild Burger Joint',
    price: 15,
  },
  {
    foodName: 'Pepperoni Pizza',
    restuarant: 'Awesome Pizza Place',
    price: 20,
  },
];

// eslint-disable-next-line no-unused-vars
const orderingSystem = (() => {
  const placeOrder = (food) => {
    if (food) {
      const foodLowerCase = food.toLowerCase();
      const filteredItems = foodRepo.filter((item) => item.foodName.toLowerCase() === foodLowerCase);
      const buildOutput = `${filteredItems[0].restuarant}, ${filteredItems[0].foodName}, $${filteredItems[0].price}`;
      return buildOutput;
    }
    return 'Please enter a food';
  };

  return {
    placeOrder,
  };
})();
