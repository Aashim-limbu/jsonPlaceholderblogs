
import { baseURL } from "./base";
type Options <T>= {
        body:T
        title:T
        userId?: T
}

export function putPost(url:string ,post:Options<FormDataEntryValue>) {
	return baseURL.put(url,post).then((res) => res.data);
}
