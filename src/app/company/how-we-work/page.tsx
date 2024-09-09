// import HowBanner from '@/components/HowBanner'
// import HowModel from '@/components/HowModel'
// import Tab2 from '@/components/Tab/index2'
// import TableDemo from '@/components/Tabel'
// import { howWeWorktabdata, howbanner, howmodel } from '@/lib/constData'
// import React from 'react'
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "How We Work",
//   description:
//     "Learn practically with us and get ahead of the competition with our industry-relevant IT Training. Our expertise - Digital Marketing | Full Stack Development",
// };

// type Props = {}

// const HowWeWork = (props: Props) => {
//   return (
//     <>
//       <HowBanner data={howbanner} />
//       <Tab2 data={howWeWorktabdata} />
//       <HowModel data={howmodel} />
//       <TableDemo />

//     </>
//   )
// }

// export default HowWeWork

import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/company/how-we-work",
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
