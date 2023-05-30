  
  export type ForeignTable = {
    total_cost:number | undefined;
    type:string
  }

  export type DataProps = {
    nbLessons: number;
    duration: number;
    label: {
        ru: string;
        en: string;
    };
    description: string;
    plan: string | null;
    type: string;
    price: {
        primary: number;
        secondary: number | null;
    };
} 
  
 
