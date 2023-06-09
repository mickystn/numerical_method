const error=[];
let x=2;
let epsilon = 0.000001 ,check= 1;
while(check>=epsilon) {
    let fx = Math.pow(x,2)-7;
    let fxdif = 2*x;
    let newX = x-(fx/fxdif);
    check = Math.abs((newX-x))/newX;
    x = newX;
    error.push(check.toFixed(8))
}
const xy4 = error.map((id,index)=>{
    let xyObject = {};
    xyObject.x = index+1;
    xyObject.y = parseFloat(error[index]);
    return xyObject;
})
module.exports={xy4};