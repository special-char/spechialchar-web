export type CardType = {
  data: {
    id: number;
    url: string;
    description?: string;
    title: string;
  };
};
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

export type FooterIconsType ={
  data:{
    id:number;
    icon:string;
  }
  
}

export type AccCardType = {
  data: {
    id: number;
    value: string;
    question: string;
    answer: string;
  };
};
export type CollaboratorCardType = {
  data: {
    id: number;
    url: string;
    title: string;
    description: string;
  };
};

export type FAQCardType = {
  data: {
    cards: Array<{
      id: number;
      url: string;
      question: string;
      num: string;
      answer: string;
    }>;
  };
};
export type MobileBannerType = {
  data: {
    url: string;
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
export type CareerSectionType = {
  data: {
    url: string;
  };
};
export type CareerSection1Type = {
  data: {
    url: string;
  };
};
export type CareerSection2Type = {
  data: {
    url: string;
  };
};
export type EdBannerType = {
  data: {
    title: string;
    description: string;
    url: string;
  };
};

export type CareerSection3Type = {
  data: {
    url: string;
  };
};

export type EdSectionType = {
  data: {
    id: number;
    title: string;
    description: string;
  };
};

export type EdSectionType2 = {
  data: {
    section2: string;
    id: number;
    title: string;
    description: string;
  };
};

export type EdSectionType3 = {
  data: {
    section3: string;
    id: number;
    title: string;
    description: string;
  };
};

export type BgBannerType = {
  data: {
    url: string;
    title1: string;
    title2: string;
  };
};

export type BgYellowType = {
  data: {
    url: string;
    title1: string;
    title2: string;
    description: string;
  };
};

export type Ecommerce = {
  data: {
    section3: string;
    id: number;
    title: string;
    url: string;
  };
};
export type ServiceIconType ={
  data:{
    url:string;
    title:string;
    description:string;
  }

export type IconsSection = {
  data:{
    title:string;
    icon:string;
    description:string;
  }
}
export type BannerType = {
data:{
  title:string;
  description:string;
  imageurl:string;
}
     
}