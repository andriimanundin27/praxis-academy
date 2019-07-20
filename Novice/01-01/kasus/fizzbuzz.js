for (let tri = 1; tri <= 100; tri++){
    if (tri%3==0 && tri%5==0){
        console.log("fizzbuzz")
    }
    else if (tri%3==0){
        console.log("fizz")
    }
    else if (tri%5==0){
        console.log("buzz")
    }
    else {
        console.log(tri)
    }
}