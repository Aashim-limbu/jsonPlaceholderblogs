import { ComponentProps } from "react";
type ButtonProps = {
	children: React.ReactNode;
	className?: string;
	type: string;
} & ComponentProps<"button">;
function Button({ children, type, className, ...otherProps }: ButtonProps) {
	return (
		<button
			type={type}
			className={`rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm disabled:opacity-50  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}

export default Button;
