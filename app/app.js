'use strict';

// Declare app level module which depends on views, and components
//angular.module('myApp', [
//  'ngRoute',
//  'myApp.view1',
//  'myApp.view2',
//  'myApp.version'
//]).
//config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
//}]);


var app = angular.module('myApp',["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider){
  $routeProvider
      .when("/home", {
        templateUrl: "EmployeeForm/Home.html",
        controller: "HomeController"
      })
      .when("/newEmployeeForm", {
        templateUrl: "EmployeeForm/efTemplate.html",
        controller: "efController"
      })
      .when("/updateEmployeeForm/:id", {
        templateUrl: "EmployeeForm/efTemplate.html",
        controller: "efController"
      })
      .otherwise({
        redirectTo: "/home"
      });
});

app.controller ("HomeController", function($scope, $location, DataService){
  $scope.showCreateEmployeeForm = function (){
    $location.path('/newEmployeeForm');
    //  $modal.open({
    //      templateUrl: "EmployeeForm/efTemplate.html",
    //      controller: "efController"
    //  });
  };

  $scope.showUpdateEmployeeForm = function (id){
    $location.path('/updateEmployeeForm/'+id);
  };
});