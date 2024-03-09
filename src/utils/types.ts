export type FooterdataType = {
    data:{
      title:string;
      address:string
      email:string;
      mobile: string;
      privacy:string;
      copyright:string;
    }
  }
  export type CardType = {
    data : {
      id: number;
      url: string;
      description?: string;
      title: string;
      
    };
  };

  export type Card1Type = {
    data : {
      id: number;
      url: string;
      description?: string;
      title: string;
      height: number;
      width: number;
    };
  };