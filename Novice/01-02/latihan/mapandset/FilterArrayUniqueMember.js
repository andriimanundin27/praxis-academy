function unique(arr) {
    arr=new Set(arr)
    arr=Array.from(arr)
    return arr
}

let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log( unique(values) ); // Hare, Krishna, :-O