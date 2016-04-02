angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // store all links
  // Initialize links with all links stored on server from getAll call
  $scope.data = {};
  
  Links.getAll().then(function(data) {
    if (!Auth.isAuth()) {
      Auth.signout();
    }
    $scope.data.links = data;
  });

  $scope.signout = function() {
    Auth.signout();
  };
});
