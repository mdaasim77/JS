// Developing a form validation system that takes user information(such as name, email, age) and uses the typeof operator to check the data type of each input

let name='Mithun';
let email='mithun@gmail.com';
let age=22;

if (typeof name !=='string') {
    console.log('Name should be a String...');
}else if (typeof email !== 'string') {
    console.log('email should be String...');
}else if (typeof age !== 'number') {
    console.log('Age shoud be a Number');
}else{
    console.log('All fields are correct');
}