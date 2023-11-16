import { NavLink } from "react-router-dom";
const NavBarElement = [
	{ name: "posts", title: "Posts" },
	{ name: "users", title: "Users" },
	{ name: "todos", title: "Todos" },
];
export function NavBar() {
	return (
		<ul className="flex sticky top-0 bg-teal-800 p-3 text-white text-xl justify-end gap-x-5">
			{NavBarElement.map(({ name, title }, index) => (
				<li key={index} className="hover:underline">
					<NavLink
						to={`/${name}`}
						end
					>
						{title}
					</NavLink>
				</li>
			))}
		</ul>
	);
}
