import data from './data.json'

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

  const defaultForeignPlan = [
    { description: "5 classes (FOREIGNER + REGULAR)",
    duration: 60,
    label: {ru: '5 уроков', en: '5 classes'},
    nbLessons: 5,
    plan: "REGULAR",
    price: {primary: 1000, secondary: 9000},
    type: "FOREIGNER"
  },
    { description: "5 classes (FOREIGNER + PLUS)",
    duration: 60,
    label: {ru: '5 уроков', en: '5 classes'},
    nbLessons: 5,
    plan: "PLUS",
    price: {primary: 1200, secondary: 10000},
    type: "FOREIGNER"
  },
    { description: "5 classes (FOREIGNER + FLEXI)",
    duration: 60,
    label: {ru: '5 уроков', en: '5 classes'},
    nbLessons: 5,
    plan: "FLEXI",
    price: {primary: 1400, secondary: 12500},
    type: "FOREIGNER"
  },
  ]

  const defaultNativePlan = [
   { description: "5 classes (NATIVE)",
    duration: 60,
    label: {ru: '5 уроков', en: '5 classes'},
    nbLessons: 5,
    plan: null,
    price: {primary: 1500, secondary: 12500},
    type: "NATIVE"
  },
   { description: "10 classes (NATIVE)",
    duration: 60,
    label: {ru: '10 уроков', en: '10 classes'},
    nbLessons: 10,
    plan: null,
    price: {primary: 2800, secondary: 24000},
    type: "NATIVE"
  },
   { description:"20 classes (NATIVE)",
    duration: 60,
    label: {ru: '20 уроков', en: '20 classes'},
    nbLessons: 20,
    plan: null,
    price: {primary: 5400, secondary: 46000},
    type: "NATIVE"
  },
   { description: "40 classes (NATIVE)",
    duration: 60,
    label: {ru: '40 уроков', en: '40 classes'},
    nbLessons: 40,
    plan: null,
    price: {primary: 10000, secondary: 88000},
    type: "NATIVE"
  },

  ]

export {
   data,defaultForeignPlan, defaultNativePlan, getOldPrice, getPrice
}