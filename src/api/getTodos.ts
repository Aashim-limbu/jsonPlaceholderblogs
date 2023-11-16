import { Signal } from "../interface/signal.interface";
import { baseURL } from "./base";
export function getTodos(options:Signal){
    return baseURL.get("/todos",options).then(res=>res.data)
}
export function getTodo(
	options: Signal,
	id: string | undefined
){
	return baseURL.get(`/posts/${id}`, { ...options }).then((res) => res.data);
}
