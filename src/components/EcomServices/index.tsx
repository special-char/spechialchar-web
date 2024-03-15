import { mobileServicesType } from "@/utils/types";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/mobileServicesTabs";
import React from "react";
import { ecommercesdata } from "@/lib/constData";
import style from "./styles.module.css";
import { Button } from "../ui/button";

export default function Index({ data }: mobileServicesType) {
  return (
    <section className="gap-y-10 flex flex-col">
      <div>
        <Tabs
          defaultValue={ecommercesdata.data[0].title}
          className={style.tabContainer}
        >
          <TabsList className={style.container}>
            {ecommercesdata.data.map((item) => (
              <TabsTrigger value={item.title} className={style.tab}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className={style.contentdiv}>
            {ecommercesdata.data.map((item) => (
              <TabsContent value={item.title} className={style.tabsContent}>
                {item.description}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      <div>
        <Button variant={"secondary"}>
          <span>Hire mobile app devalopers &rarr;</span>
        </Button>
      </div>
    </section>
  );
}
