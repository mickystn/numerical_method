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
var tempArr=[
    [0,0,0],
    [0,0,0]
];
var AB = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]
for(var i=0; i<A.length; i++){
    for(var j=0; j<A.length+1;j++){
        if(j-(A.length+1)==-1){
            AB[i][j]=B[i];
            continue;
        }
        AB[i][j]=A[i][j];
    }
}
var n=3;
var row=0;
var pro1,pro2;
for(var i=0;i<n-1;i++){
    row=i;
    pro1=AB[i][i];
    for(var j=n-1; j>i;j--){
        pro2=AB[row+1][i];
        for(var k=0;k<n+1;k++){
            tempArr[0][k]=pro1*AB[row+1][k];
        }
        for(var k=0;k<n+1;k++){
            tempArr[1][k]=pro2*AB[i][k];
        }
        for(var k=0;k<2;k++){
            for(var l=0;l<n+1;l++){
                AB[row+1][l]=tempArr[1][l]-tempArr[0][l];
            }
        }
        row++;
    }
}
var x=[];
for(var i=0;i<n;i++){
    for(var j=0;j<n+1;j++){
        if(j==3){
            B[i]=AB[i][j]
            continue;
        }
        A[i][j]=AB[i][j]
    }
}

for(var i=0;i<3;i++){
    console.log(A[i]+" |"+B[i]);
}
console.log("-------")

for(var i=n-1;i>=0;i++){
    for(var j=n-1;j>=0;j++){
        A[i][j]

        console.log()

    }
}

/*

var ansx=[]; 
var tempans=0;
var index=0;
var count=n-1;

for(var i=n-1;i>=0;i--){
    for(var j=n-1;j>=i;j--){
        if(i==j) {
            ansx.push(B[i]/A[i][j])
            continue;
        }
        var temp =A[i][j]*ansx[index++];
        if(temp>0){
            B[i]=B[i]-temp;
        }else{
            B[i]=B[i]-temp;
        }
    }
    index=0;
}
for(var i=0; i<ansx.length;i++){
    console.log(ansx[i]);
}

module.exports = {gauss}
*/