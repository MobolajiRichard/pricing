export enum Plan {
  regular = "REGULAR",
  plus = "PLUS",
  flexi = "FLEXI",
}

export type DataProps = {
  nbLessons: number;
  duration: number;
  label: {
    ru: string;
    en: string;
  };
  description: string;
  plan: Plan | null;
  type: string;
  price: {
    primary: number;
    secondary: number | null;
  };
};

export type ForeignTable = {
  totalPrice: number;
} & DataProps;

export type Option = {
  value: number;
  label: string;
};
