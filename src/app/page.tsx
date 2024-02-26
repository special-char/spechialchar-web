import Button from "@/components/Button";
import Icon from "@/public/icons/xmark.svg";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<h2>Home</h2>
			<h3>Home</h3>
			<h4>Home</h4>
			<h5>Home</h5>
			<h6>Home</h6>
			<p className="large">Hello</p>
			<p>Hello</p>
			<p className="small">Hello</p>
			<section className="flex flex-col gap-4">
				<div className="flex gap-4">
					<Button>Hello</Button>
					<Button variant="secondary">Hello</Button>
					<Button variant="outline">Hello</Button>
					<Button variant="ghost">Hello</Button>
					<Button variant="link">Hello</Button>
				</div>
				<div className="flex gap-4">
					<Button size="sm">Hello</Button>
					<Button size="sm" variant="secondary">
						Hello
					</Button>
					<Button size="sm" variant="outline">
						Hello
					</Button>
					<Button size="sm" variant="ghost">
						Hello
					</Button>
					<Button size="sm" variant="link">
						Hello
					</Button>
				</div>
				<div className="flex gap-4">
					<Button size="lg">Hello</Button>
					<Button size="lg" variant="secondary">
						Hello
					</Button>
					<Button size="lg" variant="outline">
						Hello
					</Button>
					<Button size="lg" variant="ghost">
						Hello
					</Button>
					<Button size="lg" variant="link">
						Hello
					</Button>
				</div>
				<div className="flex gap-4">
					<Button size="icon">
						<Icon />
					</Button>
					<Button size="icon" variant="secondary">
						<Icon />
					</Button>
					<Button size="icon" variant="outline">
						<Icon />
					</Button>
					<Button size="icon" variant="ghost">
						<Icon />
					</Button>
					<Button size="icon" variant="link">
						<Icon />
					</Button>
				</div>
			</section>
		</div>
	);
}
