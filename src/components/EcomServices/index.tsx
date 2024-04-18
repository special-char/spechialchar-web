
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
import Link from "next/link";
type Props = {
  button: string
}
export default function Index1(props: Props) {
  return (
    <section className="gap-y-10 flex flex-col">
      <div>
        <Tabs
          defaultValue={ecommercesdata.data[0].title}
          className={style.tabContainer}
        >
          <TabsList className={style.container}>
            {ecommercesdata.data.map((item) => (
              <TabsTrigger key={item.id} value={item.title} className={style.tab}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className={style.contentdiv}>
            {ecommercesdata.data.map((item) => (
              <TabsContent key={item.id} value={item.title} className={style.tabsContent}>
                {item.description}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
      <div className="py-10">
        <Link title="contect-us" href={"#Contact"}>
          <Button variant={"secondary"}>
            {props.button}
          </Button>
        </Link>
      </div>

    </section>
  );
}
