var error=0.0000001;
var check = 1;
var xL=0.02;
var xR=0.03;
var oldxL=0.02;
var oldxR=0.03;

while (check >= error) {
    var fxL= (43*xL)-1;
    var fxR= (43*xR)-1;

    var x1=((xL*fxR)-(xR*fxL))/fxR-fxL;
    var fx1 = (43*x1)-1;
    var testCase = fx1*fxR;
    console.log(fxL);
    console.log(fxR);
    console.log(x1);
    console.log((xL*fxR)-(xR*fxL));
    if(testCase>0){ //CaseA
        oldxR=xR;
        xR=x1;
        check = Math.abs((xR-oldxR)/xR);
        console.log(check.toFixed(11));
    }else if(testCase<0){ //CaseB
        oldxL=xL;
        xL=x1;
        check = Math.abs((xL-oldxL)/xL);
        console.log(check.toFixed(11));
    }

}