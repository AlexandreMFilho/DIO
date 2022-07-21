function returnEvenNums(array){
    let evenNums = [];
    for(let i = 0; i< array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let a = [1,5,6,9,8,4,2,3,4];
returnEvenNums(a);