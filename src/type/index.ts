type LessonLabel = {
    ru: string;
    en: string;
  };
  
  type Price = {
    primary: number;
    secondary: number | null;
  };
  
  export type LessonProp = {
    nbLessons: number;
    duration: number;
    label: LessonLabel;
    description: string;
    plan: string | null;
    type: string;
    price: Price;
  };

  export type PlanPrice = {
    total_cost:number | undefined;
    price:number | undefined
  }
  export type ForeignPrices ={
    flexi:PlanPrice;
    plus:PlanPrice;
    regular:PlanPrice
  }

  export type NativePrices ={
    five:PlanPrice;
    ten:PlanPrice;
    twenty:PlanPrice;
    forty:PlanPrice
  }
