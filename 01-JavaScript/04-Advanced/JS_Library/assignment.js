var _ = {
	map: function(arr, callback) {
	  for(let i=0; i<arr.length; i++){
		 arr[i] = callback(arr[i]);
	  }
	  return arr;
	},
	reduce: function(arr,callback, memo) {
	  if(typeof(memo) == "undefined"){
		memo = arr[0];
		arr[0] = 0;
	  }
	  for(let i=0; i<arr.length; i++){
		//console.log(memo);
		memo = callback(arr[i], memo);
	  }
	  return memo;
	},
	find: function(list, predicate) {   
	  for(let i=0; i<list.length;i++){
	   if(predicate(list[i])){
		 return list[i];
	   }
	   return undefined;
	  }
	},
	filter: function(list, predicate) { 
	  var resultList = [];
	  for(let i=0;i<list.length;i++){
	   if(predicate(list[i])){
		 resultList.push(list[i]);
	   }
	  }
	  return resultList;
	},
	reject: function(list, predicate) { 
	  var resultList = [];
	  for(let i=0;i<list.length;i++){
	   if(!predicate(list[i])){
		 resultList.push(list[i]);
	   }
	  }
	  return resultList;
	}
  };
 
 var test = [2, 3, 4];
 // var thisMap = _.map(test, function(num){
 //   num = num * 2;
 //   return num;
 // });
 // console.log(thisMap);
 
 // var thisRedu = _.reduce([1,2,3], function(idx, base){ return idx + base; }, 100);
 // console.log(thisRedu);
 
 // var thisFind = _.find(test, function(num){
 //   return num > 3;
 // });
 // console.log(thisFind);
 
 //var thisFilter = _.filter(test, function(num){
 // return num % 2 == 0;
 //});
 //console.log(thisFilter);
 
 
 var thisReject = _.reject(test, function(num){
   return num % 2 == 0;
 });
 console.log(thisReject);