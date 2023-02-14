window.loginController = function ($scope, $location, $http) {
  $scope.listAcc = [];
  $http.get(accApi).then(function (response) {
    $scope.listAcc = response.data;
    console.log($scope.listAcc);
  });
  $scope.login = function () {
    var data = {
      email: $scope.email,
      password: $scope.password,
    };
    console.log(data.email);
    if (data.email == null) {
      alert("Please enter email");
      return;
    }
    if (data.password == null) {
      alert("Please enter password");
      return;
    }
    let isLogin = false;
    for (let i = 0; i < $scope.listAcc.length; i++) {
      //   console.log($scope.listAcc[i].email.toUpperCase());
      //   console.log(data.email.toUpperCase());
      //   console.log(data.password);
      //   console.log($scope.listAcc[i].password);
      if (
        $scope.listAcc[i].email.toUpperCase() === data.email.toUpperCase() &&
        $scope.listAcc[i].password == data.password
      ) {
        alert("Login Success ");
        isLogin = true;
        console.log($scope.listAcc[i].role);
        if ($scope.listAcc[i].role == 1) {
          $location.path("/home");
        } else {
          $location.path("/manager-product");
        }
      }
    }
    if (isLogin == false) {
      alert("Login fail");
    }
  };
};
