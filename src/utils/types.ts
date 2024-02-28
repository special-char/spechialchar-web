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

export type FAQCardType = {
    data: {
      cards: Array<{
        id: number
        question: string
        answer: string
      }>
    }
  }
