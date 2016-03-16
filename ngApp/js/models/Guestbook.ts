namespace app.Models{
  export class Guestbook{
    public id;
    public author;
    public dateCreated;
    public message;

    constructor(id_obj: (number | app.Interfaces.IGuestbook), author?: string, dateCreated?:Date, message?:string){
      if(typeof id_obj=== 'number'){
        this.id = id_obj;
        this.author = author;
        this.dateCreated = dateCreated;
        this.message = message;
      } else {
        this.id = id_obj.id;
        this.author = id_obj.author;
        this.dateCreated = id_obj.dateCreated;
        this.message = id_obj.message;
      }

    }
  }
}
