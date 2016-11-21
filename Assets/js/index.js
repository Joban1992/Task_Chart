var app = angular.module('myapp',[ 'ui.router', 'app.controllers', 'app.services', 'chart.js']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state('home',{
    url:'/home',
	template:'<div class="chart-container">'
  +'<div class="radio-btn">'
    +'<my-radio value="Daily" name="Daily" clickFun="some(selected)" defaultselected="true"></my-radio>'
	+'<my-radio value="Weekly " name="Weekly " clickFun="some(selected)"></my-radio>'
	+'<my-radio value="Monthly" name="Monthly" clickFun="some(selected)"></my-radio>'
  +'</div>'
  +'<canvas id="line" class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-dataset-override="datasetOverride"></canvas> '
+'</div>',
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

