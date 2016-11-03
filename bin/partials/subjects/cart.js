/* global array */
var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	
   //$scope.users = $scope.contacts;
   
   //$scope.buffor = $scope.myCase.arrayClients;
   

   // var clientsBuffor = []; 
    /*
    var init = function(){
        
        if (typeof $scope.myCase == 'undefined'){
             console.log('$scope.myCase jest: undefined');
         }
        
        
        if (typeof $scope.myCase.arrayClients == 'undefined'){
             console.log('$scope.myCase.arrayClients jest: undefined');
               
         }
        
         if (typeof $scope.myCase.arrayClients[0] == 'undefined'){
             console.log('$scope.myCase.arrayClients[0] jest: undefined');
         }
         
        
         if (clientsBuffor.length == 0){
             clientsBuffor = clientsBuffor.concat($scope.myCase.arrayClients);
         }
         //clientsBuffor = clientsBuffor.concat($scope.myCase.arrayClients);
         if (typeof clientsBuffor[0] == 'undefined'){
             consol.log('clientsBuffor[0] is undefined');
         }
           //clientsBuffor = clientsBuffor.concat($scope.myCase.arrayClients);
        
         console.log('Init() clientsBuffor !!! ');
        // console.log("clientsBuffor: " + clientsBuffor);
         console.log(clientsBuffor);
         console.log($scope.myCase.arrayClients);
    }
    */
    //$scope.init1 = init();
    //var clientsBuffor = $scope.clentsBuffor;
    
    /*
    $scope.removeClient = function( _myClient, _myCase ){
        init();
        _myClient.clientInCase = false;
        for (var index = 0; index < clientsBuffor.length; index++) {
            
            if (clientsBuffor[index].id == _myClient.id){
                clientsBuffor.splice(index, 1);               
            }
        }
        
     };
     
     //=============================================================
     $scope.addToCart = function (_myClient, _myCase) {
         
         init();
         if (clientsBuffor.length == 0){
             clientsBufforPush();
         }
         _myClient.clientInCase = true;
                 
         clientsBuffor.push(_myClient); 
     };
 
     //=============================================================
     $scope.saveCart = function(_myClient, _myCase)
     {
         console.log(clientsBuffor);
          if (clientsBuffor.length == 0){
              alert('Spadaj, bufor nie moze być pusty!');
             clientsBuffor = clientsBuffor.concat($scope.myCase.arrayClients);
          }
          
          $scope.clientsBuffor = clientsBuffor;
          $scope.myCase.arrayClients = clientsBuffor;
          
          clientsBuffor = [];
     
          console.log('Koniec Zapisu:')
          //console.log(clientsBuffor);
          console.log($scope.myCase.arrayClients );
     };
      */
    
});