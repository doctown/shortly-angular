angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // store all links
  // Initialize links with all links stored on server from getAll call
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
});
