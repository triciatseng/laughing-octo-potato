namespace app.Controllers{
  export class GuestbookUpdateController{

    public entry: app.Interfaces.IGuestbook;

    public updateEntry(){
      this.GuestbookService.update(this.entry).then((res)=>{
        this.$state.go('Details',{id:this.entry.id});
      });
    }

    constructor(private $stateParams:ng.ui.IStateParamsService,private $state:ng.ui.IStateService,private GuestbookService: app.Services.GuestbookService){
      this.entry = GuestbookService.details($stateParams['id']);
    }
  }
  angular.module('app').controller('GuestbookUpdateController',GuestbookUpdateController);
}
