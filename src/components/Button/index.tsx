import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import style from "./button.module.css";

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: style.default,
				outline: style.outline,
				secondary: style.secondary,
				ghost: style.ghost,
				link: style.link,
			},
			size: {
				default: style.md,
				sm: style.sm,
				lg: style.lg,
				icon: style.icon,
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

type ButtonProps = {
	as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
	as?: "a";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = {
	isLoading?: boolean;
	title?: string;
} & VariantProps<typeof buttonVariants> &
	(ButtonProps | AnchorProps);

const Button = ({
	variant,
	size,
	isLoading = false,
	as = "button",
	className,
	title,
	...props
}: Props) => {
	// type assertion
	const Component = as as React.ElementType;

	return (
		<Component
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{title && <span className="sr-only">{title}</span>}
			{isLoading ? (
				<span className="block w-4 aspect-square  border-2 border-currentColor border-t-transparent animate-spin"></span>
			) : null}
			{props.children}
		</Component>
	);
};

export default Button;
