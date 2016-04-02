angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.init = function() {
    if (!Auth.isAuth()) {
      Auth.signout();
    }
  };

  $scope.link = {};
  $scope.newlink;

  $scope.addLink = function() {
    Links.addOne($scope.link).then(function(link) {
      $scope.newlink = link;
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.init();

});

