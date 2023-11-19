import { baseURL } from "./base";
type Options = {
	title: FormDataEntryValue;
	body: FormDataEntryValue;
	author: FormDataEntryValue;
};
export function postPost(options: Options) {
	return baseURL.post("/posts", options).then((res) => res.data);
}
