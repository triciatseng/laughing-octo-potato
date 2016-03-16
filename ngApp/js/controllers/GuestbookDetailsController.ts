namespace app.Controllers{
  export class GuestbookDetailsController{
    public entry:app.Interfaces.IGuestbook;

    public deleteEntry(){
      this.GuestbookService.delete(this.entry.id).then((res)=>{
        this.$state.go('Home');
    });
  }

    constructor(private $stateParams: ng.ui.IStateParamsService,private $state:ng.ui.IStateService,private GuestbookService:app.Services.GuestbookService){
      this.entry = GuestbookService.details($stateParams['id']);
    }
  }

  angular.module('app').controller('GuestbookDetailsController',GuestbookDetailsController);
}
