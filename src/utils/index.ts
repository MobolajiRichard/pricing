import data from './data.json'

let initialForeignPrice = {
    flexi: { total_cost: 1400, price: 280 },
    plus: { total_cost: 1200, price: 240 },
    regular: { total_cost: 1000, price: 200 },
  };
  
let initialNativePrice = {
    five: { total_cost: 1000, price: 200 },
    forty: { total_cost: 6800, price: 170 },
    ten: { total_cost: 1900, price: 190 },
    twenty: { total_cost: 5600, price: 280 }
}

const getOldPrice = (price?: number) => {
    if (!price) {
      return 0;
    } else {
      let old_price = price * 0.4 + price;
      return old_price;
    }
  };
  const getPrice = (price?: number, nbLesson?: number) => {
    if (!price || !nbLesson) {
      return 0;
    } else {
      return Number((price / nbLesson).toFixed(2));
    }
  };

export {
    initialForeignPrice, initialNativePrice, data, getOldPrice, getPrice
}