// sigma
function sigma(num){
    var sum = 0 ;
    for( var i = 0; i <= num; i++){
    sum +=i;
    
    }
    return sum;
    }
    console.log(sigma(5));

    //Factorial 
    function fact(num){
        var n=1;
        for(var i=1; i<=num;i++){
        n = n*i;
        
        }
        return n;
        }
        console.log(fact(5));

        // Fibonacci
        function f(arr,num){

            for ( var i = 2; i <=num; i++){
            arr.push(arr[i-2]+arr[i-1]);
            }
            return arr;
            }
            console.log(f([0,1],5));

            //Array: Second-to-Last

            function secondtolast(arr){
                for (var i= 0; i < arr.length; i++){
                if (arr.length < 2){
                return null;
                }
                else{
                return arr[arr.length-2];
                }
                }
                }
                console.log(secondtolast([1]));

        //Array: Nth-to-Last:
        function nth(arr,num){
            if ( arr.length <2){
            return 'null';
            }
            else {
            return arr[arr.length-num];
            }
            }
            console.log(nth([1,2,3,4,5],2));

            // Array: Second-Largest
            function sec(arr){
                var large = arr[0];
                var second = arr[0];
                for (var i = 0; i < arr.length; i++){
                 if (arr.length < 2){
                 return 'null';
                 }
                 else if (arr[i] > large){
                         second = large;
                         large = arr[i];
                 }
                 else if (arr[i] > second && arr[i] < large){
                       second = arr[i];
                 }
                }
                return second;
                }
                console.log(sec([5,8,2,4]));


                ///Double Trouble
                function trouble(arr){
                    newarr = [];
                    for (var i = 0; i < arr.length; i++){
                    newarr.push(arr[i]);
                    newarr.push(arr[i]);
                    }
                    return newarr;
                    }
                    console.log(trouble([1,2,3,5]));