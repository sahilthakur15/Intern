
//Function for printing even elements sum
const evenSum=(arr)=>{
   let sum=0;

    for(i=0;i<arr.length; i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum;
}

//Fucntion for printing count of odd elements
const oddCount= (arr)=>{
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(i%2!==0){
            count++;
        }
    }
    return count;
}

//function for printing product of elements at even index
const productEvenIndex= (arr) =>{
    let product=1;
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            product*=arr[i];
        }
    }
    return product;
}

let result=evenSum([12,5,8,7,15,4,20,1]);
console.log('Sum of even elements:',result)

let countNo=oddCount([12,5,8,7,15,4,20,1]);
console.log('Number of odd elements:',countNo)

let ans=productEvenIndex([12,5,8,7,15,4,20,1]);
console.log('Product of elements at even index')
