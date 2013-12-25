define(["angularAMD", "angular-route"], function(angularAMD){
	var app = angular.module("webapp", ["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider.when("/home", angularAMD.route({
			templateUrl: "views/home.html",
			controllerUrl: 'home',
			controller: "HomeController" 
		}));

		$routeProvider.when("/view1", angularAMD.route({
			templateUrl: "views/view1.html",
			controllerUrl: 'view',
			controller: "ViewController"
		}));
	});

	angularAMD.bootstrap(app);

	return app;
});