define(["app"], function(app){
	app.register.controller("HomeController", function($scope){
		$scope.message = "Message from hello controller";
	});
});