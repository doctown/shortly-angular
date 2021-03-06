angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.init = function() {
    if (!Auth.isAuth()) {
      Auth.signout();
    }
  };

  $scope.rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.isValidUrl = function (url) {
    return url.match(rValidUrl);
  };  

  $scope.link = {};
  $scope.newlink;
  $scope.showSpinner;

  $scope.addLink = function() {
    $scope.showSpinner = true;
    Links.addOne($scope.link).then(function(link) {
      $scope.newlink = link;
      $scope.showSpinner = false;
      $scope.link = '';
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.init();

});

