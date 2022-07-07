const flag = true

//if the condition matched it goes int if block, if not it goes into else. you can add more by using ifelse condtion.
if (!flag)
{
console.log('condtition statisfy')
}
else
{
console.log('condition not statisfy')
} 

//while: if the loop is true it will keep on executuing that loop untill it becomes falls

let i=0
while(i>10)
{
    i++
    console.log(i)
}

do
{
i++
}
while(i>15);
console.log(i)

for (let j=0;j<=10;j++)
{
    console.log(j)
}

//when to use for loop and while loop?
//if you know the number of time you want to run the loop
//while is used to evaluate the expression as a condition
let required= true  
while (required)
{
    console.log(required)
    required=false
}
console.log('************************************')

//print the comman varaibles of 2 and 5
for(let k=0;k<=10;k++){
    if (k%2 ==0 && k%5==0 )
    {
        console.log(k)
    }
}