let student={
    name:"Ravi Kumar",
    course:"MCA",
    year:2,
    section:"A",
    dis:function display(){console.log("hello")}
}
student.marks=900
for( var value of Object.values(student))
{
    console.log(value)
}
console.log(student.name)
console.log(student.dis())