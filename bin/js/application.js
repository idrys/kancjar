'use strict';

var app = angular.module( 'app' , [ 'ngRoute', 'myControllers', 'app.directives', 'ngAnimate', 'ui.bootstrap'] );

app.controller('PaginationDemoCtrl', function ($scope, $log) {
    $scope.totalItems = 100;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
});

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

var appDirectives= angular.module('app.directives', []);
 /*directive - gips jquery plugin*/
appDirectives.directive('gipsPlugin', function() {
  return {
		// Restrict it to be an attribute in this case
		restrict: 'A',
		// responsible for registering DOM listeners as well as updating the DOM
		link: function(scope, element, attrs) {
		    $(element).gips(scope.$eval(attrs.gipsPlugin));
            //console.log("Test");
         
		}
	};
});

app.controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.notImplementAlert = function () {
      $scope.alerts.push({ msg: 'Przepraszamy tu jeszcze nie ma implementacji!' });
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});

app.controller("myController", function (someroute) {
    console.log("someroute1");
    $scope.someroute = someroute;
});

app.controller("myController", function ($location) {
    console.log("someroute2");
    $scope.someroute = $location.path(); // '/Home'
});

app.config([  '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {
    
    /*
    $routeProvider.otherwise( {
        redirectTo: '/home'
    });
    */
    $routeProvider.when('/cases', {
        controller : 'cases',
        templateUrl : 'bin/partials/cases.html'
    });
    
    $routeProvider.when('/myCase/edit/:id', {
        controller : 'ctrCaseEdit',
        templateUrl : 'bin/partials/caseEdit.html'
    });
    
    $routeProvider.when('/myCase/create', {
        controller : 'ctrCaseEdit',
        templateUrl : 'bin/partials/caseCreate.html'
    });
    
    
    
    $routeProvider.when('/users', {
        controller : 'ctrUsers',
        templateUrl : 'bin/partials/users/users.html'
    });
    
    $routeProvider.when('/subjects', {
        controller : 'ctrSubjects',
        templateUrl : 'bin/partials/subjects/list.html'
    });
    
     $routeProvider.when('/mySubject/:id', {
        controller : 'ctrSubjectEdit',
        templateUrl : 'bin/partials/subjects/subjectEdit.html'
    });
    
    $routeProvider.when('/contactEdit/:id', {
        controller : 'ctrContactEdit',
        templateUrl : 'bin/partials/contacts/contactEdit.html'
    });
    
    $routeProvider.when('/contacts/Create', {
        controller : 'ctrContactCreate',
        templateUrl : 'bin/partials/contacts/contactCreate.html'
    });
   
    $routeProvider.when('/mySubject/Cart:id', {
        controller : 'ctrSubjectAddToCase',
        templateUrl : 'bin/partials/subjects/cart2.html'
    });
    
    /*
    $routeProvider.when('/documents', {
        //controller : 'ctrDocuments',
        templateUrl : 'bin/partials/cases/documents.html'
    });
    */
    $routeProvider.when('/menu1', {
        controller : 'ctrUsers',
        templateUrl : 'bin/partials/users/users.html'
    });
    
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController',
            resolve:{
                someroute:function(){
                    return 'home';
                }
            }
        })
        .when('/profile', {
            templateUrl : 'pages/profile.html',
            controller  : 'ProfileController',
            resolve:{
                someroute:function(){
                    return 'profile';
                }
            }
        })
        .when('/image', {
            templateUrl : 'pages/image.html',
            controller  : 'ImageController',
            resolve:{
                someroute:function(){
                    return 'image';
                }
            }
        })
        .otherwise('/');
    
}]);




