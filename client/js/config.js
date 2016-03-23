var myApp = angular.module('myApp', ['ngRoute']);
console.log('CS config');

myApp.config(function ($routeProvider) {
  // console.log('config me');
  $routeProvider
  .when('/customers',{
    templateUrl: 'static/partials/customers.html',
    controller: 'CustomerController'
  });
  // .when('/orders',{
  //   templateUrl: 'static/orders.html',
  //   // controller: 'CONTROLLERTOUSE'
  // });
  // .otherwise({
  //   redirectTo: '/'
  // });
});
console.log(myApp);
