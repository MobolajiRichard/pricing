import data from "./data";

export const getOldPrice = (price?: number) => {
  if (!price) {
    return 0;
  } else {
    return price * 0.4 + price;
  }
};

export const getPrice = (price?: number, nbLesson?: number) => {
  if (!price || !nbLesson) {
    return 0;
  } else {
    return Number((price / nbLesson).toFixed(2));
  }
};

export const defaultForeignPlan = [
  {
    description: "5 classes (FOREIGNER + REGULAR)",
    duration: 60,
    label: { ru: "5 уроков", en: "5 classes" },
    nbLessons: 5,
    plan: "REGULAR",
    price: { primary: 1000, secondary: 9000 },
    type: "FOREIGNER",
  },
  {
    description: "5 classes (FOREIGNER + PLUS)",
    duration: 60,
    label: { ru: "5 уроков", en: "5 classes" },
    nbLessons: 5,
    plan: "PLUS",
    price: { primary: 1200, secondary: 10000 },
    type: "FOREIGNER",
  },
  {
    description: "5 classes (FOREIGNER + FLEXI)",
    duration: 60,
    label: { ru: "5 уроков", en: "5 classes" },
    nbLessons: 5,
    plan: "FLEXI",
    price: { primary: 1400, secondary: 12500 },
    type: "FOREIGNER",
  },
];

export const DURATION_OPTIONS = [
  {
    value: 25,
    label: "25 minutes",
  },
  {
    value: 45,
    label: "45 minutes",
  },
  {
    value: 60,
    label: "60 minutes",
  },
  {
    value: 90,
    label: "90 minutes",
  },
];

export const NB_CLASSES_OPTIONS = [
  {
    value: 5,
    label: "5 classes",
  },
  {
    value: 10,
    label: "10 classes",
  },
  {
    value: 20,
    label: "20 classes",
  },
  {
    value: 40,
    label: "40 classes",
  },
];

export { data };
