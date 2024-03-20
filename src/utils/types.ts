import { type } from "os";
import { string } from "yup";

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
  button1: string;
  button2: string;
  description: string;
  imageurl: string;
};
export type Header = {
  data: {
    // value: string;
    // title: string;
    // content: string;
    // link: string;
  };
};
export type mobileServicesType = {
  data: {
    // id: number;
    // title: string;
    // description: string;
  };
};

export type latestThinkingType = {
  data: {
    title: string;
    // id: number;
    // img: string;
    // Link: string;
  };
};
export type MobileSwiperType = {
  data: {
    // src: string;
    // name: string;
    // title: string;
    // company: string;
    // quote: string;
  };
};

export type SwiperServicesData = {
  data: {
    // id: string;
    // src: string;
    // alt: string;
    title: string;
  };
};
export type marquedataType = {
  data: {
    // id: number;
    // url: string;
  };
};

export type tabdataType = {
  data: {
    // id: number;
    // trigger: string;
    // content: string;
    // value: string;
    // image: string;
    button2: string;
    button: string;
    title1: string;
    title2: string;
    // list: {
    //   id: number;
    //   text: string;
    // };
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
    button1: string;
    button2: string;
    heading: string;
    texts: string;
  };
};

export type ServiceItem = {
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

export type aboutBannerType = {
  data: {
    url: string;
    title: string;
    title2: string;
    description: string;
    subdescription: string;
  };
};
export type serviceAccordiandataType = {
  data: {
    // id: number;
    // image: string;
    // content: string;
    // title: string;
    button: string;
  };
};

export type BgBannerType = {
  data: {
    url: string;
    title1: string;
    title2: string;
  };
};

export type SaasSectionType = {
  data: {
    // description1: string;
    // id: number;
    // title1: string;
    title: string;
    description: string;
  };
};

export type CareerBannerdataType = {
  data: {
    url: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
  };
};

export type CareerPage2dataType = {
  data: {
    title: string;
    src: string;
    des1: string;
    des2: string;
    des3: string;
  };
};

export type CareerPage3dataType = {
  data: {
    title: string;
    id: number;
    src: string;
    description: string;
  };
};

export type CareerPage5dataType = {
  data: {
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
  };
};

export type CareerPage6dataType = {
  data: {
    src: string;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
  };
};

export type CareerPage4dataType = {
  data: {
    title: string;
    title1: string;
    title2: string;
    title3: string;
    desc1: string;
    desc2: string;
    desc3: string;
    src: string;
  };
};
export type NowAskType = {
  data: {
    id: number;
    title: string;
  };
};

export type CareerSectionType = {
  data: {
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
  };
};

export type CareerSection1Type = {
  data: {
    title1: string;

    desc1: string;
    desc2: string;
  };
};

export type CareerCityType = {
  data: {
    title: string;
    description: string;
    // id: number;
    // url: string;
  };
};

export type CareerCapType = {
  data: {
    title: string;
    // id: number;
    // url: string;
    // desc: string;
  };
};

export type CareerManyType = {
  data: {
    title: string;
    desc1: string;
    desc2: string;

    desc: string;
  };
};

export type CareerCVType = {
  data: {
    title: string;
  };
};

export type HowModelType = {
  data: {
    // title: string;
    // desc1: string;
    // desc2: string;
    heading: string;
    par: string;
    // id: number;
    // list: {
    //   id: number;
    //   content: string;
    // };
  };
};
export type imageAccordianDataType = {
  data: {
    // image: string;
    // header: string;
    // text: string;
    title1: string;
    title2: string;
    title3: string;
    button: string;
  };
};

export type aboutAccordianDatatype = {
  data: {
    title1: string;
    // id: number;
    // title: string;
    // content: string;
  };
};

export type uiSectionType = {
  data: {
    title: string;
    text: string;
    id: number;
    title1: string;
    description: string;
  };
};

export type careerBannerType = {
  data: {
    url: string;
  };
};

export type PageBanner = {
  title1: string;
  title2: string;
};

export type HowBannerType = {
  data: {
    url: string;
    title: string;

    desc: string;
    desc1: string;
  };
};
export type aboutBanner2Type = {
  data: {
    heading: string;
    // id: number;
    // number: number;
    // url: string;
    // title: string;
  };
};
export type ecomSectionType = {
  data: {
    title: string;
    // section: string;
  };
};

export type ourThinkingType = {
  data: {
    id: number;
    image: string;
    categories: any;
    title: string;
    link: string;
  };
};
export type aboutlinksType = {
  data: {
    title1: string;
    // id: number;
    // title: string;
    // link: string;
    // image: string;
  };
};
export type webGridSectionType = {
  data: {
    // id: number;
    // link: string;
    // ref: string;
  };
};

export type ColllabrateCardType = {
  data: {
    title: string;
    url: string;
    description: string;
  };
};
