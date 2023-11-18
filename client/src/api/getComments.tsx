import { Signal } from "../interface/signal.interface";
import { baseURL } from "./base";

export function getComments(option:Signal){
    return baseURL.get("/comments",option).then(res=>res.data)
}
export function getComment(option :Signal,id : string | undefined){
    return baseURL.get(`/posts/${id}/comments`,option).then(res=>res.data)
}
