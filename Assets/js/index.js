var app = angular.module('myapp',[ 'ui.router', 'app.controllers', 'app.services', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state('home',{
    url:'/home',
	templateUrl:'Assets/pages/home.html',
	controller:'homeCntrl'
  })
})

.directive('myRadio', function(){
  return{
    restrict:'E',
	scope:{
	 value:'@value',
	 name:'@name',
	 defaultselected:'@defaultselected',
	 clickFun:'&clickfun'
	},
	//template:' <input type="radio" value="{{value}}" name="radiobtn" ng-checked={{defaultselected}} ng-click="clickFun({selected:value})"/>{{value}}',
	template:'<label class="control control--radio" ng-click="clickFun({selected:value})">{{value}}<input type="radio" value="{{value}}" name="radiobtn" ng-checked={{defaultselected}} /><div class="control__indicator"></div></label>' 
  }
})

