import { Outlet, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import { Post } from "../interface/Posts";
import { PostCard } from "../components/index";
interface LoaderProps {
	request: { signal: AbortSignal };
}
export function Posts() {
	const posts = useLoaderData() as Post[];
	return (
		<div>
			<h1 className="text-5xl font-bold border-b-2 border-neutral-600 py-4 mb-5">Post</h1>
			<div className="grid grid-cols-2 gap-4 w-full">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
				<Outlet />
			</div>
		</div>
	);
}
function loader({ request: { signal } }: LoaderProps): Promise<Post[]> {
	return getPosts({ signal });
}

export const PostRoute = {
	element: <Posts />,
	loader,
};
