import { useRouteError } from "react-router-dom";

export function ErrorPage() {
	const error = useRouteError() as Error;
	return (
		<div className="h-screen w-screen flex flex-col gap-7 items-center justify-center">
			<h1 className="text-3xl font-bold text-red-700">
				Error 404! - Page Not Found
			</h1>
			{error.message && import.meta.env.MODE !== "production" && (
				<div className="bg-white py-4  px-2 rounded">
					<pre>{error.message}</pre>
					<pre>{error.stack}</pre>
				</div>
			)}
		</div>
	);
}
