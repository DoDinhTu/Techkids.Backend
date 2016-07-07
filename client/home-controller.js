var myAngular = angular.module("myAngular",["ui.router"]);

myAngular.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url:"/home",
    templateUrl:"templates/home.html"
  });

  $stateProvider.state('about-us',{
    url:"/about-us",
    templateUrl:"templates/about-us.html"
  });
});


myAngular.controller("myController",["$scope",function($scope){

  $scope.listgirl = [{
    name:"Dzung",
    age:"23",
    facebook:"Dzung",
    password:"bananhtung",
  },

  {
    name:"Ha",
    age:"24",
    facebook:"Ha San",
    password:"kpbananhtung",
  },

  {
    name:"***",
    age:"23",
    facebook:"***",
    password:"***",
  },

  {
    name:"***",
    age:"23",
    facebook:"***",
    password:"***",
  },

  {
    name:"***",
    age:"23",
    facebook:"***",
    password:"***",
  }];




  $scope.delete = function(index){
    $scope.listgirl.splice(name, 1);
  }

  $scope.add = function() {
    $state.go("add-girl");
  }

}]);
