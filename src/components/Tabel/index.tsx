import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { TableContent } from "@/lib/constData"


export default function TableDemo() {


  return (
    <section className="h-full w-full flex flex-col gap-y-10">
      <div className="px-4 sm:px-0">
        <div className="lg:text-4xl font-bold  lg:pt-10 text-2xl">{TableContent.title}</div>
        <hr />
      </div>
      <div className="pb-10">
        <Table className=" ">
          <TableHeader>
            <TableRow>
              {TableContent.header.map((item, index) => (
                <TableHead key={index}>{item.title}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableContent.invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-bold">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Link href={"https://thespecialcharacter.graphy.com/"}>
        <Button>Get a Free consultation</Button>
      </Link>
    </section>
  );
}
