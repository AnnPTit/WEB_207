window.productController = function ($scope, $http, $rootScope) {
  $rootScope.listProduct = [];

  // GET
  $http.get(giayApi).then(function (response) {
    $scope.listProduct = response.data;
  });

  $scope.add = function () {
    var imgID = document.getElementById("imgID");
    var dtImgID1 = document.getElementById("dtimg1ID");
    var dtImgID2 = document.getElementById("dtimg2ID");
    var dtImgID3 = document.getElementById("dtimg3ID");

    let isValid = true;
    if ($scope.input.productName == null) {
      alert("Please enter a product name");
      isValid = false;
    }
    if ($scope.input.description == "") {
      alert("Please enter a product description");
      isValid = false;
    }
    if ($scope.input.price == null) {
      alert("Please enter a price");
      isValid = false;
    }
    if (
      imgID == null ||
      dtImgID1 == null ||
      dtImgID2 == null ||
      dtImgID3 == null
    ) {
      alert("Please enter a img");
      isValid = false;
    }
    if ($scope.input.category == null) {
      alert("Please enter a category");
      isValid = false;
    }

    if (isValid == true) {
      var inputData = {
        id: Number($scope.listProduct.length + 1),
        productName: $scope.input.productName,
        productDescription: $scope.input.description,
        price: Number($scope.input.price),
        img: imgID.value.substring(12, 99),
        dtimg1: dtImgID1.value.substring(12, 99),
        dtimg2: dtImgID2.value.substring(12, 99),
        dtimg3: dtImgID3.value.substring(12, 99),
        idcategory: Number($scope.input.category),
      };
      $http.post(giayApi, inputData).then(function () {
        alert("Added product");
      });
    }

    // var streetaddress = inputData.img.substring(12,99);
    // console.log(streetaddress);
    console.log(inputData);
  };
  $scope.update = function () {};
};
