    import { webGridSectiondata } from "@/lib/constData";
    import { webGridSectionType } from "@/utils/types";
    import React from "react";
    import Link from "next/link";

    function WebGridSection({ data }: webGridSectionType) {
    return (
        <section>
        <div className="grid grid-cols-4 gap-5 mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
            {webGridSectiondata.data.map((x) => (
            <Link key={x.id} href={x?.ref} className="text-blue-700 hover:text-blue-300 duration-300 text-2xl font-bold border-b-2 py-4 border-b-second" >
                {x.link}
            </Link>
            ))}
        </div>
        </section>
    );
    }

    export default WebGridSection;
