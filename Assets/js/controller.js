angular.module("app.controllers",[])
  .controller('mainCntrl', function(){
    //console.log("main cntrl");
  })
  
  .controller('homeCntrl', function($scope, $chartservice){
    //console.log("homeCntrl");
    $scope.init= function(){
	  $scope.selected = 'Daily';
	  $chartservice.drawChart($scope);
	} 
	
	$scope.some = function(value){
	 $scope.selected = value;
	  $chartservice.drawChart($scope);
	}
    $scope.init();
  })

  
 