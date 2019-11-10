function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  // Let variable equal new array with last el taken off
  let newArr = capitalizeWords(arr.slice(0, -1));
  newArr.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return newArr;
}
