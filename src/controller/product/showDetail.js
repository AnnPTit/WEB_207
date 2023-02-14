window.showDetails = function ($scope, $routeParams, $http) {
  // GET
  $scope.DETAIL = [];
  $http.get(giayApi).then(function (response) {
    $scope.DETAIL = response.data;
    let id = Number($routeParams.id);
    console.log(id);
    $scope.product = $scope.DETAIL[id - 1];
    console.log($scope.product);
  });
};
