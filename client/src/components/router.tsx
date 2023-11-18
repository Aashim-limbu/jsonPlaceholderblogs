import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { UserPostRoute, NavBarLayout, UserRoute } from "./index";
import { ErrorPage } from "../pages/index.page";
import { PostRoute } from "../pages/Post";
import { UsersRoute } from "../pages/Users.Page";
import { TodoRoute } from "../pages/Todo";
import { NewTodoForm } from "./NewTodoForm";
import { postTodo } from "../api/postTodo";
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
									{ path: ":userId", ...UserRoute },
								],
							},
						],
					},
					{
						path: "todos",
						...TodoRoute,
					},
					{
						path: "new",
						element: <NewTodoForm />,
						action: async ({ request }) => {
							const formData = request.formData();
							const newTodo = (await formData).get("newTodo");
							if (!newTodo) {
								alert("Please enter a todo item before submitting.");
								window.location.reload();
								return;
							}
							const post = await postTodo({ title: newTodo });
							console.log(post);
							return redirect("/");
						},
					},
				],
			},
		],
	},
]);
