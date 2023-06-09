    var error=0.0000001;
    var errors = [];

    var check = 1;
    var xL=0;
    var xR=4;
    var oldxL=xL;
    var oldxR=xR;

    var x=[];
    var y=[];
    var i=1;

    while (check >= error) {
        var fxL= (Math.pow(xL,3))-27;
        var fxR= (Math.pow(xR,3))-27;

        var xM = (xL+xR)/2;
        var fxM = (Math.pow(xM,3))-37;

        var testCase = fxM*fxR;

        if(testCase>0){ //CaseA
            oldxR=xR;
            xR=xM;
            check = Math.abs((xR-oldxR)/xR);
        }else if(testCase<0){ //CaseB
            oldxL=xL;
            xL=xM;
            check = Math.abs((xL-oldxL)/xL);
        }else{
            x.push(xM.toFixed(8));
            y.push(check.toFixed(8));
            break;
        }
        x.push(xM.toFixed(8));
        y.push(check.toFixed(8));
    }


    const xy1 = x.map((id,index)=>{
        let xyObject = {};
        xyObject.x = index+1;
        xyObject.y = parseFloat(y[index]);
        xyObject.xvalue = parseFloat(x[index]);
        return xyObject;
    })
    console.log(xy1);
    //var json = JSON.stringify(xy);
    module.exports={xy1};