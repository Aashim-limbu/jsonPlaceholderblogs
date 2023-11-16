import { Comment } from "../interface/Comment";
export function CommentCard({
	key,
	Comment,
}: {
	key: number;
	Comment: Comment;
}) {
	return (
		<div className="bg-white p-2 flex flex-col gap-4 justify-between flex-1" key={key}>
			<h2 className="font-serif text-gray-500">{Comment.email}</h2>
			<p>{Comment.body}</p>
		</div>
	);
}
