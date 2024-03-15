// import Link from "next/link";
// import React from "react";
// import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
// import { Button } from "@/components/ui/button";
// import ThinkCard from "@/components/ThinkCard";
// import { Card1 } from "@/lib/constData";

// type Props = {};

// const ProjectSec = (props: Props) => {
//   return (
//     <div className="lg:pl-20 md:pl-10 sm:px-8 max-sm:px-5">
//       <h1 className="font-bold text-4xl my-10 pl-4">Latest Project</h1>

//       <ThinkCard data={Card1} />

//       <div className="flex flex-wrap justify-between m-5 gap-y-9 md:m-10 text-xl text-white">
//         <div className="flex items-center">
//           <Link
//             href={"#"}
//             className="pt-1 flex gap-2 items-center text-black font-bold"
//           >
//             View all cases <Arrow />
//           </Link>
//         </div>
//         <div className="pr-5 md:pr-16 grid overflow-hidden justify-center">
//           <Button
//             variant={"default"}
//             size={"lg"}
//             className="lg:text-lg md:text-md"
//           >
//             Start your innovation journey
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectSec;

import Link from "next/link";
import React from "react";
import Arrow from "@/public.icons/angle-circle-arrow-right-icon.svg";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { Cards } from "@/lib/constData";

type Props = {};

const ProjectSec = (props: Props) => {
  return (
    <section>
      <h1 className="font-bold text-4xl my-10 lg:pl-4 sm:pl-2">
        Latest Project
      </h1>

      <ProjectCard />

      <div className="flex flex-wrap justify-between my-10 pl-4 max-sm:px-5 gap-y-9 text-xl text-white">
        <div className="flex items-center">
          <Link
            href={"https://thespecialcharacter.graphy.com/"}
            className="pt-1 flex gap-x-2 items-center text-black font-bold"
          >
            View all cases <Arrow />
          </Link>
        </div>
        <Link
          className="pr-5 md:pr-16 grid overflow-hidden justify-center"
          href={"https://thespecialcharacter.graphy.com/"}
        >
          <Button variant={"default"} size={"md"} className="">
            Start your innovation journey
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSec;
