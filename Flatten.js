function flattenRecursive(arr) {
    let result = [];
    for (let item of arr)        
        if (item instanceof Array) 
            result = result.concat(flatten(item));
        else
            result.push(item);
    return result;
}

function flatten(arr) {
    let result = arr.toString().split(",");
    for (let i = 0; i < result.length; i++)
        result[i] = parseInt(result[i]);
    return result;
}

function simpleArrayEqual(a, b) {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false;
    return true;
}


function testFlatten() {
    let a1 = [3, [3,2]];
    let a2 = [3, 3,  2];
    let b1 = [3,5, [11, 15, 3, [2, 4]], 12, [2, [[2, 4], 11], 10], [1,2]];
    let b2 = [3, 5, 11, 15, 3, 2, 4, 12, 2, 2, 4, 11, 10, 1, 2];
    console.assert(simpleArrayEqual(flatten(a1),a2), "Error in flatten");
    console.assert(simpleArrayEqual(flatten(b1), b2), "Error in flatten");
    console.assert(simpleArrayEqual(flattenRecursive(a1),a2), "Error in flatten");
    console.assert(simpleArrayEqual(flattenRecursive(b1), b2), "Error in flatten");
}

testFlatten();