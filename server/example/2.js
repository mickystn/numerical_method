
var error=0.0000001;
var check = 1;
var xL=0.02;
var xR=0.03;
var oldxL=0.02;
var oldxR=0.03;


var x=[];
var y=[];
var i=1;

while (check >= error) {
    var fxL= (43*xL)-1;
    var fxR= (43*xR)-1;
    
    var x1=(xL*fxR)-(xR*fxL);
    var x1 = x1/(fxL-fxR);
    console.log(x1);
    var fx1 = (43*x1)-1;
    var testCase = fx1*fxR;
    if(testCase>0){ //CaseA
        oldxR=xR;
        xR=x1;
        check = Math.abs((xR-oldxR)/xR);
    }else if(testCase<0){ //CaseB
        oldxL=xL;
        xL=x1;
        check = Math.abs((xL-oldxL)/xL);
    }
    x.push(x1.toFixed(8));
    y.push(check.toFixed(8));
}
const xy2 = x.map((id,index)=>{
    let xyObject = {};
    xyObject.x = index+1;
    xyObject.y = parseFloat(y[index]);
    xyObject.indexLabel =  "x = "+ x[index];
    return xyObject;
})
//var json = JSON.stringify(xy);
module.exports={xy2};