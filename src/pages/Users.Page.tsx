import { useLoaderData, useNavigate } from "react-router-dom";
import { User } from "../interface/User.interface";
import { getUsers } from "../api/getUsers";
import Button from "../components/Button";
function Users() {
	const comments: User[] = useLoaderData() as User[];
	const navigate = useNavigate();
	return (
		<>
			<h1 className="text-2xl font-bold mb-2">Users</h1>
			<div className="grid grid-cols-2 gap-4">
				{comments.map(({ id, name, website, email, company }: User) => (
					<div className="flex flex-col bg-white" key={id}>
						<h2 className="text-xl font-bold py-3 px-2 border-b-2">{name}</h2>
						<div className="px-2 py-3 leading-10 grow text-xl border-slate-400 border-b-2">
							<h2>{company.name}</h2>
							<h2>{website}</h2>
							<h2>{email}</h2>
						</div>
                        <div className="p-4 flex">
							<Button className=" ml-auto" onClick={() => navigate(`${id}`)}>Expand</Button>
                        </div>
					</div>
				))}
			</div>
			;
		</>
	);
}
function loader({ request: { signal } }: { request: { signal: AbortSignal } }) {
	return getUsers({ signal });
}
export const UsersRoute = {
	element: <Users />,
	loader,
};
