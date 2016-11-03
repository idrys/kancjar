'use strict';

var myControllers = angular.module('myControllers', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'customModel', 'myControlModalWindow', 'angularUtils.directives.dirPagination']);

myControllers.directive('convertToNumber', function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function (val) {
				return parseInt(val, 10);
			});
			ngModel.$formatters.push(function (val) {
				return '' + val;
			});
		}
	};
});

myControllers.controller( 'ctrlNavigation', [ '$scope', '$location' , function( $scope, $location ){
    
    //console.log($location.path());
    
     $scope.isActive = function(  pathNavi ){
        return $location.path() === pathNavi;
    };
    //console.log( $scope.cases[1].opis );

}]);

myControllers.controller( 'contacts', ['$scope', '$http', function ($scope, $http) {
    
    $http.get('framework/codeigniter/contacts/get').
		success(function (dataContacts, statusContacts) {
			$scope.Contacts = dataContacts;
            		
		}).error(function () {
			console.log('Blad pobierania danych Contacts');
    });
        
    $scope.delete = function( contact, $index ){
       
       if ( !confirm( 'Czy na pewno chcesz usunąć ten kontakt?' ) )
			return false;

		$scope.users.splice( $index , 1 );

		$http.post( 'framework/codeigniter/contacts/delete/' , {
			user : user
		}).error( function(){
			console.log( 'Błąd komunikacji z API' );
		});
         
    }
    
}]);

myControllers.controller( 'ctrContactEdit', [ '$scope', '$http' , '$routeParams', '$timeout', function( $scope, $http, $routeParams, $timeout ){
    
    $http.get( 'framework/codeigniter/contacts/get/' + $routeParams.id ). 
    success( function( dataContact, statusContact ){
        
        $scope.contactEdit = dataContact; 
        //console.log("Edit Cases:");
        //console.log($scope.cases);
			
        
    }).error( function(  ){
        console.log('Błąd pobierania danych Contact');
    });
    
    $scope.saveChanges = function( contact ){
         console.log("save: ")
         console.log(contact);
         $http.post('framework/codeigniter/contacts/update/' , {
                 
             contact : contact
             
         }).success(function (dataContact, statusContact) {
			$scope.success = true;
            $timeout(function() {
                $scope.success = false;
            }, 2000);
        	
		}).error(function () {
			console.log('Blad komunikacji z API');
            $scope.success = false;
    });
        //console.log(contact);
    };
    
}]);

myControllers.controller( 'ctrContactCreate', [ '$scope', '$http' , '$routeParams', '$timeout', function( $scope, $http, $routeParams, $timeout ){
        
    $scope.contactCreate = function( contact ){
         //console.log(contact);
         $http.post('framework/codeigniter/contacts/create/' , {
                 
             contact : contact
             
         }).success(function (dataContact, statusContact) {
			$scope.success = true;
            $timeout(function() {
                $scope.success = false;
                $scope.contact = {};
            }, 2000);
        	
		}).error(function () {
			console.log('Blad komunikacji z API');
            $scope.success = false;
    });
        //console.log(contact);
    };
    
}]);

