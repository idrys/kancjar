var app = angular.module('customModel', [])
app.factory('myService',['$http','$q','myTools', function ($http, $q, myTools){
  return {
    getItems: function (CaseID){
      
      return $q.all([
          $http.get('framework/codeigniter/contacts/get'),
          $http.get('framework/codeigniter/cases/get/' + CaseID),
          $http.get('framework/codeigniter/clients/get')
          
        
      ])
        
      //process all of the results from the two promises 
      // above, and join them together into a single result.
      // since then() returns a promise that resolves ot the
      // return value of it's callback, this is all we need 
      // to return from our service method.
      .then(function(results) {
        var data = [];
        var arrayClients = [];
        var contacts = results[0].data;
        var selectedCase = results[1].data;        
        var clients = results[2].data;      
         
        listClients = myTools.getMemberByCaseId(selectedCase.id, clients);
        
        angular.forEach( listClients, function(value, key){
            arrayClients = arrayClients.concat(myTools.getMemberById(value.ContactID, contacts));
        });
        
        selectedCase.arrayClients = arrayClients;
        data = selectedCase;
        //console.log("myTools data: ");
        //console.log(data);
        return  data ;
      })
      
      
    }
  };
}]);
    
app.factory('factoryModel', function( $http){
    
    var factory = {}; 
    var status = {};
    
    factory.method1 = function() {
            console.log("Medoda1");
        }
 
    factory.method2 = function() {
        //console.log(status);
        $http.get('bin/json/cases/Dictionary/Status.json')
		.success(function (dataStatus) {
            //console.log(status);
			status = dataStatus;
            //console.log("Mothod2: ")
			//console.log(status);
            return status;
		}).error(function () {
			console.log('Blad pobierania Status.json');
		});  
        //return status;     //..
         //console.log("Gdzies: " + status)
         //console.log();
         return status;
    }
    
    //console.log("Gdzies2: " + status);
    //console.log(this.method2);
    return factory;
   
});

app.service('myTools', function(){
    return {
        
        getMemberByCaseId: function (id, elements) {
                var index = elements.filter(function(element) {
                    return element.CaseID == id
                })
                //console.log("index " + index);
         return index; //elements.indexOf(index)
        },
    
   
    
       getMemberByContactId: function (id, elements) {
            var index = elements.filter(function(element) {
                    return element.ContactID == id
                })
                //console.log("index " + index);
         return index; //elements.indexOf(index)
        },  
      
       getMemberById: function (id, elements) {
            var index = elements.filter(function(element) {
                    return element.id == id
                })
                //console.log("index " + index);
         return index; //elements.indexOf(index)
        }  
      
    };
     
});

app.factory('objectArray', ['$http',function($http) {
    // This is returning a $$state object
    // instead of response.data...
    return $http.post('/get_collection')
    .then(function(response) {
      console.log(response.data);
      return response.data;
    });
  }]);


