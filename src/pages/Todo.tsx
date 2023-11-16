import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getTodos } from "../api/getTodos";
import { Todo } from "../interface/Todo.interface";

export function Todos() {
	const todos: Todo[] = useLoaderData() as Todo[];
	return (
		<div>
			{todos.map(({ id, title, completed }) => {
				return (
					<div className="leading-10 text-xl" key={id}>
						<h1 className={completed ? "line-through" : ""}>{title}</h1>
					</div>
				);
			})}
		</div>
	);
}
function loader({ request: { signal } }: LoaderFunctionArgs) {
	return getTodos({ signal });
}
export const TodoRoute = {
	element: <Todos />,
	loader,
};
