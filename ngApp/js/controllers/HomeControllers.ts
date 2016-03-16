namespace app.Controllers{
  export class HomeController{
    public entries=[];


    constructor(private GuestbookService:app.Services.GuestbookService){
      this.entries = GuestbookService.getAll();
    }
  }
  angular.module('app').controller('HomeController',HomeController);
}
