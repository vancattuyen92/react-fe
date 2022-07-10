// reference equality

const hero1 = {
  name: 'truong',
  age: '18',
  item1: {
    name: 'truong',
    age: '10',
    item1_1: {
      name: 'truong',
      age: '10',
    },
  },
}

const hero2 = {
  name: 'truong',
  age: '18',
  item1: {
    name: 'truong',
    age: '10',
    item1_1: {
      name: 'truong',
      age: '10',
    },
  },
}

const newHero1 = {
  ...hero1,
  age: '18'
}

// shallow compare
function shallowEqual(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for(const key of key1) {
    if(obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
const result = shallowEqual(hero1, hero2);
console.log('result shallowEqual: ', result);


// deep compare
function deepEqual(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for(const key of key1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    const areObject = isObject(val1) && isObject(val2);
    if(areObject && !deepEqual(val1, val2) || !areObject && val1 !== val2) {
      return false;
    }
  }
  return true;
}

function isObject(key) {
  return key !== null && typeof key === 'object';
}
const resultDeep = deepEqual(hero1, hero2);
console.log('result deepEqual: ', resultDeep);