myControllers.controller( 'cases', [ '$scope', '$http' , function( $scope, $http ){
   
	//console.log( 'Jestes w kontrolerze cases' );
	//var cases = null;
	$scope.cases = [];
	$scope.FirmCaseClients = [];
	$scope.ACaseClients = [];

	if ($scope.cases.length == 0) {

		$http.get('framework/codeigniter/cases/get').
		success(function (dataCases, statusCases) {
			$scope.cases = dataCases;
            
			
		}).error(function () {
			console.log('Blad pobierania danych z API cases');
		});


	}

	if ($scope.TypeCases == null) {
		$http.get('bin/json/cases/Dictionary/TypeCase.json')
		.success(function (dataTypeCase) {

			$scope.TypeCases = dataTypeCase;
			//console.log($scope.TypeCases);
		}).error(function () {
			console.log('Blad pobierania TypeCase.json');
		});
	}
	// ---------------------------------------------------------------

	if ($scope.Assigned == null) {
		$http.get('bin/json/cases/Dictionary/Assigned.json')
		.success(function (dataAssigned) {

			$scope.Assigned = dataAssigned;
			//console.log($scope.Assigned);
		}).error(function () {
			console.log('Blad pobierania Assigned.json');
		});
	}
	// ---------------------------------------------------------------

	if ($scope.Firms == null) {
		$http.get('bin/json/Contacts/Firms.json')
		.success(function (dataFirms) {

			$scope.Firms = dataFirms;

		}).error(function () {
			console.log('Blad pobierania Assigned.json');
		});
	}
	// ---------------------------------------------------------------

	if ($scope.Status == null) {
		$http.get('bin/json/cases/Dictionary/Status.json')
		.success(function (dataStatus) {

			$scope.Status = dataStatus;
			//console.log($scope.Status);
		}).error(function () {
			console.log('Blad pobierania Status.json');
		});
	}
	// ---------------------------------------------------------------
/*	
	if ($scope.Subject == null) {

		//$scope.ACaseClients = null;
		//$scope.FirmCaseClients = null;

		$http.get('bin/json/caseClients.json')
		.success(function (dataStatus) {

			$scope.ACaseClients = dataStatus;


		}).error(function () {
			console.log('Blad pobierania caseClients.json');
		});

		$http.get('bin/json/subjects.json')
		.success(function (dataStatus) {

			$scope.Subjects = dataStatus;

			for (var i = 0; i < $scope.ACaseClients.length; i++) {
				$scope.ACaseClients[i].Client = dataStatus[$scope.ACaseClients[i].SubjectID];
			}

			for (var i = 0; i < $scope.cases.length; i++) {
				$scope.cases[i].Clients = $scope.ACaseClients.filter(function (el) {
					return el.CaseID == i + 1;
				});
			}

		}).error(function () {
			console.log('Blad pobierania subjects.json');
		});
		//---------------------------------------------------------------------

	}

	// ---------------------------------------------------------------

	if ($scope.FirmCaseClients.length == 0) {
		$http.get('bin/json/caseClientsFirm.json')
			.success(function (dataStatus) {
				$scope.FirmCaseClients = dataStatus;
				console.log("1.Liczba pentli " + $scope.FirmCaseClients.length);
			}).error(function () {
				console.log('Blad ponierania caseClients.json');
			});
	}


/*
	if ($scope.Firms == null) {

		$http.get('bin/json/Contacts/Firms.json')
			.success(function (dataFirms) {

				$scope.Firms = dataFirms;
				/*
				for (var i = 0; i < $scope.cases.length; i++) {
					//$scope.cases[i].ClientsFirm = dataFirms[$scope.FirmCaseClients[i].SubjectID];
					$scope.cases[i].ClientsFirm = $scope.FirmCaseClients.filter(function (el) {
						return el.CaseID == i + 1;
					});
					console.log($scope.cases[i].ClientsFirm);
				}
				*/
/*
				console.log("2.Liczba pentli " + $scope.FirmCaseClients.length);

			}).error(function () {
				console.log('Blad nie uda�o sie pobra� Firm.json');
			});
	}
*/
	// ---------------------------------------------------------------


	//$scope.cases.FirmCaseClients = $scope.FirmCaseClients;
	//console.log($scope.FirmCaseClients);
  
    $scope.delete = function (myCase, id) {
        // TODO: przeslane dane przez API
        //console.log("Zapisane z paramID: " + $routeParams.id )
        
        //console.log($scope.cases);
        $scope.cases.splice( id, 1 );
        //$scope.cases.remove()
        //console.log( myCase.caseID);
        //console.log("obiekt do usuniecia: ");
        //console.log (myCase);
        
    };
    
    $scope.edit = function( myCase, id ){
        
        //console.log("obiekt do edycji index: ", id);
        //console.log (myCase);
        
    };
    
    $scope.status = {
    	isFirstOpen: true,
    	isFirstDisabled: false
    };


    
}]);

      
// ======== ctrCaseEdit =============================================================================================================
myControllers.controller( 'ctrCaseEdit', 
    [ '$scope', '$http' , '$routeParams', '$timeout', '$filter', 'factoryModel','myService','ctrModalWinContacts',
        function( $scope, $http, $routeParams, $timeout, $filter, factoryModel, myService, ctrModalWinContacts ){
    
    
    $scope.myCase = [];  
    $scope.Subjects = [];
    $scope.Clients = [];
    $scope.Opponents = [];
    $scope.Leaders = [];
    $scope.clentsBuffor = [];
    $scope.contacts = [];
    $scope.test =  [];
    var clientsBuffor = []; 
    
    // ---------------------------------------------------------------   

    $http.get('framework/codeigniter/contacts/get')
    .success( function( dataContacts, statusCases ){
        
        $scope.contacts = dataContacts; 
        //console.log($scope.contacts);
    }).error( function(  ){
        console.log('Błąd pobierania danych Case w edycji');
    });
      
    // ---------------------------------------------------------------  
    $http.get( 'framework/codeigniter/cases/get/' + $routeParams.id )
     .success( function( dataCases, statusCases ){
            
        function myID(element, index, array) {
            return (element.CaseID == $scope.myCase.caseID);
        }
	
    }).error( function(  ){
        console.log('Błąd pobierania danych Case w edycji');
    });
      
    // ---------------------------------------------------------------
    $scope.saveChangesCase = function( caseEdit ){
         //console.log("saveChangesCase: ");
         var arrayClients = caseEdit.arrayClients;
         //console.log(arrayClients);
         $http.post('framework/codeigniter/cases/update/' , {        
             caseEdit : caseEdit             
         }).success(function (dataContact, statusContact) {
			$scope.success = true;
            $timeout(function() {
                $scope.success = false;
            }, 2000);
		}).error(function () {
			console.log('Blad komunikacji z API Post update caseEdit');
            $scope.success = false;
        });
        
    };
          
    // ---------------------------------------------------------------
    function isBigEnough(element, index, array) {
        return (element.CaseID == $scope.myCase.caseID);
    }
	// ---------------------------------------------------------------

    $http.get( 'bin/json/CaseSubject.json' ). 
     success( function( dataCaseSubject ){
        
        $scope.myCaseSubject = dataCaseSubject.filter(isBigEnough);
        
    }).error( function(  ){
        console.log('Blad pobierania z subjects.json');
    });

    //----------------------------------------------------------
    
    if ($scope.TypeCases == null) {
    	$http.get('bin/json/cases/Dictionary/TypeCase.json')
		.success(function (dataTypeCase) {
			
			$scope.TypeCases = dataTypeCase;
			//console.log($scope.TypeCases);
		}).error(function () {
			console.log('Blad pobierania TypeCase.json');
		});
    }
    
   
	// ---------------------------------------------------------------

    if ($scope.Status == null) {
    	$http.get('bin/json/cases/Dictionary/Status.json')
		.success(function (dataStatus) {

			$scope.Status = dataStatus;
			//console.log($scope.Status);
		}).error(function () {
			console.log('Blad pobierania Status.json');
		});
    }
	// ---------------------------------------------------------------

    if ($scope.Assigned == null) {
    	$http.get('bin/json/cases/Dictionary/Assigned.json')
		.success(function (dataAssigned) {

			$scope.Assigned = dataAssigned;
			//console.log($scope.Assigned);
		}).error(function () {
			console.log('Blad pobierania Assigned.json');
		});
    }
	// ---------------------------------------------------------------

    $http.get( 'bin/json/caseClients.json' ). 
     success( function( dataCaseClients ){
        $scope.myCaseClients = dataCaseClients.filter(isBigEnough);
        
    }).error( function(  ){
        console.log('Blad pobierania danych z caseClients.json');
    });
    //----------------------------------------------------------
    
    $http.get( 'bin/json/caseOpponents.json' ). 
     success( function( dataCaseOpponents ){
        $scope.myCaseOpponents = dataCaseOpponents.filter(isBigEnough);
              
    }).error( function(  ){
        console.log('Blad pobierania danych z caseOpponents.json');
    });
    //----------------------------------------------------------
    
    $http.get( 'bin/json/caseLeaders.json' ). 
     success( function( dataCaseLeaders ){
        $scope.myCaseLeaders = dataCaseLeaders.filter(isBigEnough);
               
    }).error( function(  ){
        console.log('Blad pobierania danych z caseLeaders.json');
    });
    
    //----------------------------------------------------------
    
    $http.get( 'bin/json/subjects.json' ). 
     success( function( dataSubjects ){
        $scope.Subjects = dataSubjects;         
    }).error( function(  ){
        console.log('Blad pobierania danych z subjects.json');
    });
    
    // Uzupełnia pola sprawy (case)
    myService.getItems($routeParams.id).then(function(data) {
        $scope.myCase = angular.copy(data);
        //console.log("getItem:");
        //console.log($scope.myCase);

        $scope.initCart();
    });

    // Wprowadza w oknie modalnym informacje który z klientów jest ju przypisany do sprawy
    $scope.modalWindowContacts = function (myC, c) {
        ctrModalWinContacts.win(myC, c, $scope.contacts);
    };    
   
    $scope.initCart = function (){   
        //console.log("initCart:");    
        //console.log($scope.myCase.arrayClients);
        ctrModalWinContacts.init($scope.myCase.arrayClients);
    };
      
    $scope.removeClient = function( _myClient, id ){
        ctrModalWinContacts.removeFromCart(_myClient);
        //$scope.Subjects = ctrModalWinContacts.clientsBuffor;
    }

     $scope.addToCart = function (_myClient, _myCase) {
        ctrModalWinContacts.addToCart(_myClient);
     };
     //---------------------------------------------------
    
    $scope.saveCart = function(_myClient, _myCase){
        ctrModalWinContacts.saveCart(_myClient, _myCase);
        $scope.myCase.arrayClients = ctrModalWinContacts.buffor;
    }
   
}]);
// ==============================================================================================
myControllers.controller( 'ctrCaseCreate', [ '$scope', '$http' , '$routeParams', function( $scope, $http, $routeParams ){
    
    //console.log('Nowak');
    $scope.createCase = function( ){
    };

}]);

