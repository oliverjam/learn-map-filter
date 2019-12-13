function map(fn, array) {
  let newArray = [];
  for (item of array) {
    newArray.push(fn(item));
  }
  return newArray;
}

function filter(fn, array) {
  let newArray = [];
  for (item of array) {
    if (fn(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
