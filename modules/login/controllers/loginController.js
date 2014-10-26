angular.module('LoginModule')
.controller('LoginController', ['$scope', '$state', function($scope, $state){
    $scope.some_value = "Hello World!!!";

    $scope.logout = function(){
        $state.go('logout');
    };
}])