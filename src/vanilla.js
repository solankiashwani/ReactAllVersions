// Copying into a new array
const arr1 = [1,5]
const arr2 = [...arr1]
console.log(arr2)

// Combining multiple arrays and adding a new element
const arrCombined = [...arr1, ...arr2, 77]
console.log('Combined array', arrCombined)

// Object into a new object
const obj1 = {a:1, b:'Named'}
const obj2 = {... obj1}
console.log(obj2)

// Combining multiple objects and adding new elements
obj3 = {...obj2, temp:'New'}
const objCombined = {...obj1, ...obj2}
console.log(obj3)