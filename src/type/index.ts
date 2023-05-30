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
