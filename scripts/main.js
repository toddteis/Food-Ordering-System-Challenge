const factory = (() => {
  const menuItem = (food, restuarant, price) => {
    const getFoodName = () => food;
    const getRestuarant = () => restuarant;
    const getPrice = () => price;
    return { getFoodName, getRestuarant, getPrice };
  };
  return { menuItem };
})();

const menu = (() => {
  const repo = [];
  // Create menu items and add to repo
  const menuItemBurger = factory.menuItem('Burger', 'Wild Burger Join', '15');
  repo.push(menuItemBurger);
  const menuItemPizza = factory.menuItem('Pepperoni Pizza', 'Awesome Pizza Place', '20');
  repo.push(menuItemPizza);
  const menuItemChips = factory.menuItem('Chips', 'Best Ever Chippery', '10');
  repo.push(menuItemChips);

  function getDetailedMenu() {
    return repo;
  }

  function getFoodNames() {
    const foodNames = [];
    for (let i = 0; i < menu.getDetailedMenu().length; i += 1) {
      foodNames.push(menu.getDetailedMenu()[i].getFoodName());
    }
    const result = foodNames.join(', ');

    return result;
  }

  return {
    getDetailedMenu,
    getFoodNames,
  };
})();

// eslint-disable-next-line no-unused-vars
const orderingSystem = (() => {
  const placeOrder = (food) => {
    if (food) {
      const foodLC = food.toLowerCase();
      const detailedMenu = menu.getDetailedMenu();
      const filtered = detailedMenu.filter((item) => item.getFoodName().toLowerCase() === foodLC);
      if (filtered.length === 0) {
        return `Sorry, "${food}" isn't on our menu, please select from: ${menu.getFoodNames()}`;
      }
      const result = `${filtered[0].getRestuarant()}, ${filtered[0].getFoodName()}, $${filtered[0].getPrice()}`;
      return result;
    }

    const result = `Please enter a food from our menu: ${menu.getFoodNames()}`;

    return result;
  };

  return {
    placeOrder,
  };
})();
