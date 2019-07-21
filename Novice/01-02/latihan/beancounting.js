const countBs = function(x) {
    let B=0
    for (i=0; i<=x.length; i++){
        if(x[i-1]=="B"){
            B+=1
        }
    }
    return B
}

const countChar = function(x,y) {
    let B=0
    for (i=0; i<=x.length; i++){
        if(x[i-1]==y){
            B+=1
        }
    }
    return B
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));