import Button from "./Button";
import Inputs from "./Inputs";
import { SecondaryButton } from "./Button.secondary";
import { Form, Link, useNavigation } from "react-router-dom";
export function NewTodoForm() {
	const { state } = useNavigation();
	const isSubmitting = state === "submitting";
	return (
		<Form method="post" className="flex flex-col justify-center items-center">
			<div className="flex gap-4 flex-col w-2/3">
				<Inputs name="newTodo" type="text" label="New Todo" />
				<div className="flex gap-x-3 ml-auto">
                    <Link to=".." relative="path">
					<SecondaryButton type="button">Back</SecondaryButton>
                    </Link>
					<Button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading" : "Create"}</Button>
				</div>
			</div>
		</Form>
	);
}
