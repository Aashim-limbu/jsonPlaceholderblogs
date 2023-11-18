import React, { ComponentProps } from "react";
type InputProps = {
	label: string;
	type: string;
	name?: string;
	InputRef?: React.Ref<HTMLInputElement>;
} & ComponentProps<"input">;

const Inputs = ({ label, type, name, InputRef, ...otherProps }: InputProps) => {
	return (
		<div className="relative">
			<label
				htmlFor="name"
				className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				{...otherProps}
				id="query"
				className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder={label}
				ref={InputRef}
			/>
		</div>
	);
};

export default Inputs;
