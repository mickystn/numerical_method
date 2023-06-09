const {det}= require('mathjs');

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
var x=[];
for(var i=0; i<3;i++){
    x.push([]);
}
var n=3;
var detA=det(A);
var ansx=[];
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        for(var k=0;k<n;k++){
            x[j][k]=A[j][k];
        }
    }
    for(var j=0;j<n;j++){
        for(var k=0;k<n;k++){
            x[k][i]=B[k];
        }
    }
    ansx.push(det(x)/detA);
}

console.log(ansx);

