import React from 'react'
import Facebook from "@/public/icons/facebook.svg";
import Link from "next/link"
import { footerdata } from '@/lib/constData';
import Image from "next/image"

type Props = {}

const SocialIcon = (props: Props) => {
  return (
    <>
      {footerdata?.social.map((i) => (
        <div key={i.id} className="relative ">
          <Image src={i.icon} alt={"icon"}  width={20} height={20}/>
        </div>
      ))}
    </>
  );
}

export default SocialIcon