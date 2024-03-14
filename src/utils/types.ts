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
export type mobileServicesType = {
  data: {
    id: number;
    title: string;
    description: string;
  };
};

export type latestThinkingType = {
  data: {
    id: number;
    title: string;
    img: string;
  };
};
export type MobileSwiperType = {
  data: {
    src: string;
    name: string;
    title: string;
    company: string;
    quote: string;
  };
};

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

export type serviceAccordiandataType = {
  data: {
    id: number;
    image: string;
    content: string;
    title: string;
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
    id: number;
    title1: string;
    description1: string;
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
    src: string;
    title: string;
    des1: string;
    des2: string;
    // des3: any;
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

export type CareerPage7dataType = {
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