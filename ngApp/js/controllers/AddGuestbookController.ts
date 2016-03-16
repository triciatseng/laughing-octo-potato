namespace app.Controllers{
  export class AddGuestbookController{
    public entry:app.Interfaces.IGuestbook = {id:null,author:"",dateCreated:null,message:""};

    public addEntry(){
      this.GuestbookService.create(this.entry).then((res)=>{
          this.$state.go('Home');
      }, (err)=>{
        alert(err);
      })
    }

    constructor(private GuestbookService:app.Services.GuestbookService,private $state:ng.ui.IStateService){

    }
  }
  angular.module('app').controller('AddGuestbookController',AddGuestbookController);
}
