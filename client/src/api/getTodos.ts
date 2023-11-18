import { Signal } from "../interface/signal.interface";
import { baseURL } from "./base";
export async function getTodos(options:Signal,query: undefined|string){
    if (query) return{todos:await baseURL.get(`/todos?q=${query}`, options).then((res) => res.data) , query:query}
    return {todos:await baseURL.get("/todos",options).then(res=>res.data),query:""}
}
export function getTodo(
	options: Signal,
	id: string | undefined
){
	return baseURL.get(`/posts/${id}`, { ...options }).then((res) => res.data);
}
