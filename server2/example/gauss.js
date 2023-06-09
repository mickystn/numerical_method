var A=[
    [-2,3,1],
    [3,4,-5],
    [1,-2,1]
]
var B=[
    9,
    0,
    -4
]
const gauss = A.map((id,index)=>{
    let Object = {};
    Object.a = A[index];
    Object.b = B[index];
    return Object;
})
console.log(gauss);
module.exports = {gauss}
