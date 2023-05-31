import { Post } from "../post/post.model";
export class ServiceResponse{
    public data : Post[];
    constructor(data:Post[]){
        this.data=data
    }
}