namespace app.Controllers{
  export class HomeController{
    public entries=[];
    public isLoading = true;

    constructor(private GuestbookService:app.Services.GuestbookService){
      GuestbookService.getAllAsync().then((res)=>{
      for(let e of res){
        e.dateCreated = Date.parse(e.dateCreated.toString());
        this.entries.push(e);
      }
      this.isLoading=false;
    });
    }
  }
  angular.module('app').controller('HomeController',HomeController);
}
