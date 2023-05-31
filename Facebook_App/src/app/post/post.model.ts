export class Post{
    public id:number
    public autore: string
    public testo: string
    public like: number
    public comments: Comment[]

    constructor(id:number, autore: string, testo: string, like:number, commenti:Comment[]) {
        this.autore = autore
        this.testo = testo
        this.like = like
        this.comments = commenti
    }

    add_like(): number{
        this.like ++
        return this.like
    }

    add_comment(id:number, autore:string, testo: string){
        this.comments.push(new Comment(id, autore, testo))
    }
    
}

export class Comment{
    public testo: string
    public id:number
    public autore:string

    constructor(id:number, autore:string,testo: string){
        this.testo = testo
        this.id=id
        this.autore=autore

    }
}