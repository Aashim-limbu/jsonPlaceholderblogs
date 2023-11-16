import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getUserPosts } from "../api/getPosts";
import { Post } from "../interface/Posts";
import { Comment } from "../interface/Comment";
import { User } from "../interface/User.interface";
import { getComment } from "../api/getComments";
import { getUser } from "../api/getUsers";
import { CommentCard } from ".";
type ResponseType = {
	post: Post;
	comments: Comment[];
	user: User;
};
function ExpandPost() {
	const { comments, post, user }: ResponseType =
		useLoaderData() as ResponseType;
	return (
		<div className="bg-slate-200 h-full">
			<h2 className="text-2xl font-semibold py-4 border-slate-500 border-b-2">
				{post.title}
			</h2>
			<h3 className="text-xl py-2">
				By-{" "}
				<Link className="text-cyan-600 underline" to={`/users/${user.id}`}>
					{user.name}
				</Link>
			</h3>
			<p className="text-xl">{post.body}</p>
			<h3 className="text-xl font-bold my-3">Comments</h3>
			<div className="flex flex-col gap-y-4">
				{comments.map((comment) => (
					<CommentCard key={comment.id} Comment={comment} />
				))}
			</div>
		</div>
	);
}
async function loader({
	params: { postId },
	request: { signal },
}: LoaderFunctionArgs<Post>) {
	const comments = getComment({ signal }, postId);
	const post = await getUserPosts({ signal }, postId);
	const user = getUser({ signal }, post.userId);
	return { comments: await comments, post, user: await user };
}
export const UserPostRoute = {
	element: <ExpandPost />,
	loader,
};
