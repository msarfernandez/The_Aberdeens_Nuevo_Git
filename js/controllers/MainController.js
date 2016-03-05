app.controller('ProductsController', ['$scope', function($scope, $firebaseObject){

	$scope.eventos = 
	[
	{
		titulo: 'en vivo en...',
		fecha: 'date',
		lugar: '',
		descripcion: '',
		eventoFB: '',
		flyer: '',
		tipo: ''
	}
	];


}]);
