let myArray=[
    [7,4,9],
    [12,4,8]
];
let myArray2=[
    [5,8,2],
    [3,9,7]
];
for (let i=0; i<myArray.length; i++){
    for(let j=0; j<myArray2[i].length; j++){
    console.log(myArray[i][j] * myArray2[i][j])
    }
}