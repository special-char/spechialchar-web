import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ServiceCardType = {
  image?: string | StaticImport;
  titleLine?: { title: string; titleColor?: string };
  description?: { descriptionText: string; descriptionColor?: string };
  subText?: { text: string; textColor?: string };
};
type Props = {
  serviceCard: ServiceCardType[];
};
const BiServiceCard = ({ serviceCard }: Props) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 py-10">
      {serviceCard?.map((item) => {
        return (
          <div className="flex flex-col gap-y-6 gap-2 h-full justify-between">
            <div className="">
              {item?.image ? (
                <Image
                  title="service-images"
                  src={item?.image}
                  height={50}
                  width={50}
                  alt="image"
                />
              ) : (
                <></>
              )}
            </div>
            {item?.titleLine?.title && (
              <div>
                <h3
                  className="font-bold text-heading5"
                  style={{ color: item?.titleLine?.titleColor }}
                >
                  {item?.titleLine?.title}
                </h3>
              </div>
            )}
            {item?.description?.descriptionText && (
              <p
                className="text-subtitle2 text-primary md:pr-6 lg:pr-4"
                style={{ color: item?.description?.descriptionColor }}
              >
                {item?.description?.descriptionText}
              </p>
            )}

            {item?.subText?.text && (
              <p
                className="lg:text-xl md:text-sm sm:text-sm font-extrabold md:pr-6 lg:pr-4 gap-3"
                style={{ color: item?.subText?.textColor }}
              >
                {item?.subText?.text}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BiServiceCard;
