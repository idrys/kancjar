'use strict';

angular.module('myControlModalWindow', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'customModel'])

.service( 'ctrModalWinContacts', function( ){
    return {
        messageCount: 0,
        buffor: [],
        cart : [],

//====== win ============================================================================================
        
        win: function(myC, c, contacts){
            var indexID = 0;
            var arrayClientID = []; 
            var arrayClientNames = []; 

            // Przepisanie do lokalnych tablic
            angular.forEach(myC.arrayClients, function(client){
                arrayClientID.push(client.id);
                arrayClientNames.push(client.FirstName);
            });
            for (var i = 0; i < arrayClientID.length; i++) {
            var elementID = arrayClientID[i];          
            for (var index = 0; index < contacts.length; index++) {
                var contact = contacts[index];
               //console.log(parseInt(contact.id) + " == " + elementID);
                if (parseInt(contact.id) == elementID){
                    contacts[index].clientInCase = true;
                    //console.log($scope.contacts[index].FirstName + ' ' + $scope.contacts[index].clientInCase);
                    break;
                }
            }
         }        
        },

//====== init ============================================================================================

        init : function (tmpBuffor) {
            //this.cart = new array();
            this.cart = angular.copy( tmpBuffor );      
            this.buffor = tmpBuffor ; 
            //tmpBuffor.splice(1,1);
        },

//====== addToCart ============================================================================================

        addToCart : function (myClient) {
           // console.log("addToCart");
            //console.log( "_myClient: " + myClient);
            myClient.clientInCase = true;
            this.cart.push(  myClient );
        },

//====== removeFromCart ============================================================================================

        removeFromCart : function (myClient) {
            var index = 0;
            //console.log(this.cart.length);
            for (var i = 0; i < this.cart.length; i++){
                if (this.cart[i].id == myClient.id){
                    index = i;
                    break;
                } 
            }
            myClient.clientInCase = false;
            this.cart.splice(index, 1);          
        },

//====== saveCart ============================================================================================

        saveCart : function()
        {
            this.buffor =  angular.copy(this.cart);            
        }        

    }    
});
 