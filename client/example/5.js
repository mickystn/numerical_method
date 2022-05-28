
var xArray=[0,0,0,0];
var x=[
    [5,2,0,0],
    [2,5,2,0],
    [0,2,5,2],
    [0,0,2,5]
];
var iteration=0;
var y=[12,17,14,7]
var strtemp=["","","",""]
var str=["","","",""]
var epsilon=[1,1,1,1]
for(var i=0; i<4;i++){
    strtemp[i]=strtemp[i]+y[i];
    for(var j=0; j<4;j++){
        if(j==i || x[j][i]==0){
            continue
        }
        strtemp[i]=strtemp[i]+(x[i][j]*-1).toString()+"x"+(j+1);
    }
    strtemp[i] = "("+strtemp[i]+")"+"/"+x[i][i];
}
function checkEpsilon(epx1,epx2,epx3,epx4){
    if(epx1<0.000001&&epx2<0.000001&&epx3<0.000001&&epx4<0.000001){
        console.log(iteration)
        console.log(xArray)
        return false
    }
    return true
}
function Calerror(xNew,xOld){
    return Math.abs((xNew-xOld)/xNew)
}
function Cal(x1,x2,x3,x4){
    iteration++
    for(var i=0; i<4;i++){
        str[i]=strtemp[i].replace("x1","*"+x1).replace("x2","*"+x2)
                         .replace("x3","*"+x3).replace("x4","*"+x4);
        var xNew = eval(str[i])
        var xOld = xArray[i]
        epsilon[i] = Calerror(xNew,xOld);
        xArray[i]=eval(str[i]);
    }
}
while(checkEpsilon(...epsilon)){
    Cal(...xArray);
}
