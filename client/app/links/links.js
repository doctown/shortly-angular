angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.link = {};
  // store all links
  // Initialize links with all links stored on server from getAll call

  $scope.create = function() {
    Links.create($scope.link).then(function(params) {
      //after link is added to the database
        // add link to links
    })
    .catch(function (error) {
      console.log(error);
    });
  };
});
