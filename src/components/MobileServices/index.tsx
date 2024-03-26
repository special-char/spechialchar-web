
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/mobileServicesTabs";
import React from "react";
import { mobileServicesdata } from "@/lib/constData";
import style from "./style.module.css";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Index() {
  return (
    <section className="gap-y-10 flex flex-col">
      <div>
        <Tabs
          defaultValue={mobileServicesdata.data[0].title}
          className={style.tabContainer}
        >
          <TabsList className={style.container}>
            {mobileServicesdata.data.map((item) => (
              <TabsTrigger key={item.id} value={item.title} className={style.tab}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className={style.contentdiv}>
            {mobileServicesdata.data.map((item) => (
              <TabsContent key={item.id} value={item.title} className={style.tabsContent}>
                {item.description}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      <div>
      <Link href={"https://thespecialcharacter.graphy.com/"}>
        <Button variant={"secondary"}>
          <span>Hire mobile app devalopers &rarr;</span>
        </Button>
      </Link>
      </div>
    </section>
  );
}
