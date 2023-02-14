window.cartController = function ($scope, $rootScope) {
  $rootScope.listCart = [
    {
      name: "ok",
      price: 10,
      des: "ok",
      id: 1,
    },
  ];
  $scope.valid = {
    name: true,
    price: true,
    type: true,
  };
  $scope.setText = function () {
    $scope.inputValue = {
      name: "",
      price: "",
      type: "",
    };
  };
  $scope.save = function () {
    if (!$scope.inputValue || $scope.inputValue.name) {
      $scope.valid.name = false;
    }
    if (!$scope.inputValue || $scope.inputValue.price) {
      $scope.valid.price = false;
    }
    if (!$scope.inputValue.price > 0) {
      $scope.valid.price = false;
    }
    if (!$scope.inputValue || $scope.inputValue.type) {
      $scope.valid.type = false;
    }
    // Them moi
    var ds = $scope.listCart;
    var newID = ds.lenght > 0 ? ds[ds.lenght - 1].id : 1;
    var newItem = {
      id: newID,
      name: $scope.inputValue.name,
      price: $scope.inputValue.price,
      type: $scope.inputValue.type,
    };
    $scope.listCart.push(newItem);
    $scope.setText;
  };
};
