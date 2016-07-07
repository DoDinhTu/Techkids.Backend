var myAngular = angular.module("myAngular",["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:"/home",
    templateUrl:"templates/home.html",
    controller: "myController",
    params: {girl: null},
  });

  $stateProvider.state('about-us',{
    url:"/about-us",
    templateUrl:"templates/about-us.html",
  });

  $stateProvider.state('add',{
    url:"/add",
    templateUrl:"templates/add.html",
    controller:"girlController",
  });
});

myAngular.directive("techkids",[function(){
  return{
    restrict:"E",
    templateUrl:"templates/techkids.html",
  };
}]);
