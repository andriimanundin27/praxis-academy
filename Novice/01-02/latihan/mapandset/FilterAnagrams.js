function aclean(x) {

    newarr=[]
    for (let sorted of x) {
      let splitjoin = sorted.toLowerCase().split('').sort().join('');
      newarr.push(splitjoin)
    }
    newarr=new Set(newarr)
    return Array.from(newarr)
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );