import Inputs from "./Inputs";
import { getUsers } from "../api/getUsers";
import {
	ActionFunctionArgs,
	Form,
	Link,
	LoaderFunctionArgs,
	redirect,
	useLoaderData,
} from "react-router-dom";
import { User } from "../interface/User.interface";
import { SecondaryButton } from "./Button.secondary";
import Button from "./Button";
import TextArea from "./TextArea";
import Select from "./Select";
import { postPost } from "../api/postPosts";
type ResponseType = {
	users: User[];
};
export function NewPost() {
	const { users }: ResponseType = useLoaderData() as ResponseType;
	return (
		<Form method="post">
			<h1 className="text-2xl font-bold mb-5">New Post</h1>
			<div className="flex flex-col">
				<div className="flex mb-2  justify-between">
					<Inputs
						className="p-2 grow"
						name="postTitle"
						type="text"
						label="Title"
					/>
					<Select
						label="Author"
						name="postAuthor"
						id="author"
						options={users}
					/>
				</div>
				<TextArea label="body" id="body" name="postBody" />
				<div className="flex my-5">
					<div className="ml-auto">
						<Link relative="path" to="..">
							<SecondaryButton className="mr-2" type="button">
								Back
							</SecondaryButton>
						</Link>
						<Button type="submit">Add</Button>
					</div>
				</div>
			</div>
		</Form>
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
		const post = await postPost({ title, author, body });
		return redirect("/posts")
	}
}
export const NewPostRoute = {
	element: <NewPost />,
	loader,
	action,
};
