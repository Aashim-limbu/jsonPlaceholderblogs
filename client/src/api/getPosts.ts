import { baseURL } from "./base";
import { Post } from "../interface/Posts";
import { Signal } from "../interface/signal.interface";
export function getPosts(options: Signal): Promise<Post[]> {
	return baseURL
		.get("/posts", {...options})
		.then((res) => res.data);
}
export function getUserPosts(options :Signal,id:string|undefined|FormDataEntryValue):Promise<Post>{
return baseURL.get(`/posts/${id}`,{...options}).then(res=>res.data)
}
