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
        url:string
        question: string
        num:string
        answer: string
      }>
    }
  }
  export type MobileBannerType = {
    data: {
     
     url:string;
     
    }
  }
 export type Card1Type ={
    data:{
      id:number;
      url:string;
      description?: string;
      title: string;
      height:number;
      width:number;
    }
 }
 export type CareerSectionType = {
  data: {
   
   url:string;
   
  }
}
