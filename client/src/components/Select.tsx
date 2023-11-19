import { User } from "../interface/User.interface";

type SelectProps = {
	label: string;
	options: User[];
	className?: string;
	id?: string;
    name?:string
};
export default function Select({
	id,
	name,
	label,
	options,
	className,
}: SelectProps) {
	return (
		<div className={`relative ${className}`}>
			<label
				htmlFor={id}
				className="absolute -top-2 left-0 inline-block bg-white px-1 text-xs font-medium text-gray-900"
			>
				{label}
			</label>
			<select
				id={id}
				name={name}
				className="mt-2 bg-white block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
			>
				{options.map((option) => (
					<option key={option.id}>{option.name}</option>
				))}
			</select>
		</div>
	);
}
