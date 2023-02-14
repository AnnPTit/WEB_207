var app = angular.module("myModule", ["ngRoute"]);

app.filter("myFormat", function () {
  return function (x) {
    var i,
      c,
      txt = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      }
      txt += c;
    }
    return txt;
  };
});

app.config(function ($routeProvider, $locationProvider) {
  // xoa tren duong dan
  $locationProvider.hashPrefix("");
  $locationProvider.html5Mode = true;
  // chuyen trang
  $routeProvider
    .when("/home", {
      //code  here
      templateUrl: "../src/pages/home.html",
      controller: productController,
    })
    .when("/shop", {
      //code  here
      templateUrl: "../src/pages/shop.html",
      controller: productController,
    })
    .when("/page", {
      //code  here
      templateUrl: "../src/pages/page.html",
    })
    .when("/blog", {
      //code  here
      templateUrl: "../src/pages/blog.html",
    })
    .when("/contact", {
      //code  here
      templateUrl: "../src/pages/contact.html",
    })
    .when("/login", {
      //code  here
      templateUrl: "../src/pages/login.html",
      controller: loginController,
    })
    .when("/register", {
      //code  here
      templateUrl: "../src/pages/register.html",
      controller: registerController,
    })
    .when("/login-forget", {
      //code  here
      templateUrl: "../src/pages/forgot-page.html",
    })
    .when("/change-pass", {
      //code  here
      templateUrl: "../src/pages/change-pass.html",
    })
    .when("/about-us", {
      //code  here
      templateUrl: "../src/pages/about-us.html",
    })
    .when("/cart", {
      //code  here
      templateUrl: "../src/pages/cart.html",
      controller: cartController,
    })
    .when("/detail-product/:id", {
      //code  here
      templateUrl: "../src/pages/detail-product.html",
      controller: showDetails,
    })
    .when("/pay", {
      //code  here
      templateUrl: "../src/pages/pay.html",
    })
    .when("/manager-product", {
      //code  here
      templateUrl: "../src/pages/page-role-admin/product-manager.html",
      controller: productController,
    })
    .when("/manager-category", {
      //code  here
      templateUrl: "../src/pages/page-role-admin/category-manager.html",
    })
    .otherwise({
      redirectTo: "/login",
    });
});
