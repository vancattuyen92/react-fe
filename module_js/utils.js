function sum(a,b) {
    return a+b;
};

function divide(a,b) {
    return a/b;
};

function subtract(a,b) {
    return a-b;
};

function multiple(a,b) {
    return a*b;
};

function sort(array) {
    return array.sort();
};

function findElement(array, element) {
    const item = array.find(ele => ele.id === element)
    return item ? true : false
}

function findIndex(array, element) {
    return array.findIndex(ele => ele === element) 
}

export {
    sum,
    divide,
    subtract,
    multiple,
    sort,
    findElement,
    findIndex
};