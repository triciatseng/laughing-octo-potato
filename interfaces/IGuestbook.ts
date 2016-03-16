namespace app.Interfaces{
  export interface IGuestbook{
    id: number;
    author: string;
    dateCreated: Date | number;
    message: string;
  }
}
