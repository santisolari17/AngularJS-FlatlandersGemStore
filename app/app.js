(function () {

	 var app = angular.module('gemStore', []);
	 var gems = [
	 {
	 	name: 'azurite', 
	 	price: 2.95,
	 	description: 'this is a nice gem!',
	 	canPurchase: true,
	 	soldOut: false
	 },
	 {
	 	name: 'pepa e zamuro', 
	 	price: 10.95,
	 	description: 'la peper queso',
	 	canPurchase: true,
	 	soldOut: false
	 }
	 ];


	 app.controller('storeController',function () {
	 	 this.products = gems;
	 })


})();
