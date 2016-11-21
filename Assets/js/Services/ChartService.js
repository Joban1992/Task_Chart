angular.module('app.services',[])
 .service('$chartservice', function($rootScope){
    var chartservice = {};
    chartservice.data =  [3,4,8,1,3,6,4,2,4,9,2,5,3,6,7,2,4,4,5,2,3,4,5,2,8,4,6,3,4,5, 4,8,1,3,5,3,6,4,2,7,2,1,7,2,1,5,6,3,9,4,5,7,9,7,4,6,2,4,2,9,3,4,8,1,3,6,4,2,4,9,2,5,3,6,7,2,4,4,5,2,3,4,5,2,8,4,6,3,4,5];
	
	chartservice.drawChart = function(scope){
	    var lab = scope.selected;
	    if(scope.selected=="Daily"){
		   scope.labels = chartservice.getLabels(1, chartservice.data);
		   scope.data = [ chartservice.data];
		}else if(scope.selected =="Weekly"){
		   lab+=' avg';
		   scope.labels = chartservice.getLabels(7, chartservice.data);//['1st week','2nd week','3rd week','4th week','1st week','2nd week','3rd week','4th week'];
		   scope.data = [chartservice.getAverage(7,chartservice.data)];
		}else{
		  lab+=' avg';
		  scope.labels = chartservice.getLabels(30, chartservice.data);
		  scope.data = [chartservice.getAverage(30, chartservice.data)];
		}
        scope.series = [lab];
	 }
	 
	 chartservice.getLabels = function(flag,data){
	   var labels = [];
	   for(var i=1;i<=(data.length/flag);i++){
	     labels.push(i);
	   }
	   return labels;
	 }
	
	chartservice.getAverage = function(flag, data){
	   var ary=[];
	   var tracker =1;
	   var sum=0;
	   for(var i=0;i<data.length;i++){
	      if(tracker%flag==0 && i!=0){		 
	   	    sum+=data[i];
		    ary.push(Math.round( (sum/flag) * 10 ) / 10);
			sum=0;
			tracker=0;
		  }else{
		   sum+=data[i];
		  }
		  tracker++;
	   }
	  return ary;
	}
	
    return chartservice;
 })