console.log('CS Factory');
var myApp = angular.module('myApp', []);

myApp.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];

  //INITIAL QUERY
  factory.index = function(callback){
    $http.get('/index').success(function(output){
      customers = output;
      callback(customers);
    })
  };

  //INSERT
  factory.INSERT = function(info, callback){
    // console.log(info);
    $http.post('/index/addPerson', info).success(function(returnDataFromServer){
      customers.push(returnDataFromServer);
      callback(customers);
    });
  };

  factory.delete = function(req,res){
    // console.log(req);
    customers.splice(customers.indexOf(req),1);
    $http.post('/index/delete', req);
  };

  return factory;
});
