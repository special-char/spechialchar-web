<<<<<<<< < Temporary merge branch 1
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Navbar from '@/components/Navbar/index'

export default function Home() {
	return (


		<main className="space-y-8 p-8">
			<div className="flex gap-4 items-center">
				<Button variant="default" size="default">
					Button
				</Button>
				<Button variant="outline" size="default">
					Button
				</Button>
				<Button variant="secondary" size="default">
					Button
				</Button>
				<Button variant="destructive" size="default">
					Button
				</Button>
				<Button variant="ghost" size="default">
					Button
				</Button>
				<Button variant="link" size="default">
					Button
				</Button>
			</div>
			<div className="flex gap-4 items-center">
				<Button variant="default" size="sm">
					Button
				</Button>
				<Button variant="outline" size="sm">
					Button
				</Button>
				<Button variant="secondary" size="sm">
					Button
				</Button>
				<Button variant="destructive" size="sm">
					Button
				</Button>
				<Button variant="ghost" size="sm">
					Button
				</Button>
				<Button variant="link" size="sm">
					Button
				</Button>
			</div>
			<div className="flex gap-4 items-center">
				<Button variant="default" size="lg">
					Button
				</Button>
				<Button variant="outline" size="lg">
					Button
				</Button>
				<Button variant="secondary" size="lg">
					Button
				</Button>
				<Button variant="destructive" size="lg">
					Button
				</Button>
				<Button variant="ghost" size="lg">
					Button
				</Button>
				<Button variant="link" size="lg">
					Button
				</Button>
			</div>
			<div className="flex gap-4 items-center">
				<Button variant="default" size="icon">
					<PlusIcon />
				</Button>
				<Button variant="outline" size="icon">
					<PlusIcon />
				</Button>
				<Button variant="secondary" size="icon">
					<PlusIcon />
				</Button>
				<Button variant="destructive" size="icon">
					<PlusIcon />
				</Button>
				<Button variant="ghost" size="icon">
					<PlusIcon />
				</Button>
				<Button variant="link" size="icon">
					<PlusIcon />
				</Button>
			</div>
			<AccordionDemo />
		</main>
	);
}

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// export function AccordionDemo() {
// 	const data = [
// 		{
// 			id: 1,
// 			title: "Is it accessible?",
// 			desc: "Yes. It adheres to the WAI-ARIA design pattern.",
// 		},
// 		{
// 			id: 2,
// 			title: "Is it styled?",
// 			desc: "Yes. It comes with default styles that matches the other components' aesthetic.",
// 		},
// 		{
// 			id: 3,
// 			title: "Is it animated?",
// 			desc: "Yes. It's animated by default, but you can disable it if you prefer.",
// 		},
// 	];
// 	return (
// 		<Accordion type="single" collapsible className="w-full">
// 			{data.map((item) => {
// 				return (
// 					<AccordionItem key={item.id} value={`item-${item.id}`}>
// 						<AccordionTrigger>{item.title}</AccordionTrigger>
// 						<AccordionContent>{item.desc}</AccordionContent>
// 					</AccordionItem>
// 				);
// 			})}
// 		</Accordion>
// 	);
// }
