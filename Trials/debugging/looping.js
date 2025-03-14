/*  THE FOR LOOP
- A loop is a programming too that is used to repeat a set of instructions.
- a for loop contains 3 expressions separated by; inside the parenthesis
> initialization
> stopping condition
> iteration statement
*/

for (let counter = 7; counter < 10; counter++) {
    console.log (counter)
}
/*
The initialization is let counter = 0, so the loop will start counting at 0.
The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1
*/
for (let counter =3; counter <4 && counter >=0; counter--){
    console.log(counter)
}