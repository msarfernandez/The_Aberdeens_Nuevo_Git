app.controller('MainController', ['$scope', function($scope){


	//aca tendria que poner variables para las fechas
	var	day = new Date("February 28, 2016").getDay();
	var week = new Array('Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab');
	//week[day]
	var fecha = new Date("February 28, 2016");

	$scope.prueba = week[new Date("February 28, 2016").getDay()];

	// aca tendria que poner variables para la fecha
		//document.write(new Date("February 28, 2016").getDate());

		$scope.dia = {
			fecha: fecha.getDate(),
			dia: week[day]
		};



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
