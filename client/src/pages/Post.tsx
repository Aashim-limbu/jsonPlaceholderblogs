import { LoaderFunctionArgs, Outlet, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import { Post } from "../interface/Posts";
import { PostCard } from "../components/index";
import { SecondaryButton } from "../components/Button.secondary";
import { FilterComponent } from "../components/FilterComponent";
import { getUsers } from "../api/getUsers";
import { User } from "../interface/User.interface";
import { createContext } from "react";
type ResponseType = {
	posts: Post[];
	users: User[];
	filterQuery?: string;
};

export type ContextType = {
    users:User[]
    filterQuery?:string
}
export const UserContext = createContext<ContextType>({users:[]});
export function Posts() {
	const { posts, users, filterQuery } = useLoaderData () as ResponseType ;
	return (
		<UserContext.Provider value={{users , filterQuery}}>
			<div>
				<h1 className="text-5xl flex justify-between w-full font-bold border-b-2 border-neutral-600 py-4 mb-5">
					<span>Post</span>
					<SecondaryButton type="button">New</SecondaryButton>
				</h1>
				<div className="my-4 flex w-full">
					<FilterComponent />
				</div>
				<div className="grid grid-cols-2 gap-4 w-full">
					{posts.map((post) => (
						<PostCard key={post.id} {...post} />
					))}
					<Outlet />
				</div>
			</div>
		</UserContext.Provider>
	);
}
async function loader({ request: { signal, url } }: LoaderFunctionArgs) {
	const posts = await getPosts({ signal });
	const searchParams = new URL(url).searchParams;
	const query = searchParams.get("filterQuery");

	if (query) {
		const filteredPosts = posts.filter((post) => {
			const postTitle = post.title.toLowerCase();
			return postTitle.includes(query.toLowerCase());
		});
		return {
			posts: filteredPosts,
			users: await getUsers({ signal }),
			filterQuery: query,
		};
	}

	return {
		posts: posts,
		users: await getUsers({ signal }),
		filterQuery: "",
	};
}

export const PostRoute = {
	element: <Posts />,
	loader,
};
