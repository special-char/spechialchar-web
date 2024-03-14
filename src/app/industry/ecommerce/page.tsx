import EcommerceServices from "@/components/EcomServices";
import ImageBanner from "@/components/ImageBanner";
import MobilePage from "@/components/MobilePage";
import MobileServices from "@/components/MobileServices";
import MobileSwiper from "@/components/MobileSwiper";
import YellowBanner from "@/components/YellowBanner";
import Banner from "@/container/Banner";
import EcomGrid from "@/container/EcomGrid";
import EcomGrid3 from "@/container/EcomGrid3";
import EcomSocial from "@/container/EcomSocial";
import OurClients from "@/container/OurClients";
import {
  Bgbanner5,
  Bgbanner6,
  Bgbanner7,
  MobileSwiperData,
  banner7,
  banner8,
  ecomSocial,
  ecommercesdata,
  imageBanner28,
  imageBanner29,
  imageBanner30,
  mobileServicesdata,
} from "@/lib/constData";
import React from "react";

type Props = {};

const Ecommerce = (props: Props) => {
  return (
    <>
      <Banner data={banner8} className="bg-[#eaeceb] text-black" />
      <EcomSocial data={ecomSocial} />
      <ImageBanner data={imageBanner28} />
      <YellowBanner data={Bgbanner5} />
      <EcomGrid />
      <ImageBanner data={imageBanner29} />
      <YellowBanner data={Bgbanner6} />
      <EcomGrid3 />
      <ImageBanner data={imageBanner30} />
      <YellowBanner data={Bgbanner7} />
      <EcommerceServices data={ecommercesdata} />
      <OurClients />
      <MobileSwiper data={MobileSwiperData} />
    </>
  );
};

export default Ecommerce;
