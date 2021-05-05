function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(world);
prediction: Hello

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2)

prediction: Summing Numbers! num1:3 num2:5 summming Numbers!  num1:4 num2: 7 8 11


function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
prediction: no value , because we didnt call out the name of the function.