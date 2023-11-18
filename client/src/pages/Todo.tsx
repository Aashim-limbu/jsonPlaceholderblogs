import {
	Form,
	Link,
	LoaderFunctionArgs,
	useLoaderData,
} from "react-router-dom";
import { getTodos } from "../api/getTodos";
import { Todo } from "../interface/Todo.interface";
import Inputs from "../components/Inputs";
import Button from "../components/Button";
import { useEffect, useRef } from "react";
type ResponseType = {
	todos: Todo[];
	query?: string | undefined;
};
export function Todos() {
	const { todos, query }: ResponseType = useLoaderData() as ResponseType;
	const InputRef = useRef<HTMLInputElement>(document.createElement("input"));
	useEffect(() => {
		if (query) InputRef.current.value = query;
	}, [query]);
	return (
		<div>
			<div className="flex mb-7 justify-between py-2 border-b-2 border-neutral-600">
				<h1 className="text-5xl font-bold">Todos</h1>
				<Link to="/new">
					<Button type="button">New</Button>
				</Link>
			</div>
			<Form className="flex w-full gap-x-2">
				<div className="flex-1">
                    {/* basically to tie the things with the actual component itself we use the input ref with the useEffect  */}
					<Inputs
						type="search"
						defaultValue={query}
						InputRef={InputRef}
						name="query"
						label="Search"
					/>
				</div>
				<Button type="submit" className="ml-auto">
					Search
				</Button>
			</Form>
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
function loader({ request: { signal, url } }: LoaderFunctionArgs) {
	const searchParams = new URL(url).searchParams;
	const query: string | undefined = searchParams.get("query") || "";

	return getTodos({ signal }, query);
}
export const TodoRoute = {
	element: <Todos />,
	loader,
};
