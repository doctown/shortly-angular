angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  // $scope.link = {};
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
  
  // store all links
  // Initialize links with all links stored on server from getAll call

  $scope.addOne = function() {
    Links.addOne($scope.link).then(function(params) {
      //after link is added to the database
        // add link to links
    })
    .catch(function (error) {
      console.log(error);
    });
  };
});
