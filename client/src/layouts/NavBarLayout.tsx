import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { NavBar } from "../components/index";
import { newtonsCradle } from "ldrs";

export function NavBarLayout() {
	const { state } = useNavigation();
    newtonsCradle.register()
	return (
		<div className="flex flex-col min-h-screen">
			<NavBar />
			<ScrollRestoration />
			<div className="flex-1 bg-neutral-200 p-5">
				{state === "loading" ? (
					<div className="flex items-center justify-center h-screen">
						<l-newtons-cradle
							size="150"
							speed="1.0"
							color="darkblue"
						></l-newtons-cradle>
					</div>
				) : (
					<Outlet />
				)}
			</div>
		</div>
	);
}
