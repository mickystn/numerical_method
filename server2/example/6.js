
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
function Cal(){
    iteration++
    for(var i=0; i<4;i++){
        str[i]=strtemp[i].replace("x1","*"+xArray[0]).replace("x2","*"+xArray[1])
                         .replace("x3","*"+xArray[2]).replace("x4","*"+xArray[3]);
        
        var xNew = eval(str[i])
        var xOld = xArray[i]
        epsilon[i] = Calerror(xNew,xOld);
        xArray[i]=eval(str[i]);
    }
}
while(checkEpsilon(...epsilon)){
    Cal(...xArray);
}