// ================================================================================================
myControllers.controller( 'ctrUsers', [ '$scope', '$http' , '$routeParams', function( $scope, $http, $routeParams ){
    console.log( 'Jesteś w kontrolerze crtUsers' );
}]);

// =================================================================================================

myControllers.controller( 'users', [ '$scope', '$http' , function( $scope, $http ){
    
    $http.get( 'framework/codeigniter/users/get' ). 
    success( function( dataUsers, statusUsers ){
        $scope.users = dataUsers;
        console.log('Status: ' + statusUsers)
    }).error( function(  ){
        console.log('Błąd pobierania danych z users.json');
    });
    
     $scope.delete = function(  user, id ){
        
        $scope.users.splice( id, 1 );
        //$scope.cases.remove()
    };

}]);


myControllers.controller( 'ctrSubjects', [ '$scope', '$http' , '$routeParams', function( $scope, $http, $routeParams ){
    
     $http.get( 'bin/json/subjects.json' ). 
     success( function( dataSubjects ){
            $scope.Subjects=dataSubjects;    
      }).error( function(  ){
        console.log('Błąd pobierania danych z subjects.json');
    });
    
    $scope.createSubject = function(  ){
        // TODO: przesłać dane przez API
        //console.log("Zapisane z paramID: " + $routeParams.id )
        console.log('Brak implementacji');
    };
    
    $scope.deleteSubject = function(  mySubject, id ){
        // TODO: przesłać dane przez API
        //console.log("Zapisane z paramID: " + $routeParams.id )
        
        $scope.Subjects.splice( id, 1 );
     };

}]);

