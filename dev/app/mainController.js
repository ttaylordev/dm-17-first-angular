app.controller("mainCtrl", ['$scope', function($scope) { // jshint ignore:line
  'use strict';
  $scope.name = 'Tyson';
  $scope.friends = ['Sterling', 'Brad', 'Darren', 'Matt', 'Bryson', 'Mikel', 'Zac', 'Erin', 'Brack', 'Tom', 'Nick', 'Ty', 'Fred'];
  
  $scope.addFriend = function(fName){
    $scope.friends.push(fName);   
  };
}]);