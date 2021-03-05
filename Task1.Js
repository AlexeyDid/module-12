function key(obj){

    for(let keys in obj){
    if(obj.hasOwnProperty(keys)){
    console.log(keys)
    
    }
    }
    }
    
    const objekt = {b: 2, c:3};
    
    key(objekt);