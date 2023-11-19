import { ComponentProps } from "react";

type ButtonTypes = {
	children: React.ReactNode;
	className?: string;
	type: string;
} & ComponentProps<"button">;
export function SecondaryButton({
	children,
	className,
	type,
	...otherProps
}: ButtonTypes) {
	return (
		<button
			type={type}
			className={`rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 ${className}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
