export type Item = {
    id: number;
    name: string;
    calories: number;
  };
  
  export type ListProps = {
    items?: Item[];
    category?: string;
  };