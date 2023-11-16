import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { NavBar } from "../components/index";
import { newtonsCradle } from "ldrs";

export function NavBarLayout() {
	const { state } = useNavigation();
    newtonsCradle.register()
	return (
		<>
			<NavBar />
			<ScrollRestoration />
			<div className=" bg-slate-200 p-5 ">
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
		</>
	);
}
