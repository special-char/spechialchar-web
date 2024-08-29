import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
type ProjectCardProps = {
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
};

type Props = {
  projects: ProjectCardProps[];
};

const BiSwiperCard = ({ projects }: Props) => {
  return (
    <>
      <div className="relative flex flex-col gap-8 max-sm:gap-6">
        {/* <p className=" text-center text-heading4 mt-3">Related Blogs</p> */}
        <div className="flex z-20 gap-x-10">
          <Swiper
            spaceBetween={4}
            // slidesPerView={2}
            modules={[Navigation]}
            navigation={{
              prevEl: ".relatedBlogPrev",
              nextEl: ".relatedBlogNext",
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                slidesOffsetBefore: 100,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                slidesOffsetBefore: 200,
              },
            }}
          >
            {projects &&
              projects.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="lg:aspect-[16/9]  md:aspect-[4/3] max-sm:aspect-square p-2 w-full">
                    <div className=" border-2 relative lg:aspect-[16/9] md:aspect-[4/3] max-sm:aspect-square z-10 overflow-hidden border-none">
                      <Image
                        src={item?.image}
                        className="w-full object-cover rounded-md group-hover:transform group-hover:duration-75 group-hover:scale-110"
                        alt="image"
                        title={item?.title}
                        fill
                        objectFit="cover"
                        // height={550}
                        // width={700}
                      />
                    </div>
                    <Link href={`/casestudies/${item.id}`} title={item.title}>
                      <h3 className="text-heading6 group-hover:text-blue font-bold mb-2 mt-4 ">
                        {item.title}
                      </h3>
                      <p className="text-primary text-subtitle2">
                        {item.description}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button className="relatedBlogPrev text-pink bg-white border-none shadow-xl absolute left-0 top-[50%] translate-y-[-50%] z-10 rounded-full p-1 lg:block hidden">
            {/* <PrevIcon className="w-6 aspect-square" /> */}
            <span className="">Next button</span>
          </button>
          <button className="relatedBlogNext text-pink bg-white border-none shadow-xl absolute right-0 top-[50%] translate-y-[-50%] z-10 rounded-full p-1 lg:block hidden">
            {/* <NextIcon className="w-6 aspect-square" /> */}
            <span className="">Next button</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BiSwiperCard;
