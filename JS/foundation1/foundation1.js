// get 1 to 255:

  function getarr() {
    var arr = [];
    for ( var i = 1; i <= 255; i++ ){
    arr.push(i);
return arr;
}
console.log (getarr());

//get even 1000:

function geteven() {
  
   var  sum = 0;
  for ( var i = 0; i <= 1000; i++){
  if (i % 2 == 0){
    sum += i;
  }
}
return sum;
}
}
console.log(geteven());

//sume odd 5000

function sumodd() {
  var sum = 0;
  for (var i = 0; i <= 5000; i++){
    if (i % 2 !=0){
      sum += i;
    }
  }
  return sum;
}
console.log(sumodd());

//iterate an array 

function itearr(arr = [1,2,3]){
 
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;

}
console.log(itearr());

//find max

function arrmax(arr = [20,80,30]){
  var max = arr[0];
 for (var i = 1; i < arr.length; i++){
 if ( arr[i] > max){
   max = arr[i];
 }
 }
 return max;
}
console.log (arrmax());

//find average 

function avearr(arr = [20,80,30]){
  var sum = 0;
  for ( var i = 0;i < arr.length; i++){
    sum = sum + i;
  }
  return sum / arr.length;
}
console.log(avearr());

//array odd

function oddarr(){
  var newarr = [];
  for (var i = 1; i <= 50; i++){
    if ( i%2 != 0){
      newarr.push(i)
    }
  }
  return newarr;
}
console.log(oddarr());

//greater than y
 
function greater(arr,y){
    var counter = 0 ;
    for (var i = 0; i < arr.length; i++){
      if ( arr[i] > y){
      counter ++; 
      }
      
    }
    return counter;
  }
    console.log(greater([1,5,8,7], 1));
  

  // squares 

  function squares(arr = [10,20,4]){
    for (var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  }
  console.log(squares());

  //negatives
  function positive(arr = [33, -10, 1, -4]){
    for ( var i = 0; i < arr.length; i++){
      if (arr[i] < 0){
        arr[i] = 0;
      }
    }
    return arr;
  }
  console.lo(positive());

  // max/min/average

  function values(arr = [1,50,7,14,-9]){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
  
    for ( var i = 1; i < arr.length; i++){
      if ( arr[i] > max){
        max = arr[i];
      }
      if ( arr[i] < min){
        min = arr[i];
      }
      sum = arr[i] + sum;
    }
    var average = sum / arr.length;
    var newarr = [max, min, average];
    return newarr;
  }
  console.log(values());

  //swap values

  function swap( arr = [13, 0, 1, 6]){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
  }
  console.log(swap());

  // number to string 
  function string( arr= [1,-5,8,0,-10]){
   
    for ( var i = 0; i < arr.length; i++){
      if (arr[i] < 0){
        arr[i] = 'Dojo'
      }

    }
    return arr;
  }console.log(string());