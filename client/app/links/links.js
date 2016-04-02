angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, getAll) {
  // store all links
  // Initialize links with all links stored on server from getAll call

  $scope.init = function() {
    if (!Auth.isAuth()) {
      Auth.signout();
    }
  };

  $scope.data = {};
  
  $scope.data.links = getAll.data;

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.init();

})
.directive('mylink', function() {
  return {
    templateUrl: 'app/links/mylink.html'
  };
});
