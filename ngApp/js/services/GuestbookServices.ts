namespace app.Services{
  interface IGuestbookResourceClass extends ng.resource.IResource<IGuestbookResourceClass>,app.Interfaces.IGuestbook{
  }

  interface IGuestbookResource extends ng.resource.IResourceClass<IGuestbookResourceClass>{

  }

  export class GuestbookService{
    private GuestbookResource: ng.resource.IResourceClass<ng.resource.IResource<any>>;

    public getAll(){
      return this.GuestbookResource.query();
    }

    public getAllAsync(){
      return this.GuestbookResource.query().$promise;
    }
    
    public create(entry:app.Interfaces.IGuestbook){
      entry.dateCreated = new Date();
      return this.GuestbookResource.save(entry).$promise;
    }

    public delete(entryId:number){
      return this.GuestbookResource.delete({id:entryId}).$promise;
    }

    public update(entry:app.Interfaces.IGuestbook){
      return this.GuestbookResource.save(entry).$promise;
    }

    public details(id:number){
      return this.GuestbookResource.get({id: id});
    }

    constructor(private $resource: ng.resource.IResourceService){
      this.GuestbookResource = $resource('/api/guestbook/:id')

    }
  }
  angular.module('app').service('GuestbookService',GuestbookService);
}
