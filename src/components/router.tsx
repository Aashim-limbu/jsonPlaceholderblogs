import { Navigate, createBrowserRouter } from "react-router-dom";
import { UserPostRoute, NavBarLayout,UserRoute } from "./index";
import { ErrorPage } from "../pages/index.page";
import { PostRoute } from "../pages/Post";
import { UsersRoute } from "../pages/Users.Page";
import { TodoRoute } from "../pages/Todo";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <NavBarLayout />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Navigate to="/posts" /> },
					{
						path: "posts",
						children: [
							{ index: true, ...PostRoute },
							{ path: ":postId", ...UserPostRoute },
						],
					},
					{
						path: "users",
						children: [
							{
								errorElement: <ErrorPage />,
								children: [
                                    { index: true, ...UsersRoute },
                                    {path:":userId",...UserRoute}
                                ],
							},
						],
					},
					{ path: "todos", ...TodoRoute},
				],
			},
		],
	},
]);
