import { Link } from "react-router-dom";
import { Post } from "../interface/Posts";
import Button from "./Button";
export function PostCard({ id, title, body }: Post) {
	return (
		<div className="bg-white text-xl flex flex-col ">
			<h2 className="text-2xl p-5 capitalize text-ellipsis whitespace-nowrap overflow-hidden border-b-2">
				{title}
			</h2>
			<p className="border-b-2  leading-7 grow p-4">{body}</p>
			<div className="p-4 grid ">
				<div className="grid">
					<div className="justify-self-end">
						<Link to={`/posts/${id}`}>
							<Button type="button">View</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
