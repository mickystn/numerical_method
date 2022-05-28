var error=0.0000001;
var check = 1;
var xL=1.5;
var xR=2;
var oldxL=1.5;
var oldxR=2;

while (check >= error) {
    var fxL= (Math.pow(xL,4))-13;
    var fxR= (Math.pow(xR,4))-13;

    var xM = (xL+xR)/2;
    var fxM = (Math.pow(xM,4))-13;

    var testCase = fxM*fxR;

    if(testCase>0){ //CaseA
        oldxR=xR;
        xR=xM;
        check = Math.abs((xR-oldxR)/xR);
    }else if(testCase<0){ //CaseB
        oldxL=xL;
        xL=xM;
        check = Math.abs((xL-oldxL)/xL);
    }
    console.log('y='+check.toFixed(11));
    console.log('x='+xM.toFixed(7));
}