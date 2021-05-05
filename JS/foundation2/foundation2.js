//Biggie Size
function biggi(arr){
    for (var i = 0; i < arr.length; i++){
       if (arr[i] < 0){
       arr[i] = 'big';
       }
    }
    return arr;
    }
    console.log(biggi([1,2,-9,10,-4]));

    //Print Low, Return High
    function highlow(arr){
        var high = arr[0];
        var low = arr[0];
        for ( var i = 1; i< arr.length; i++){
        if (arr[i] > high){
        high = arr[i];
        }
        if (arr[i] < low){
        low = arr[i];
        console.log(low);
        }
        }
        return high;
        }
        console.log(highlow([4,6,15,-1]));

        // Print One, Return Another
        function oneodd(arr){
            console.log(arr[arr.length-2]);
           for (var i = 0; i < arr.length; i++){
               if (arr[i] % 2 == 1){
                   return arr[i];
               }
           }
       }
       console.log(oneodd([1,2,3,4,5]));

       //Double Vision
       function double(arr){
        sum = arr[0];
        newarr = [];
        for(var i = 0; i < arr.length; i++){
        arr[i] = sum + arr[i];
        sum ++;
        newarr.push(arr[i]);
        }
        return newarr;
        }
        console.log(double([1,2,3,4]));
        
        //Count Positives
        function countpositives(arr){
            var counter = 0;
            for (var i = 0; i < arr.length; i++){
            if( arr[i] > 0){
            counter ++;
            arr[arr.length-1] = counter;
            }
        }
        return arr;
    }
    console.log(countpositives([-1,1,1,1]));

    //Evens and Odds

    function oddseven(arr){
        var even = 0;
        var odd = 0;
        for (var i = 0; i < arr.length; i++){
        if ( arr[i] % 2 != 0){
        odd ++;
        even = 0; 
        }
        else{ 
        even ++;
        odd = 0; 
        }
        if (odd === 3){
        console.log("That's odd!");
        }
        else if ( even ===3){
        console.log("Even more so!");
        }
        }
        
        }
        oddseven([1,2,4,8,9,3,7]);

        //Increment the Seconds
        function addseconds(arr){
            for (var i = 0; i < arr.length; i++){
            if ( arr[i] % 2 == 0){
            arr[i] = arr[i] + 1;
            }
            }
            return arr;
            }
            console.log(addseconds([1,4,2,5,3,6]));

            //Previous Lengths

            function strnum(arr){

                for (var i = arr.length-1; i > 0;i--){
                arr[i] = arr[i-1].length;
                }
                return arr;
                }
                console.log(strnum(['lana','cat','monkey']))
            
                //Add Seven

                function addseven(arr){
                    var newarr = [];
                    for ( var i = 0; i < arr.length; i++){
                    arr[i] = arr[i] + 7;
                    newarr.push(arr[i]);
                    }
                    return newarr;
                    }
                    console.log(addseven([1,2,3,4,5]));

                    //Reverse Array 
                    function reverse(arr){
                        var temp = arr[0];
                        arr[0] = arr[arr.length-1];
                        arr[arr.length-1] = temp;
                        
                        return arr;
                        }
                        console.log(reverse([1,2,3,4]));/////or we can use arr.reverse


                        //Outlook: Negative 
                        function negatives(arr){
                            var newarr = [];
                            for ( var i = 0; i < arr.length; i++){
                            if ( arr[i] > 0){
                            arr[i] = arr[i] * -1;
                            }
                            newarr.push(arr[i]);
                            }
                            return newarr;
                            }
                            console.log(negatives([2,-1,3,5]));

                   // Always Hungry 
                   function hunger(arr){
                    for( var i = 0; i < arr.length; i++){
                    if (arr[i] =='food'){
                    console.log('yummy');
                    }
                    else {
                    console.log('iam hungry');
                    
                    }
                    }
                    }
                    (hunger(['food',1,'food']));
                    
                //Swap Toward the Center 
                function swapcenter(arr) {
                    var temp = arr[0];
                    var center = arr[2];
                    arr[0] = arr[arr.length - 1];
                    arr[arr.length - 1] = temp;
                    arr[2] = arr[arr.length-3];
                    arr[arr.length-3] = center;
                    console.log(arr);
          
                 
                }
                swapcenter([true, 42, "Ada", 2,3, "pizza"]);

                //Scale the Array

                function scale(arr,num){
                    for(var i = 0; i < arr.length; i++){
                    arr[i] = arr[i] *num;
                    }
                    return arr;
                    }
                    console.log(scale([1,2,3],2));