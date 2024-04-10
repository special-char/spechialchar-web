import React from "react";
import Link from "next/link";
import { footerdata } from "@/lib/constData";
import Image from "next/image";

type Props = {};

const SocialIcon = (props: Props) => {
  return (
    <>
      {footerdata?.social.map((i) => (
        <Link
          title="social-links"
          key={i.id}
          href={i.link}
          className="relative "
        >
          <Image
            src={i.icon}
            alt={"icons"}
            title={"icons"}
            width={20}
            height={20}
          />
        </Link>
      ))}
    </>
  );
};

export default SocialIcon;
