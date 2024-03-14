export type FooterdataType = {
  data: {
    title: string;
    address: string;
    email: string;
    mobile: string;
    privacy: string;
    copyright: string;
  };
};

export type homeAccordiandataType = {
  data: {
    id: number;
    image: string;
    number: string;
    title: string;
    desc: string;
  };
};
export type HomeBannerdataType = {
  data: {
    title: string;
    title2: string;
    subtitle: string;
    button: string;
  };
};
export type CardType = {
  data: {
    id: number;
    url: string;
    description?: string;
    title: string;
  };
};

export type Card1Type = {
  data: {
    id: number;
    url: string;
    description?: string;
    title: string;
    height: number;
    width: number;
  };
};

export type BannerType = {
  title: string;
  button: string;
  description: string;
  imageurl: string;
};
export type Header = {
  data: {
    value: string;
    title: string;
    content: string;
  };
};
  export type mobileServicesType={
  data:{
      id:number;
      title:string;
      description:string;
  }
  }

  export type latestThinkingType={
    data:{
      id:number;
      title:string;
      img:string;
    }
  }


export type SwiperServicesData = {
  data: {
    id: string;
    src: string;
    alt: string;
    title: string;
  };
};
export type marquedataType = {
  data: {
    id: number;
    url: string;
  };
};

export type tabdataType = {
  data: {
    id: number;
    trigger: string;
    content: string;
    value: string;
    image: string;
    button: string;
  };
};
export type ServiceBoxType = {
  data: {
    id: number;
    title: string;
    description: string;
  };
};
export type ServiceIconType = {
  data: {
    url: string;
    title: string;
    description: string;
    languages: string;
  };
};

export type BgYellowType = {
  data: {
    description: string;
  };
};

export type BgBannerType = {
  data:{
    url:string;
    title1:string;
    title2:string;
  }
}

export type SaasSectionType = {
  data:[
    title:string,
    description:string,
    section:{
    id:number;
    title:string;
    descrition:string;
  }
  ]
  
}

export type NowAskType = {
  data: {
    id: number;
    title: string;
    
  };
};


export type CareerSectionType={
  data:{
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
}
}

export type CareerSection1Type={
  data:{
    title1: string;
    
    desc1: string;
    desc2: string;
}
}

export type CareerCityType={
  data:{
    title: string;
    description:string;
    id:number;
    url:string;
    
}
}

export type CareerCapType={
  data:{
    title: string;
    id:number;
    url:string;
    
   desc :string;
    
}
}

export type CareerManyType={
  data:{
    title: string;
    desc1:string;
    desc2:string;
    
   desc :string;
    
}
}

export type CareerCVType={
  data:{
    title: string;
  }
}

export type HowModelType={
  data:{
    title: string;
    desc1:string;
    desc2:string;
    heading:string;
    par:string;
   id :number;
    
}
}