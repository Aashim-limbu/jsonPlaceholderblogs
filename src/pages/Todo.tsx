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
import { useEffect } from "react";
type ResponseType = {
    todos:Todo[]
    query?:string
}
export function Todos() {
	const {todos,query}: ResponseType = useLoaderData() as ResponseType;
    useEffect(() => {

    }, [query])
	return (
		<div>
			<div className="flex mb-7 justify-between py-2 border-b-2 border-neutral-600">
				<h1 className="text-5xl font-bold">Todos</h1>
				<Link to="/new">
					<Button>New</Button>
				</Link>
			</div>
			<Form className="flex w-full gap-x-2">
				<div className="flex-1">
					<Inputs type="search" defaultValue={query} name="query" label="Search" />
				</div>
				<Button className="ml-auto">Search</Button>
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
	const query:string|undefined = searchParams.get("query") || "";

	return getTodos({ signal },query);
}
export const TodoRoute = {
	element: <Todos />,
	loader,
};
