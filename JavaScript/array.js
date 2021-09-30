let data =[23,45,78,89,12]
console.log(data)
data.push(67)
data.push(78)
data.pop()

console.log(data)
let values=[34,45.67,"javascript",true]
console.log(values)
for(value of values)//ES 6
{
    console.log(`Values are ${value}`)
}
for(index in values)
{
    console.log(`The value of ${index} position is =${values[index]}`)
}
for(var i=0;i<data.length;i++)
{
    console.log(`The value at ${i} position is =${data[i]}`)
}