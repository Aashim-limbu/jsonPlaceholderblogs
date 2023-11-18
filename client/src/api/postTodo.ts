import { baseURL } from "./base";
type OptionsType = {
	title: FormDataEntryValue;
	completed?: boolean;
};
export async function postTodo({ title, completed }: OptionsType) {
	return await baseURL
		.post("todos", { title, completed: completed || false })
		.then((res) => res.data);
}
