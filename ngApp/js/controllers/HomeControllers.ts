namespace app.Controllers{
  export class HomeController{
    public entries=[];
    public isLoading = true;

    public openModal(e:app.Interfaces.IGuestbook){
      this.$uibModal.open({
        controller: 'EntryModalInstanceController as modal',
        templateUrl: '/templates/partials/guestbookEntryModal.html',
        animation: true,
        resolve:{
          entry: e
        }
      })
    }
    constructor(
      private GuestbookService:app.Services.GuestbookService,
      private $timeout: ng.ITimeoutService,
      private $uibModal: ng.ui.bootstrap.IModalService
    ){
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

  export class EntryModalInstanceController{
    public cancel(){
      this.$uibModalInstance.dismiss();
    }

    constructor(private entry:app.Interfaces.IGuestbook,
      private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){
    }
  }
  angular.module('app').controller('EntryModalInstanceController',EntryModalInstanceController);

}
