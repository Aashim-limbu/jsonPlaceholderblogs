import { Form } from "react-router-dom";
import { SecondaryButton } from "./Button.secondary";
import Inputs from "./Inputs";
import { UserContext } from "../pages/Post";
import { useContext } from "react";

export function FilterComponent() {
	const { filterQuery } = useContext(UserContext);
	return (
		<Form
			method="get"
			className="flex items-center w-full gap-x-4  justify-between"
		>
			<Inputs
				className="flex-1"
				defaultValue={filterQuery}
				name="filterQuery"
				type="search"
				label="Query"
			/>
			<SecondaryButton type="submit">Filter</SecondaryButton>
		</Form>
	);
}
