// Task to find the first string in the array 

const arr = [1,2,999,56,'Mithun',12345,'PW'];

for(let i=0; i<=arr.length; i++){
    if(typeof arr[i]=='string'){
        console.log(`Found the first string ${arr[i]}`);
        break;
    }
}