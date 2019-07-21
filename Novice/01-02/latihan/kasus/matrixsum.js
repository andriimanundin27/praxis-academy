a = [[1, 2],[3,4]];
b = [[5, 6],[7,8]];
c = []

function MatrixSum(){


    if (a.length==b.length && a[1].length==b[1].length){
        for (let i=0; i<a.length;i++){
            for (let j=0; j<a[i].length; j++){
                a[i][j]+=b[i][j]
            }
        }
        return a
    }else{
        return "dimensi tidak sama"
    }
}

console.log(MatrixSum(a,b))