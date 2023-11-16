import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getUser } from "../api/getUsers";
import { User } from "../interface/User.interface";
import { getUserPosts } from "../api/getPosts";
import { getTodo } from "../api/getTodos";
import { Todo } from "../interface/Todo.interface";
import { Post } from "../interface/Posts";
import { PostCard } from ".";
type ResolveType = {
    todo:Todo
    user:User
    post :Post
}
export function ExpandUser() {
    const {todo,user,post}:ResolveType = useLoaderData() as ResolveType
	const {name,email,website,address:{street,suite,city,zipcode}}: User = user
	return (
		<div className="flex flex-col gap-y-5">
			<div>
				<div className="text-4xl font-bold mb-2 border-b-2 py-2 border-slate-500">
					{name}
				</div>
				<div>
					<span className="text-xl font-semibold">Email: </span>
					{email}
				</div>
				<div>
					<span className="text-xl font-semibold">Website: </span>
					{website}
				</div>
				<div>
					<span className="text-xl font-semibold">Address:</span> {street}{" "}
					{suite}
					{city} {zipcode}
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<h2 className="text-4xl font-bold">Post</h2>
				<PostCard
					key={post.id}
					id={post.id}
					title={post.title}
					body={post.body}
					userId={post.userId}
				/>
				<h2 className="text-4xl font-bold">Todos</h2>
				<ul className={todo.completed ? "line-through" : ""}>
					<li className="text-xl text-zinc-500 ">{todo.title}</li>
				</ul>
			</div>
		</div>
	);
}
async function loader({
	request: { signal },
	params: { userId },
}: LoaderFunctionArgs<User>) {
    const post = getUserPosts({signal},userId)
    const user = getUser({ signal }, userId)
    const todo = getTodo({signal},userId)
    return {post:await post , user: await user , todo:await todo}
}
export const UserRoute = {
	element: <ExpandUser />,
	loader,
};
