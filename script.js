function greeting(firstLetterName){
       alert("The Name "+ firstLetterName + " starts with " + 
                firstLetterName.substring(0, 1));
       
}
greeting("Scott");

function ratio(divisibleByTwo){
  
               
    if(divisibleByTwo % 2 === 0){
       console.log(true);
            }   else{
                console.log(false)}
       console.log("The number " + divisibleByTwo + " is divisible by 2");
                
}

ratio(8);
ratio(9);



function greatest(arr){
    
    let largestNum = arr[0] || null;
    
    let number = null;
    for(let i = 0; i < arr.length; i++) {

        number = arr[i];

        largestNum = Math.max(largestNum, number);
    }
        
        return largestNum;

}
greatest([3, 10, 4, 16, 25, 11, 8])