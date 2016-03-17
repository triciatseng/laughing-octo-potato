namespace App{
  angular.module('app',['ngResource','ui.router','ui.bootstrap','ngMessages']).config(function(
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
  ){
    $stateProvider.state('Home',{
      url:'/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('Add',{
      url:'/add',
      templateUrl:'/templates/add.html',
      controller:'AddGuestbookController',
      controllerAs: 'vm'
    }).state('Details',{
      url:'/details/:id',
      templateUrl:'/templates/details.html',
      controller:'GuestbookDetailsController',
      controllerAs: 'vm'
    }).state('Update',{
      url:'/details/update/:id',
      templateUrl:'/templates/update.html',
      controller:'GuestbookUpdateController',
      controllerAs:'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  })
}
