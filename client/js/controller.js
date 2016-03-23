console.log('CS Controller');

myApp.controller('CustomerController', function($scope, CustomerFactory) {
  console.log('CustomerController');
  //INITIAL QUERY
  // FACTORYNAME.index(function(data){
  //   $scope.people = data;
  // })

  //INSERT
  $scope.insert = function(){
    CustomerFactory.create($scope.new_person, function(friends){
      // what do we do with what gets returned?
    });
    //This line blanks out input field after submit
    $scope.INPUTFIELDNAME = {};

  };

  //DELETE
  $scope.DELETE = function(friend){
    FACTORYNAME.delete(friend);
  };

})
