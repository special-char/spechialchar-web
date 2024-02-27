import { ReactNode } from "react";
export type CardType={
  
    data:{
        id:number;
    url:string;
    description?: string;
    title: string;
    }
}

export type CollaboratorCardType={
    data:{
        id:number;
        url:string;
        title:string;
        description:string;
    }
}
