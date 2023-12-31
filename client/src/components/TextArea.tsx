import { ComponentProps } from "react";

type TextAreaProps = {
    label:string
    name?:string
    id?:string
} & ComponentProps<"textarea">
export default function TextArea({id,name,label,...otherProps}:TextAreaProps) {
	return (
		<div className="relative">
			<label
				htmlFor={id}
				className="absolute -top-2 left-0 inline-block bg-white px-1 text-xs font-medium text-gray-900"
			>
				{label}
			</label>
			<div className="mt-2">
				<textarea
					rows={4}
					name={name}
					id={id}
                    {...otherProps}
					className={`block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
				/>
			</div>
		</div>
	);
}
