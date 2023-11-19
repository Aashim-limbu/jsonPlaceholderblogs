import { Outlet, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import { Post } from "../interface/Posts";
import { PostCard } from "../components/index";
import { SecondaryButton } from "../components/Button.secondary";
import { FilterComponent } from "../components/FilterComponent";
interface LoaderProps {
	request: { signal: AbortSignal };
}
export function Posts() {
	const posts = useLoaderData() as Post[];
	return (
		<div>
			<h1 className="text-5xl flex justify-between w-full font-bold border-b-2 border-neutral-600 py-4 mb-5">
				<span>Post</span>
				<SecondaryButton type="button">New</SecondaryButton>
			</h1>
            <div className="my-4 flex w-full">
            <FilterComponent/>
            </div>
			<div className="grid grid-cols-2 gap-4 w-full">
				{posts.map((post) => (
					<PostCard key={post.id} {...post} />
				))}
				<Outlet />
			fiFi</div>
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
