import React from "react";
import Link from "next/link";
import Logo from "@/public/icons/itrex.svg";
import Facebook from "@/public/icons/facebook.svg";
import Instagram from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/Linkedin.svg";
import Youtube from "@/public/icons/youtube.svg";
import Twitter from "@/public/icons/twitter.svg";
import Iso from "@/public/icons/Iso.svg";
import Dqs from "@/public/icons/dqs.svg";
import Clutch from "@/public/icons/clutch.svg";
import Clutch2 from "@/public/icons/clutch2.svg";
import Upwork from "@/public/icons/upwork.svg";
import Google from "@/public/icons/googlecloud.svg";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="z-10 w-full bg-black">
      <div className="bg-black text-white w-full grid grid-cols-1 gap-16 sm:p-14">
        <div className="flex flex-wrap lg:gap-48 md:gap-24 max-sm:gap-24">
          <div >
            <Logo />
          </div>
          <div className="flex font-semibold">
            <div className="text-[1.40rem] md:text-xl sm:text-lg flex flex-wrap">
              We are an enterprise software development company that is inspired
              by the future
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-48 md:gap-24 max-sm:gap-24">
          <div >
            <div>Office:</div>
            <div className="text-white">Aliso Viejo, CA</div>
            <div className="text-white">Warsaw,PL</div>
            <div className="text-white">Kyiv,UA</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <div>Hello@itrexgroup.com</div>
              <div>+12134367785</div>
            </div>
            <div className="flex gap-8">
              <div>
                <Link href={"#"}>
                  <Facebook />
                </Link>
              </div>
              <div>
                <Link href={"#"}>
                  <Instagram />
                </Link>
              </div>
              <div>
                <Link href={"#"}>
                  <Youtube />
                </Link>
              </div>
              <div>
                <Link href={"#"}>
                  <Linkedin />
                </Link>
              </div>
              <div>
                <Link href={"#"}>
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:gap-48 md:gap-24 max-sm:gap-24">
          <div className="flex flex-col text-white">
            <div>
              <Link href={"#"}>Privacy Policy</Link>
            </div>
            <div className="">@2024 Itrex</div>

          </div>
          <div className="flex overflow-x-auto gap-3">
            <div>
              <Iso />
            </div>
            <div>
              <Dqs />
            </div>
            <div>
              <Clutch />
            </div>
            <div>
              <Clutch2 />
            </div>
            <div>
              <Upwork />
            </div>
            <div>
              <Google />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;