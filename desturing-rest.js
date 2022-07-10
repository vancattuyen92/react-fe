const objA = {
  a: 1,
  b: 2,
  t: 3 
}

const objB = {
  t: 1,
  y: 2,
  ...objA
}


// const combineObj = { ...objA, ...objB};

console.log(objB)