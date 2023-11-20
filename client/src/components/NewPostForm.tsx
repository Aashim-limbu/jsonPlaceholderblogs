import { getUsers } from "../api/getUsers";
import {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	redirect,
	useLoaderData,
} from "react-router-dom";
import FormElement from "./Form.component";
import { User } from "../interface/User.interface";
import { postPost } from "../api/postPosts";
type ResponseType = {
	users: User[];
};
export function NewPost() {
	const { users }: ResponseType = useLoaderData() as ResponseType;
	return (
		<>
			<h1 className="mb-5 text-3xl font-bold border-b-2 border-black py-2">
				New Post
			</h1>
			<FormElement users={users} method="post" />
		</>
	);
}
async function loader({ request: { signal } }: LoaderFunctionArgs) {
	return { users: await getUsers({ signal }) };
}
async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const title = formData.get("postTitle");
	const author = formData.get("postAuthor");
	const body = formData.get("postBody");
	if (author && title && body) {
		await postPost({ title, author, body }) ;
		return redirect("/posts");
	}
}
export const NewPostRoute = {
	element: <NewPost />,
	loader,
	action,
};
