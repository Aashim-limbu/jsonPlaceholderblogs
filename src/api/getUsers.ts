import { User } from "../interface/User.interface";
import { Signal } from "../interface/signal.interface";
import { baseURL } from "./base";
export function getUsers({ signal }: Signal): Promise<User[]> {
	return baseURL.get("/users", { signal }).then((res) => res.data);
}
export function getUser ( options: { signal: AbortSignal }, id: string|number | undefined ) :Promise<User>{
	return baseURL.get(`/users/${id}`, {...options}).then((res) => res.data);
}
