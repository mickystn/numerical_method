
var epsilon=0.0000001;
var check=1;
var x0=0;
var i=0;
var error=[];
var x=[];
while(true){
    if(check<epsilon){
        break;
    }
    var x1 = 2 - Math.exp(x0/4);
    var check = Math.abs((x1-x0)/x1);
    error.push(check.toFixed(8));
    x.push(x0.toFixed(8));
    var x0 = x1;
}
const errors = error.map((id,index)=>{
    let xyObject = {};
    xyObject.x = index+1;
    xyObject.y = parseFloat(error[index]);
    return xyObject;
})
console.log(errors)
module.exports={errors};