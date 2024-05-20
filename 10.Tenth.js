// Task to print only positive numbers 

let num = [1 ,-5 ,49 ,-5 ,4 ,-9, -2 ,-4 ,6, 4];

for(i=0; i<num.length;i++){
    if(num[i]<0){
    continue;}
    console.log(num[i]);
}