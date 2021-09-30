let data=[12,34,56,78,98,32]
function Calculation(operation,...values)
{
    if(operation.toLowerCase()==="sum")
    {
            console.log(`Sum of array =${values.reduce((a,b)=>a+b)}`)
    }
    if(operation.toLowerCase()==="mul")
    {
            console.log(`Multiply of array =${values.reduce((a,b)=>a*b)}`)
    }
}
Calculation("Sum",12,34,34,56,78)
Calculation("Mul",23,45,67,89)