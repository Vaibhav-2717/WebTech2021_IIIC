let data=[23,45,67,78]
let [x, y, z, w]=data//destructuring
console.log(data)
console.log(`X=${x}`)
console.log(`Y=${y}`)
console.log(`Z=${z}`)
console.log(`W=${w}`)
function displayData(x,y,z,w)
{
console.log(`X=${x}`)
console.log(`Y=${y}`)
console.log(`Z=${z}`)
console.log(`W=${w}`)
}
displayData(...data)
displayData()