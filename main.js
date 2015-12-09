var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope, $http) {
  $scope.formModel = {};

  $scope.onSubmit = function () {
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
    success(function (data) {
      console.log("success")
    }).error(function (data) {
      console.log("error")
    });
  };
})

// https://minmax-server.herokuapp.com/register/'
