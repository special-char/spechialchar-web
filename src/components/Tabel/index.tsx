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
        <h2 className="text-heading1">{TableContent.title}</h2>
        <hr />
      </div>
      <div className="">
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
      <div>
        <Link title="Get a Free consultation" href={"#Contact"}>
          <Button className="">Get a Free consultation</Button>
        </Link>
      </div>
    </section>
  );
}
