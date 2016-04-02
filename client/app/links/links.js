angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // store all links
  // Initialize links with all links stored on server from getAll call

  $scope.init = function() {
    if (!Auth.isAuth()) {
      Auth.signout();
    }
  };

  $scope.data = {};
  
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.init();

});
