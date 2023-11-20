import { ActionFunctionArgs, LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom";
import { User } from "../interface/User.interface";
import FormElement from "./Form.component";
import { getUsers } from "../api/getUsers";
import { getUserPosts } from "../api/getPosts";
import { Post } from "../interface/Posts";
import { putPost } from "../api/putPost";
type ResponseType = {
	users: User[];
    post:Post
};
function EditForm() {
	const { users , post }: ResponseType = useLoaderData() as ResponseType;
	return (
		<div>
			<h1 className="text-3xl p-2 font-bold mb-4 border-b-2 border-black">
				Edit Post
			</h1>
			<FormElement method="put" posts={post} users={users} />
		</div>
	);
}
async function loader({ request: { signal },params:{postId} }: LoaderFunctionArgs) {
	const users = await getUsers({ signal });
	const post = await getUserPosts({ signal },postId);
	return { users, post };
}
async function action({request,params:{postId}}:ActionFunctionArgs){
    const formData = await request.formData()
    const title = formData.get("postTitle") !
    const body = formData.get("postBody")!
    console.log(await putPost(`/posts/${postId}`,{title,body,userId:postId}))
    return redirect(`/posts/${postId}`)
}
export const EditRoute = {
	element: <EditForm />,
	loader,
    action,
};