myControllers.controller( 'ctrSubjectEdit', [ '$scope', '$http' , '$routeParams', function( $scope, $http, $routeParams ){
    
     $http.get( 'bin/json/subjects.json' ). 
    success( function( dataSubjects, statusSubject ){
        
        $scope.mySubject = dataSubjects[$routeParams.id]; 
        
    }).error( function(  ){
        console.log('Błąd pobierania danych z subjects.json');
    });
    
    $scope.saveChanges = function( mySubject ){
        // TODO: przesłać dane przez API
        //console.log("Zapisane z paramID: " + $routeParams.id )
        console.log(mySubject);
    };
    
}]);

myControllers.controller( 'ctrSubjectAddToCase', [ '$scope', '$http' , '$routeParams', function( $scope, $http, $routeParams ){
    console.log("Jestem w ctrSubjectAddToCase");
     $http.get( 'bin/json/subjects.json' ). 
    success( function( dataSubjects, statusSubject ){
        
        $scope.mySubject = dataSubjects[$routeParams.id]; 
        
    }).error( function(  ){
        console.log('Błąd pobierania danych z subjects.json');
    });
    /*
    $scope.addToCart = function( mySubject ){
        // TODO: przesłać dane przez API
        //console.log("Zapisane z paramID: " + $routeParams.id )
        console.log(mySubject);
    };
    */
}]);
