import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";


const TableContent = {
  title: "Comparison of engagement models",
  header: [
    {
        id:1,
        title:"Features"
    },
    {
        id:2,
        title:"Fixed Price"
    },
    {
        id:3,
        title:"Time & Material"
    },
    {
        id:4,
        title:"Dedicated Team"
    }
  ],
  invoices: [
    {
      invoice: "Project Size",
      paymentStatus: "any",
      totalAmount: "any",
      paymentMethod: "any",
    },
    {
      invoice: "Requirement",
      paymentStatus: "fixed",
      totalAmount: "evolving",
      paymentMethod: "evolving",
    },
    {
      invoice: "Scope Flexibility",
      paymentStatus: "limited flexibility",
      totalAmount: "flexible",
      paymentMethod: "flexible",
    },
    {
      invoice: "Budget Predictability",
      paymentStatus: "highest",
      totalAmount: "pay as you go",
      paymentMethod: "fixed team cost",
    },
    {
      invoice: "Timelines",
      paymentStatus: "fixed",
      totalAmount: "flexible",
      paymentMethod: "flexible",
    },
    {
      invoice: "Client’s Involvement",
      paymentStatus: "minimal",
      totalAmount: "regular",
      paymentMethod: "constant",
    },
    {
      invoice: "Quick Start",
      paymentStatus: "no",
      totalAmount: "yes",
      paymentMethod: "yes",
    },
  ],
};

export default function TableDemo() {
  const { title, header, invoices } = TableContent;

  return (
    <section className="h-full w-full">
      <div className="px-4 sm:px-0">
        <div className="lg:text-4xl font-bold pb-10 lg:pb-16 lg:pt-10 text-2xl">
          {title}
        </div>
        <hr />
      </div>
      <div className="pb-10">

      <Table className=" ">
        <TableHeader>
          <TableRow>
            {header.map((item, index) => (
              <TableHead key={index}>{item.title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
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
      <Button>Get a Free consultation</Button>
    </section>
  );
}
