import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

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
		</main>
	);
}
