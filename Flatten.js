function flatten(arr) {
    let result = [];
    for (let item of arr)        
        if (item instanceof Array) 
            result = result.concat(flatten(item));
        else
            result.push(item);
    return result;
}


function testFlatten() {
    console.log(flatten([3, [3, 2]]));
    console.log(flatten([3,5, [11, 15, 3, [2, 4]], 12, [2, [[2, 4], 11], 10], [1,2]]));
}

testFlatten();